// lib/reviewAlgorithm.ts
// Scans the live program data and produces a prioritized list of action items:
// what needs updating, why, and the recommended fix. This is what powers the
// "Needs attention" dashboard so the manager always knows what to do next.

export interface ProgramRow {
  id: string;
  program_name: string;
  status?: string | null;
  last_reviewed?: string | null;
  next_deadline?: string | null;
  deadline_type?: string | null;
  official_url?: string | null;
  amount_min?: number | null;
  amount_max?: number | null;
  amount_notes?: string | null;
  applicant_types?: string[] | null;
  company_stage?: string[] | null;
  [k: string]: unknown;
}

export type Priority = "high" | "medium" | "low";
export type IssueType =
  | "deadline_passed" | "closing_soon" | "status_unclear" | "stale_review"
  | "may_be_archived" | "missing_url" | "amount_unclear" | "eligibility_unclear";

export interface ActionItem {
  id: string;
  program_name: string;
  issue_type: IssueType;
  priority: Priority;
  message: string;
  recommended_action: string;
  quick_actions: ("mark_reviewed" | "set_closed")[];
  sort_key: number; // lower = more urgent
}

const ROLLING = new Set(["rolling", "continuous_intake"]);
const CLOSED = new Set(["closed", "archived", "paused"]);
const STALE_MONTHS = 6;
const VERY_STALE_MONTHS = 12;

function daysUntil(dateStr?: string | null): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return Math.round((d.getTime() - t.getTime()) / 86400000);
}
function monthsSince(dateStr?: string | null): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  return (Date.now() - d.getTime()) / (86400000 * 30.4);
}
function emptyArr(a: unknown): boolean {
  return !Array.isArray(a) || a.length === 0;
}

const PRIORITY_RANK: Record<Priority, number> = { high: 0, medium: 1, low: 2 };

export function computeActionItems(rows: ProgramRow[]): {
  items: ActionItem[];
  summary: { high: number; medium: number; low: number; by_type: Record<string, number> };
} {
  const items: ActionItem[] = [];

  for (const p of rows) {
    const status = (p.status ?? "").toLowerCase();
    const rolling = ROLLING.has((p.deadline_type ?? "").toLowerCase());
    const dDays = daysUntil(p.next_deadline);
    const isClosedState = CLOSED.has(status);

    // Deadline passed but still presented as active.
    if (!rolling && dDays !== null && dDays < 0 && !isClosedState) {
      items.push(mk(p, "deadline_passed", "high",
        `Deadline (${p.next_deadline}) has passed but status is still "${status || "unset"}".`,
        "Update the deadline to the next cycle, or set status to closed.",
        ["set_closed"], dDays));
      continue;
    }

    // Temporarily closed programs may have ended for good.
    if (status === "temporarily_closed") {
      items.push(mk(p, "may_be_archived", "medium",
        "Marked temporarily closed. It may have permanently ended.",
        "Confirm whether it reopens. If not, set status to closed or archived.",
        ["set_closed"], 5000));
    }

    // Unclear status.
    if (status === "unclear" || status === "") {
      items.push(mk(p, "status_unclear", "medium",
        "Status is unclear.",
        "Confirm whether the program is open, upcoming, or closed.",
        ["mark_reviewed", "set_closed"], 4000));
    }

    // Closing soon (informational nudge, only for live ones).
    if (status === "open" && dDays !== null && dDays >= 0 && dDays <= 30) {
      items.push(mk(p, "closing_soon", "low",
        `Closes in ${dDays} day${dDays === 1 ? "" : "s"} (${p.next_deadline}).`,
        "Confirm the date is still correct. Founders see a 'closing soon' flag.",
        ["mark_reviewed"], dDays - 100));
    }

    // Stale or missing review date.
    const m = monthsSince(p.last_reviewed);
    if (p.last_reviewed == null) {
      items.push(mk(p, "stale_review", "medium",
        "Never reviewed.",
        "Verify the details and set Last reviewed.",
        ["mark_reviewed"], 3500));
    } else if (m !== null && m >= VERY_STALE_MONTHS) {
      items.push(mk(p, "stale_review", "high",
        `Not reviewed in ${Math.round(m)} months.`,
        "Re-verify link, amount, and status, then update Last reviewed.",
        ["mark_reviewed"], 100));
    } else if (m !== null && m >= STALE_MONTHS) {
      items.push(mk(p, "stale_review", "medium",
        `Not reviewed in ${Math.round(m)} months.`,
        "Re-verify and update Last reviewed.",
        ["mark_reviewed"], 3000));
    }

    // Missing official URL.
    if (!p.official_url) {
      items.push(mk(p, "missing_url", "high",
        "No official URL.",
        "Add the official program page link.",
        [], 200));
    }

    // Amount unknown.
    if (p.amount_min == null && p.amount_max == null && !p.amount_notes) {
      items.push(mk(p, "amount_unclear", "low",
        "No funding amount captured.",
        "Add an amount range or an amount note.",
        ["mark_reviewed"], 6000));
    }

    // Eligibility gaps that hurt matching.
    if (emptyArr(p.applicant_types) || emptyArr(p.company_stage)) {
      items.push(mk(p, "eligibility_unclear", "medium",
        "Missing applicant types or stages, which weakens matching.",
        "Tag applicant types and stages.",
        ["mark_reviewed"], 3200));
    }
  }

  items.sort((a, b) => {
    const pr = PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
    if (pr !== 0) return pr;
    return a.sort_key - b.sort_key;
  });

  const summary = { high: 0, medium: 0, low: 0, by_type: {} as Record<string, number> };
  for (const it of items) {
    summary[it.priority]++;
    summary.by_type[it.issue_type] = (summary.by_type[it.issue_type] ?? 0) + 1;
  }

  return { items, summary };
}

function mk(
  p: ProgramRow, issue_type: IssueType, priority: Priority,
  message: string, recommended_action: string,
  quick_actions: ("mark_reviewed" | "set_closed")[], sort_key: number
): ActionItem {
  return { id: p.id, program_name: p.program_name, issue_type, priority, message, recommended_action, quick_actions, sort_key };
}

export const ISSUE_LABELS: Record<IssueType, string> = {
  deadline_passed: "Deadline passed",
  closing_soon: "Closing soon",
  status_unclear: "Status unclear",
  stale_review: "Needs review",
  may_be_archived: "May be archived",
  missing_url: "Missing link",
  amount_unclear: "Amount unclear",
  eligibility_unclear: "Eligibility gaps",
};
