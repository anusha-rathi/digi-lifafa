"use client";

import { useState } from "react";
import Envelope, { type EnvelopeState } from "@/components/Envelope";
import { COPY, type Lang } from "@/lib/design";

/* It arrives sealed, front side up with their name on it. The button below
   opens and closes it, so the sender can check both sides before sending. */
export default function LifafaReveal({
  s,
  hint,
  onDark = false,
}: {
  s: EnvelopeState;
  hint?: string;
  onDark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const t = COPY[s.lang as Lang];

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close the lifafa" : "Open the lifafa"}
        className="block w-full cursor-pointer"
      >
        <Envelope s={s} view={open ? "open" : "front"} zoomable={open} />
      </button>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`rounded-full border px-6 py-2.5 font-display text-lg transition ${onDark ? "border-[#e8c37a]/45 bg-transparent text-[#f2dcae] hover:border-[#e8c37a]" : "border-ivory-edge bg-white/70 text-maroon hover:border-maroon"}`}
      >
        {open ? t.sealOpen : t.sealClose}
      </button>

      <p className={`text-[12px] ${onDark ? "text-[#8d7461]" : "text-ink-faint"}`}>
        {open
          ? (hint ??
            (s.lang === "hi"
              ? "लिफ़ाफ़े पर टैप कीजिए, सब कुछ खुल जाएगा"
              : s.lang === "hn"
                ? "lifafe pe tap karo, sab kuch khul jaayega"
                : "tap the lifafa to see everything inside"))
          : s.lang === "hi"
            ? "अभी बंद है"
            : s.lang === "hn"
              ? "abhi band hai"
              : "sealed shut"}
      </p>
    </div>
  );
}
