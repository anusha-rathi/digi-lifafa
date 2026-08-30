import { C, F, SAFE, seeded, tilt } from "../../brand.ts";
import { Lifafa, Coin } from "../../components/svg/Lifafa.ts";
import type { Template } from "../../lib/page.ts";
import { SIZE } from "../../brand.ts";
import content from "../../content.json" with { type: "json" };

/* A01 — "500 nahi. 501."
 *
 * The MOOCH reference stacks a headline at three sizes with a colour break on
 * the loudest line, sets it against a warm textured ground, and lets flat
 * objects overlap and tilt underneath. Same structure here. The line is the
 * owner's, unedited, split at its own full stops.
 *
 * The wordmark carries the Devanagari, which is what proves the font stack
 * reaches the Devanagari subset rather than falling back to Latin. */

const LINE = content.A_populated[11];
const [a, b] = ["500 nahi.", "501."];
const tail = LINE.slice(LINE.indexOf("wo ek"));

export default {
  id: "a-01",
  category: "A. Populated",
  canvas: SIZE.feed,
  render() {
    const rnd = seeded(501);
    const { w, h } = SIZE.feed;

    return `
    <svg class="stage" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <!-- The cluster sits in the lower half and stays clear of the footer
           band, which the first render did not: a lifafa landed on top of the
           wordmark and a coin on top of the handle. -->
      ${Lifafa({ w: 400, x: -50, y: 760, rotate: tilt(rnd, 9) - 8, body: C.peacock, line: C.foilHi })}
      ${Lifafa({ w: 300, x: 300, y: 998, rotate: tilt(rnd, 8) + 5, body: C.rani })}
      ${Lifafa({ w: 420, x: 585, y: 800, rotate: tilt(rnd, 9) + 7, body: C.marigold, line: "#5c3a06", outline: "#5c3a06" })}
      ${Coin({ x: 300, y: 800, r: 42, rotate: tilt(rnd, 16) })}
      ${Coin({ x: 966, y: 1148, r: 28, rotate: tilt(rnd, 16) })}
    </svg>

    <div class="safe" style="display:flex; flex-direction:column;">
      <div style="font-family:${F.body}; font-size:30px; font-weight:600;
                  letter-spacing:.24em; text-transform:uppercase; color:${C.peacock};">
        shagun ka hisaab
      </div>

      <div style="margin-top:40px;">
        <div style="font-family:${F.display}; font-weight:800; font-size:146px;
                    line-height:.94; color:${C.ink};">${a}</div>
        <div style="font-family:${F.display}; font-weight:900; font-size:242px;
                    line-height:.92; color:${C.kumkum}; margin-top:4px;">${b}</div>
      </div>

      <div style="margin-top:34px; max-width:700px; font-family:${F.body};
                  font-size:50px; line-height:1.32; color:${C.inkSoft};">
        ${tail}
      </div>
    </div>

    <!-- Footer on its own band so nothing can ever land on it. -->
    <div style="position:absolute; left:0; right:0; bottom:0; height:118px;
                background:${C.maroon};
                display:flex; align-items:center; justify-content:space-between;
                padding:0 ${SAFE}px;">
      <span style="font-family:${F.wordmark}; font-size:46px; color:${C.ivory};
                   line-height:1.6;">${content.wordmark}</span>
      <span style="font-family:${F.body}; font-size:30px; color:${C.marigoldSoft};
                   letter-spacing:.06em;">${content.handle}</span>
    </div>`;
  },
} satisfies Template;
