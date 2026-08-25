"use client";

/* The moment after the lifafa opens.
 *
 * Deliberately CSS keyframes rather than a motion library: these are thirty
 * absolutely positioned particles that never interact, never need layout, and
 * must not touch the envelope's `preserve-3d` subtree. CSS animation runs on
 * the compositor and cannot fight the clip-paths.
 *
 * Everything here respects prefers-reduced-motion by simply not rendering.
 */

import { useEffect, useState } from "react";

type Props = { kind: string | null; playing: boolean };

const rand = (seed: number, lo: number, hi: number) => {
  // Deterministic per index so the server and the client agree on positions
  // and React does not warn about a hydration mismatch.
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return lo + (x - Math.floor(x)) * (hi - lo);
};

function Petal({ i }: { i: number }) {
  return (
    <span
      className="lf-fall absolute block"
      style={{
        left: `${rand(i, 2, 96)}%`,
        top: "-8%",
        width: rand(i + 7, 14, 26),
        height: rand(i + 3, 10, 17),
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        background:
          i % 4 === 0
            ? "#e8a33d"
            : i % 4 === 1
              ? "#d94f1a"
              : i % 4 === 2
                ? "#f2b84b"
                : "#fbe6b4",
        boxShadow: "0 2px 5px rgba(60,20,0,.35)",
        animationDelay: `${rand(i + 11, 0, 1.5)}s`,
        animationDuration: `${rand(i + 5, 2.6, 4.6)}s`,
        ["--spin" as string]: `${rand(i + 2, -520, 520)}deg`,
        ["--drift" as string]: `${rand(i + 13, -40, 40)}px`,
      }}
    />
  );
}

function Coin({ i }: { i: number }) {
  return (
    <span
      className="lf-fall absolute grid place-items-center rounded-full text-[9px] font-bold text-[#4a3208]"
      style={{
        left: `${rand(i, 4, 92)}%`,
        top: "-8%",
        width: 20,
        height: 20,
        background: "conic-gradient(from 210deg,#f3d489,#b8862f,#ffeab8,#9c6c22,#f3d489)",
        boxShadow: "0 2px 5px rgba(0,0,0,.4)",
        animationDelay: `${rand(i + 11, 0, 1.4)}s`,
        animationDuration: `${rand(i + 5, 2.4, 4)}s`,
        ["--spin" as string]: `${rand(i + 2, 360, 900)}deg`,
        ["--drift" as string]: `${rand(i + 13, -30, 30)}px`,
      }}
    >
      ₹
    </span>
  );
}

function Diya({ i, total }: { i: number; total: number }) {
  return (
    <span
      className="lf-light absolute"
      style={{
        left: `${((i + 0.5) / total) * 100}%`,
        bottom: 8,
        transform: "translateX(-50%)",
        animationDelay: `${0.18 * i}s`,
      }}
    >
      <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden>
        <ellipse cx="20" cy="18" rx="5" ry="9" fill="#f2b84b" opacity="0.55" />
        <path d="M20 8 C25 15 24 22 20 25 C16 22 15 15 20 8 Z" fill="#f4dc8c" />
        <path d="M6 26 C6 33 12 37 20 37 C28 37 34 33 34 26 Z" fill="#c9761c" />
        <path d="M6 26 L34 26" stroke="#8a4e10" strokeWidth="2" />
      </svg>
    </span>
  );
}

function Spark({ i }: { i: number }) {
  const a = (i / 18) * Math.PI * 2;
  return (
    <span
      className="lf-spark absolute left-1/2 top-1/2 block h-[3px] rounded-full"
      style={{
        width: rand(i + 4, 10, 24),
        background: i % 2 ? "#f4dc8c" : "#ffd07a",
        transformOrigin: "0 50%",
        ["--a" as string]: `${(a * 180) / Math.PI}deg`,
        animationDelay: `${rand(i, 0, 0.5)}s`,
        ["--throw" as string]: `${rand(i + 6, 90, 210)}px`,
      }}
    />
  );
}

function Thread({ i }: { i: number }) {
  return (
    <span
      className="lf-fall absolute block"
      style={{
        left: `${rand(i, 4, 94)}%`,
        top: "-10%",
        width: 5,
        height: rand(i + 8, 26, 52),
        borderRadius: 3,
        background:
          i % 3 === 0
            ? "linear-gradient(#c42b1c,#e8a33d)"
            : i % 3 === 1
              ? "linear-gradient(#e8a33d,#c9a227)"
              : "linear-gradient(#7b1e2b,#c42b1c)",
        boxShadow: "0 2px 5px rgba(60,20,0,.35)",
        animationDelay: `${rand(i + 11, 0, 1.6)}s`,
        animationDuration: `${rand(i + 5, 2.8, 4.4)}s`,
        ["--spin" as string]: `${rand(i + 2, -300, 300)}deg`,
        ["--drift" as string]: `${rand(i + 13, -46, 46)}px`,
      }}
    />
  );
}

export default function Celebration({ kind, playing }: Props) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!kind || !playing || reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden" aria-hidden>
      {kind === "petals" && Array.from({ length: 26 }, (_, i) => <Petal key={i} i={i} />)}
      {kind === "coins" && Array.from({ length: 16 }, (_, i) => <Coin key={i} i={i} />)}
      {kind === "rakhi-thread" &&
        Array.from({ length: 20 }, (_, i) => <Thread key={i} i={i} />)}
      {kind === "diyas" && Array.from({ length: 7 }, (_, i) => <Diya key={i} i={i} total={7} />)}
      {kind === "phuljhari" && (
        <span className="absolute left-1/2 top-[38%] block h-0 w-0">
          {Array.from({ length: 18 }, (_, i) => (
            <Spark key={i} i={i} />
          ))}
        </span>
      )}
    </div>
  );
}
