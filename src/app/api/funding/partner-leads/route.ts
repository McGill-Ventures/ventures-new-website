// app/api/partner-leads/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const body = await req.json();
    const { contact, intake, requested_partner_ids } = body;

    if (!contact?.email) {
      return NextResponse.json(
        { error: "An email is required to request introductions." },
        { status: 400 }
      );
    }

    const { error } = await supabase().from("partner_intro_requests").insert({
      founder_name: contact.name ?? null,
      founder_email: contact.email,
      company_name: contact.company ?? null,
      intake: intake ?? null,
      requested_partner_ids: requested_partner_ids ?? [],
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
