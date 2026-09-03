import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReceiverReveal from "@/components/ReceiverReveal";
import ReportLink from "@/components/ReportLink";
import { bySlug, markOpened } from "@/lib/db";
import { COPY } from "@/lib/design";
import { toEnvelope } from "@/lib/toEnvelope";

/* SPEC S9: individual lifafas must never be indexed.
 *
 * The preview card is deliberately anonymous. WhatsApp and iMessage fetch it
 * server-side, and a forwarded link would show whatever is in here to whoever
 * it was forwarded to, so neither name goes in it. What it says instead is the
 * one thing the receiver needs, rather than the pitch aimed at senders. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "A lifafa for you",
  description: "Someone has sent you a shagun ka lifafa. Tap to open it.",
  openGraph: {
    title: "A lifafa for you",
    description: "Someone has sent you a shagun ka lifafa. Tap to open it.",
    type: "website",
  },
  // Without this the card renders small and text-only in most clients.
  twitter: { card: "summary_large_image" },
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
        <p className="font-display text-2xl text-maroon">
          {COPY[l.lang].blocked}
        </p>
        <p className="text-sm leading-relaxed text-ink-soft">
          {COPY[l.lang].blockedNote}
        </p>
      </main>
    );
  }

  await markOpened(slug);

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <ReceiverReveal
        s={toEnvelope(l)}
        senderName={l.senderName}
        celebration={l.celebrationId}
        amountPaise={l.amountPaise}
        showAmount={Boolean(l.payeeVpa)}
        noted={l.paymentMarked === "paid" ? l.utr : null}
        recvIntro={t.recvIntro}
        recvNoted={t.recvNoted}
        recvUnchecked={t.recvUnchecked}
      />
      <ReportLink slug={slug} lang={l.lang} />
    </main>
  );
}
