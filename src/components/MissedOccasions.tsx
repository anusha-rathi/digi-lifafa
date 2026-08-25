"use client";

import { useEffect, useState } from "react";

/* The question the whole site asks.
 *
 * Two fixed lines with one rotating word between them, rather than a sentence
 * with a hole in it: "Ghar se door the ___ pe" scanned badly in every tense.
 * This reads as one line every time the word changes.
 *
 *   Is baar bhi
 *   DIWALI
 *   ghar se door?
 */

const OCCASIONS = [
  "Diwali",
  "Raksha Bandhan",
  "Holi",
  "Mummy ke Birthday",
  "Ganesh Chaturthi",
  "Chhoti ki Shaadi",
  "Eid",
  "Onam",
  "Teej",
  "Dadi ke Birthday",
  "Griha Pravesh",
];

export default function MissedOccasions() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tick = setInterval(() => {
      if (reduce.matches) {
        setI((n) => (n + 1) % OCCASIONS.length);
        return;
      }
      setShown(false);
      setTimeout(() => {
        setI((n) => (n + 1) % OCCASIONS.length);
        setShown(true);
      }, 240);
    }, 2400);
    return () => clearInterval(tick);
  }, []);

  return (
    <p className="font-display leading-[1.25] text-[#f6e9d6]">
      <span className="block text-[19px] text-[#c9ab8c] sm:text-[22px]">
        Is baar bhi
      </span>
      <span
        className="my-1 block min-h-[1.25em] text-[38px] text-[#f0cf90] transition-opacity duration-200 sm:text-[56px]"
        style={{
          opacity: shown ? 1 : 0,
          textShadow:
            "0 0 18px rgba(232,195,122,.5), 0 0 46px rgba(232,195,122,.28), 0 0 90px rgba(207,138,10,.2)",
        }}
      >
        {OCCASIONS[i]}
      </span>
      <span className="block text-[24px] sm:text-[30px]">
        par ghar se door?
      </span>
    </p>
  );
}
