import assert from "node:assert/strict";
import test from "node:test";
import { POSTS, headings, slugify } from "./posts.ts";

test("heading ids are unique inside every post", () => {
  for (const p of POSTS) {
    const ids = headings(p).map((h) => h.id);
    assert.equal(new Set(ids).size, ids.length, `duplicate id in ${p.slug}`);
    assert.ok(
      ids.every((id) => id.length > 0),
      `empty id in ${p.slug}`,
    );
  }
});

test("slugify keeps Devanagari whole, matras included", () => {
  // \p{L} alone would give "कय": the matra and the virama are Mark, not Letter.
  assert.equal(slugify("क्या देना है"), "क्या-देना-है");
  assert.equal(slugify("Ganesh Chaturthi 2026"), "ganesh-chaturthi-2026");
  assert.equal(slugify("Teej\u2019s sindhara"), "teejs-sindhara");
  assert.equal(slugify("!!!"), "section");
});

test("a repeated heading is suffixed rather than clashing", () => {
  const h = headings({
    ...POSTS[0],
    body: [{ h: "What to give" }, { h: "What to give" }],
  });
  assert.deepEqual(
    h.map((x) => x.id),
    ["what-to-give", "what-to-give-2"],
  );
});
