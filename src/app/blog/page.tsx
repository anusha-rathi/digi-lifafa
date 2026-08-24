import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Festival shagun guides, how Digi Lifafa works, and why we built it.",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">Blog</h1>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">
        What to give and when, how this thing actually works, and why we wanted
        to build it in the first place.
      </p>

      <div className="mt-10 divide-y divide-ivory-edge">
        {POSTS.map((p) => (
          <article key={p.slug} className="py-7">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
              <span className="text-marigold">{p.tag}</span>
              <span className="text-ink-faint">{formatDate(p.date)}</span>
            </div>
            <h2 className="mt-2 font-display text-2xl leading-snug">
              <Link href={`/blog/${p.slug}`} className="text-ink hover:text-maroon">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{p.excerpt}</p>
            <Link
              href={`/blog/${p.slug}`}
              className="mt-3 inline-block text-sm text-peacock underline underline-offset-2"
            >
              Read on
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
