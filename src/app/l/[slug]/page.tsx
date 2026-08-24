import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Lifafa from "@/components/Lifafa";
import { bySlug, markOpened } from "@/lib/db";
import {
  rupees,
  type Coin,
  type EnvelopeColour,
  type EnvelopeStyle,
  type Mithai,
  type Occasion,
} from "@/lib/options";

// SPEC S9 — individual lifafas must never be indexed.
export const metadata: Metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function ReceiverPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = bySlug(slug);
  if (!l) notFound();

  // SPEC S8 — a blocked lifafa shows a neutral notice, never an error.
  if (l.isBlocked) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-5 py-20 text-center">
        <p className="font-display text-2xl text-maroon">This lifafa isn&apos;t available.</p>
        <p className="text-sm leading-relaxed text-ink-soft">
          It was taken down. If someone sent you this expecting money, please
          don&apos;t pay anyone based on it.
        </p>
      </main>
    );
  }

  markOpened(slug);

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-10">
      <div className="rounded-2xl bg-night px-5 py-10">
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

      <div className="mt-8 space-y-4 rounded-xl border border-ivory-edge bg-white/70 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">The nek</p>
          <p className="font-display text-3xl text-maroon">₹{rupees(l.amountPaise)}</p>
        </div>

        {/* C5 — never the word "verified". We cannot check a UTR against
            anything, so we say exactly what we know: the sender wrote it down. */}
        {l.paymentMarked === "paid" && l.utr ? (
          <p className="text-[13px] leading-relaxed text-ink-soft">
            {l.senderName} noted the reference{" "}
            <span className="font-mono text-ink">{l.utr}</span> when sending
            this. We haven&apos;t checked it — we have no way to.
          </p>
        ) : null}

        <p className="border-t border-ivory-edge pt-4 text-[13px] leading-relaxed text-ink-soft">
          This money was sent directly to your UPI — check your bank messages.
          It never passed through this site.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/make"
          className="inline-block rounded-full bg-maroon px-7 py-3 font-semibold text-ivory transition hover:bg-maroon-deep"
        >
          Make one back
        </Link>
      </div>
    </main>
  );
}
