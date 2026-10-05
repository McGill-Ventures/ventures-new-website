// Shapes PostHog's "growth_studio_dashboard" endpoint (docs/funding-tool/analytics_endpoint.sql)
// for the admin Website analytics tab. Kept free of imports so `pnpm test` can load it directly.

export type Ranked = { label: string; value: number };

export type Dashboard = {
  views30m: number;
  viewsToday: number;
  visitorsToday: number;
  views7d: number;
  formClicks: Ranked[];
  topPages: Ranked[];
  topSources: Ranked[];
};

export type EndpointResponse = { columns?: unknown; results?: unknown };

export function sourceName(domain: string): string {
  if (!domain || domain === "$direct") return "Direct";
  // l. and lm. are Instagram and Facebook link redirects, m. is a mobile site.
  return domain.replace(/^(www|l|lm|m)\./, "");
}

export function parseDashboard(res: EndpointResponse): Dashboard {
  const columns = Array.isArray(res.columns) ? res.columns : [];
  const [m, l, v] = ["metric", "label", "value"].map((c) => columns.indexOf(c));
  if (m < 0 || l < 0 || v < 0 || !Array.isArray(res.results)) {
    throw new Error("PostHog returned an unexpected shape. Check the endpoint still returns metric, label, value.");
  }
  const rows = (res.results as unknown[][]).map((r) => ({
    metric: String(r[m]),
    label: String(r[l] ?? ""),
    value: Number(r[v]) || 0,
  }));

  const scalar = (metric: string, label: string) =>
    rows.find((r) => r.metric === metric && r.label === label)?.value ?? 0;

  const ranked = (metric: string, name: (label: string) => string = (s) => s): Ranked[] => {
    const totals = new Map<string, number>();
    for (const r of rows) {
      if (r.metric !== metric) continue;
      const key = name(r.label);
      totals.set(key, (totals.get(key) ?? 0) + r.value);
    }
    return [...totals].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value).slice(0, 5);
  };

  return {
    views30m: scalar("views", "30m"),
    viewsToday: scalar("views", "today"),
    visitorsToday: scalar("visitors", "today"),
    views7d: scalar("views", "7d"),
    formClicks: ranked("form"),
    topPages: ranked("page"),
    topSources: ranked("source", sourceName),
  };
}
