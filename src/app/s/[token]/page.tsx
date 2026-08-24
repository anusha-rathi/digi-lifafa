import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LifafaReveal from "@/components/LifafaReveal";
import SharePanel from "@/components/SharePanel";
import { byOwnerToken } from "@/lib/db";
import { toEnvelope } from "@/lib/toEnvelope";
import PayPanel from "./PayPanel";

// C1 — the pay screen lives ONLY behind the owner token, never at /l/[slug].
// A pay screen reachable from the shared link is a phishing kit.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function SenderPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const l = byOwnerToken(token);
  if (!l || l.isBlocked) notFound();

  // No UPI ID means the sender chose "just the lifafa" — there is nothing to
  // pay, so no pay screen, no QR, straight to sharing.
  const vpa = l.payeeVpa;

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Your lifafa</p>
      <h1 className="mt-1 font-display text-3xl text-maroon">For {l.receiverName}</h1>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {vpa === null
          ? "The paper is sealed. No nek attached — send it whenever you're ready."
          : "The paper is sealed. The money is the part only you can do — it goes from your bank to theirs, and never through us."}
      </p>

      <div className="my-8 rounded-2xl border border-ivory-edge bg-ivory-deep/40 px-2 py-6">
        <LifafaReveal s={toEnvelope(l)} startOpen />
      </div>

      {vpa === null ? (
        <SharePanel slug={l.slug} receiverName={l.receiverName} />
      ) : (
        <PayPanel
          token={token}
          slug={l.slug}
          vpa={vpa}
          payeeName={l.receiverName}
          paise={l.amountPaise}
          senderName={l.senderName}
          initialMarked={l.paymentMarked}
          initialUtr={l.utr}
        />
      )}
    </main>
  );
}
