import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Lifafa from "@/components/Lifafa";
import { byOwnerToken } from "@/lib/db";
import type { Coin, EnvelopeColour, EnvelopeStyle, Mithai, Occasion } from "@/lib/options";
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

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Your lifafa</p>
      <h1 className="mt-1 font-display text-3xl text-maroon">
        For {l.receiverName}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        The paper is sealed. The money is the part only you can do — it goes
        from your bank to theirs, and never through us.
      </p>

      <div className="my-8 rounded-2xl bg-night px-5 py-8">
        <Lifafa
          data={{
            style: l.envelopeStyle as EnvelopeStyle,
            colour: l.envelopeColour as EnvelopeColour,
            mithai: l.mithai as Mithai | null,
            coin: l.coin as Coin | null,
            occasion: l.occasion as Occasion | null,
            customHeading: l.customHeading,
            receiverName: l.receiverName,
            senderName: l.senderName,
            message: l.message,
            amountPaise: l.amountPaise,
          }}
          showAmount
        />
      </div>

      <PayPanel
        token={token}
        slug={l.slug}
        vpa={l.payeeVpa}
        payeeName={l.receiverName}
        paise={l.amountPaise}
        senderName={l.senderName}
        initialMarked={l.paymentMarked}
        initialUtr={l.utr}
      />
    </main>
  );
}
