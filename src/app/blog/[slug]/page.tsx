import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FESTIVAL_ART } from "@/components/FestivalArt";
import { POSTS, formatDate, headings, postBySlug } from "@/lib/posts";
import Contents from "./Contents";
import { licenceUrl, photo } from "@/lib/photos";

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
  const heads = headings(post);
  const idAt = new Map(heads.map((h) => [h.at, h.id]));
  const faqs = post.body.flatMap((b) => ("faq" in b ? b.faq : []));

  return (
    <div className="flex-1 xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,42rem)_minmax(0,1fr)]">
      <main className="mx-auto w-full max-w-2xl px-5 py-14 xl:col-start-2 xl:mx-0">
        <Link
          href="/blog"
          className="text-sm text-ink-faint hover:text-ink-soft"
        >
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

        <div id="article" className="prose mt-8">
          {post.body.map((b, i) => {
            if ("h" in b)
              return (
                <h2 key={i} id={idAt.get(i)}>
                  {b.h}
                </h2>
              );
            if ("h3" in b)
              return (
                <h3 key={i} id={idAt.get(i)}>
                  {b.h3}
                </h3>
              );
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
            if ("photo" in b) {
              const ph = photo(b.photo);
              if (!ph) return null;
              return (
                <figure key={i} className="my-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ph.src}
                    alt={ph.alt}
                    loading="lazy"
                    className="w-full rounded-xl border border-ivory-edge"
                  />
                  {/* The credit is not decoration. CC BY and CC BY-SA both
                    require the photographer and the licence to be named. */}
                  <figcaption className="mt-2 text-[13px] leading-relaxed text-ink-faint">
                    {b.caption ? (
                      <span className="text-ink-soft">{b.caption} </span>
                    ) : null}
                    Photo by{" "}
                    <a href={ph.page} target="_blank" rel="noopener noreferrer">
                      {ph.by}
                    </a>
                    , via Wikimedia Commons,{" "}
                    <a
                      href={licenceUrl(ph.licence)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ph.licence}
                    </a>
                    .
                  </figcaption>
                </figure>
              );
            }
            if ("faq" in b)
              return (
                <div
                  key={i}
                  className="my-7 divide-y divide-ivory-edge border-y border-ivory-edge"
                >
                  {b.faq.map((f) => (
                    <details key={f.q} className="group py-3">
                      <summary className="flex cursor-pointer list-none gap-2 font-semibold text-ink marker:hidden">
                        <span className="w-4 shrink-0 text-maroon transition group-open:rotate-90">
                          ›
                        </span>
                        {f.q}
                      </summary>
                      <p className="mt-2 pl-6">{f.a}</p>
                    </details>
                  ))}
                </div>
              );
            if ("table" in b)
              return (
                <div key={i} className="my-6 overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-ivory-edge">
                        {b.table.head.map((h, j) => (
                          <th
                            key={j}
                            className="py-2.5 pr-4 font-semibold text-ink"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.table.rows.map((row, j) => (
                        <tr
                          key={j}
                          className="border-b border-ivory-edge/60 align-top"
                        >
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

        {faqs.length > 0 && (
          /* One FAQPage per page, aggregating every faq block: two on a URL is
           invalid. React 19 emits a single string child of <script> raw and
           escapes only "</script", so this needs no dangerouslySetInnerHTML
           and CLAUDE.md rule 6 holds. */
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            })}
          </script>
        )}
      </main>

      {/* One mount, both surfaces: the rail is hidden below xl by its own
          class, and the mobile bar leaves through a portal regardless. */}
      {heads.length >= 3 && (
        <aside className="xl:col-start-3 xl:w-60 xl:py-14 xl:pl-8 xl:pr-5">
          <Contents items={heads} />
        </aside>
      )}
    </div>
  );
}
