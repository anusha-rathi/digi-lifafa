/* The 21 papers.
 *
 * Rewritten so they are actually different from each other. The old set leaned
 * on the same trick — a dot grid plus a diagonal line — so bandhani, kolam and
 * nordic dots all read as "dots". These vary on three axes deliberately:
 *
 *   TECHNIQUE  dots / stripes / lattice / arcs / cut-outs / scattered flecks
 *   SCALE      4px weave up to 40px fans, so density alone tells them apart
 *   WEIGHT     hairline pinstripes through to solid blocks
 *
 * `m` is the palette's motif colour (its `lace`), `b` the paper colour — `b`
 * is used to CUT shapes out of a motif, which is how the crescent gets its
 * bite. Layer order matters: the first background-image is the topmost, so a
 * cutting layer must come before the shape it cuts. The old crescent had this
 * backwards, which is why it rendered as a plain disc.
 */

/* `hi` is a highlight that adapts to the paper: white on dark papers, a dark
   tint on pale ones. Hardcoding #ffffff made the second layer of bandhani,
   mukaish and rakhi vanish entirely on cream, dove, mint and blush — which is
   what "the design goes away when I change the colour" was. */
export type PatternFn = (m: string, b: string, hi: string) => [string, string];
export type PaperDesign = { hi: string; en: string; f: PatternFn; frame?: boolean };

const P = (hiName: string, en: string, f: PatternFn, frame?: boolean): PaperDesign => ({
  hi: hiName,
  en,
  f,
  frame,
});

export const PAPERS: PaperDesign[] = [
  // ── lattices ──────────────────────────────────────────────────────────
  P("ब्रोकेड जाली", "brocade jaali", (m) => [
    `repeating-linear-gradient(45deg, ${m}66 0 1.5px, transparent 1.5px 22px),
     repeating-linear-gradient(-45deg, ${m}66 0 1.5px, transparent 1.5px 22px),
     radial-gradient(circle at 11px 11px, ${m}aa 2px, transparent 2.8px)`,
    "auto, auto, 22px 22px",
  ]),

  P("रंगोली", "kolam grid", (m) => [
    `radial-gradient(circle at 9px 9px, ${m}dd 2.4px, transparent 3.2px),
     repeating-linear-gradient(45deg, ${m}55 0 1px, transparent 1px 18px),
     repeating-linear-gradient(-45deg, ${m}55 0 1px, transparent 1px 18px)`,
    "18px 18px, auto, auto",
  ]),

  P("खादी बुनाई", "khadi weave", (m) => [
    `repeating-linear-gradient(0deg, ${m}44 0 1px, transparent 1px 4px),
     repeating-linear-gradient(90deg, ${m}55 0 1px, transparent 1px 4px)`,
    "auto, auto",
  ]),

  // ── dots, at three completely different scales ────────────────────────
  P("बंधनी", "bandhani dots", (m, _b, hi) => [
    `radial-gradient(circle at 6px 6px, ${m}dd 2.6px, transparent 3.4px),
     radial-gradient(circle at 19px 19px, ${m}dd 2.6px, transparent 3.4px),
     radial-gradient(circle at 19px 6px, ${hi}aa 1.5px, transparent 2.1px),
     radial-gradient(circle at 6px 19px, ${hi}aa 1.5px, transparent 2.1px)`,
    "26px 26px, 26px 26px, 26px 26px, 26px 26px",
  ]),

  P("मुकैश", "mukaish sparkle", (m, _b, hi) => [
    `radial-gradient(circle at 5px 6px, ${m}ee 1.4px, transparent 2px),
     radial-gradient(circle at 8px 11px, ${m}88 1px, transparent 1.5px),
     radial-gradient(circle at 14px 4px, ${hi}cc 1.1px, transparent 1.7px)`,
    "24px 26px, 19px 21px, 31px 29px",
  ]),

  P("नॉर्डिक बिंदी", "nordic dots", (m) => [
    `radial-gradient(circle at 15px 15px, ${m}bb 3.6px, transparent 4.6px)`,
    "30px 30px",
  ], true),

  // ── stripes and checks ────────────────────────────────────────────────
  P("पतली धारी", "ticking stripe", (m) => [
    `repeating-linear-gradient(90deg, ${m}77 0 2px, transparent 2px 5px, ${m}77 5px 7px, transparent 7px 22px)`,
    "auto",
  ]),

  P("चारखाना", "gingham check", (m) => [
    `repeating-linear-gradient(90deg, ${m}44 0 11px, transparent 11px 22px),
     repeating-linear-gradient(0deg, ${m}44 0 11px, transparent 11px 22px)`,
    "auto, auto",
  ]),

  P("ऑर्गेंज़ा", "organza ombré", (m, _b, hi) => [
    `repeating-linear-gradient(115deg, ${hi}3d 0 16px, transparent 16px 44px),
     repeating-linear-gradient(115deg, ${m}22 0 4px, transparent 4px 44px)`,
    "auto, auto",
  ]),

  // ── zigzags, distinct from each other in weight ───────────────────────
  P("ज़री लहर", "zari chevron", (m) => [
    `linear-gradient(135deg, ${m}99 25%, transparent 25% 75%, ${m}99 75%),
     linear-gradient(225deg, ${m}99 25%, transparent 25% 75%, ${m}99 75%)`,
    "24px 24px, 24px 24px",
  ]),

  P("इकत", "ikat zigzag", (m) => [
    `repeating-linear-gradient(45deg, ${m}55 0 5px, transparent 5px 10px),
     repeating-linear-gradient(-45deg, ${m}55 0 5px, transparent 5px 10px)`,
    "auto, auto",
  ]),

  P("राखी धागा", "rakhi thread", (m, _b, hi) => [
    `repeating-linear-gradient(60deg, ${m}bb 0 4px, transparent 4px 8px, ${hi}66 8px 12px, transparent 12px 16px)`,
    "auto",
  ]),

  // ── curves and arcs ───────────────────────────────────────────────────
  P("दमास्क", "gold damask", (m) => [
    `radial-gradient(circle at 0 50%, transparent 9px, ${m}66 9px 10.5px, transparent 10.5px),
     radial-gradient(circle at 100% 50%, transparent 9px, ${m}66 9px 10.5px, transparent 10.5px),
     radial-gradient(circle at 50% 0, transparent 9px, ${m}66 9px 10.5px, transparent 10.5px),
     radial-gradient(circle at 50% 100%, transparent 9px, ${m}66 9px 10.5px, transparent 10.5px)`,
    "28px 28px, 28px 28px, 28px 28px, 28px 28px",
  ]),

  P("डेको पंखा", "deco fan", (m) => [
    `repeating-radial-gradient(circle at 0 100%, transparent 0 10px, ${m}88 10px 11.5px, transparent 11.5px 22px)`,
    "40px 40px",
  ]),

  P("शल्क", "scallop shell", (m) => [
    `radial-gradient(circle at 50% 100%, transparent 11px, ${m}77 11px 12.5px, transparent 12.5px)`,
    "26px 14px",
  ]),

  // ── figurative motifs ─────────────────────────────────────────────────
  P("मोरपंख", "peacock eye", (m, b) => [
    `radial-gradient(circle at 15px 14px, ${b} 2.6px, transparent 3.2px),
     radial-gradient(ellipse 4.5px 7px at 15px 16px, ${m}cc 70%, transparent 72%),
     radial-gradient(ellipse 8.5px 12px at 15px 17px, ${m}44 68%, transparent 70%)`,
    "30px 38px, 30px 38px, 30px 38px",
  ]),

  P("दिवाली के दीये", "diya rows", (m) => [
    `radial-gradient(ellipse 2.4px 5px at 15px 12px, ${m}ee 68%, transparent 70%),
     radial-gradient(ellipse 9px 5px at 15px 21px, ${m}aa 70%, transparent 72%)`,
    "30px 30px, 30px 30px",
  ]),

  P("ईद का चाँद", "Eid crescent", (m, b) => [
    // the cutting circle is FIRST so it sits on top and bites the disc
    `radial-gradient(circle at 15px 12px, ${b} 6.4px, transparent 7px),
     radial-gradient(circle at 11px 14px, ${m}cc 7px, transparent 7.6px),
     radial-gradient(circle at 27px 27px, ${m}aa 1.9px, transparent 2.5px)`,
    "34px 34px, 34px 34px, 34px 34px",
  ]),

  P("तीज बेल", "Teej vine", (m) => [
    `radial-gradient(ellipse 7px 3.4px at 11px 15px, ${m}99 70%, transparent 72%),
     radial-gradient(ellipse 7px 3.4px at 27px 29px, ${m}99 70%, transparent 72%),
     repeating-linear-gradient(38deg, ${m}55 0 1.4px, transparent 1.4px 34px)`,
    "38px 44px, 38px 44px, auto",
  ]),

  P("जन्माष्टमी", "Janmashtami", (m) => [
    `radial-gradient(circle at 16px 7px, ${m}dd 1.7px, transparent 2.3px),
     radial-gradient(ellipse 6.5px 7.5px at 16px 15px, ${m}88 70%, transparent 72%),
     repeating-linear-gradient(90deg, ${m}3d 0 1.2px, transparent 1.2px 32px)`,
    "32px 30px, 32px 30px, auto",
  ]),

  // ── the quiet one ─────────────────────────────────────────────────────
  P("सादा, किनारे वाला", "plain, ruled edge", () => ["none", "auto"], true),
];
