// app/api/partner-leads/route.ts
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
    const { contact, intake, requested_partner_ids } = body;

    if (!looksLikeEmail(contact?.email)) {
      return NextResponse.json({ error: "A valid email is required to request introductions." }, { status: 400 });
    }
    if (jsonBytes(intake) > MAX_PAYLOAD_BYTES || (Array.isArray(requested_partner_ids) && requested_partner_ids.length > MAX_IDS)) {
      return NextResponse.json({ error: "Submission too large." }, { status: 413 });
    }
    leadPosts.record(ip);

    const { error } = await supabase().from("partner_intro_requests").insert({
      founder_name: typeof contact.name === "string" ? contact.name.slice(0, 200) : null,
      founder_email: contact.email,
      company_name: typeof contact.company === "string" ? contact.company.slice(0, 200) : null,
      intake: intake ?? null,
      requested_partner_ids: Array.isArray(requested_partner_ids) ? requested_partner_ids.slice(0, MAX_IDS).map(String) : [],
    });

    if (error) {
      console.error("supabase insert error", error);
      return NextResponse.json({ error: "Could not save your request." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("partner leads error", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
