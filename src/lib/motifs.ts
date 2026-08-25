/* The motif stamped in the middle of the paper.
 *
 * SVG, because a gradient cannot draw a paisley. Paths carry a TONE, not a
 * colour, so the same motif re-inks itself per palette: 0 is the contrast
 * checked gold, 1 a darker gold for shading, 2 the paper colour itself, used
 * to cut shapes back out. Same trick the Eid crescent uses in patterns.ts, and
 * as there, a cut-out has to be drawn AFTER the shape it bites.
 *
 * All on a 100 x 100 box. These are the shared vocabulary of Indian festive
 * print (paisley, kalash, diya, lotus, toran, jaali), drawn here rather than
 * traced from anyone's product.
 */

export type MotifPath = {
  d: string;
  /** 0 gold, 1 gold-dark, 2 paper */
  t: 0 | 1 | 2;
  /** stroke width; omit for a filled path */
  w?: number;
  /** degrees, rotated about the centre of the 100x100 box */
  rot?: number;
};

export type MotifSpec = { id: string; hi: string; en: string; p: MotifPath[] };

export const MOTIF_LIST: MotifSpec[] = [
  {
    id: "paisley-buta",
    hi: "आम / बूटा",
    en: "paisley buta",
    p: [
      // A buta is a solid shape, not an outline. Gold body, paper bitten out
      // of the middle, gold dots scattered in the void.
      { d: "M50 8 C70 14 84 34 82 55 C80 76 64 92 47 92 C33 92 23 81 23 69 C23 57 33 49 44 51 C52 53 56 61 52 67 C60 64 66 55 63 45 C59 33 46 30 38 37 C40 26 44 15 50 8 Z", t: 0 },
      { d: "M50 24 C63 29 72 43 70 57 C68 70 58 79 48 79 C39 79 34 73 34 67 C34 61 39 57 44 59 C48 60 50 64 48 67 C54 65 58 58 56 51 C53 43 44 41 39 46 C41 37 45 29 50 24 Z", t: 2 },
      { d: "M52 40 a4.2 4.2 0 1 0 0.1 0", t: 0 },
      { d: "M45 55 a3 3 0 1 0 0.1 0", t: 0 },
      { d: "M58 52 a2.4 2.4 0 1 0 0.1 0", t: 1 },
      { d: "M50 70 a2.4 2.4 0 1 0 0.1 0", t: 1 },
    ],
  },
  {
    id: "kalash",
    hi: "कलश",
    en: "kalash",
    p: [
      // leaves fanning out of the pot mouth
      { d: "M50 30 C36 24 26 28 22 36 C32 42 44 40 50 32 Z", t: 1 },
      { d: "M50 30 C64 24 74 28 78 36 C68 42 56 40 50 32 Z", t: 1 },
      { d: "M50 30 C46 20 50 12 50 8 C50 12 54 20 50 30 Z", t: 1 },
      // coconut
      { d: "M50 12 a9 11 0 1 0 0.1 0", t: 0 },
      // pot
      { d: "M30 44 C30 40 70 40 70 44 C78 54 76 74 62 84 C54 90 46 90 38 84 C24 74 22 54 30 44 Z", t: 0 },
      { d: "M28 44 L72 44", t: 1, w: 3.4 },
      { d: "M34 62 C42 58 58 58 66 62", t: 2, w: 2.4 },
      { d: "M36 72 C44 69 56 69 64 72", t: 2, w: 2 },
    ],
  },
  {
    id: "diya",
    hi: "दीया",
    en: "diya",
    p: [
      { d: "M50 26 C58 38 56 50 50 55 C44 50 42 38 50 26 Z", t: 0 },
      { d: "M50 34 C54 42 53 49 50 52 C47 49 46 42 50 34 Z", t: 2 },
      { d: "M18 58 C18 76 32 86 50 86 C68 86 82 76 82 58 Z", t: 0 },
      { d: "M18 58 L82 58", t: 1, w: 3 },
      { d: "M30 68 C38 74 62 74 70 68", t: 1, w: 2 },
    ],
  },
  {
    id: "lotus-medallion",
    hi: "कमल",
    en: "lotus medallion",
    p: [
      // eight petals, the same path rotated around the centre
      ...Array.from({ length: 8 }, (_, i) => ({
        d: "M50 50 C40 32 44 14 50 6 C56 14 60 32 50 50 Z",
        t: (i % 2 ? 1 : 0) as 0 | 1,
        rot: i * 45,
      })),
      { d: "M50 50 a13 13 0 1 0 0.1 0", t: 0 },
      { d: "M50 50 a7 7 0 1 0 0.1 0", t: 2 },
    ],
  },
  {
    id: "toran",
    hi: "तोरण",
    en: "toran",
    p: [
      { d: "M6 18 Q50 34 94 18", t: 0, w: 2.6 },
      ...[14, 27, 40, 53, 66, 79].map((x, i) => ({
        d: `M${x} ${20 + Math.sin(i) * 2 + i * 0.6} q-7 16 0 30 q7 -14 0 -30 Z`,
        t: (i % 2 ? 1 : 0) as 0 | 1,
      })),
      { d: "M50 78 a5 5 0 1 0 0.1 0", t: 0 },
    ],
  },
  {
    id: "star-jaali",
    hi: "सितारा जाली",
    en: "star jaali",
    p: [
      { d: "M50 6 L61 34 L90 34 L67 51 L76 80 L50 63 L24 80 L33 51 L10 34 L39 34 Z", t: 0 },
      { d: "M50 20 L57 38 L76 38 L61 49 L67 68 L50 57 L33 68 L39 49 L24 38 L43 38 Z", t: 2 },
      { d: "M50 34 L56 47 L50 60 L44 47 Z", t: 1 },
    ],
  },
  {
    id: "peacock",
    hi: "मोर",
    en: "peacock",
    p: [
      // fanned tail
      ...[-40, -26, -13, 0, 13, 26, 40].map((a, i) => ({
        d: `M50 74 Q${50 + a * 0.9} ${44 - Math.abs(a) * 0.15} ${50 + a * 1.35} ${24 + Math.abs(a) * 0.5}`,
        t: (i % 2 ? 1 : 0) as 0 | 1,
        w: 2.2,
      })),
      ...[-40, -26, -13, 0, 13, 26, 40].map((a) => ({
        d: `M${50 + a * 1.35} ${24 + Math.abs(a) * 0.5} a4.5 5.5 0 1 0 0.1 0`,
        t: 0 as const,
      })),
      // body and head
      { d: "M50 76 C44 76 41 70 44 64 C46 60 54 60 56 64 C59 70 56 76 50 76 Z", t: 0 },
      { d: "M50 62 C48 56 50 50 54 48 C58 50 58 56 54 60 Z", t: 1 },
      { d: "M54 48 a3.4 3.4 0 1 0 0.1 0", t: 0 },
      { d: "M57 46 L64 43", t: 1, w: 1.8 },
    ],
  },
  {
    id: "om",
    hi: "ॐ",
    en: "om",
    // Rendered as type rather than traced paths: the glyph is what it is, and
    // a font draws it correctly at every size.
    p: [],
  },
];

const byId = new Map(MOTIF_LIST.map((m) => [m.id, m]));
export const motifById = (id: string | null | undefined): MotifSpec | null =>
  id ? byId.get(id) ?? null : null;
