// pnpm test. The /team roster is hand-edited every year, and the build passes
// even when a photo path is wrong, so these catch mistakes before they ship.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { TEAMS } from "../src/constants/index.ts";

test("every headshot path points at a file in public/", () => {
  const missing = TEAMS.flatMap((t) => t.groups.flatMap((g) => g.members))
    .filter((m) => m.image && !existsSync(`public${m.image}`))
    .map((m) => `${m.name}: ${m.image}`);
  assert.deepEqual(missing, []);
});

test("team ids, which are the page anchors, are unique", () => {
  const ids = TEAMS.map((t) => t.id);
  assert.deepEqual(ids.filter((id, i) => ids.indexOf(id) !== i), []);
});

test("nobody appears twice in the same team", () => {
  for (const team of TEAMS) {
    const names = team.groups.flatMap((g) => g.members.map((m) => m.name));
    assert.deepEqual(names.filter((n, i) => names.indexOf(n) !== i), [], team.name);
  }
});
