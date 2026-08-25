import Link from "next/link";
import MissedOccasions from "@/components/MissedOccasions";

/* The landing hero.
 *
 * It opens with a question rather than a product, because the product is not
 * interesting and the question is. The envelope preview that used to sit here
 * is gone: showing people what it looks like before they care is the wrong
 * order, and it made the page read as a feature tour. */
export default function HeroDark() {
  return (
    <section className="lf-stage relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[10%] h-[460px] w-[460px] -translate-x-1/2 rounded-full opacity-60 blur-[110px]"
        style={{ background: "radial-gradient(circle, #7b1e2b 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 pt-16 pb-16 text-center sm:pt-24">
        <MissedOccasions />

        <div className="mx-auto mt-10 max-w-xl space-y-5 text-[17px] leading-[1.75] text-[#c9ab8c] sm:text-[18px]">
          <p>
            You cannot fix being far away. Flights are expensive, leave is
            short, and the day passes whether you are there or not.
          </p>
          <p className="text-[#f6e9d6]">
            But the thing you miss is not the sweets or the photos. It is the
            lifafa. Somebody older pressing one into your hand, or now that you
            are the older one, putting it into somebody else&apos;s.
          </p>
          <p>UPI moved the money years ago. It never moved that.</p>
        </div>

        <div className="mt-11 flex flex-col items-center gap-3">
          <Link
            href="/templates"
            className="rounded-full bg-[#e8c37a] px-10 py-4 text-lg font-semibold text-[#3a1a1c] transition hover:bg-[#f2dcae]"
          >
            Bhej dijiye ek lifafa
          </Link>
          <Link
            href="/make"
            className="text-[15px] text-[#c9ab8c] underline underline-offset-4 hover:text-[#f6e9d6]"
          >
            or build one from scratch
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-md font-display text-[19px] leading-relaxed text-[#e8c37a]">
          Living away is expensive. Something that brings you closer to home
          should be free.
        </p>
      </div>
    </section>
  );
}
