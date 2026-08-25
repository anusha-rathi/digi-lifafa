"use client";

import { useEffect, useRef, useState } from "react";
import Celebration from "@/components/Celebration";
import Envelope, { type EnvelopeState } from "@/components/Envelope";
import { COPY, type Lang } from "@/lib/design";

/* Opening a lifafa is a sequence, not a toggle.
 *
 *   0ms     the seal gives way, and the phone buzzes
 *   420ms   the card turns and the flap stands up
 *   600ms   the notes rise, one after another
 *   1300ms  the coin lands, then the mithai
 *   1550ms  the message slides out last, so it is what you are looking at
 *           when everything else has stopped moving
 *   1800ms  whatever the sender chose happens
 *
 * The stagger inside the envelope lives in Envelope.tsx as animation delays.
 * This component owns the phases around it.
 */

type Phase = "sealed" | "breaking" | "open";

export default function LifafaReveal({
  s,
  hint,
  onDark = false,
  celebration = null,
}: {
  s: EnvelopeState;
  hint?: string;
  onDark?: boolean;
  celebration?: string | null;
}) {
  const [phase, setPhase] = useState<Phase>("sealed");
  const [party, setParty] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const t = COPY[s.lang as Lang];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = phase === "open";

  function toggle() {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (open) {
      setParty(false);
      setPhase("sealed");
      return;
    }

    // A short buzz on the seal breaking. Unsupported everywhere it is not
    // wanted, which is exactly the right failure mode for a nicety.
    navigator.vibrate?.([10, 45, 18]);

    setPhase("breaking");
    timers.current.push(setTimeout(() => setPhase("open"), 420));
    timers.current.push(setTimeout(() => setParty(true), 1800));
    // Stop the particles so a lifafa left open on screen is not a loop.
    timers.current.push(setTimeout(() => setParty(false), 7000));
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full pb-4">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Close the lifafa" : "Open the lifafa"}
          className="block w-full cursor-pointer"
        >
          <Envelope
            s={s}
            view={open ? "open" : "front"}
            zoomable={open}
            sealBreaking={phase === "breaking"}
          />
        </button>
        <Celebration kind={celebration} playing={party} />
      </div>

      <button
        type="button"
        onClick={toggle}
        className={`rounded-full border px-6 py-2.5 font-display text-lg transition ${
          onDark
            ? "border-[#e8c37a]/45 bg-transparent text-[#f2dcae] hover:border-[#e8c37a]"
            : "border-ivory-edge bg-white/70 text-maroon hover:border-maroon"
        }`}
      >
        {open ? t.sealOpen : t.sealClose}
      </button>

      <p className={`text-[13px] ${onDark ? "text-[#8d7461]" : "text-ink-faint"}`}>
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
