import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifafaReveal from "@/components/LifafaReveal";
import SharePanel from "@/components/SharePanel";
import { byOwnerToken } from "@/lib/db";
import { COPY } from "@/lib/design";
import { toEnvelope } from "@/lib/toEnvelope";
import PayPanel from "./PayPanel";

// C1 — the pay screen lives ONLY behind the owner token, never at /l/[slug].
// A pay screen reachable from the shared link is a phishing kit.
export const metadata: Metadata = { robots: { index: false, follow: false } };

// This page renders mutable state (payment_marked, utr) and must never be
// served from the Full Route Cache — a cached copy would keep showing "not
// paid yet" after the sender marked it. /l/[slug] already did this; this page,
// the one that actually changes, did not.
export const dynamic = "force-dynamic";

export default async function SenderPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const l = await byOwnerToken(token);
  if (!l || l.isBlocked) notFound();

  // No UPI ID means the sender chose "just the lifafa" — there is nothing to
  // pay, so no pay screen, no QR, straight to sharing.
  const vpa = l.payeeVpa;
  const t = COPY[l.lang];

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <p className="text-[13px] text-ink-faint">{t.sndPreview}</p>
      <h1 className="mt-1 font-display text-3xl text-maroon">
        {l.lang === "en" ? `${t.sndFor} ${l.receiverName}` : `${l.receiverName} ${t.sndFor}`}
      </h1>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
        {vpa === null ? t.sndSealedNoPay : t.sndSealedPay}
      </p>

      <div className="my-8 rounded-2xl border border-ivory-edge bg-ivory-deep/40 px-2 py-6">
        <LifafaReveal s={toEnvelope(l)} celebration={l.celebrationId} />
      </div>

      {vpa === null ? (
        <SharePanel slug={l.slug} receiverName={l.receiverName} lang={l.lang} />
      ) : (
        <PayPanel
          token={token}
          slug={l.slug}
          vpa={vpa}
          payeeName={l.receiverName}
          paise={l.amountPaise}
          senderName={l.senderName}
          lang={l.lang}
          initialMarked={l.paymentMarked}
          initialUtr={l.utr}
        />
      )}

    </main>
  );
}
