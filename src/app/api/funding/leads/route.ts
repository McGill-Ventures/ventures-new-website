// app/api/leads/route.ts
// Captures a lead: the founder's answers, their matches, and their contact.
// This is the actual goal of the free tier.

import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const body = await req.json();
    const { contact, intake, matched_program_ids, match_payload } = body;

    if (!contact?.email) {
      return NextResponse.json(
        { error: "An email is required to send your matches." },
        { status: 400 }
      );
    }

    const { error } = await supabase().from("funding_leads").insert({
      founder_name: contact.name ?? null,
      founder_email: contact.email,
      company_name: contact.company ?? null,
      stage: intake?.stage ?? null,
      sector: intake?.sector ?? null,
      mcgill_affiliated: intake?.mcgill_affiliated ?? null,
      incorporated: intake?.incorporated ?? null,
      has_canadian_rd: intake?.has_canadian_rd ?? null,
      funding_preference: intake?.funding_preference ?? null,
      matched_program_ids: matched_program_ids ?? [],
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
