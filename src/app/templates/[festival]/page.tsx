import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TemplateCard from "@/components/TemplateCard";
import { occasionById } from "@/lib/design";
import { TEMPLATE_FESTIVALS, templatesFor } from "@/lib/templates";

export function generateStaticParams() {
  return TEMPLATE_FESTIVALS.map((festival) => ({ festival }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ festival: string }>;
}): Promise<Metadata> {
  const { festival } = await params;
  const occ = occasionById(festival);
  if (!occ) return {};
  return {
    title: `${occ.en} lifafa`,
    description: `Ready-made shagun lifafas for ${occ.en}, with the paper, the mithai and the words already chosen. Free, no signup.`,
  };
}

export default async function FestivalTemplates({
  params,
}: {
  params: Promise<{ festival: string }>;
}) {
  const { festival } = await params;
  const list = templatesFor(festival);
  const occ = occasionById(festival);
  if (!list.length || !occ) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-14">
      <Link href="/templates" className="text-sm text-ink-faint hover:text-ink-soft">
        ← All lifafas
      </Link>
      <h1 className="mt-5 font-display text-4xl text-maroon">
        {occ.hi} <span className="text-2xl text-ink-faint">{occ.en}</span>
      </h1>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
        {list.length} ready to send. Everything is changeable once you open it.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((t) => (
          <TemplateCard key={t.id} t={t} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/make"
          className="inline-block rounded-full border border-ivory-edge bg-white/70 px-7 py-3 text-ink-soft transition hover:border-maroon hover:text-ink"
        >
          Or start from scratch
        </Link>
      </div>
    </main>
  );
}
