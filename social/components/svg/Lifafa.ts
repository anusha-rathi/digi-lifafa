import { C } from "../../brand.ts";

/* The envelope.
 *
 * The first three attempts had heavy near-black outlines and flat saturated
 * fills, which is sticker art. Nothing on the site looks like that: the app's
 * envelope reads as paper because it has a printed pattern, a gold hairline
 * rule set in from the edge, a soft shadow, and no outline at all. Same
 * approach here.
 *
 * The silhouette is the app's own FLAP_PATH, on its 330x150 grid, so the
 * social assets and the product are drawing the same object. */

const SILHOUETTE =
  "M0,150 L0,86 C0,60 14,36 40,24 C62,14 84,26 96,40 C110,20 140,4 165,4 " +
  "C190,4 220,20 234,40 C246,26 268,14 290,24 C316,36 330,60 330,86 L330,150 Z";
const POCKET =
  "M0,150 L0,92 C0,77 10,67 25,67 L98,67 C111,67 118,75 125,84 L205,84 " +
  "C212,75 219,67 232,67 L305,67 C320,67 330,77 330,92 L330,150 Z";

export type LifafaOpts = {
  w?: number;
  paper?: string;
  /** Printed motif colour. Sits at low opacity, like real gold ink on card. */
  ink?: string;
  rotate?: number;
  x?: number;
  y?: number;
  seal?: boolean;
  /** Unique per instance: SVG defs are global and ids would collide. */
  key?: string;
};

let n = 0;

export function Lifafa({
  w = 330,
  paper = C.rani,
  ink = C.foilHi,
  rotate = 0,
  x = 0,
  y = 0,
  seal = true,
  key,
}: LifafaOpts = {}): string {
  const k = w / 330;
  const id = key ?? `lf${n++}`;
  const edge = shade(paper, -0.22);

  return `<g transform="translate(${x} ${y}) rotate(${rotate}) scale(${k})">
    <defs>
      <pattern id="p-${id}" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="5.5" cy="5.5" r="1.5" fill="${ink}" opacity="0.30"/>
        <circle cx="16.5" cy="16.5" r="1.5" fill="${ink}" opacity="0.30"/>
        <path d="M0,22 L22,0" stroke="${ink}" stroke-width="0.7" opacity="0.16"/>
        <path d="M0,0 L22,22" stroke="${ink}" stroke-width="0.7" opacity="0.16"/>
      </pattern>
      <filter id="d-${id}" x="-25%" y="-25%" width="150%" height="160%">
        <feDropShadow dx="0" dy="7" stdDeviation="9" flood-color="#3a0d16" flood-opacity="0.26"/>
      </filter>
    </defs>

    <g filter="url(#d-${id})">
      <path d="${SILHOUETTE}" fill="${paper}"/>
      <path d="${SILHOUETTE}" fill="url(#p-${id})"/>
      <path d="${SILHOUETTE}" fill="none" stroke="${edge}" stroke-width="1.4"/>
    </g>

    <!-- the pocket, one tone up, so the fold reads without a drawn seam -->
    <path d="${POCKET}" fill="${shade(paper, 0.11)}"/>
    <path d="${POCKET}" fill="url(#p-${id})"/>

    <!-- zari rule, set in from the edge the way it is printed -->
    <rect x="17" y="98" width="296" height="40" rx="2"
          fill="none" stroke="${ink}" stroke-width="1.6" opacity="0.85"/>
    <rect x="23" y="104" width="284" height="28" rx="1"
          fill="none" stroke="${ink}" stroke-width="0.8" opacity="0.5"/>

    ${seal ? `<g transform="translate(165 78)">
      <circle r="16" fill="${ink}" opacity="0.95"/>
      <circle r="16" fill="none" stroke="${shade(ink, -0.35)}" stroke-width="1.2"/>
      <circle r="11" fill="none" stroke="${shade(ink, -0.3)}" stroke-width="0.8" stroke-dasharray="2.2 2.6"/>
    </g>` : ""}
  </g>`;
}

/** A ₹1 coin. Struck metal, not a cartoon token. */
export function Coin({
  r = 26,
  x = 0,
  y = 0,
  rotate = 0,
  key,
}: { r?: number; x?: number; y?: number; rotate?: number; key?: string } = {}): string {
  const id = key ?? `cn${n++}`;
  return `<g transform="translate(${x} ${y}) rotate(${rotate})">
    <defs>
      <radialGradient id="c-${id}" cx="0.36" cy="0.3" r="0.85">
        <stop offset="0" stop-color="${C.foilHi}"/>
        <stop offset="0.55" stop-color="${C.foil}"/>
        <stop offset="1" stop-color="${C.foilLo}"/>
      </radialGradient>
    </defs>
    <circle r="${r}" fill="url(#c-${id})"/>
    <circle r="${r}" fill="none" stroke="${C.foilLo}" stroke-width="${r * 0.05}" opacity="0.7"/>
    <circle r="${r * 0.82}" fill="none" stroke="${C.foilLo}" stroke-width="${r * 0.03}" opacity="0.5"/>
    <text y="${r * 0.3}" text-anchor="middle" font-family="Martel, serif"
          font-size="${r * 0.85}" font-weight="700" fill="${C.foilLo}" opacity="0.9">₹1</text>
  </g>`;
}

function shade(hex: string, amt: number): string {
  const v = parseInt(hex.slice(1), 16);
  const ch = [(v >> 16) & 255, (v >> 8) & 255, v & 255].map((c) =>
    Math.max(0, Math.min(255, Math.round(c + (amt < 0 ? c : 255 - c) * amt))),
  );
  return "#" + ch.map((c) => c.toString(16).padStart(2, "0")).join("");
}
