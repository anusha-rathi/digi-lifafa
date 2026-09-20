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

test("festival batch posts each have one in-context lifafa CTA", () => {
  const slugs = [
    "radha-ashtami-2026-date-puja-vidhi-vrat-katha",
    "anant-chaturdashi-2026-date-puja-anant-sutra",
    "ganesh-visarjan-2026-dates-uttar-puja",
    "sukhkarta-dukhharta-aarti-lyrics-meaning",
    "jai-ganesh-deva-aarti-lyrics-meaning",
    "shendur-lal-chadhayo-aarti-lyrics-meaning",
    "ganesh-slogans-ganpati-bappa-morya-meaning",
    "ghalin-lotangan-lyrics-meaning-closing-prayer",
  ];
  for (const slug of slugs) {
    const post = POSTS.find((candidate) => candidate.slug === slug);
    assert.ok(post, `${slug} exists`);
    assert.equal(
      post.body.filter((block) => "lifafaCta" in block).length,
      1,
      `${slug} has exactly one in-context CTA`,
    );
  }
});
