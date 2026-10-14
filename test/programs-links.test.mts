// pnpm test. Other pages deep-link to /programs#<id>, and a renamed program id breaks those links silently.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const page = readFileSync("src/app/programs/page.tsx", "utf8");
const ids = [...page.matchAll(/^ {4}id: "([\w-]+)",$/gm)].map((m) => m[1]);

const sources = readdirSync("src", { recursive: true, withFileTypes: true })
  .filter((f) => f.isFile() && /\.tsx?$/.test(f.name))
  .map((f) => join(f.parentPath, f.name));

test("the programs page declares its program ids", () => {
  assert.deepEqual(ids, ["analyst", "htil", "growth-studio", "fund"]);
});

test("every /programs#anchor on the site matches a program", () => {
  const broken = sources.flatMap((file) =>
    [...readFileSync(file, "utf8").matchAll(/\/programs#([\w-]+)/g)]
      .filter((m) => !ids.includes(m[1]))
      .map((m) => `${file}: #${m[1]}`),
  );
  assert.deepEqual(broken, []);
});
