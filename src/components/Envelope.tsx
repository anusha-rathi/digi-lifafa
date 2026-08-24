"use client";

import { useState } from "react";
import { paperStyle, sweetById, type PathSpec } from "@/lib/design";

/* The lifafa itself, ported from the Claude Design canvas. Three views on one
   3D card: OPEN, BACK (the श्री seal) and FRONT (their name). The clip-path
   geometry, the flap curves and the note stacking are the canvas's, don't
   "tidy" the numbers.

   `zoomable` turns the contents into buttons: the message slip is only 126px
   wide and the notes stack on top of each other, so on the receiving end you
   need a way to actually read what was sent. */

export type View = "open" | "back" | "front";

export type EnvelopeState = {
  designId: string;
  paletteId: string;
  textureId: string;
  notes: { denom: number; key: number }[];
  coin: boolean;
  sweetId: string | null;
  occasionLabel: string;
  messagePeek: string;
  name: string;
  salutation: string;
  senderName?: string;
  lang: "hi" | "hn" | "en";
};

const FLAP_PATH =
  "path('M0,150 L0,86 C0,60 14,36 40,24 C62,14 84,26 96,40 C110,20 140,4 165,4 C190,4 220,20 234,40 C246,26 268,14 290,24 C316,36 330,60 330,86 L330,150 Z')";
const POCKET_PATH =
  "path('M0,86 L0,28 C0,13 10,3 25,3 L98,3 C111,3 118,11 125,20 L205,20 C212,11 219,3 232,3 L305,3 C320,3 330,13 330,28 L330,86 Z')";
const BACK_FLAP_PATH =
  "path('M0,0 L330,0 L330,32 C330,56 316,78 290,88 C268,96 246,86 234,74 C220,92 190,104 165,104 C140,104 110,92 96,74 C84,86 62,96 40,88 C14,78 0,56 0,32 Z')";

const DENOM_BG: Record<number, string> = {
  10: "linear-gradient(160deg,#e2b98c,#c98a4b)",
  20: "linear-gradient(160deg,#d6dd8e,#b3bd4a)",
  50: "linear-gradient(160deg,#a9d9e6,#6fb3c9)",
  100: "linear-gradient(160deg,#c3b8de,#9b8ec4)",
  200: "linear-gradient(160deg,#f2c07c,#e0912f)",
  500: "linear-gradient(160deg,#b6bb9c,#868c6c)",
};

const DENOM_WORD: Record<number, { hi: string; rom: string }> = {
  10: { hi: "दस रुपये", rom: "das" },
  20: { hi: "बीस रुपये", rom: "bees" },
  50: { hi: "पचास रुपये", rom: "pachaas" },
  100: { hi: "सौ रुपये", rom: "sau" },
  200: { hi: "दो सौ रुपये", rom: "do sau" },
  500: { hi: "पाँच सौ रुपये", rom: "paanch sau" },
};

export function SweetSvg({
  shapes,
  width,
  height,
}: {
  shapes: PathSpec[];
  width: number;
  height: number;
}) {
  return (
    <svg
      viewBox="-2 -2 52 46"
      width={width}
      height={height}
      style={{ display: "block", overflow: "visible" }}
      aria-hidden
    >
      {shapes.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.f}
          fillRule={p.fr as "nonzero" | "evenodd"}
          stroke={p.s}
          strokeWidth={p.w}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}



export default function Envelope({
  s,
  view,
  caption,
  zoomable = false,
}: {
  s: EnvelopeState;
  view: View;
  caption?: string;
  zoomable?: boolean;
}) {
  const [openedUp, setOpenedUp] = useState(false);

  const { pal, des, image, size } = paperStyle(s.designId, s.paletteId, s.textureId);
  const sweet = sweetById(s.sweetId);
  const notes = s.notes.slice(-9);
  const hasMessage = !!(s.messagePeek.trim() || s.occasionLabel);
  const total = s.notes.reduce((a, n) => a + n.denom, 0) + (s.coin ? 1 : 0);

  const flipT =
    view === "open" ? "rotateY(0deg)" : view === "back" ? "rotateY(180deg)" : "rotateY(360deg)";

  const paper = { background: pal.base, backgroundImage: image, backgroundSize: size };
  const flapPaper = (overlay: string) => ({
    background: pal.flap,
    backgroundImage: `${overlay}, ${image}`,
    backgroundSize: `auto, ${size}`,
  });

  const nameShown = s.name.trim() || (s.lang === "hi" ? "उनका नाम" : "their name");
  const isLatinSal = /^[A-Za-z]/.test(s.salutation);
  const nameSize = nameShown.length > 22 ? 19 : nameShown.length > 14 ? 22 : 27;
  const sweetName = sweet ? (s.lang === "hi" ? sweet.hi : sweet.en) : "";

  // Everything opens together. Reading the message shouldn't mean tapping
  // three separate things and hunting for the one you want.
  const tap = () =>
    zoomable
      ? { onClick: () => setOpenedUp(true), role: "button", tabIndex: 0 }
      : {};

  return (
    <div className="relative">
      <div className="lf-fit">
      <div
        className="lf-fit-inner relative flex h-[344px] items-end justify-center pb-[34px]"
        style={{ perspective: 1600 }}
      >
        <div className="absolute bottom-[22px] h-5 w-[262px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,.4),transparent_70%)] blur-[3px]" />

        <div
          className="relative h-[158px] w-[330px] transition-transform duration-[950ms] [transition-timing-function:cubic-bezier(.66,-0.08,.32,1.04)]"
          style={{ transformStyle: "preserve-3d", transform: flipT }}
        >
          {/* ── OPEN ───────────────────────────────────────────────── */}
          {view === "open" && (
            <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="absolute inset-0 rounded-[4px] shadow-[0_20px_36px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.12)]"
                style={paper}
              />
              <div className="absolute inset-x-0 top-0 h-px opacity-65" style={{ background: pal.lace }} />

              <div
                className="absolute left-0 bottom-[157px] h-[150px] w-[330px] [filter:drop-shadow(0_-6px_14px_rgba(0,0,0,.32))]"
                style={{
                  ...flapPaper("linear-gradient(rgba(0,0,0,.26), rgba(0,0,0,.02))"),
                  clipPath: FLAP_PATH,
                }}
              />

              <div
                className="absolute left-0 top-0 h-[158px] w-[62px]"
                style={{
                  ...flapPaper("linear-gradient(96deg, rgba(255,255,255,.10), rgba(0,0,0,.10))"),
                  clipPath: "polygon(0 0, 100% 22%, 78% 62%, 100% 78%, 0 100%)",
                }}
              />
              <div
                className="absolute right-0 top-0 h-[158px] w-[62px]"
                style={{
                  ...flapPaper("linear-gradient(264deg, rgba(255,255,255,.10), rgba(0,0,0,.10))"),
                  clipPath: "polygon(100% 0, 0 22%, 22% 62%, 0 78%, 100% 100%)",
                }}
              />
              <div
                className="absolute left-0 top-0 h-[158px] w-[62px]"
                style={{
                  clipPath: "polygon(0 0, 100% 22%, 78% 62%, 100% 78%, 0 100%)",
                  boxShadow: `inset -1px 0 0 ${pal.lace}`,
                }}
              />
              <div
                className="absolute right-0 top-0 h-[158px] w-[62px]"
                style={{
                  clipPath: "polygon(100% 0, 0 22%, 22% 62%, 0 78%, 100% 100%)",
                  boxShadow: `inset 1px 0 0 ${pal.lace}`,
                }}
              />

              {/* the message slip */}
              {hasMessage && (
                <div
                  {...tap()}
                  className={`lf-slip absolute left-[6px] bottom-[88px] h-[74px] w-[126px] overflow-hidden rounded-[2px] bg-[linear-gradient(158deg,#fbf3e2,#ecdfc6)] px-[9px] py-2 shadow-[0_4px_10px_rgba(0,0,0,.35)] ${
                    zoomable ? "cursor-zoom-in ring-offset-2 hover:ring-2 hover:ring-[#e8c37a]" : ""
                  }`}
                >
                  <div className="text-[8px] uppercase tracking-[.16em] text-[#a08054]">
                    {s.occasionLabel}
                  </div>
                  <div className="mt-[3px] max-h-[44px] overflow-hidden text-[9.5px] leading-[1.45] text-[#6b543c]">
                    {s.messagePeek}
                  </div>
                </div>
              )}

              {/* the notes */}
              <div className="absolute inset-x-0 bottom-[62px] flex h-[150px] items-end justify-center">
                {notes.map((n, i) => {
                  const tf = `translate(${((i % 5) - 2) * 11}px, ${-i * 7}px) rotate(${
                    ((i % 5) - 2) * 6.5 + (i % 2 ? 2 : -2)
                  }deg)`;
                  const word = DENOM_WORD[n.denom];
                  return (
                    <div
                      key={n.key}
                      {...(i === notes.length - 1 ? tap() : {})}
                      className={`lf-fly absolute bottom-0 h-[82px] w-[158px] overflow-hidden rounded-[4px] shadow-[0_4px_10px_rgba(0,0,0,.4),inset_0_0_0_1px_rgba(255,255,255,.4)] ${
                        zoomable && i === notes.length - 1 ? "cursor-zoom-in" : ""
                      }`}
                      style={
                        {
                          "--r": tf,
                          transform: tf,
                          zIndex: i + 1,
                          background: DENOM_BG[n.denom],
                        } as React.CSSProperties
                      }
                    >
                      <div className="absolute inset-[3px] rounded-[2px] border border-black/15" />
                      <div className="absolute inset-y-0 left-0 w-[9px] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.22)_0_3px,transparent_3px_7px)]" />
                      <div className="absolute right-[34px] top-[14px] h-[54px] w-[44px] rounded-[50%] bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,.55),rgba(255,255,255,0)_70%)]" />
                      <div className="absolute left-4 top-[9px] text-[7px] font-semibold tracking-[.1em] text-black/55">
                        भारतीय रिज़र्व बैंक
                      </div>
                      <div className="absolute left-4 top-5 h-px w-14 bg-black/20" />
                      <div className="absolute left-4 top-6 h-px w-11 bg-black/15" />
                      <div className="absolute right-[9px] top-2 h-[19px] w-[15px] rounded-[2px] border border-black/20 bg-[linear-gradient(135deg,rgba(255,255,255,.7),rgba(255,255,255,.15))]" />
                      <div className="absolute right-[10px] bottom-[7px] font-display text-[30px] leading-[.85] text-black/75 [font-feature-settings:'tnum']">
                        ₹{n.denom}
                      </div>
                      <div className="absolute left-4 bottom-[9px] text-[9.5px] font-medium text-black/50">
                        {s.lang === "hi" ? word.hi : word.rom}
                      </div>
                      <div className="absolute left-16 bottom-2 h-[18px] w-[18px] rounded-full border border-black/30" />
                    </div>
                  );
                })}
              </div>

              {/* the pocket, with the mithai box and the coin */}
              <div
                className="absolute left-0 bottom-0 h-[86px] w-[330px] [filter:drop-shadow(0_-4px_10px_rgba(0,0,0,.25))]"
                style={{
                  background: pal.base,
                  backgroundImage: `linear-gradient(rgba(255,255,255,.12), rgba(0,0,0,.18)), ${image}`,
                  backgroundSize: `auto, ${size}`,
                  clipPath: POCKET_PATH,
                }}
              >
                {sweet && (
                  <div
                    {...tap()}
                    className={`lf-tuck absolute left-5 top-[18px] h-[54px] w-[68px] ${
                      zoomable ? "cursor-zoom-in" : ""
                    }`}
                  >
                    <div className="absolute inset-x-0 bottom-[10px] h-8 rounded-[2px] bg-[linear-gradient(160deg,#f6efdd,#d9c8a9)] shadow-[0_3px_8px_rgba(0,0,0,.45),inset_0_0_0_1px_rgba(0,0,0,.14)]" />
                    <div className="absolute inset-x-0 bottom-[32px] h-[6px] rounded-[2px] bg-[linear-gradient(#fbf6e8,#e6d9bd)] shadow-[0_1px_2px_rgba(0,0,0,.25)]" />
                    <div className="absolute left-[6px] top-[-11px] [filter:drop-shadow(0_2px_3px_rgba(0,0,0,.45))]">
                      <SweetSvg shapes={sweet.sh} width={58} height={50} />
                    </div>
                    {/* the name, so the other person knows what you sent */}
                    <div className="absolute inset-x-0 bottom-[13px] truncate px-1 text-center text-[8px] font-semibold tracking-[.04em] text-[#5c4326]">
                      {sweetName}
                    </div>
                  </div>
                )}
                {s.coin && (
                  <div
                    {...tap()}
                    className={`lf-coin absolute right-[26px] top-[26px] grid h-[46px] w-[46px] place-items-center rounded-full bg-[conic-gradient(from_210deg,#f3d489,#b8862f,#ffeab8,#9c6c22,#f3d489)] shadow-[0_3px_8px_rgba(0,0,0,.5),inset_0_0_0_2px_rgba(255,255,255,.35)] ${
                      zoomable ? "cursor-zoom-in" : ""
                    }`}
                  >
                    <span className="font-display text-[17px] text-[#4a3208]">₹1</span>
                  </div>
                )}
              </div>

              {des.frame && (
                <div
                  className="pointer-events-none absolute inset-[9px] rounded-[2px] border opacity-75"
                  style={{ borderColor: pal.lace }}
                />
              )}
            </div>
          )}

          {/* ── BACK ───────────────────────────────────────────────── */}
          {view === "back" && (
            <div className="absolute inset-0" style={{ transform: "rotateY(180deg)" }}>
              <div
                className="absolute inset-0 overflow-hidden rounded-[4px] shadow-[0_22px_40px_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.1)]"
                style={paper}
              >
                <div
                  className="absolute left-0 top-[3px] h-[104px] w-[330px]"
                  style={{ background: pal.lace, clipPath: BACK_FLAP_PATH }}
                />
                <div
                  className="absolute left-0 top-0 h-[104px] w-[330px] [filter:drop-shadow(0_6px_10px_rgba(0,0,0,.4))]"
                  style={{
                    ...flapPaper("linear-gradient(rgba(0,0,0,.04), rgba(0,0,0,.34))"),
                    clipPath: BACK_FLAP_PATH,
                  }}
                />
                <div className="absolute left-1/2 top-[78px] grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-full bg-[radial-gradient(circle_at_34%_30%,#f6dea6,#c9922f_55%,#8b5f19)] shadow-[0_3px_9px_rgba(0,0,0,.5),inset_0_0_0_1px_rgba(255,255,255,.35)]">
                  <span className="absolute inset-[5px] rounded-full border border-dashed border-[rgba(74,50,8,.45)]" />
                  <span className="lf-glint font-display text-[19px] leading-none text-[#4a3208]">
                    श्री
                  </span>
                </div>
                {des.frame && (
                  <div
                    className="absolute inset-[9px] rounded-[2px] border opacity-75"
                    style={{ borderColor: pal.lace }}
                  />
                )}
              </div>
            </div>
          )}

          {/* ── FRONT ──────────────────────────────────────────────── */}
          {view === "front" && (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[4px] shadow-[0_22px_40px_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.1)]"
                style={paper}
              >
                <div
                  className="absolute inset-[11px] rounded-[2px] border opacity-60"
                  style={{ borderColor: des.frame ? pal.lace : "transparent" }}
                />
                <div
                  className="text-[15px] leading-[1.6]"
                  style={{
                    color: `${pal.ink}b0`,
                    letterSpacing: isLatinSal ? ".26em" : "normal",
                    textTransform: isLatinSal ? "uppercase" : "none",
                  }}
                >
                  {s.salutation}
                </div>
                <div
                  className="px-[22px] text-center font-display leading-[1.35] [text-wrap:pretty]"
                  style={{ color: pal.ink, fontSize: nameSize }}
                >
                  {nameShown}
                </div>
              </div>
            </div>
          )}
        </div>

        {caption && (
          <div className="absolute inset-x-0 bottom-[6px] text-center text-[10.5px] tracking-[.14em] text-ink-faint">
            {caption}
          </div>
        )}
      </div>
      </div>

      {/* Everything, out of the envelope and big enough to read. The page
          behind it blurs so there is nothing competing with the letter. */}
      {zoomable && openedUp && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/45 p-4 backdrop-blur-md sm:items-center"
          onClick={() => setOpenedUp(false)}
        >
          <div
            className="lf-rise my-auto w-full max-w-sm rounded-2xl bg-ivory p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenedUp(false)}
              aria-label="Put it back"
              className="mb-4 flex items-center gap-2 text-sm text-ink-soft transition hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              {s.lang === "hi" ? "वापस रख दीजिए" : s.lang === "hn" ? "wapas rakh do" : "put it back"}
            </button>

            {/* the letter */}
            <div className="rounded-xl bg-[linear-gradient(158deg,#fbf3e2,#ecdfc6)] p-5 shadow-inner">
              <p className="text-[11px] uppercase tracking-[.18em] text-[#a08054]">
                {s.occasionLabel}
              </p>
              <p className="mt-1 font-display text-2xl text-[#6b4a2a]">{s.name}</p>
              <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-[#5c4326]">
                {s.messagePeek || " "}
              </p>
              {s.senderName ? (
                <p className="mt-4 text-right font-display text-lg text-[#6b4a2a]">
                  {s.lang === "hi" ? "प्यार के साथ" : "with love"}, {s.senderName}
                </p>
              ) : null}
            </div>

            {/* the nek */}
            {total > 0 ? (
              <div className="mt-4 rounded-xl border border-ivory-edge bg-white/70 p-4 text-center">
                <p className="font-display text-3xl text-maroon">
                  ₹{total.toLocaleString("en-IN")}
                </p>
                <p className="mt-1 text-[13px] text-ink-soft">
                  {s.notes.length > 0
                    ? `${s.notes.length} ${s.notes.length === 1 ? "note" : "notes"}`
                    : ""}
                  {s.notes.length > 0 && s.coin ? " " : ""}
                  {s.coin ? (s.lang === "hi" ? "और ₹1 का सिक्का" : "and the ₹1 coin") : ""}
                </p>
              </div>
            ) : null}

            {/* the mithai */}
            {sweet ? (
              <div className="mt-4 flex items-center gap-4 rounded-xl border border-ivory-edge bg-white/70 p-4">
                <SweetSvg shapes={sweet.sh} width={84} height={72} />
                <div>
                  <p className="font-display text-xl text-maroon">{sweet.hi}</p>
                  <p className="text-sm text-ink-soft">{sweet.en}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
