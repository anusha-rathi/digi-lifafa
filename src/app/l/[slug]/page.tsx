import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifafaReveal from "@/components/LifafaReveal";
import PassItOn from "@/components/PassItOn";
import ReportLink from "@/components/ReportLink";
import { bySlug, markOpened } from "@/lib/db";
import { COPY } from "@/lib/design";
import { rupees } from "@/lib/limits";
import { toEnvelope } from "@/lib/toEnvelope";

/* SPEC S9 / S10 — individual lifafas must never be indexed, and the link
   preview must never carry personal data.
   This link is pasted into WhatsApp. The preview is fetched by WhatsApp's
   servers, rendered to everyone in the chat, and cached by services we don't
   control — so it must not contain the receiver's name, the sender's name, or
   the amount. The opengraph-image.png in this folder is the deliberately
   generic one; the title and description below are pinned for the same reason,
   so nothing personal can drift into them later. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "A lifafa for you",
  openGraph: {
    title: "किसी ने आपके लिए लिफ़ाफ़ा भेजा है",
    description: "Someone has sent you a lifafa.",
  },
};
export const dynamic = "force-dynamic";

export default async function ReceiverPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = await bySlug(slug);
  if (!l) notFound();

  const t = COPY[l.lang];

  // SPEC S8 — a blocked lifafa shows a neutral notice, never an error.
  if (l.isBlocked) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-5 py-20 text-center">
        <p className="font-display text-2xl text-maroon">{COPY[l.lang].blocked}</p>
        <p className="text-sm leading-relaxed text-ink-soft">{COPY[l.lang].blockedNote}</p>
      </main>
    );
  }

  await markOpened(slug);

  const withLove =
    l.lang === "hi" ? "प्यार के साथ" : l.lang === "hn" ? "pyaar ke saath" : "with love";

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <div className="rounded-2xl border border-ivory-edge bg-ivory-deep/40 px-2 py-6">
        <LifafaReveal s={toEnvelope(l)} celebration={l.celebrationId} />
      </div>

      {/* who it's from, given the weight it deserves */}
      <p className="mt-8 text-center font-display text-3xl leading-snug text-maroon">
        {withLove},<br />
        {l.senderName}
      </p>

      {l.payeeVpa ? (
        <div className="mt-8 space-y-3 rounded-xl border border-ivory-edge bg-white/70 p-5 text-center">
          <p className="font-display text-4xl text-maroon">₹{rupees(l.amountPaise)}</p>

          <p className="text-[14px] leading-relaxed text-ink-soft">{t.recvIntro}</p>

          {/* C5, never the word "verified". We cannot check a UTR against
              anything, so we say exactly what we know: the sender wrote it down. */}
          {l.paymentMarked === "paid" && l.utr ? (
            <p className="border-t border-ivory-edge pt-3 text-[12px] leading-relaxed text-ink-faint">
              {l.senderName} {t.recvNoted}{" "}
              <span className="font-mono text-ink-soft">{l.utr}</span>. {t.recvUnchecked}
            </p>
          ) : null}
        </div>
      ) : null}

      <PassItOn lang={l.lang} />
      <ReportLink slug={slug} lang={l.lang} />
    </main>
  );
}
