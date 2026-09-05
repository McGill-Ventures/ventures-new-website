// Shared-password gate for the funding tool's admin console.
//
// The manager enters one password (ADMIN_PASSWORD). On success we set an
// httpOnly cookie holding a derived token, and every admin API route checks it.
// This keeps the manager out of Supabase entirely while still protecting writes.
//
// Next 15: cookies() is async, so isAdmin() is async too.

import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_COOKIE = "mvc_admin";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 12; // 12 hours

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "";
}

/** Constant-time string comparison so response timing does not leak matches. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

/**
 * Token stored in the cookie. Derived from the password with a fixed
 * application-specific prefix (HMAC-SHA256) rather than a bare hash, so the
 * cookie value cannot be reused as a generic password hash. Changing the
 * password logs every admin session out.
 */
export function expectedToken(): string {
  return crypto.createHmac("sha256", "mcgillvc-funding-admin-v1").update(adminPassword()).digest("hex");
}

export function passwordMatches(input: string): boolean {
  const pw = adminPassword();
  return pw.length > 0 && safeEqual(input, pw);
}

export async function isAdmin(): Promise<boolean> {
  if (adminPassword().length === 0) return false; // fail closed when unconfigured
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  return !!token && safeEqual(token, expectedToken());
}
