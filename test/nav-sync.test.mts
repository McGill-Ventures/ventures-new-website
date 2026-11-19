import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { syncNav } from "../src/lib/navSync.ts";

/** Runs syncNav the way the layout inlines it, with only browser globals, over a
 *  stack of elements whose background colours paint to the given RGBA bytes. */
function runOver(stack: { rgba: number[]; width?: number; inHeader?: boolean }[], scrollY = 400) {
  const set: [string, boolean][] = [];
  const elements = stack.map(({ rgba, width = 1280 }) => ({
    rgba,
    getBoundingClientRect: () => ({ width }),
  }));
  const header = {
    contains: (el: unknown) => stack[elements.indexOf(el as never)]?.inHeader ?? false,
    toggleAttribute: (name: string, on: boolean) => set.push([name, on]),
  };
  let painted = [0, 0, 0, 0];
  const probe = {
    clearRect: () => {},
    fillRect: () => {},
    getImageData: () => ({ data: painted }),
    set fillStyle(rgba: number[]) {
      painted = rgba;
    },
  };
  const sandbox = {
    AbortController,
    window: {
      innerWidth: 1280,
      scrollY,
      addEventListener: () => {},
      getComputedStyle: (el: { rgba: number[] }) => ({ backgroundColor: el.rgba }),
    },
    document: {
      querySelector: () => header,
      createElement: () => ({ getContext: () => probe }),
      elementsFromPoint: () => elements,
    },
  };
  vm.runInNewContext(`(${syncNav})()`, sandbox);
  return set;
}

test("dark over a dark section, skipping the island, cards and transparent layers", () => {
  const set = runOver([
    { rgba: [255, 255, 255, 255], inHeader: true },
    { rgba: [255, 255, 255, 255], width: 300 },
    { rgba: [0, 0, 0, 0] },
    { rgba: [0, 0, 0, 255] },
  ]);
  assert.deepEqual(set, [["data-on-dark", true], ["data-at-top", false]]);
});

test("light over a light section", () => {
  assert.deepEqual(runOver([{ rgba: [250, 245, 255, 255] }, { rgba: [0, 0, 0, 255] }]), [["data-on-dark", false], ["data-at-top", false]]);
});

test("at the top until the page scrolls past the hero's first lines", () => {
  const dark = [{ rgba: [0, 0, 0, 255] }];
  assert.deepEqual(runOver(dark, 0), [["data-on-dark", true], ["data-at-top", true]]);
  assert.deepEqual(runOver(dark, 80), [["data-on-dark", true], ["data-at-top", false]]);
});
