// app/api/admin/logout/route.ts
import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/funding/adminAuth";

export const dynamic = "force-dynamic";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
