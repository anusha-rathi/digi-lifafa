"use client";

import { useState } from "react";
import Envelope, { type EnvelopeState } from "@/components/Envelope";

/* It arrives sealed, front-side up with their name on it. Tapping turns it
   over and opens it. No caption naming the view — the receiver shouldn't be
   told they're looking at "the front"; they're looking at a lifafa. */
export default function LifafaReveal({
  s,
  startOpen = false,
  hint,
}: {
  s: EnvelopeState;
  startOpen?: boolean;
  hint?: string;
}) {
  const [open, setOpen] = useState(startOpen);

  return (
    <div className="flex flex-col items-center">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open the lifafa"
          className="block w-full cursor-pointer"
        >
          <Envelope s={s} view="front" />
        </button>
      ) : (
        <Envelope s={s} view="open" zoomable />
      )}

      <p className="mt-1 text-[12px] text-ink-faint">
        {open ? (hint ?? "tap the note, the mithai or the message to read it") : "tap to open"}
      </p>
    </div>
  );
}
