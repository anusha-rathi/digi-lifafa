/* The scalloped flap silhouette, as a CSS mask.
 *
 * clip-path: path() takes absolute pixel coordinates and does not scale with
 * the element, so a card at any width other than the one the path was drawn
 * for gets a flap that stops short. An SVG mask with preserveAspectRatio="none"
 * stretches to whatever box it is given, which is what a responsive grid needs.
 */
const SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 184 100' preserveAspectRatio='none'>" +
  "<path d='M0 100 L0 34 C0 15 10 4 25 4 C38 4 46 12 52 22 C60 8 76 0 92 0 " +
  "C108 0 124 8 132 22 C138 12 146 4 159 4 C174 4 184 15 184 34 L184 100 Z' fill='%23000'/></svg>";

const MASK = `url("data:image/svg+xml,${SVG.replace(/#/g, "%23").replace(/"/g, "'")}")`;

export const flapMask = {
  maskImage: MASK,
  WebkitMaskImage: MASK,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
} as const;
