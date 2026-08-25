"use client";

/* The share half of the sender's page, on its own so the no-payment path can
   use it without dragging the whole pay flow along. */
import { COPY } from "@/lib/design";

export default function SharePanel({
  slug,
  receiverName,
  lang = "en",
}: {
  slug: string;
  receiverName: string;
  lang?: "hi" | "hn" | "en";
}) {
  const t = COPY[lang];
  const shareUrl = typeof window === "undefined" ? "" : `${window.location.origin}/l/${slug}`;

  return (
    <div className="space-y-3 rounded-xl border border-ivory-edge bg-white/70 p-5">
      <p className="font-display text-xl text-maroon">{t.shareNow}</p>
      <div className="flex items-center gap-2 overflow-hidden rounded-md border border-ivory-edge bg-ivory px-3 py-2.5">
        <input
          readOnly
          value={shareUrl}
          onFocus={(e) => e.currentTarget.select()}
          className="min-w-0 flex-1 bg-transparent font-mono text-[12px] text-ink-soft outline-none"
        />
        <button
          type="button"
          onClick={() => navigator.clipboard?.writeText(shareUrl)}
          className="shrink-0 rounded px-2 py-1 text-xs font-semibold text-peacock hover:bg-peacock/10"
        >
          {t.shareCopy}
        </button>
      </div>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${receiverName}, kuch bheja hai 🧧 ${shareUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full bg-maroon px-6 py-3.5 text-center font-semibold text-ivory transition hover:bg-maroon-deep"
      >
        {t.shareWA}
      </a>
      <p className="text-[11px] leading-relaxed text-ink-faint">
        {t.shareKeep}
      </p>
    </div>
  );
}
