// Best-effort per-IP throttle shared by the funding tool's public write
// endpoints (admin login, lead capture). The counter lives in process memory,
// so on serverless hosting it is per-instance: a speed bump that makes
// scripted abuse impractical, not a hard guarantee. Good enough for endpoints
// whose worst case is junk rows in a table the team reviews by hand.

export function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export interface Limiter {
  /** True when this IP has hit the cap inside the current window. */
  isLimited(ip: string): boolean;
  /** Count one event (a failed login, a submitted lead) for this IP. */
  record(ip: string): void;
  /** Forget this IP (e.g. after a successful login). */
  reset(ip: string): void;
}

export function createLimiter(max: number, windowMs: number): Limiter {
  const hits = new Map<string, { count: number; first: number }>();
  const expired = (rec: { first: number }) => Date.now() - rec.first > windowMs;
  return {
    isLimited(ip) {
      const rec = hits.get(ip);
      if (!rec) return false;
      if (expired(rec)) { hits.delete(ip); return false; }
      return rec.count >= max;
    },
    record(ip) {
      const rec = hits.get(ip);
      if (!rec || expired(rec)) hits.set(ip, { count: 1, first: Date.now() });
      else rec.count += 1;
    },
    reset(ip) { hits.delete(ip); },
  };
}

/** Loose email shape check: something@something.tld, no whitespace, sane length. */
export function looksLikeEmail(v: unknown): v is string {
  return typeof v === "string" && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

/** Byte size of a value once serialised, for capping free-form JSON fields. */
export function jsonBytes(v: unknown): number {
  return v == null ? 0 : Buffer.byteLength(JSON.stringify(v), "utf8");
}
