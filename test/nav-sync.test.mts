import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { syncNav } from "../src/lib/navSync.ts";

// The root layout inlines syncNav's source, so it must run with nothing but browser globals.
test("syncNav runs standalone, the way the layout inlines it", () => {
  const set: [string, boolean][] = [];
  const header = { dataset: { darkOver: "#hero" }, toggleAttribute: (name: string, on: boolean) => set.push([name, on]) };
  const sandbox = {
    AbortController,
    window: { scrollY: 120, addEventListener: () => {} },
    document: {
      querySelector: () => header,
      querySelectorAll: () => [{ getBoundingClientRect: () => ({ top: -200, bottom: 600 }) }],
    },
  };
  vm.runInNewContext(`(${syncNav})()`, sandbox);
  assert.deepEqual(set, [["data-scrolled", true], ["data-on-dark", true]]);
});
