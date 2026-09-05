// Server-only Supabase client for the funding tool.
//
// Uses the service-role key, so it must NEVER be imported into a client
// component — only inside API route handlers under /api/funding.
//
// The client is created lazily on first use rather than at import time. That
// way the rest of the site (and every teammate's local dev server) keeps
// working when the funding tool's env vars are not set; only the funding API
// routes report "not configured".

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}

export class SupabaseNotConfiguredError extends Error {
  constructor() {
    super(
      "Funding tool is not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (see .env.example).",
    );
    this.name = "SupabaseNotConfiguredError";
  }
}

/** Returns the shared server client, creating it on first call. */
export function supabase(): SupabaseClient {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new SupabaseNotConfiguredError();
  client = createClient(url, serviceKey, { auth: { persistSession: false } });
  return client;
}

/** Standard JSON body for routes to return when the tool is not configured. */
export const NOT_CONFIGURED_BODY = {
  error: "The funding tool is not configured on this deployment yet.",
} as const;
