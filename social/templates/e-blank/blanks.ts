import { C, F, SIZE } from "../../brand.ts";
import type { Template } from "../../lib/page.ts";

/* Empty canvases. Ground, border, branding, nothing else.
 *
 * The story pair leaves the middle completely clear: Instagram puts its own
 * chrome over roughly the top 250px and the bottom 250px of a story, so the
 * branding sits above that lower band rather than under the caption field
 * where it would be covered. */

type Opts = {
  id: string;
  canvas: { w: number; h: number };
  ground: string;
  mark: string;
  rule: string;
  /** Posts get a drawn border; stories stay plain. */
  border: boolean;
  /** Flat colour: no jaali. A border can still be drawn over it. */
  plain?: boolean;
  /** Latin half of the branding. Empty leaves the Devanagari wordmark alone. */
  latin?: string;
  /** How far up from the bottom the branding sits. */
  markUp: number;
};

const BRAND = "digi.lifafa &nbsp;|&nbsp; lifafa.cc";

function blank({ id, canvas, ground, mark, rule, border, markUp, plain, latin = BRAND }: Opts): Template {
  return {
    id,
    category: "E. Blank",
    canvas,
    render() {
      return `
      <div class="stage" style="background:${ground};"></div>

      ${plain ? "" : `<div class="stage" style="opacity:.5; background-image:
        repeating-linear-gradient(45deg, ${rule}22 0 1.5px, transparent 1.5px 30px),
        repeating-linear-gradient(-45deg, ${rule}22 0 1.5px, transparent 1.5px 30px);"></div>`}

      ${border
        ? `<div style="position:absolute; inset:46px; border:7px solid ${rule};"></div>
           <div style="position:absolute; inset:62px; border:2px solid ${rule}; opacity:.55;"></div>`
        : ""}

      <div style="position:absolute; left:0; right:0; bottom:${markUp}px;
                  display:flex; align-items:center; justify-content:center; gap:22px;">
        <span style="font-family:${F.wordmark}; font-size:38px; color:${mark};
                     line-height:1.7;">डिजि लिफ़ाफ़ा</span>
        ${latin ? `<span style="width:2px; height:30px; background:${mark}; opacity:.45;"></span>
        <span style="font-family:${F.body}; font-size:27px; font-weight:600;
                     letter-spacing:.10em; color:${mark}; opacity:.9;">${latin}</span>` : ""}
      </div>`;
    },
  };
}

export const STORY_BEIGE = blank({
  id: "e-story-beige", canvas: SIZE.story, ground: C.ivory,
  mark: C.maroon, rule: C.foil, border: false, markUp: 268,
});

export const STORY_MAROON = blank({
  id: "e-story-maroon", canvas: SIZE.story, ground: C.maroon,
  mark: C.ivory, rule: C.foilHi, border: false, markUp: 268,
});

export const POST_BEIGE = blank({
  id: "e-post-beige", canvas: SIZE.feed, ground: C.ivory,
  mark: C.maroon, rule: C.maroon, border: true, markUp: 96,
});

export const POST_MAROON = blank({
  id: "e-post-maroon", canvas: SIZE.feed, ground: C.maroon,
  mark: C.ivory, rule: C.foilHi, border: true, markUp: 96,
});

/* Flat colour. No jaali, no border. Both Instagram post ratios plus the
   story, because "IG post dimensions" covers 4:5 and 1:1 and picking one
   for someone would be a guess. */
const flat = (
  id: string,
  canvas: { w: number; h: number },
  dark: boolean,
  markUp: number,
  border = false,
  latin = BRAND,
) =>
  blank({
    id,
    canvas,
    ground: dark ? C.maroon : C.ivory,
    mark: dark ? C.ivory : C.maroon,
    rule: dark ? C.foilHi : C.maroon,
    border,
    plain: true,
    markUp,
    latin,
  });

/* No borders anywhere. Flat ground, the Devanagari wordmark and the site,
   nothing else. The romanised handle is gone because the wordmark beside it
   is the same name in the other script. */
const SITE_ONLY = "lifafa.cc";

export const FLAT_POST_BEIGE = flat("f-post45-beige", SIZE.feed, false, 96, false, SITE_ONLY);
export const FLAT_POST_MAROON = flat("f-post45-maroon", SIZE.feed, true, 96, false, SITE_ONLY);
export const FLAT_SQ_BEIGE = flat("f-post11-beige", SIZE.square, false, 96, false, SITE_ONLY);
export const FLAT_SQ_MAROON = flat("f-post11-maroon", SIZE.square, true, 96, false, SITE_ONLY);
export const FLAT_STORY_BEIGE = flat("f-story-beige", SIZE.story, false, 268, false, SITE_ONLY);
export const FLAT_STORY_MAROON = flat("f-story-maroon", SIZE.story, true, 268, false, SITE_ONLY);
