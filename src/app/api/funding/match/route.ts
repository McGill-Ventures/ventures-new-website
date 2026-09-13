// app/api/match/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { matchFunding, amountDisplay, note, PROGRAM_COLUMNS, type FounderIntake, type Program } from "@/lib/funding/matcher";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  try {
    const intake = (await req.json()) as FounderIntake;

    const answers = [intake.stage, intake.sector, intake.province, intake.applicant_type, intake.activity, intake.funding_preference];
    if (answers.some((a) => !Array.isArray(a) || a.length === 0)) {
      return NextResponse.json({ error: "Incomplete intake. Please answer every question." }, { status: 400 });
    }

    const { data, error } = await supabase().from("funding_programs").select(PROGRAM_COLUMNS);
    if (error) {
      console.error("load programs error", error);
      return NextResponse.json({ error: "Could not load programs." }, { status: 500 });
    }

    const results = matchFunding(intake, (data ?? []) as Program[]).map((r) => ({
      ...r,
      amount_text: amountDisplay(r.program),
      // Sub-stream of a program family (e.g. Mitacs Accelerate · Entrepreneur);
      // shown on the card so same-named programs are distinguishable.
      stream_text: note(r.program.stream_component),
    }));
    return NextResponse.json({ results });
  } catch (err) {
    console.error("match error", err);
    return NextResponse.json({ error: "Could not run the match." }, { status: 500 });
  }
}