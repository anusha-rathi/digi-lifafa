import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIR = join(HERE, "..", "fonts");

/* The faces, inlined as base64.
 *
 * Playwright renders through page.setContent(), which has no base URL, so a
 * relative ./font.woff2 would resolve against about:blank and silently fall
 * back to a system face. Devanagari failing back to a Latin font is exactly
 * the failure SOCIAL.md section 2 says to prove does not happen, and it is
 * invisible in code. Base64 removes the possibility. */
export function fontCss(): string {
  const css = readFileSync(join(DIR, "fonts.css"), "utf8");
  const files = new Map<string, string>();
  for (const f of readdirSync(DIR).filter((f) => f.endsWith(".woff2"))) {
    files.set(f, readFileSync(join(DIR, f)).toString("base64"));
  }
  return css.replace(/url\(\.\/([^)]+\.woff2)\)/g, (_m, name: string) => {
    const b64 = files.get(name);
    if (!b64) throw new Error(`font file missing: ${name}`);
    return `url(data:font/woff2;base64,${b64})`;
  });
}
