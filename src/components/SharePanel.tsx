"use client";

import { useEffect, useState } from "react";
import { COPY } from "@/lib/design";

/* Getting the link to the person it is for.
 *
 * The native share sheet is first on a phone, and it is the only way to reach
 * Instagram, Signal, Messenger and anything else installed: Instagram has no
 * web deep link that opens a DM with a message prefilled, and neither do most
 * of the others. Everything below it is a fallback for desktop, where there is
 * no share sheet at all. */
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
  const [url, setUrl] = useState("");
  const [canShare, setCanShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(`${window.location.origin}/l/${slug}`);
    setCanShare(typeof navigator.share === "function");
  }, [slug]);

  const line =
    lang === "hi"
      ? `${receiverName}, तुम्हारे लिए कुछ भेजा है 🧧`
      : `${receiverName}, kuch bheja hai tumhare liye 🧧`;
  const msg = `${line} ${url}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  const secondary =
    "flex items-center justify-center rounded-full border border-ivory-edge bg-white px-3 py-2.5 text-[14px] text-ink-soft transition hover:border-marigold hover:text-ink";

  return (
    <div className="space-y-3 rounded-xl border border-ivory-edge bg-white/70 p-5">
      <p className="font-display text-xl text-maroon">{t.shareNow}</p>

      <div className="flex items-center gap-2 overflow-hidden rounded-md border border-ivory-edge bg-ivory px-3 py-2.5">
        <input
          readOnly
          value={url}
          aria-label="Your lifafa link"
          onFocus={(e) => e.currentTarget.select()}
          className="min-w-0 flex-1 bg-transparent font-mono text-[12px] text-ink-soft outline-none"
        />
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded px-2 py-1 text-xs font-semibold text-peacock hover:bg-peacock/10"
        >
          {copied ? "done" : t.shareCopy}
        </button>
      </div>

      {canShare && (
        <button
          type="button"
          onClick={() => navigator.share({ text: line, url }).catch(() => {})}
          className="block w-full rounded-full bg-maroon px-6 py-3.5 text-center font-semibold text-ivory transition hover:bg-maroon-deep"
        >
          {lang === "hi" ? "भेजिए" : "Send it"}
        </button>
      )}

      <div className="grid grid-cols-2 gap-2">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(msg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          WhatsApp
        </a>
        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(line)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={secondary}
        >
          Telegram
        </a>
        <a href={`sms:?&body=${encodeURIComponent(msg)}`} className={secondary}>
          Message
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(line)}&body=${encodeURIComponent(msg)}`}
          className={secondary}
        >
          Email
        </a>
      </div>

      {canShare && (
        <p className="text-[12px] leading-relaxed text-ink-faint">
          {lang === "hi"
            ? "भेजिए दबाने पर फ़ोन का अपना शेयर मेन्यू खुलेगा, वहीं से Instagram या कोई और ऐप चुन लीजिए।"
            : "Send it opens your phone's own share menu, which is how you reach Instagram, Signal or anything else you have."}
        </p>
      )}

      <p className="text-[12px] leading-relaxed text-ink-faint">{t.shareKeep}</p>
    </div>
  );
}
