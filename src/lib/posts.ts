/* Blog content. Plain data, no MDX, no CMS — each post is a title plus an
   array of blocks. Adding a post means adding an entry here. */

import type { FestivalArtKey } from "@/components/FestivalArt";
import { GENERATED_POSTS } from "./posts.generated.ts";

export type Block =
  | { h: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  | { table: { head: string[]; rows: string[][] } }
  | { faq: { q: string; a: string }[] }
  | { photo: string; caption?: string }
  | { festivalArt: FestivalArtKey; caption?: string }
  | { related: { href: string; label: string } };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: "Festivals" | "How it works" | "Why we built it";
  /** Drawn header, see components/FestivalArt.tsx. Never a stock photo. */
  art?: FestivalArtKey;
  /** Shown under the title. Dates get checked and re-checked each year. */
  updated?: string;
  body: Block[];
};

export const POSTS: Post[] = GENERATED_POSTS;

export const postBySlug = (slug: string) =>
  POSTS.find((p) => p.slug === slug) ?? null;

export type Heading = { id: string; text: string; level: 2 | 3; at: number };

/* Heading ids are permalinks. Somebody will paste one into WhatsApp, so
   renaming a heading breaks a link that is out in the world, which is what
   posts.test.ts is there to make loud.

   \p{M} is not optional. Devanagari matras and the virama are Mark, not
   Letter, so a class of \p{L} alone turns क्या into कय. */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "section";

/** Every heading in a post, with the block index it came from so the rendered
 *  id and the contents entry cannot drift apart if blocks get reordered. */
export function headings(post: Post): Heading[] {
  const seen = new Map<string, number>();
  return post.body.flatMap((b, at) => {
    const text = "h" in b ? b.h : "h3" in b ? b.h3 : null;
    if (text === null) return [];
    const base = slugify(text);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return [
      {
        id: n === 1 ? base : `${base}-${n}`,
        text,
        level: ("h" in b ? 2 : 3) as 2 | 3,
        at,
      },
    ];
  });
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
