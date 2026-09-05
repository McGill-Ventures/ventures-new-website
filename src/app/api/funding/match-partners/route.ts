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

    const { data, error } = await supabase().from("partners").select("*");
    if (error) {
      console.error("load partners error", error);
      return NextResponse.json({ error: "Could not load partners." }, { status: 500 });
    }

    const results = matchPartners(intake, (data ?? []) as Partner[]);
    return NextResponse.json({ results });
  } catch (err) {
    console.error("partner match error", err);
    return NextResponse.json({ error: "Could not run the match." }, { status: 500 });
  }
}
