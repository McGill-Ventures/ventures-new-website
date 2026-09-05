// app/api/admin/programs/route.ts
// List, create/update, and delete funding programs. Guarded by the admin cookie.
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { isAdmin } from "@/lib/funding/adminAuth";

export const dynamic = "force-dynamic";

const NUM_FIELDS = ["amount_min", "amount_max", "cost_share_pct", "company_contribution_pct"];
const DATE_FIELDS = ["next_deadline", "last_reviewed", "open_date"];

function clean(rec: Record<string, unknown>) {
  const out: Record<string, unknown> = { ...rec };
  for (const f of NUM_FIELDS) {
    if (out[f] === "" || out[f] === undefined) out[f] = null;
    else if (out[f] !== null) out[f] = Number(out[f]);
  }
  for (const f of DATE_FIELDS) {
    if (out[f] === "" || out[f] === undefined) out[f] = null;
  }
  out.updated_at = new Date().toISOString();
  return out;
}

export async function GET() {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await supabase().from("funding_programs").select("*").order("name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  if (!body?.id) {
    return NextResponse.json({ error: "id is required." }, { status: 400 });
  }
  const { error } = await supabase().from("funding_programs").upsert(clean(body));
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const { error } = await supabase().from("funding_programs").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
