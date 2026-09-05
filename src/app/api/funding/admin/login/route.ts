// Admin login for the funding tool. Sets the admin cookie on success.
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_COOKIE_MAX_AGE, expectedToken, passwordMatches } from "@/lib/funding/adminAuth";

export const dynamic = "force-dynamic";

// Best-effort brute-force throttle: per-IP failed-attempt counter kept in
// memory. On serverless hosting this is per-instance, so it is a speed bump
// rather than a guarantee, but it makes password guessing impractical.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILURES = 5;
const failures = new Map<string, { count: number; first: number }>();

function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isLocked(ip: string): boolean {
  const rec = failures.get(ip);
  if (!rec) return false;
  if (Date.now() - rec.first > WINDOW_MS) {
    failures.delete(ip);
    return false;
  }
  return rec.count >= MAX_FAILURES;
}

function recordFailure(ip: string) {
  const now = Date.now();
  const rec = failures.get(ip);
  if (!rec || now - rec.first > WINDOW_MS) failures.set(ip, { count: 1, first: now });
  else rec.count += 1;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (isLocked(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
    );
  }

  let password = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    recordFailure(ip);
    console.warn("funding admin: failed login", { ip, at: new Date().toISOString() });
    // Small delay to blunt rapid guessing.
    await new Promise((r) => setTimeout(r, 500));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  failures.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, expectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });
  return res;
}
