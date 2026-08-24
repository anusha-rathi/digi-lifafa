/* Run: npm test
   The URL strip is the one piece of non-trivial parsing in the app and it sits
   on a security boundary (S6), so it gets a check. Both directions matter:
   links must not survive, and ordinary words must not be eaten. */

import assert from "node:assert/strict";
import test from "node:test";
import { cleanMessage, stripUrls } from "./sanitise.ts";

test("strips scheme URLs", () => {
  const r = stripUrls("congrats! http://evil.example/claim now");
  assert.equal(r.removed, 1);
  assert.ok(!r.text.includes("evil"));
});

test("strips a upi:// link hidden in the message", () => {
  // The important one: a message must not be able to carry its own payment ask.
  const r = stripUrls("pay here upi://pay?pa=attacker@ybl&am=5000");
  assert.equal(r.removed, 1);
  assert.ok(!r.text.includes("attacker"));
});

test("strips www and bare domains", () => {
  assert.equal(stripUrls("see www.foo.com").removed, 1);
  assert.equal(stripUrls("go to amazon.in/gift today").removed, 1);
  assert.ok(!stripUrls("go to amazon.in/gift today").text.includes("amazon"));
});

test("does NOT eat ordinary text that merely contains a dot", () => {
  for (const s of [
    "reception is at 5.30pm",
    "beta.ji you are the best",
    "1.5 lakh blessings",
    "Mr. Sharma said yes",
    "बहुत बहुत बधाई! ख़ुश रहो.",
  ]) {
    const r = stripUrls(s);
    assert.equal(r.removed, 0, `wrongly stripped: ${s}`);
    assert.equal(r.text, s.trim(), `mangled: ${s}`);
  }
});

test("counts multiple removals", () => {
  assert.equal(stripUrls("a foo.com b http://bar.io c").removed, 2);
});

test("strips tags too, and reports both", () => {
  const r = cleanMessage("<script>alert(1)</script> hi from evil.com");
  assert.ok(!r.text.includes("<script>"));
  assert.ok(!r.text.includes("evil.com"));
  assert.equal(r.removed, 1);
});

test("keeps the sender's line breaks", () => {
  assert.equal(stripUrls("line one\nline two").text, "line one\nline two");
});
