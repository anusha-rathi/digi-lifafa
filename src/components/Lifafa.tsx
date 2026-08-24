"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { CoinArt, MithaiArt, PatternDefs, patternFill } from "@/components/art";
import {
  colourOf,
  rupees,
  type Coin,
  type EnvelopeColour,
  type EnvelopeStyle,
  type Mithai,
  type Occasion,
} from "@/lib/options";

export type LifafaData = {
  style: EnvelopeStyle;
  colour: EnvelopeColour;
  mithai: Mithai | null;
  coin: Coin | null;
  message: string;
  senderName: string;
  receiverName: string;
  occasion: Occasion | null;
  amountPaise: number | null;
};

const OCCASION_LINE: Record<Occasion, string> = {
  wedding: "शुभ विवाह",
  diwali: "शुभ दीपावली",
  rakhi: "शुभ रक्षाबंधन",
  birthday: "जन्मदिन मुबारक",
};

/* Geometry in a 100 × 130 unit envelope. The flap is the top 48 units and
   rotates about its top edge; the pocket front covers everything below 46. */
const FLAP = "0,0 100,0 100,19 50,48 0,19";
const POCKET = "0,46 100,46 100,130 0,130";

function Paper({
  points,
  rect,
  colour,
  style,
  shade = 0,
}: {
  points?: string;
  rect?: boolean;
  colour: EnvelopeColour;
  style: EnvelopeStyle;
  shade?: number;
}) {
  const c = colourOf(colour);
  return (
    <svg
      viewBox="0 0 100 130"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <PatternDefs />
      {rect ? (
        <>
          <rect width="100" height="130" fill={c.deep} />
          <rect width="100" height="130" fill={patternFill[style]} opacity="0.35" />
        </>
      ) : (
        <>
          <polygon points={points} fill={c.paper} />
          <polygon points={points} fill={patternFill[style]} opacity="0.5" />
          {shade > 0 && <polygon points={points} fill="#000" opacity={shade} />}
        </>
      )}
    </svg>
  );
}

export default function Lifafa({
  data,
  open: controlledOpen,
  onOpenChange,
  showAmount = false,
}: {
  data: LifafaData;
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
  showAmount?: boolean;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const reduce = useReducedMotion();

  const c = colourOf(data.colour);

  // Reduced motion still reveals — it cross-fades instead of folding. SPEC §7.
  const flap = reduce
    ? { animate: { opacity: open ? 0 : 1 }, transition: { duration: 0.35 } }
    : {
        animate: { rotateX: open ? -172 : 0 },
        transition: { type: "spring" as const, stiffness: 90, damping: 15, mass: 1.1 },
      };

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: open ? 1 : 0 }, transition: { duration: 0.4, delay: open ? delay : 0 } }
      : {
          initial: false as const,
          animate: open
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 40, opacity: 0, scale: 0.9 },
          transition: { type: "spring" as const, stiffness: 130, damping: 18, delay: open ? delay : 0 },
        };

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="relative w-full max-w-[320px]"
        style={{ perspective: 1400, perspectiveOrigin: "50% 0%" }}
      >
        {/* The card that rises out of the pocket. Sits behind the pocket front
            when closed, lifts above it when open. */}
        <motion.div
          className="absolute inset-x-[6%] z-20 origin-bottom"
          style={{ bottom: "18%" }}
          {...rise(0.18)}
        >
          <div className="grain rounded-[3px] bg-paper px-4 py-5 text-ink shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)]">
            {data.occasion && (
              <p
                className="mb-1 text-center text-[11px] tracking-[0.25em] uppercase"
                style={{ color: c.paper }}
              >
                {OCCASION_LINE[data.occasion]}
              </p>
            )}
            <p className="font-display text-center text-lg leading-tight" style={{ color: c.deep }}>
              {data.receiverName || "…"}
            </p>
            <div className="my-3 h-px bg-ink/15" />
            <p className="min-h-[3.5rem] text-center text-[13px] leading-relaxed whitespace-pre-wrap text-ink-soft">
              {data.message || "…"}
            </p>
            {showAmount && data.amountPaise ? (
              <p className="mt-3 text-center font-display text-2xl" style={{ color: c.paper }}>
                ₹{rupees(data.amountPaise)}
              </p>
            ) : null}
            <p className="mt-3 text-right text-[11px] text-ink-soft">
              — {data.senderName || "…"}
            </p>
          </div>
        </motion.div>

        {/* Coin and mithai settle out either side of the card. */}
        {data.coin && (
          <motion.div
            className="pointer-events-none absolute left-[-4%] z-30 w-[24%]"
            style={{ top: "34%" }}
            {...rise(0.34)}
          >
            <motion.div
              animate={open && !reduce ? { rotate: [0, -18, -12] } : { rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.34 }}
            >
              <CoinArt id={data.coin} className="w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]" />
            </motion.div>
          </motion.div>
        )}
        {data.mithai && (
          <motion.div
            className="pointer-events-none absolute right-[-4%] z-30 w-[26%]"
            style={{ top: "26%" }}
            {...rise(0.44)}
          >
            <motion.div
              animate={open && !reduce ? { rotate: [0, 14, 8] } : { rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.44 }}
            >
              <MithaiArt id={data.mithai} className="w-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]" />
            </motion.div>
          </motion.div>
        )}

        {/* The envelope itself. */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close the lifafa" : "Open the lifafa"}
          className="relative block w-full cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative aspect-[100/130] w-full">
            {/* back panel */}
            <div className="grain absolute inset-0 overflow-hidden rounded-[4px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)]">
              <Paper rect colour={data.colour} style={data.style} />
            </div>

            {/* pocket front — the part that never moves */}
            <div className="grain absolute inset-0 z-25 overflow-hidden rounded-[4px]">
              <Paper points={POCKET} colour={data.colour} style={data.style} />
              <svg viewBox="0 0 100 130" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
                {/* diagonal seams where the side flaps meet */}
                <path d="M0,46 L50,88 L100,46" fill="none" stroke="#000" strokeWidth="0.4" opacity="0.18" />
              </svg>

              {/* die-cut window: the ₹1 coin showing through the front */}
              {data.coin && (
                <div className="absolute left-1/2 bottom-[10%] w-[26%] -translate-x-1/2">
                  <div className="relative aspect-square overflow-hidden rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.75)]">
                    <div className="absolute inset-0 bg-night/60" />
                    <CoinArt id={data.coin} className="absolute inset-[8%] h-[84%] w-[84%]" />
                  </div>
                </div>
              )}

              {/* addressed to, printed on the front */}
              <p
                className="absolute inset-x-0 top-[8%] px-4 text-center font-display text-base"
                style={{ color: "#f4dc8c" }}
              >
                {data.receiverName || "…"}
              </p>
            </div>

            {/* the flap — the whole point */}
            <motion.div
              className="grain absolute inset-0 z-30"
              style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
              {...flap}
            >
              <Paper points={FLAP} colour={data.colour} style={data.style} shade={0.12} />
              {/* wax-ish seal at the flap point */}
              <div className="absolute left-1/2 top-[33%] w-[15%] -translate-x-1/2">
                <div className="aspect-square rounded-full bg-kumkum shadow-[0_3px_6px_rgba(0,0,0,0.5)] ring-1 ring-foil/60" />
              </div>
            </motion.div>
          </div>
        </button>
      </div>

      <p className="text-xs text-paper/45">
        {open ? "tap to close" : "tap to open"}
      </p>
    </div>
  );
}
