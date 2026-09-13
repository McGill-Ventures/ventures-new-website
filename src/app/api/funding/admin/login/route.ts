// Admin login for the funding tool. Sets the admin cookie on success.
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_COOKIE_MAX_AGE, expectedToken, passwordMatches } from "@/lib/funding/adminAuth";
import { clientIp, createLimiter } from "@/lib/funding/rateLimit";

export const dynamic = "force-dynamic";

// Brute-force throttle: 5 failed attempts per IP per 15 minutes.
const failedLogins = createLimiter(5, 15 * 60 * 1000);

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (failedLogins.isLimited(ip)) {
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
    failedLogins.record(ip);
    console.warn("funding admin: failed login", { ip, at: new Date().toISOString() });
    // Small delay to blunt rapid guessing.
    await new Promise((r) => setTimeout(r, 500));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  failedLogins.reset(ip);
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
