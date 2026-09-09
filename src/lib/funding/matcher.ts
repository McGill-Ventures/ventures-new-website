// lib/matcher.ts
// Deterministic funding matcher over the full master-sheet schema (502 programs).
// No LLM. Pure function over a passed-in program array (fetched live from Supabase).
// Founder answers are arrays: a program matches if it fits ANY chosen value.

export interface Program {
  id: string;
  program_name: string;
  administering_body?: string | null;
  jurisdiction?: string | null;
  province_territory?: string | null;
  official_url?: string | null;
  status?: string | null;
  last_reviewed?: string | null;
  instrument?: string | null;
  non_dilutive?: string | null;
  short_description?: string | null;
  eligible_activities?: string[] | null;
  amount_min?: number | null;
  amount_max?: number | null;
  amount_notes?: string | null;
  applicant_types?: string[] | null;
  company_stage?: string[] | null;
  sectors?: string[] | null;
  incorporation_required?: string | null;
  canadian_rd_required?: string | null;
  deadline_type?: string | null;
  next_deadline?: string | null;
  open_date?: string | null;
  window_notes?: string | null;
  [key: string]: unknown;
}

export type Stage = "1_idea" | "2_pre_revenue" | "3_early_revenue" | "4_growth" | "5_scale";
export type FundingPreference = "non_dilutive" | "equity" | "any";

export interface FounderIntake {
  stage: Stage[];
  sector: string[];
  province: string[];        // e.g. ["qc"], or ["other"]
  applicant_type: string[];  // e.g. ["sme"]
  activity: string[];        // e.g. ["research_and_development"]
  funding_preference: FundingPreference[];
}

export interface MatchResult {
  program: Program;
  score: number;
  reasons: string[];
  caveats: string[];
  liveness: "open" | "upcoming" | "unclear" | "closed";
  deadline_display: string;
  closing_soon: boolean;
}

const CLOSED = new Set(["closed", "archived", "temporarily_closed", "paused"]);
const ROLLING = new Set(["rolling", "continuous_intake"]);
const MAX_RESULTS = 12;
const MIN_SCORE = 35;

function has(arr: string[] | null | undefined, v: string): boolean {
  return Array.isArray(arr) && arr.includes(v);
}
function empty(arr: string[] | null | undefined): boolean {
  return !Array.isArray(arr) || arr.length === 0;
}
// True if the program's tag list contains any of the founder's chosen values.
function hasAny(arr: string[] | null | undefined, chosen: string[]): boolean {
  return chosen.some((v) => has(arr, v));
}
function daysUntil(dateStr?: string | null): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return Math.round((d.getTime() - t.getTime()) / 86400000);
}

function effectiveLiveness(p: Program): MatchResult["liveness"] {
  const s = (p.status ?? "unclear").toLowerCase();
  if (CLOSED.has(s)) return "closed";
  const rolling = ROLLING.has((p.deadline_type ?? "").toLowerCase());
  const days = daysUntil(p.next_deadline);
  if (!rolling && days !== null && days < 0) return "closed"; // deadline passed
  if (s === "upcoming") return "upcoming";
  if (s === "open") return "open";
  return "unclear";
}

function deadlineDisplay(p: Program, live: MatchResult["liveness"]): string {
  const dt = (p.deadline_type ?? "").toLowerCase();
  if (ROLLING.has(dt)) return "Rolling. Apply anytime.";
  const days = daysUntil(p.next_deadline);
  if (live === "upcoming" && p.open_date) {
    const o = new Date(p.open_date + "T00:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
    return "Opens " + o;
  }
  if (p.next_deadline && days !== null) {
    const nice = new Date(p.next_deadline + "T00:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
    return days <= 30 ? "Closes " + nice + " (soon)" : "Closes " + nice;
  }
  const win = note(p.window_notes);
  if (win) return win;
  return "Check the program page for timing.";
}

// Free-text notes in the dataset use the literal "not_specified" as a
// placeholder. Treat it (and blanks) as "no note" so it never reaches the UI.
function note(v: string | null | undefined): string | null {
  const t = (v ?? "").trim();
  return t && t.toLowerCase() !== "not_specified" ? t : null;
}

function amountDisplay(p: Program): string {
  const fmt = (n: number) => "$" + n.toLocaleString("en-CA");
  if (p.amount_min != null && p.amount_max != null) return `${fmt(p.amount_min)} to ${fmt(p.amount_max)}`;
  if (p.amount_max != null) return `Up to ${fmt(p.amount_max)}`;
  if (p.amount_min != null) return `From ${fmt(p.amount_min)}`;
  const amt = note(p.amount_notes);
  if (amt) return amt;
  return "Amount varies";
}

function excluded(p: Program, intake: FounderIntake, live: MatchResult["liveness"]): boolean {
  if (live === "closed") return true;

  // Province: exclude only if the program is province-restricted and none of the
  // founder's chosen provinces match. "other" opts out of province filtering.
  const prov = (p.province_territory ?? "").toLowerCase();
  if (
    prov && prov !== "canada_wide" && prov !== "multiple" &&
    !intake.province.includes("other") && !intake.province.includes(prov)
  ) {
    return true;
  }

  // Funding preference: choosing "any", or both non_dilutive and equity, means no filter.
  const pref = intake.funding_preference;
  const wantAny = pref.includes("any") || (pref.includes("non_dilutive") && pref.includes("equity"));
  if (!wantAny) {
    const nd = (p.non_dilutive ?? "").toLowerCase();
    if (pref.includes("non_dilutive") && nd === "n") return true;
    if (pref.includes("equity")) {
      const isEquity = (p.instrument as string) === "equity" || nd === "n";
      if (!isEquity) return true;
    }
  }
  return false;
}

function caveats(p: Program): string[] {
  const c: string[] = [];
  if ((p.status ?? "").toLowerCase() === "unclear") c.push("Status unconfirmed. Verify it is still open before applying.");
  if (p.amount_min == null && p.amount_max == null && !note(p.amount_notes)) c.push("Funding amount not confirmed.");
  if ((p.incorporation_required ?? "").toLowerCase() === "y") c.push("Requires an incorporated company.");
  if ((p.canadian_rd_required ?? "").toLowerCase() === "y") c.push("Requires R&D activity in Canada.");
  if (empty(p.applicant_types)) c.push("Eligibility details unconfirmed.");
  return c;
}

function score(p: Program, intake: FounderIntake): MatchResult | null {
  const live = effectiveLiveness(p);
  if (excluded(p, intake, live)) return null;

  let s = 0;
  const reasons: string[] = [];

  // Stage
  if (hasAny(p.company_stage, intake.stage) || has(p.company_stage, "all_stages")) {
    s += 34; reasons.push("Matches your stage");
  } else if (empty(p.company_stage) || has(p.company_stage, "not_specified")) {
    s += 12;
  }

  // Sector
  if (hasAny(p.sectors, intake.sector) || has(p.sectors, "sector_agnostic")) {
    s += 24; reasons.push("Fits your sector");
  } else if (empty(p.sectors)) {
    s += 8;
  }

  // Applicant type
  if (hasAny(p.applicant_types, intake.applicant_type)) {
    s += 18; reasons.push("Open to your type of applicant");
  } else if (empty(p.applicant_types)) {
    s += 6;
  }

  // Activity
  if (hasAny(p.eligible_activities, intake.activity)) {
    s += 12; reasons.push("Funds what you need");
  } else if (empty(p.eligible_activities)) {
    s += 4;
  }

  // Province precision bonus (an exact province match beats canada_wide slightly)
  const prov = (p.province_territory ?? "").toLowerCase();
  if (prov && intake.province.includes(prov)) { s += 6; reasons.push("Available in your province"); }

  // Liveness
  if (live === "open") { s += 14; reasons.push("Open now"); }
  else if (live === "upcoming") s += 8;
  else s += 2;
  if (ROLLING.has((p.deadline_type ?? "").toLowerCase())) s += 4;

  const cav = caveats(p);
  s -= cav.length * 3;
  s = Math.max(0, Math.min(100, s));

  const days = daysUntil(p.next_deadline);
  return {
    program: p,
    score: s,
    reasons,
    caveats: cav,
    liveness: live,
    deadline_display: deadlineDisplay(p, live),
    closing_soon: live === "open" && days !== null && days >= 0 && days <= 30,
  };
}

export function matchFunding(intake: FounderIntake, programs: Program[]): MatchResult[] {
  return programs
    .map((p) => score(p, intake))
    .filter((r): r is MatchResult => r !== null && r.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);
}

// Helpers the UI can reuse.
export { amountDisplay };