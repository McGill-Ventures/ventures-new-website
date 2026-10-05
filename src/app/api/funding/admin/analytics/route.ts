// app/api/funding/admin/analytics/route.ts — Growth Studio traffic from PostHog for the Website analytics tab.
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/funding/adminAuth";
import { parseDashboard } from "@/lib/funding/analytics";

export const dynamic = "force-dynamic";

const ENDPOINT_URL = "https://eu.posthog.com/api/projects/293151/endpoints/growth_studio_dashboard/run";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const key = process.env.POSTHOG_SECRET_KEY;
  if (!key) return NextResponse.json({ error: "Website analytics is not configured on this deployment yet." }, { status: 503 });

  try {
    const r = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      // "force" skips PostHog's endpoint cache, whose shortest window is 15 minutes.
      body: JSON.stringify({ refresh: "force" }),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    if (!r.ok) {
      console.error("PostHog endpoint failed", r.status, (await r.text()).slice(0, 500));
      const error = r.status === 401 || r.status === 403
        ? "PostHog rejected the API key. Ask whoever manages PostHog to check POSTHOG_SECRET_KEY."
        : `PostHog returned HTTP ${r.status}.`;
      return NextResponse.json({ error }, { status: 502 });
    }
    return NextResponse.json(parseDashboard(await r.json()));
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Could not reach PostHog." }, { status: 502 });
  }
}
