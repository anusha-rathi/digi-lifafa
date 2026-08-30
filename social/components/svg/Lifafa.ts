import { C, STROKE } from "../../brand.ts";

/* The envelope.
 *
 * Drawn as ONE silhouette, not a lid on a box. The first two attempts built
 * the flap and the pocket as separate shapes in different colours with a hard
 * seam between them, and both rendered as wooden crates. What makes it read as
 * a lifafa is a single outline around the whole thing, the scalloped top edge
 * belonging to that outline, and the fold shown as a line drawn across the
 * face rather than as a join between two objects.
 *
 * Stage 2 adds the open and mid-flight variants and the paper patterns. */

export type LifafaOpts = {
  w?: number;
  body?: string;
  /** Flap tint. Keep it close to `body`: a big jump splits the shape in two. */
  flap?: string;
  line?: string;
  outline?: string;
  rotate?: number;
  seal?: boolean;
  x?: number;
  y?: number;
};

// 200 x 108, roughly the 2:1 a real shagun envelope sits at.
const TOP = `M0,38 A34,34 0 0 1 66.67,38 A34,34 0 0 1 133.33,38 A34,34 0 0 1 200,38`;
const SILHOUETTE = `${TOP} L200,100 Q200,108 192,108 L8,108 Q0,108 0,100 Z`;
const FLAP = `${TOP} L200,60 Q100,74 0,60 Z`;

export function Lifafa({
  w = 200,
  body = C.rani,
  flap,
  line = C.foilHi,
  outline = C.maroonDeep,
  rotate = 0,
  seal = true,
  x = 0,
  y = 0,
}: LifafaOpts = {}): string {
  const k = w / 200;
  const s = STROKE.mid / k; // constant outline weight after scaling
  const flapFill = flap ?? shade(body, -0.13);

  return `<g transform="translate(${x} ${y}) rotate(${rotate}) scale(${k})">
    <path d="${SILHOUETTE}" fill="${body}" stroke="${outline}"
          stroke-width="${s}" stroke-linejoin="round"/>
    <path d="${FLAP}" fill="${flapFill}" stroke="${outline}"
          stroke-width="${s * 0.85}" stroke-linejoin="round"/>
    <path d="M12,72 L188,72 M12,94 L188,94" stroke="${line}"
          stroke-width="${s * 0.45}" opacity="0.5"/>
    ${seal ? `<circle cx="100" cy="67" r="12" fill="${line}" stroke="${outline}" stroke-width="${s * 0.6}"/>` : ""}
  </g>`;
}

/** Darken or lighten a hex by a fraction. Keeps the flap tint tied to body. */
function shade(hex: string, amt: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.max(0, Math.min(255, Math.round(v + (amt < 0 ? v : 255 - v) * amt))),
  );
  return "#" + ch.map((v) => v.toString(16).padStart(2, "0")).join("");
}

/** A ₹1 coin, flat and face-on. */
export function Coin({
  r = 26,
  x = 0,
  y = 0,
  rotate = 0,
  face = C.foilHi,
  edge = C.foilLo,
  ink = C.maroonDeep,
}: { r?: number; x?: number; y?: number; rotate?: number; face?: string; edge?: string; ink?: string } = {}): string {
  return `<g transform="translate(${x} ${y}) rotate(${rotate})">
    <circle r="${r}" fill="${face}" stroke="${ink}" stroke-width="${STROKE.thin}"/>
    <circle r="${r * 0.78}" fill="none" stroke="${edge}" stroke-width="${STROKE.thin * 0.55}"/>
    <text y="${r * 0.32}" text-anchor="middle" font-family="Martel, serif"
          font-size="${r * 0.92}" font-weight="700" fill="${ink}">₹1</text>
  </g>`;
}
