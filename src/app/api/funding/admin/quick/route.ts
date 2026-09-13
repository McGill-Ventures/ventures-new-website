// app/api/admin/quick/route.ts — one-click fixes from the review dashboard.
import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured, NOT_CONFIGURED_BODY } from "@/lib/funding/supabaseServer";
import { isAdmin } from "@/lib/funding/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!isSupabaseConfigured()) return NextResponse.json(NOT_CONFIGURED_BODY, { status: 503 });
  const { id, action } = await req.json();
  if (!id || !action) return NextResponse.json({ error: "id and action required" }, { status: 400 });

  const patch: Record<string, unknown> = { id, updated_at: new Date().toISOString() };
  if (action === "mark_reviewed") {
    patch.last_reviewed = new Date().toISOString().slice(0, 10);
  } else if (action === "set_closed") {
    patch.status = "closed";
  } else {
    return NextResponse.json({ error: "unknown action" }, { status: 400 });
  }

  const { error } = await supabase().from("funding_programs").upsert(patch);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
