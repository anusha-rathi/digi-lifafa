/* Anti-slop gate for the blog, adapted from bkl3's scripts/slop-check.ts.
   Run: node scripts/slop-check.mjs
   Fails the build if shipped prose reads like it was generated. */
import { readFileSync } from "node:fs";

const BANNED = [
  [/in today'?s (fast-paced|competitive|digital|modern)/i, "filler opener"],
  [/it'?s important to note/i, "say the thing"],
  [/let'?s (dive in|explore|take a look)/i, "filler"],
  [/game.?chang(er|ing)/i, "marketing"],
  [/revolutioni[sz]e/i, "marketing"],
  [/\bunlock\b[^.]*\bpotential\b/i, "marketing"],
  [/whether you'?re a .{3,40} or a/i, "coverage anxiety"],
  [/not only .{3,40} but also/i, "banned construction"],
  [/\bseamless(ly)?\b/i, "marketing"],
  [/\bleverage\b/i, "jargon"],
  [/\bcutting.edge\b/i, "marketing"],
  [/\brobust\b/i, "vague"],
  [/at the end of the day/i, "filler"],
  [/when it comes to/i, "filler"],
  [/\bdelve\b/i, "tell"],
  [/\bmyriad\b/i, "tell"],
  [/\btestament to\b/i, "tell"],
  [/\bnavigate the (complex|landscape)/i, "tell"],
  [/\bever.(evolving|changing)\b/i, "tell"],
  [/\bharness the power\b/i, "marketing"],
  [/\bvibrant tapestry\b/i, "tell"],
  [/\brich cultural heritage\b/i, "tell"],
  [/\bnestled\b/i, "tell"],
  [/\bplays a (vital|crucial|key) role\b/i, "tell"],
  [/\bstands as a\b/i, "tell"],
  // the house rules
  [/—/, "em dash"],
  [/\bis(n'?t| not) (just )?about .{3,40}[,;] it'?s about\b/i, "banned construction"],
  [/\bnot just .{3,40}[,;] but\b/i, "banned construction"],
];

const src = readFileSync("src/lib/posts.ts", "utf8");

// Pull the prose out: every "..." string that reads like a sentence.
const strings = [...src.matchAll(/"((?:[^"\\]|\\.){40,})"/g)].map((m) => m[1]);

let fails = 0;
const seen = new Set();
for (const s of strings) {
  for (const [re, why] of BANNED) {
    const hit = s.match(re);
    if (!hit) continue;
    const key = `${why}:${hit[0]}`;
    if (seen.has(key)) continue;
    seen.add(key);
    fails++;
    const at = Math.max(0, s.indexOf(hit[0]) - 40);
    console.log(`  ${why.padEnd(20)} "${hit[0]}"`);
    console.log(`  ${" ".repeat(20)} ...${s.slice(at, at + 110)}...`);
  }
}

// Length check: a post that cannot answer its own title in depth will not rank.
const posts = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const words = {};
for (const slug of posts) {
  const start = src.indexOf(`slug: "${slug}"`);
  const end = src.indexOf('slug: "', start + 10);
  const chunk = src.slice(start, end === -1 ? src.length : end);
  const prose = [...chunk.matchAll(/"((?:[^"\\]|\\.){30,})"/g)].map((m) => m[1]).join(" ");
  words[slug] = prose.split(/\s+/).filter(Boolean).length;
}

console.log("\nword counts");
for (const [slug, n] of Object.entries(words)) {
  const flag = n < 700 ? "  thin" : "";
  console.log(`  ${String(n).padStart(5)}  ${slug}${flag}`);
}

console.log(
  fails === 0 ? "\nslop check: clean" : `\nslop check: ${fails} problem(s)`,
);
process.exit(fails === 0 ? 0 : 1);
