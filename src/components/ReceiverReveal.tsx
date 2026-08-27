"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Celebration from "@/components/Celebration";
import Envelope, { type EnvelopeState } from "@/components/Envelope";
import { rupees } from "@/lib/limits";

/* Receiving a lifafa, in three taps.
 *
 * The sender's page can say "wapas kholo", because the sender has seen the
 * inside already and is only checking their own work. The receiver has not,
 * and telling them to re-open something they have never opened is the wrong
 * sentence at the only moment that matters. So this is its own component:
 *
 *   front   your name is on it, and it is still sealed
 *   back    you turn it over, the seal is there
 *   open    the notes, the coin, the mithai and the message
 *
 * Nothing about the money shows until it is open. Learning the amount from a
 * card above a sealed envelope gives the whole thing away before the tap.
 */

type Phase = "front" | "turning" | "back" | "breaking" | "open";

type Copy = {
  head: (who: string) => string;
  what: string;
  cta1: string;
  cta2: string;
  hint1: string;
  hint2: string;
  withLove: string;
  closing: string;
  make: string;
};

const COPY: Record<"hi" | "hn" | "en", Copy> = {
  hi: {
    head: (who) => `आपके लिए ${who} ने भेजा है`,
    what: "शगुन का लिफ़ाफ़ा",
    cta1: "खोलकर देखिए",
    cta2: "संदेश पढ़िए",
    hint1: "अभी बंद है",
    hint2: "सील अभी लगी है",
    withLove: "प्यार के साथ",
    closing: "उम्मीद है इससे अपने लोग थोड़े और पास लगें।",
    make: "अपना लिफ़ाफ़ा बनाइए",
  },
  hn: {
    head: (who) => `Aapke liye ${who} ne bheja hai`,
    what: "shagun ka lifafa",
    cta1: "Kholkar dekhiye",
    cta2: "Sandesh padhiye",
    hint1: "abhi band hai",
    hint2: "seal abhi lagi hai",
    withLove: "pyaar ke saath",
    closing: "Umeed hai isse apne log thode aur paas lagein.",
    make: "Apna lifafa banaiye",
  },
  en: {
    head: (who) => `${who} has sent you a`,
    what: "shagun ka lifafa",
    cta1: "Tap to open",
    cta2: "Tap to read the message",
    hint1: "still sealed",
    hint2: "the seal is still on",
    withLove: "with love",
    closing: "Hope this brings your people a little closer.",
    make: "Make one of your own",
  },
};

export default function ReceiverReveal({
  s,
  senderName,
  celebration = null,
  amountPaise = 0,
  showAmount = false,
  noted = null,
  recvIntro,
  recvNoted,
  recvUnchecked,
}: {
  s: EnvelopeState;
  senderName: string;
  celebration?: string | null;
  amountPaise?: number;
  showAmount?: boolean;
  noted?: string | null;
  recvIntro: string;
  recvNoted: string;
  recvUnchecked: string;
}) {
  const [phase, setPhase] = useState<Phase>("front");
  const [party, setParty] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const t = COPY[s.lang as "hi" | "hn" | "en"];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = phase === "open";
  const step = phase === "front" || phase === "turning" ? 1 : open ? 3 : 2;

  function advance() {
    if (open) return; // one direction only; there is no un-receiving it
    navigator.vibrate?.([10, 45, 18]);

    if (step === 1) {
      setPhase("turning");
      timers.current.push(setTimeout(() => setPhase("back"), 380));
      return;
    }
    setPhase("breaking");
    timers.current.push(setTimeout(() => setPhase("open"), 420));
    timers.current.push(setTimeout(() => setParty(true), 1800));
    timers.current.push(setTimeout(() => setParty(false), 7000));
  }

  const view = step === 1 ? "front" : step === 2 ? "back" : "open";

  return (
    <div>
      <p className="text-center font-display text-[22px] leading-snug text-ink-soft sm:text-[26px]">
        {t.head(senderName)}
      </p>
      <p className="mt-1 text-center font-display text-[30px] leading-snug text-maroon sm:text-[38px]">
        {t.what}
      </p>

      <div className="mt-7 rounded-2xl border border-ivory-edge bg-ivory-deep/40 px-2 py-6">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-full pb-4">
            <button
              type="button"
              onClick={advance}
              disabled={open}
              aria-label={step === 1 ? t.cta1 : step === 2 ? t.cta2 : undefined}
              className="block w-full disabled:cursor-default"
            >
              <Envelope
                s={s}
                view={view}
                zoomable={open}
                sealBreaking={phase === "breaking"}
              />
            </button>
            <Celebration kind={celebration} playing={party} />
          </div>

          {!open && (
            <>
              <button
                type="button"
                onClick={advance}
                className="rounded-full bg-maroon px-7 py-3 font-display text-lg text-ivory transition hover:bg-maroon-deep"
              >
                {step === 1 ? t.cta1 : t.cta2}
              </button>
              <p className="text-[13px] text-ink-faint">
                {step === 1 ? t.hint1 : t.hint2}
              </p>
            </>
          )}
        </div>
      </div>

      {open && (
        <div className="lf-arrive">
          <p className="mt-8 text-center font-display text-3xl leading-snug text-maroon">
            {t.withLove},<br />
            {senderName}
          </p>

          {showAmount && (
            <div className="mt-8 space-y-3 rounded-xl border border-ivory-edge bg-white/70 p-5 text-center">
              <p className="font-display text-4xl text-maroon">
                ₹{rupees(amountPaise)}
              </p>
              <p className="text-[14px] leading-relaxed text-ink-soft">
                {recvIntro}
              </p>
              {/* C5, never the word "verified". We cannot check a reference
                  against anything, so we say only that the sender wrote it. */}
              {noted && (
                <p className="border-t border-ivory-edge pt-3 text-[12px] leading-relaxed text-ink-faint">
                  {senderName} {recvNoted}{" "}
                  <span className="font-mono text-ink-soft">{noted}</span>.{" "}
                  {recvUnchecked}
                </p>
              )}
            </div>
          )}

          <p className="mt-10 text-center text-[16px] leading-relaxed text-ink-soft">
            {t.closing}
          </p>
          <div className="mt-5 text-center">
            <Link
              href="/templates"
              className="inline-block rounded-full border border-maroon px-7 py-3 font-display text-lg text-maroon transition hover:bg-maroon hover:text-ivory"
            >
              {t.make}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
