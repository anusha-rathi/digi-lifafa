import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LifafaReveal from "@/components/LifafaReveal";
import { bySlug, markOpened } from "@/lib/db";
import { rupees } from "@/lib/limits";
import { toEnvelope } from "@/lib/toEnvelope";

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
      <div className="rounded-2xl bg-[radial-gradient(120%_80%_at_50%_-10%,#3a1a1c_0%,transparent_60%),#140c0b] px-2 py-6">
        <LifafaReveal s={toEnvelope(l)} />
      </div>

      <p className="mt-6 text-center text-sm text-ink-soft">
        From {l.senderName}
      </p>
      {l.message.trim() && (
        <p className="mt-3 whitespace-pre-wrap rounded-xl border border-ivory-edge bg-white/70 p-5 text-center leading-relaxed text-ink">
          {l.message}
        </p>
      )}

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
