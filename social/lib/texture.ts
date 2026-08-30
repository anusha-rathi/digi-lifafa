import { C } from "../brand.ts";

/* Paper.
 *
 * SOCIAL.md section 4 calls the grain the one detail that separates this from
 * generic flat design, so it is three layers and not one: a fibre speckle from
 * fractal noise, the jaali cross-hatch the site already uses, and a vignette
 * so the sheet has an edge. All of it is CSS and SVG filters, no image files. */
export const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'>
  <filter id='g'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/>
    <feColorMatrix type='saturate' values='0'/>
  </filter>
  <rect width='260' height='260' filter='url(#g)' opacity='0.42'/>
</svg>`;

const uri = (svg: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}")`;

export function paperCss(base: string = C.ivory, jaali = "rgba(184,145,47,.10)") {
  return `
    background-color: ${base};
    background-image:
      ${uri(GRAIN_SVG)},
      repeating-linear-gradient(45deg, ${jaali} 0 1.5px, transparent 1.5px 30px),
      repeating-linear-gradient(-45deg, ${jaali} 0 1.5px, transparent 1.5px 30px);
    background-size: 260px 260px, auto, auto;
    background-blend-mode: multiply, normal, normal;
  `;
}

/** Sits above everything and takes the flatness off the corners. */
export const VIGNETTE = `
  position:absolute; inset:0; pointer-events:none;
  background: radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(74,18,28,.14) 100%);
`;
