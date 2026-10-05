import { test } from "node:test";
import assert from "node:assert/strict";
import { parseDashboard } from "../src/lib/funding/analytics.ts";

const columns = ["metric", "label", "value"];

test("maps endpoint rows to the dashboard", () => {
  const d = parseDashboard({
    columns,
    results: [
      ["views", "30m", 3],
      ["views", "today", 41],
      ["visitors", "today", 17],
      ["views", "7d", 260],
      ["form", "Startup applications", 9],
      ["form", "Consultant applications", 0],
      ["page", "/growth-studio", 120],
      ["page", "/growth-studio/startups", 80],
      ["source", "$direct", 30],
      ["source", "www.linkedin.com", 12],
      ["source", "linkedin.com", 3],
      ["source", "", 2],
      ["source", "l.instagram.com", 5],
      ["source", "www.instagram.com", 1],
    ],
  });
  assert.deepEqual(d, {
    views30m: 3,
    viewsToday: 41,
    visitorsToday: 17,
    views7d: 260,
    formClicks: [
      { label: "Startup applications", value: 9 },
      { label: "Consultant applications", value: 0 },
    ],
    topPages: [
      { label: "/growth-studio", value: 120 },
      { label: "/growth-studio/startups", value: 80 },
    ],
    topSources: [
      { label: "Direct", value: 32 },
      { label: "linkedin.com", value: 15 },
      { label: "instagram.com", value: 6 },
    ],
  });
});

test("no traffic yet reads as zeros, not an error", () => {
  const d = parseDashboard({ columns, results: [] });
  assert.equal(d.viewsToday, 0);
  assert.deepEqual(d.topPages, []);
});

test("column order comes from the response, and counts sent as strings still count", () => {
  const d = parseDashboard({ columns: ["value", "metric", "label"], results: [["7", "views", "today"]] });
  assert.equal(d.viewsToday, 7);
});

test("a changed endpoint fails loudly instead of showing zeros", () => {
  assert.throws(() => parseDashboard({ columns: ["day", "count"], results: [] }), /unexpected shape/);
  assert.throws(() => parseDashboard({}), /unexpected shape/);
});
