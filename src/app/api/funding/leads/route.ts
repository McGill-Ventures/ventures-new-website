// app/api/leads/route.ts
// Captures a lead: the founder's answers, their matches, and their contact.
// This is the actual goal of the free tier.

import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { clientIp, createLimiter, jsonBytes, looksLikeEmail } from "@/lib/funding/rateLimit";

// Anonymous endpoint that writes straight to the database: cap volume and size.
const leadPosts = createLimiter(10, 60 * 60 * 1000);
const MAX_PAYLOAD_BYTES = 32 * 1024;
const MAX_IDS = 100;

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const ip = clientIp(req);
    if (leadPosts.isLimited(ip)) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }
    const body = await req.json();
    const { contact, intake, matched_program_ids, match_payload } = body;

    if (!looksLikeEmail(contact?.email)) {
      return NextResponse.json({ error: "A valid email is required to send your matches." }, { status: 400 });
    }
    if (jsonBytes(intake) + jsonBytes(match_payload) > MAX_PAYLOAD_BYTES || (Array.isArray(matched_program_ids) && matched_program_ids.length > MAX_IDS)) {
      return NextResponse.json({ error: "Submission too large." }, { status: 413 });
    }
    leadPosts.record(ip);

    const { error } = await supabase().from("funding_leads").insert({
      founder_name: typeof contact.name === "string" ? contact.name.slice(0, 200) : null,
      founder_email: contact.email,
      company_name: typeof contact.company === "string" ? contact.company.slice(0, 200) : null,
      intake: intake ?? null,
      matched_program_ids: Array.isArray(matched_program_ids) ? matched_program_ids.slice(0, MAX_IDS).map(String) : [],
      match_payload: match_payload ?? null,
      clicked_contact_mvc: true,
    });

    if (error) {
      console.error("supabase insert error", error);
      return NextResponse.json({ error: "Could not save your details." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("leads error", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
