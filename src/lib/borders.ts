/* The gold border that runs around a real shagun envelope.
 *
 * Drawn as a CSS overlay on an absolutely positioned div, which is what the
 * old `des.frame` block already was. That buys the clip-path and the 3D flip
 * for free, because it is paint on an element inside the transformed subtree.
 *
 * Edge strips are SVG data URIs repeated along an edge. The `#` in a hex
 * colour must be escaped to `%23` or the browser truncates the URI at the
 * fragment, which fails silently and leaves you staring at a blank border.
 */

import type { CSSProperties } from "react";

export type BorderSpec = {
  id: string;
  hi: string;
  en: string;
  /** gold is already contrast-checked against the paper by motifFor(). */
  f: (gold: string, base: string) => CSSProperties;
};

const uri = (svg: string) =>
  `url("data:image/svg+xml,${svg.replace(/#/g, "%23").replace(/"/g, "'").replace(/\s+/g, " ").trim()}")`;

/** A strip that tiles left to right along the top and bottom edges. */
const edges = (svg: string, h: number, extra: CSSProperties = {}): CSSProperties => ({
  backgroundImage: `${uri(svg)}, ${uri(svg)}`,
  backgroundRepeat: "repeat-x, repeat-x",
  backgroundPosition: `top center, bottom center`,
  backgroundSize: `auto ${h}px, auto ${h}px`,
  ...extra,
});

export const BORDER_LIST: BorderSpec[] = [
  {
    id: "hairline-rule",
    hi: "पतली लकीर",
    en: "Hairline Rule",
    // The legacy `frame` look, kept so old rows have somewhere to land.
    f: (gold) => ({ boxShadow: `inset 0 0 0 1px ${gold}`, opacity: 0.75 }),
  },
  {
    id: "zari-double",
    hi: "ज़री दोहरी",
    en: "Zari Double",
    f: (gold, base) => ({
      boxShadow: `inset 0 0 0 2px ${gold}, inset 0 0 0 5px ${base}, inset 0 0 0 6px ${gold}`,
    }),
  },
  {
    id: "gota-scallop",
    hi: "गोटा झालर",
    en: "Gota Scallop",
    f: (gold) =>
      edges(
        `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='9'><path d='M0 9 A9 9 0 0 1 18 9 Z' fill='${gold}'/><circle cx='9' cy='6' r='1.6' fill='${gold}'/></svg>`,
        9,
      ),
  },
  {
    id: "temple-arch",
    hi: "मंदिर मेहराब",
    en: "Temple Arch",
    f: (gold) =>
      edges(
        `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='12'><path d='M0 12 L0 7 Q10 -4 20 7 L20 12 Z' fill='none' stroke='${gold}' stroke-width='1.6'/></svg>`,
        12,
      ),
  },
  {
    id: "kadai-dot",
    hi: "कढ़ाई बिंदी",
    en: "Kadai Dot",
    f: (gold) => ({
      backgroundImage: `radial-gradient(circle, ${gold} 1.7px, transparent 2.3px), radial-gradient(circle, ${gold} 1.7px, transparent 2.3px), radial-gradient(circle, ${gold} 1.7px, transparent 2.3px), radial-gradient(circle, ${gold} 1.7px, transparent 2.3px)`,
      backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
      backgroundPosition: "top left, bottom left, left top, right top",
      backgroundSize: "11px 11px, 11px 11px, 11px 11px, 11px 11px",
      boxShadow: `inset 0 0 0 1px ${gold}66`,
    }),
  },
  {
    id: "chevron-zari",
    hi: "ज़री लहर",
    en: "Chevron Zari",
    f: (gold) =>
      edges(
        `<svg xmlns='http://www.w3.org/2000/svg' width='14' height='10'><path d='M0 9 L7 2 L14 9' fill='none' stroke='${gold}' stroke-width='2'/></svg>`,
        10,
      ),
  },
  {
    id: "mango-vine",
    hi: "आम की बेल",
    en: "Mango Vine",
    f: (gold) =>
      edges(
        `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='12'><path d='M0 10 Q11 14 22 10' fill='none' stroke='${gold}' stroke-width='1.2'/><path d='M6 10 Q6 2 11 3 Q12 9 6 10 Z' fill='${gold}'/><path d='M16 10 Q16 3 21 4 Q22 10 16 10 Z' fill='${gold}' opacity='.7'/></svg>`,
        12,
      ),
  },
];

const byId = new Map(BORDER_LIST.map((b) => [b.id, b]));

/** null means "whatever the paper itself asked for", which is the old flag. */
export const borderFor = (id: string | null | undefined, frame?: boolean): BorderSpec | null =>
  id ? byId.get(id) ?? null : frame ? byId.get("hairline-rule")! : null;
