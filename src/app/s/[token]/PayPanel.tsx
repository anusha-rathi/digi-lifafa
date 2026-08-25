"use client";

import { useState } from "react";
import SharePanel from "@/components/SharePanel";
import UpiPay from "@/components/UpiPay";

type Marked = "unknown" | "paid" | "skipped";

export default function PayPanel({
  token,
  slug,
  vpa,
  payeeName,
  paise,
  senderName,
  initialMarked,
  initialUtr,
  lang = "en",
}: {
  token: string;
  slug: string;
  vpa: string;
  payeeName: string;
  paise: number;
  senderName: string;
  initialMarked: Marked;
  initialUtr: string | null;
  lang?: "hi" | "hn" | "en";
}) {
  const [marked, setMarked] = useState<Marked>(initialMarked);
  const [utr, setUtr] = useState(initialUtr ?? "");
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function mark(paymentMarked: "paid" | "skipped", withUtr: string | null) {
    setBusy(true);
    setError("");
    const res = await fetch(`/api/lifafa/${token}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ paymentMarked, utr: withUtr }),
    });
    setBusy(false);
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      setError(j.error ?? "That didn't go through.");
      return;
    }
    setMarked(paymentMarked);
    setAsking(false);
  }

  if (marked === "unknown") {
    return (
      <div className="space-y-6">
        <UpiPay
          vpa={vpa}
          payeeName={payeeName}
          paise={paise}
          note={`Shagun from ${senderName}`}
        />

        {!asking ? (
          <button
            type="button"
            onClick={() => setAsking(true)}
            className="w-full rounded-full border border-ivory-edge px-6 py-3 text-ink-soft transition hover:border-marigold hover:text-ink"
          >
            I&apos;ve come back, what next?
          </button>
        ) : (
          <div className="space-y-4 rounded-xl border border-ivory-edge bg-white/70 p-5">
            <p className="font-display text-xl text-maroon">Have you paid?</p>
            <p className="text-[13px] leading-relaxed text-ink-soft">
              We genuinely can&apos;t tell. Your UPI app doesn&apos;t report back
              to us, and we&apos;d rather say so than pretend.
            </p>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-ink-faint">
                UPI reference number (optional)
              </label>
              <input
                value={utr}
                onChange={(e) => setUtr(e.target.value.replace(/\D/g, "").slice(0, 12))}
                inputMode="numeric"
                placeholder="12 digits, from your payment receipt"
                className="w-full rounded-md border border-ivory-edge bg-white px-3 py-2.5 font-mono text-ink placeholder:text-ink-faint"
              />
            </div>

            {error && <p className="text-sm text-kumkum">{error}</p>}

            <div className="flex flex-col gap-2">
              <button
                type="button"
                disabled={busy || utr.length !== 12}
                onClick={() => mark("paid", utr)}
                className="rounded-full bg-peacock px-5 py-3 font-semibold text-white transition hover:bg-peacock-deep disabled:opacity-40"
              >
                Yes, save this reference
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => mark("skipped", null)}
                className="rounded-full border border-ivory-edge px-5 py-3 text-ink-soft transition hover:border-marigold hover:text-ink disabled:opacity-40"
              >
                Yes, but I&apos;m not typing twelve digits
              </button>
              <button
                type="button"
                onClick={() => setAsking(false)}
                className="px-5 py-2 text-sm text-ink-faint hover:text-ink-soft"
              >
                Not yet, take me back
              </button>
            </div>
            <p className="text-[11px] leading-relaxed text-ink-faint">
              This is the only thing about a lifafa that can ever be changed, and
              only once.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-peacock/30 bg-peacock/8 p-5">
        <p className="font-display text-xl text-peacock">
          {marked === "paid" ? "Sealed and noted." : "Sealed."}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
          {marked === "paid" ? (
            <>
              You noted reference <span className="font-mono text-ink">{utr}</span>.
              We&apos;ve written it on the lifafa. We haven&apos;t checked it,
              because we can&apos;t.
            </>
          ) : (
            <>
              No reference, no problem. Nobody has ever asked for a receipt with
              a real lifafa either.
            </>
          )}
        </p>
      </div>

      <SharePanel slug={slug} receiverName={payeeName} lang={lang} />
    </div>
  );
}
