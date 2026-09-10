// pnpm test — Node's built-in runner, no framework. `.mts` keeps this file out
// of tsconfig's include; Node 24 strips the types at run time.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  matchFunding,
  amountDisplay,
  note,
  PROGRAM_COLUMNS,
  type FounderIntake,
  type Program,
} from "../src/lib/funding/matcher.ts";

const ALL: Program[] = JSON.parse(readFileSync("data/funding-programs.json", "utf8"));
const cols = PROGRAM_COLUMNS.split(",");

// What /api/funding/match actually hands the page: only the selected columns.
const asServed = ALL.map(
  (p) => Object.fromEntries(cols.map((c) => [c, (p as Record<string, unknown>)[c]])) as unknown as Program,
);

// The heading and subheading of a result card (match/page.tsx).
const cardLabel = (p: Program) =>
  [p.program_name, p.administering_body, note(p.stream_component)].filter(Boolean).join(" | ");

// Real answer values from src/lib/funding/questions.ts.
const STAGES = ["1_idea", "2_pre_revenue", "3_early_revenue", "4_growth", "5_scale"] as const;
const SECTORS = ["sector_agnostic", "software", "artificial_intelligence", "healthcare", "biotechnology", "cleantech", "advanced_manufacturing", "agriculture"];
const PROVINCES = ["qc", "on", "bc", "other"];
const PREFS = [["non_dilutive"], ["equity"], ["any"]] as const;

// 152 of the 502 programs share a program_name and differ only by
// stream_component. Drop a column a card renders and this catches it.
test("no result set contains two cards that read the same", () => {
  let sets = 0;
  for (const stage of STAGES)
    for (const sector of SECTORS)
      for (const province of PROVINCES)
        for (const funding_preference of PREFS) {
          const intake = {
            stage: [stage], sector: [sector], province: [province],
            applicant_type: ["sme"], activity: ["research_and_development"],
            funding_preference: [...funding_preference],
          } as unknown as FounderIntake;
          const labels = matchFunding(intake, asServed).map((r) => cardLabel(r.program));
          const dupe = labels.find((l, i) => labels.indexOf(l) !== i);
          assert.equal(dupe, undefined, `duplicate card "${dupe}" for ${JSON.stringify(intake)}`);
          sets++;
        }
  assert.ok(sets > 0);
});

test("every column a card or the scorer reads is selected", () => {
  for (const c of ["id", "program_name", "administering_body", "stream_component", "short_description", "official_url", "amount_min", "amount_max", "amount_notes", "deadline_type", "next_deadline", "open_date", "window_notes", "status"]) {
    assert.ok(cols.includes(c), `PROGRAM_COLUMNS is missing "${c}"`);
  }
});

// The dataset uses the literal "not_specified" as a placeholder in free-text
// notes (all 502 rows). It must never reach a card (regression: 2b3dec3).
test("the not_specified placeholder never reaches a card", () => {
  assert.equal(note("not_specified"), null);
  assert.equal(note("  NOT_SPECIFIED "), null);
  assert.equal(note(""), null);
  assert.equal(note(null), null);
  assert.equal(note("Up to 50% of eligible costs"), "Up to 50% of eligible costs");

  const placeholderOnly = ALL.filter((p) => p.amount_min == null && p.amount_max == null);
  assert.ok(placeholderOnly.length > 0);
  for (const p of placeholderOnly) {
    assert.notEqual(amountDisplay(p), "not_specified", `amountDisplay leaked the placeholder for ${p.id}`);
  }
  for (const r of matchFunding({ stage: ["2_pre_revenue"], sector: ["software"], province: ["qc"], applicant_type: ["sme"], activity: ["research_and_development"], funding_preference: ["any"] } as unknown as FounderIntake, asServed)) {
    assert.notEqual(r.deadline_display, "not_specified");
  }
});
