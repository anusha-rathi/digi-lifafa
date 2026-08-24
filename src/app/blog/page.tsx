import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Festival shagun guides, how Digi Lifafa works, and why we built it.",
};

const TINT: Record<string, string> = {
  Festivals: "bg-marigold/12 text-marigold-deep",
  "How it works": "bg-peacock/12 text-peacock",
  "Why we built it": "bg-kumkum/10 text-kumkum",
};

export default function BlogIndex() {
  const [lead, ...rest] = POSTS;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">Blog</h1>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
        What to give and when, how this thing actually works, and why we wanted
        to build it in the first place.
      </p>

      {/* the lead piece gets the wide card */}
      <Link
        href={`/blog/${lead.slug}`}
        className="group mt-10 block overflow-hidden rounded-2xl border border-ivory-edge bg-white/70 transition hover:border-marigold"
      >
        <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center">
          <div className="flex-1">
            <span
              className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${TINT[lead.tag]}`}
            >
              {lead.tag}
            </span>
            <h2 className="mt-3 font-display text-3xl leading-snug text-ink group-hover:text-maroon">
              {lead.title}
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{lead.excerpt}</p>
            <p className="mt-4 text-xs text-ink-faint">{formatDate(lead.date)}</p>
          </div>
          <span className="shrink-0 rounded-full bg-maroon px-6 py-3 text-center font-semibold text-ivory">
            Read
          </span>
        </div>
      </Link>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group flex flex-col rounded-2xl border border-ivory-edge bg-white/70 p-6 transition hover:border-marigold"
          >
            <span
              className={`inline-block self-start rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${TINT[p.tag]}`}
            >
              {p.tag}
            </span>
            <h2 className="mt-3 font-display text-xl leading-snug text-ink group-hover:text-maroon">
              {p.title}
            </h2>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">{p.excerpt}</p>
            <p className="mt-4 text-xs text-ink-faint">{formatDate(p.date)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
