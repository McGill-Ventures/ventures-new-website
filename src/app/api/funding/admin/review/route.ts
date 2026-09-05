// app/api/admin/review/route.ts — computes the prioritized action items.
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { isAdmin } from "@/lib/funding/adminAuth";
import { computeActionItems, type ProgramRow } from "@/lib/funding/reviewAlgorithm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await supabase()
    .from("funding_programs")
    .select("id,program_name,status,last_reviewed,next_deadline,deadline_type,official_url,amount_min,amount_max,amount_notes,applicant_types,company_stage");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const { items, summary } = computeActionItems((data ?? []) as ProgramRow[]);
  return NextResponse.json({ items, summary, total_programs: data?.length ?? 0 });
}
