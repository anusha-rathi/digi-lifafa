import type { Metadata } from "next";
import Link from "next/link";
import TemplateCard from "@/components/TemplateCard";
import { occasionById } from "@/lib/design";
import { TEMPLATES, TEMPLATE_FESTIVALS, templatesFor } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Ready-made lifafas",
  description:
    "Forty-odd lifafas already put together for Diwali, Rakhi, Ganesh Chaturthi, Onam, Teej, weddings and more. Pick one and change whatever you like.",
};

export default function TemplatesIndex() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">Ready-made lifafas</h1>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
        {TEMPLATES.length} envelopes already put together, with the paper, the
        mithai and the words chosen. Pick one and change whatever you like. The
        nek is a suggestion, never a requirement.
      </p>

      {TEMPLATE_FESTIVALS.map((f) => {
        const occ = occasionById(f);
        return (
          <section key={f} className="mt-12">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl text-maroon">
                {occ ? occ.hi : f}{" "}
                <span className="text-[15px] text-ink-faint">{occ ? occ.en : ""}</span>
              </h2>
              <Link
                href={`/templates/${f}`}
                className="text-sm text-peacock underline underline-offset-2"
              >
                All {templatesFor(f).length}
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {templatesFor(f).slice(0, 4).map((t) => (
                <TemplateCard key={t.id} t={t} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
