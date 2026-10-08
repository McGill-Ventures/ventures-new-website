import { test } from "node:test";
import assert from "node:assert/strict";
import { at2x } from "../src/lib/photoSizes.ts";

test("a plain length gets a 3x entry first", () => {
  assert.equal(at2x("96px"), "(min-resolution: 3dppx) calc(96px * 2 / 3), 96px");
});

test("each conditional entry keeps its condition on the 3x copy", () => {
  assert.equal(
    at2x("(max-width: 767px) 100vw, 50vw"),
    "(max-width: 767px) and (min-resolution: 3dppx) calc(100vw * 2 / 3), (max-width: 767px) 100vw, " +
      "(min-resolution: 3dppx) calc(50vw * 2 / 3), 50vw",
  );
});

test("aspect-ratio conditions and vh lengths pass through", () => {
  assert.equal(
    at2x("(max-aspect-ratio: 2/3) 67vh, 100vw"),
    "(max-aspect-ratio: 2/3) and (min-resolution: 3dppx) calc(67vh * 2 / 3), (max-aspect-ratio: 2/3) 67vh, " +
      "(min-resolution: 3dppx) calc(100vw * 2 / 3), 100vw",
  );
});

test("a comma inside a function throws instead of splitting the entry", () => {
  assert.throws(() => at2x("(max-width: 767px) min(100vw, 600px), 50vw"), /contains a comma/);
});
