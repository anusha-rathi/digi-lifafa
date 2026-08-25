import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FESTIVAL_ART } from "@/components/FestivalArt";
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

  const Art = post.art ? FESTIVAL_ART[post.art] : null;

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
      {post.updated ? (
        <p className="mt-2 text-[13px] text-ink-faint">
          Dates checked {post.updated}
        </p>
      ) : null}

      {Art ? (
        <div className="mt-7 overflow-hidden rounded-2xl border border-ivory-edge">
          <Art />
        </div>
      ) : null}

      <div className="prose mt-8">
        {post.body.map((b, i) => {
          if ("h" in b) return <h2 key={i}>{b.h}</h2>;
          if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
          if ("ul" in b)
            return (
              <ul key={i}>
                {b.ul.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            );
          if ("note" in b)
            return (
              <p
                key={i}
                className="rounded-xl border-l-2 border-marigold bg-marigold/8 px-4 py-3 text-[14px]"
              >
                {b.note}
              </p>
            );
          if ("table" in b)
            return (
              <div key={i} className="my-6 overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-ivory-edge">
                      {b.table.head.map((h, j) => (
                        <th key={j} className="py-2.5 pr-4 font-semibold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.table.rows.map((row, j) => (
                      <tr key={j} className="border-b border-ivory-edge/60 align-top">
                        {row.map((cell, k) => (
                          <td key={k} className="py-2.5 pr-4 text-ink-soft">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
