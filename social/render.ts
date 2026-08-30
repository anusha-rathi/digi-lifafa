import { chromium } from "playwright";
import sharp from "sharp";
import { mkdirSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { html, type Template } from "./lib/page.ts";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "out");

/* Render at 2x and let the browser downscale on the way out.
 *
 * deviceScaleFactor 2 draws the page at 2160px and Playwright writes the PNG
 * at that size, so the file is downscaled afterwards. Supersampling is what
 * makes 30px type at 1080 come out crisp instead of soft. */
const SCALE = 2;

async function collect(): Promise<Template[]> {
  const dir = join(HERE, "templates");
  const found: Template[] = [];
  for (const cat of readdirSync(dir)) {
    const catDir = join(dir, cat);
    for (const f of readdirSync(catDir).filter((f) => f.endsWith(".ts"))) {
      const mod = await import(pathToFileURL(join(catDir, f)).href);
      // Shared modules in a category folder have no default export. They are
      // library, not artboards, so skip rather than crash on mod.default.id.
      if (mod.default?.id) found.push(mod.default as Template);
    }
  }
  return found.sort((a, b) => a.id.localeCompare(b.id));
}

async function main() {
  const only = process.argv[2];
  let templates = await collect();
  if (only) templates = templates.filter((t) => t.id.includes(only));
  if (!templates.length) throw new Error("no templates matched");

  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const t of templates) {
    const page = await browser.newPage({
      viewport: { width: t.canvas.w, height: t.canvas.h },
      deviceScaleFactor: SCALE,
    });
    await page.setContent(html(t), { waitUntil: "load" });
    // The faces are inlined, so this resolves immediately, but a render that
    // screenshots before the browser has parsed them ships Latin fallback.
    await page.evaluate(() => document.fonts.ready);
    // Screenshot comes out at SCALE x. Downscaling it back to the real
    // Instagram size is the supersampling step: it is what makes 30px type
    // crisp instead of soft, and it is why the render is not done at 1x.
    const shot = await page.screenshot({ type: "png" });
    await page.close();
    const file = join(OUT, `${t.id}.png`);
    await sharp(shot)
      .resize(t.canvas.w, t.canvas.h, { kernel: "lanczos3" })
      .png({ compressionLevel: 9 })
      .toFile(file);
    console.log(`${t.id}  drawn ${t.canvas.w * SCALE}x${t.canvas.h * SCALE}  ->  out/${t.id}.png @ ${t.canvas.w}x${t.canvas.h}`);
  }

  await browser.close();
  writePreview(templates);
}

/* One scrollable page showing everything at once. SOCIAL.md section 7 calls
   this the part that matters most: 68 images can only be judged as a set. */
function writePreview(templates: Template[]) {
  const cards = templates
    .map(
      (t) => `<figure>
      <img src="../out/${t.id}.png" width="${t.canvas.w / 3}" loading="lazy">
      <figcaption>${t.id}<span>${t.category} · ${t.canvas.w}×${t.canvas.h}</span></figcaption>
    </figure>`,
    )
    .join("\n");

  const page = `<!doctype html><meta charset="utf-8"><title>Digi Lifafa social</title>
<style>
  body { background:#1a1a1a; color:#ddd; font:14px ui-sans-serif,system-ui; margin:0; padding:32px; }
  h1 { font-weight:600; font-size:18px; margin:0 0 24px; }
  .grid { display:flex; flex-wrap:wrap; gap:28px; align-items:flex-start; }
  figure { margin:0; }
  img { display:block; border-radius:4px; box-shadow:0 8px 24px rgba(0,0,0,.5); }
  figcaption { margin-top:8px; display:flex; flex-direction:column; gap:2px; }
  figcaption span { color:#888; font-size:12px; }
</style>
<h1>Digi Lifafa social · ${templates.length} rendered</h1>
<div class="grid">${cards}</div>`;

  mkdirSync(join(HERE, "preview"), { recursive: true });
  writeFileSync(join(HERE, "preview", "index.html"), page);
  console.log(`\npreview: social/preview/index.html`);
}

if (!existsSync(join(HERE, "fonts", "fonts.css"))) {
  throw new Error("fonts/fonts.css missing, run the font fetch first");
}
await main();
