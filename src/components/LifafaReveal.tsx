"use client";

import { useState } from "react";
import Envelope, { type EnvelopeState } from "@/components/Envelope";
import { COPY, type Lang } from "@/lib/design";

/* The receiver's experience: it arrives sealed, front-side up with their name
   on it. Tapping turns it over and opens it, and the notes, coin and mithai
   land. The sender's own page reuses this to see what they built. */
export default function LifafaReveal({
  s,
  startOpen = false,
}: {
  s: EnvelopeState;
  startOpen?: boolean;
}) {
  const [open, setOpen] = useState(startOpen);
  const t = COPY[s.lang as Lang];

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close the lifafa" : "Open the lifafa"}
        className="block w-full cursor-pointer"
      >
        <Envelope s={s} view={open ? "open" : "front"} />
      </button>
      <p className="mt-1 text-[11px] tracking-[.14em] text-[#8d7461]">
        {open ? t.capOpen : t.capFront}
      </p>
    </div>
  );
}
