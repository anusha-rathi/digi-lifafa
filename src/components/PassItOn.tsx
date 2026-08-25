"use client";

import Link from "next/link";
import { useState } from "react";

/* The receiver page used to end after the amount and offer nothing.
   Somebody who has just been given something is the single most likely person
   to send one, and there was no way for them to. */
export default function PassItOn({ lang }: { lang: "hi" | "hn" | "en" }) {
  const [copied, setCopied] = useState(false);

  const t = {
    hi: {
      head: "अच्छा लगा?",
      sub: "अपने लोगों को भी भेजिए। मुफ़्त है, और एक मिनट लगता है।",
      make: "अपना लिफ़ाफ़ा बनाइए",
      share: "किसी को भेजिए",
      copied: "लिंक कॉपी हो गया",
    },
    hn: {
      head: "achha laga?",
      sub: "apne logon ko bhi bhejiye. free hai, aur ek minute lagta hai.",
      make: "apna lifafa banao",
      share: "kisi ko bhejo",
      copied: "link copy ho gaya",
    },
    en: {
      head: "Liked this?",
      sub: "Send one to your people. It is free and takes about a minute.",
      make: "Make your own lifafa",
      share: "Send it to someone",
      copied: "Link copied",
    },
  }[lang];

  const site = typeof window === "undefined" ? "" : window.location.origin;
  const pitch =
    lang === "hi"
      ? `शगुन का लिफ़ाफ़ा भेजिए, सिर्फ़ पैसे नहीं ${site}`
      : `Send a shagun ka lifafa, not just the amount ${site}`;

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Digi Lifafa", text: pitch, url: site });
        return;
      } catch {
        // dismissed, fall through to copying
      }
    }
    try {
      await navigator.clipboard.writeText(site);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-ivory-edge bg-ivory-deep/60 p-6 text-center">
      <p className="font-display text-2xl text-maroon">{t.head}</p>
      <p className="mx-auto mt-1.5 max-w-xs text-[14px] leading-relaxed text-ink-soft">{t.sub}</p>
      <div className="mt-5 flex flex-col items-center gap-2.5">
        <Link
          href="/make"
          className="w-full max-w-[260px] rounded-full bg-maroon px-6 py-3 font-semibold text-ivory transition hover:bg-maroon-deep"
        >
          {t.make}
        </Link>
        <button
          type="button"
          onClick={share}
          className="w-full max-w-[260px] rounded-full border border-ivory-edge bg-white/70 px-6 py-3 text-ink-soft transition hover:border-marigold hover:text-ink"
        >
          {copied ? t.copied : t.share}
        </button>
      </div>
    </div>
  );
}
