// app/api/match/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { matchFunding, amountDisplay, type FounderIntake, type Program } from "@/lib/funding/matcher";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const intake = (await req.json()) as FounderIntake;

    const answers = [intake.stage, intake.sector, intake.province, intake.funding_preference];
    if (answers.some((a) => !Array.isArray(a) || a.length === 0)) {
      return NextResponse.json({ error: "Incomplete intake. Please answer every question." }, { status: 400 });
    }

    const { data, error } = await supabase().from("funding_programs").select(
      "id,program_name,administering_body,jurisdiction,province_territory,official_url,status,last_reviewed,instrument,non_dilutive,short_description,eligible_activities,amount_min,amount_max,amount_notes,applicant_types,company_stage,sectors,incorporation_required,canadian_rd_required,deadline_type,next_deadline,open_date,window_notes",
    );
    if (error) {
      console.error("load programs error", error);
      return NextResponse.json({ error: "Could not load programs." }, { status: 500 });
    }

    const results = matchFunding(intake, (data ?? []) as Program[]).map((r) => ({
      ...r,
      amount_text: amountDisplay(r.program),
    }));
    return NextResponse.json({ results });
  } catch (err) {
    console.error("match error", err);
    return NextResponse.json({ error: "Could not run the match." }, { status: 500 });
  }
}