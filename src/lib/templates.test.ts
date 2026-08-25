/* Run: npm test
   Every template names a paper, a palette, a border, a motif and a mithai by
   id. A typo in any of them renders a fallback instead of the thing that was
   curated, and nothing would tell you. */

import assert from "node:assert/strict";
import test from "node:test";
import { TEMPLATES, templateById, templatesFor } from "./templates.ts";
import { BORDER_LIST } from "./borders.ts";
import { MOTIF_LIST } from "./motifs.ts";
import { CELEBRATION_LIST } from "./celebrations.ts";
import { PAPERS } from "./patterns.ts";
import { DENOMINATIONS, MAX_RUPEES } from "./limits.ts";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const paperIds = new Set(PAPERS.map((p) => slug(p.en)));
const borderIds = new Set(BORDER_LIST.map((b) => b.id));
const motifIds = new Set(MOTIF_LIST.map((m) => m.id));
const celebIds = new Set(CELEBRATION_LIST.map((c) => c.id));

test("template ids are unique", () => {
  const ids = TEMPLATES.map((t) => t.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("there are enough templates to be worth having", () => {
  assert.ok(TEMPLATES.length >= 40, `only ${TEMPLATES.length} templates`);
});

test("every template points at things that exist", () => {
  for (const t of TEMPLATES) {
    assert.ok(paperIds.has(t.designId), `${t.id}: no paper "${t.designId}"`);
    if (t.borderId) assert.ok(borderIds.has(t.borderId), `${t.id}: no border "${t.borderId}"`);
    if (t.motifId) assert.ok(motifIds.has(t.motifId), `${t.id}: no motif "${t.motifId}"`);
    if (t.celebrationId)
      assert.ok(celebIds.has(t.celebrationId), `${t.id}: no celebration "${t.celebrationId}"`);
  }
});

test("suggested neks are real denominations and inside the cap", () => {
  for (const t of TEMPLATES) {
    for (const n of t.notes) {
      assert.ok(
        (DENOMINATIONS as readonly number[]).includes(n),
        `${t.id}: ${n} is not a note`,
      );
    }
    const total = t.notes.reduce((a, b) => a + b, 0) + (t.coin ? 1 : 0);
    assert.ok(total <= MAX_RUPEES, `${t.id}: ${total} is over the cap`);
    assert.ok(total > 0, `${t.id}: empty nek`);
  }
});

test("shagun ends in one, so every suggestion carries the coin", () => {
  // The coin is what turns a round number into shagun. A template that
  // suggested a flat ₹500 would be suggesting condolence money.
  for (const t of TEMPLATES) {
    const total = t.notes.reduce((a, b) => a + b, 0) + (t.coin ? 1 : 0);
    assert.equal(total % 10, 1, `${t.id}: ₹${total} does not end in one`);
  }
});

test("every festival has at least three to choose from", () => {
  const festivals = [...new Set(TEMPLATES.map((t) => t.festival))];
  for (const f of festivals) {
    assert.ok(templatesFor(f).length >= 3, `${f} has only ${templatesFor(f).length}`);
  }
});

test("lookup returns null rather than the wrong template", () => {
  assert.equal(templateById("no-such-template"), null);
  assert.equal(templateById(null), null);
  assert.equal(templateById(TEMPLATES[0].id)?.id, TEMPLATES[0].id);
});
