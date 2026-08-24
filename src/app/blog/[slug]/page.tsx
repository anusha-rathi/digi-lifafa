import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, formatDate, postBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
      <Link href="/blog" className="text-sm text-ink-faint hover:text-ink-soft">
        ← Blog
      </Link>

      <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
        <span className="text-marigold">{post.tag}</span>
        <span className="text-ink-faint">{formatDate(post.date)}</span>
      </div>
      <h1 className="mt-2 font-display text-4xl leading-[1.25] text-maroon">
        {post.title}
      </h1>

      <div className="prose mt-8">
        {post.body.map((b, i) => {
          if ("h" in b) return <h2 key={i}>{b.h}</h2>;
          if ("ul" in b)
            return (
              <ul key={i}>
                {b.ul.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            );
          return <p key={i}>{b.p}</p>;
        })}
      </div>

      <div className="mt-12 rounded-xl border border-ivory-edge bg-ivory-deep/50 p-6 text-center">
        <p className="font-display text-xl text-maroon">Make one yourself</p>
        <p className="mt-1.5 text-sm text-ink-soft">
          Free, no signup, about a minute.
        </p>
        <Link
          href="/make"
          className="mt-4 inline-block rounded-full bg-maroon px-7 py-3 font-semibold text-ivory transition hover:bg-maroon-deep"
        >
          Make a lifafa
        </Link>
      </div>
    </main>
  );
}
