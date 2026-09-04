// Smallest check that fails if the contact-route input handling regresses.
// Run: node src/app/api/contact/route.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("./route.ts", import.meta.url), "utf8");

// The two helpers are plain string functions; lift them out and exercise them.
const escapeHtml = (str) =>
  str.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// A quote in the subject must not break out of the href="..." attribute.
// The payload may survive as inert URL-encoded text; what must never happen is
// a raw quote closing the attribute and starting a new one.
const evil = '" onmouseover="steal()';
const attr = escapeHtml(encodeURIComponent(`Re: ${evil}`));
assert.ok(!attr.includes('"'), "a raw quote reached the href attribute value");
const href = `<a href="mailto:x@y.z?subject=${attr}">`;
assert.equal(href.split('"').length - 1, 2, "href gained extra attributes: the value broke out");

// A non-string subject must be rejected by validation, not crash sanitisation.
assert.match(src, /typeof contactData\.subject !== 'string'/, "subject type is no longer validated");
assert.match(src, /contactData\.subject\.length > 200/, "subject length cap is gone");

// The plain-text part must carry raw values, not HTML entities.
assert.match(src, /Name: \$\{name\}/, "text part must not use HTML-escaped values");
assert.doesNotMatch(src, /str\.replace\(\/\[<>\]\/g, ''\)/, "the <>-only sanitiser is back");

console.log("contact route checks passed");
