/* Run: npm test
   These ids are written into the database. If one is ever renamed or
   duplicated, existing lifafas silently start rendering a different border or
   motif, which is the one failure nobody would notice until someone opened an
   old envelope and it looked wrong. */

import assert from "node:assert/strict";
import test from "node:test";
import { BORDER_LIST, borderFor } from "./borders.ts";
import { MOTIF_LIST, motifById } from "./motifs.ts";

test("border ids are unique and non-empty", () => {
  const ids = BORDER_LIST.map((b) => b.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate border id");
  assert.ok(ids.every(Boolean));
});

test("motif ids are unique and non-empty", () => {
  const ids = MOTIF_LIST.map((m) => m.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate motif id");
  assert.ok(ids.every(Boolean));
});

test("a null border falls back to the paper's own frame flag", () => {
  // This is what keeps lifafas made before borders existed looking the same.
  assert.equal(borderFor(null, true)?.id, "hairline-rule");
  assert.equal(borderFor(undefined, true)?.id, "hairline-rule");
  assert.equal(borderFor(null, false), null);
  assert.equal(borderFor(null, undefined), null);
});

test("an explicit border wins over the frame flag", () => {
  assert.equal(borderFor("gota-scallop", true)?.id, "gota-scallop");
});

test("an unknown id resolves to nothing rather than the wrong thing", () => {
  assert.equal(borderFor("no-such-border", false), null);
  assert.equal(motifById("no-such-motif"), null);
  assert.equal(motifById(null), null);
});

test("every border renders valid CSS with a gold and a paper colour", () => {
  for (const b of BORDER_LIST) {
    const css = b.f("#c9a227", "#a4123f");
    assert.ok(Object.keys(css).length > 0, `${b.id} produced nothing`);
    // A `#` left unescaped inside a data URI truncates it at the fragment,
    // which fails silently and renders a blank border.
    const img = String(css.backgroundImage ?? "");
    if (img.includes("data:image/svg+xml")) {
      assert.ok(!img.includes("#"), `${b.id} left an unescaped # in its data URI`);
    }
  }
});

test("every motif has drawable paths, or is deliberately type", () => {
  for (const m of MOTIF_LIST) {
    if (m.p.length === 0) {
      assert.ok(m.hi.length > 0, `${m.id} has no paths and no glyph to fall back on`);
      continue;
    }
    for (const p of m.p) {
      assert.match(p.d, /^[Mm]/, `${m.id} has a path that does not start with a move`);
      assert.ok(p.t === 0 || p.t === 1 || p.t === 2, `${m.id} has a bad tone`);
    }
  }
});
