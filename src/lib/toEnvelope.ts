import type { EnvelopeState } from "@/components/Envelope";
import type { Lifafa } from "@/lib/db";
import { occasionById } from "@/lib/design";

/* One stored row -> the shape the envelope draws from. Shared by the
   receiver page and the sender's own page so they can never diverge. */
export function toEnvelope(l: Lifafa): EnvelopeState {
  const occ = occasionById(l.occasion);
  const label = occ
    ? occ.id === "custom"
      ? l.customHeading.trim() || (l.lang === "hi" ? "संदेश" : "a note")
      : l.lang === "hi"
        ? occ.hi
        : l.lang === "hn"
          ? occ.rom
          : occ.en
    : l.lang === "hi"
      ? "संदेश"
      : "a note";

  return {
    designId: l.designId,
    paletteId: l.paletteId,
    textureId: l.textureId,
    notes: l.notes.map((denom, key) => ({ denom, key })),
    coin: l.coin,
    sweetId: l.sweetId,
    occasionLabel: label,
    messagePeek: l.message,
    name: l.receiverName,
    salutation: l.salutation,
    lang: l.lang,
  };
}
