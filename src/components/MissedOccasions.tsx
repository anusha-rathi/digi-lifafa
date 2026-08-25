"use client";

import { useEffect, useState } from "react";

/* The question the whole site is asking, with the occasion cycling under it.
 *
 * The point is not that any one of these matters. It is that they keep coming,
 * one after another, and you were not there for any of them. Reading it for
 * fifteen seconds should feel like a slow count of everything you missed. */

const OCCASIONS = [
  "Raksha Bandhan",
  "Diwali",
  "Holi",
  "mummy ka birthday",
  "chhoti ka birthday",
  "Ganesh Chaturthi",
  "papa ki anniversary",
  "Eid",
  "bhai ki shaadi",
  "Onam",
  "griha pravesh",
  "Teej",
  "dadi ka birthday",
  "Janmashtami",
];

export default function MissedOccasions() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Reduced motion still cycles, it just does not cross-fade.
    const tick = setInterval(() => {
      if (media.matches) {
        setI((n) => (n + 1) % OCCASIONS.length);
        return;
      }
      setShown(false);
      setTimeout(() => {
        setI((n) => (n + 1) % OCCASIONS.length);
        setShown(true);
      }, 260);
    }, 2100);
    return () => clearInterval(tick);
  }, []);

  return (
    <p className="mx-auto max-w-2xl font-display text-[26px] leading-[1.5] text-[#f6e9d6] sm:text-[34px]">
      Ghar se door the{" "}
      <span className="relative inline-block align-baseline">
        <span
          className="inline-block whitespace-nowrap text-[#e8c37a] transition-opacity duration-250"
          style={{ opacity: shown ? 1 : 0 }}
        >
          {OCCASIONS[i]}
        </span>
      </span>{" "}
      pe?
    </p>
  );
}
