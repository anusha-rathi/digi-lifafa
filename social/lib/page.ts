import { fontCss } from "./fonts.ts";
import { paperCss, VIGNETTE } from "./texture.ts";
import { C, F, SAFE } from "../brand.ts";

export type Canvas = { w: number; h: number };

/** Every template returns one of these. */
export type Template = {
  id: string;
  category: string;
  canvas: Canvas;
  /** Inner markup. The shell supplies size, fonts, paper and the safe area. */
  render: () => string;
};

/* The shell every asset is built inside.
 *
 * `showSafe` draws the 80px margin as a guide. It is off for real renders and
 * on for the preview page, because a template that quietly puts a descender
 * two pixels outside the safe area is not something you catch by reading it. */
export function html(t: Template, opts: { showSafe?: boolean } = {}): string {
  const { w, h } = t.canvas;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${fontCss()}
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:${w}px; height:${h}px; }
body {
  ${paperCss()}
  font-family: ${F.body};
  color: ${C.ink};
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
.stage { position:absolute; inset:0; }
.safe  { position:absolute; inset:${SAFE}px; }
.vignette { ${VIGNETTE} }
.guide {
  position:absolute; inset:${SAFE}px; pointer-events:none;
  outline:2px dashed rgba(196,43,28,.55); outline-offset:0;
}
</style></head><body>
${t.render()}
<div class="vignette"></div>
${opts.showSafe ? '<div class="guide"></div>' : ""}
</body></html>`;
}
