import Link from "next/link";
import LifafaReveal from "@/components/LifafaReveal";

/* Variant B: stay light, stop being beige.
   Real printed paper rather than flat oatmeal: a warm ground, a gold foil rule
   top and bottom, a faint jaali watermark, and marigold used at strength. The
   floating-envelope collage is gone either way; it was landing on the copy. */
export default function HeroPaper() {
  return (
    <section className="relative overflow-hidden border-b border-foil/30">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #b8912f 0 1.5px, transparent 1.5px 26px), repeating-linear-gradient(-45deg, #b8912f 0 1.5px, transparent 1.5px 26px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, #f7e6c8 0%, transparent 62%), linear-gradient(#fdf9f2, #f3e6d2)",
          mixBlendMode: "multiply",
        }}
      />
      {/* foil rules */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#8a6b12,#f4dc8c,#b8912f,#f0d67a,#8a6b12)]" />

      <div className="relative mx-auto w-full max-w-3xl px-5 pt-9 pb-14 text-center">
        <p className="text-[13px] text-marigold-deep">
          शगुन का लिफ़ाफ़ा
        </p>

        <div className="mt-6">
          <LifafaReveal
            s={{
              designId: "brocade-jaali",
              paletteId: "rani",
              textureId: "handmade",
              notes: [500, 500, 100].map((denom, key) => ({ denom, key })),
              coin: true,
              sweetId: "motichoor",
              occasionLabel: "शादी",
              messagePeek: "नई शुरुआत की बहुत-बहुत शुभकामनाएँ। हमेशा ऐसे ही खुश रहो।",
              name: "अनन्या",
              salutation: "प्रिय",
              senderName: "मम्मी",
              lang: "hi",
            }}
          />
        </div>

        <h1 className="mx-auto mt-9 max-w-lg font-display text-[34px] font-bold leading-[1.22] text-maroon-deep sm:text-[44px]">
          Ek lifafa. Ek link. <span className="text-marigold-deep">Baaki sab wahi.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ink">
          Pick the paper, tuck the notes in, add the one-rupee coin. Pay them
          straight over UPI, then send the whole envelope as a link.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            href="/make"
            className="rounded-full bg-maroon px-10 py-4 text-lg font-semibold text-ivory shadow-[0_10px_24px_-8px_rgba(123,30,43,.55)] transition hover:bg-maroon-deep"
          >
            Make a lifafa
          </Link>
          <p className="text-[13px] text-ink-soft">
            Free · no signup · we never touch the money
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#8a6b12,#f4dc8c,#b8912f,#f0d67a,#8a6b12)]" />
    </section>
  );
}
