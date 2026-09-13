// app/api/match-partners/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { matchPartners, type PartnerIntake, type Partner } from "@/lib/funding/partnerMatcher";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const intake = (await req.json()) as PartnerIntake;
    if (intake.customer_industry == null || intake.validation_goal == null) {
      return NextResponse.json({ error: "Incomplete. Please answer every question." }, { status: 400 });
    }

    // Only the columns the matcher and results page use. `contact` is included so
    // it can be released below for partners who opted in; never with select("*").
    const { data, error } = await supabase().from("partners").select(
      "id,name,entity_type,partner_kind,industries,personas,segment,location,intro_via_mvc,contact_public,contact,blurb,status,is_example",
    );
    if (error) {
      console.error("load partners error", error);
      return NextResponse.json({ error: "Could not load partners." }, { status: 500 });
    }

    // Consent gate, enforced server-side: a partner's contact details leave the
    // server only if they opted in (contact_public). The UI check alone is not
    // enough, since the raw JSON is visible in the browser's network tab.
    const results = matchPartners(intake, (data ?? []) as Partner[]).map((r) => ({
      ...r,
      partner: { ...r.partner, contact: r.partner.contact_public ? r.partner.contact : null },
    }));
    return NextResponse.json({ results });
  } catch (err) {
    console.error("partner match error", err);
    return NextResponse.json({ error: "Could not run the match." }, { status: 500 });
  }
}
