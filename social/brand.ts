/* The palette, lifted from the app's globals.css so the two never drift.
 *
 * Copied rather than imported: SOCIAL.md rule 8 keeps the folders apart, and
 * the app's tokens live in CSS custom properties that a Node renderer cannot
 * read anyway. If a colour changes in globals.css it must change here too. */
export const C = {
  ivory: "#fbf3e4",
  ivoryDeep: "#f4e7cf",
  ivoryEdge: "#e2cfab",
  paper: "#f6e9d2",
  paperDeep: "#e9d6b4",

  maroon: "#7b1e2b",
  maroonDeep: "#4e0f1a",
  rani: "#a4123f",

  marigold: "#e09112",
  marigoldSoft: "#f2b84b",

  peacock: "#0f6e5c",
  peacockSoft: "#2f9880",

  foil: "#b8912f",
  foilHi: "#f4dc8c",
  foilLo: "#8a6b12",

  kumkum: "#c42b1c",
  indigo: "#2b3a67",

  ink: "#4a121c",
  inkSoft: "#7d5a52",
  inkFaint: "#a08b81",

  night: "#17090e",
  nightSoft: "#24121a",
} as const;

/* Type. Martel for display because the app already chose it over Yatra One
   for headings, Mukta for body, Yatra One reserved for the wordmark. All
   three carry Devanagari, which is why they were chosen in the first place. */
export const F = {
  display: "'Martel', Georgia, serif",
  body: "'Mukta', system-ui, sans-serif",
  wordmark: "'YatraOne', Georgia, serif",
} as const;

/** 1080-wide canvas. Every number here is in those pixels. */
export const SIZE = {
  /** Instagram's two post ratios: 4:5 portrait and 1:1 square. */
  feed: { w: 1080, h: 1350 },
  square: { w: 1080, h: 1080 },
  story: { w: 1080, h: 1920 },
} as const;

/** SOCIAL.md section 2: Instagram crops the preview, so nothing goes closer. */
export const SAFE = 80;

export const HANDLE = "@digi.lifafa";
export const SITE = "lifafa.cc";

/** Outlines: 4 to 6px at 1080 wide, per SOCIAL.md section 3. */
export const STROKE = { thin: 4, mid: 5, thick: 6 } as const;

/* Repeatable scatter. Math.random gives a different layout on every render,
   which makes a diff meaningless and a re-render a redesign. */
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** A rotation in the -8 to +8 band section 3 asks for. */
export const tilt = (rnd: () => number, max = 8) => (rnd() * 2 - 1) * max;
