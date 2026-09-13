// app/api/admin/partners/route.ts
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { isAdmin } from "@/lib/funding/adminAuth";

export const dynamic = "force-dynamic";

const DATE_FIELDS = ["last_reviewed"];
const BOOL_FIELDS = ["intro_via_mvc", "contact_public", "is_example"];

function clean(rec: Record<string, unknown>) {
  const out: Record<string, unknown> = { ...rec };
  for (const f of DATE_FIELDS) {
    if (out[f] === "" || out[f] === undefined) out[f] = null;
  }
  for (const f of BOOL_FIELDS) {
    if (out[f] === "true" || out[f] === true) out[f] = true;
    else if (out[f] === "false" || out[f] === false) out[f] = false;
  }
  out.updated_at = new Date().toISOString();
  return out;
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  const { data, error } = await supabase().from("partners").select("*").order("name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ rows: data ?? [] });
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  const body = await req.json();
  if (!body?.id || !body?.name) {
    return NextResponse.json({ error: "id and name are required." }, { status: 400 });
  }
  const { error } = await supabase().from("partners").upsert(clean(body));
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const { error } = await supabase().from("partners").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
