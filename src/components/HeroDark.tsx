import Link from "next/link";
import LifafaFan from "@/components/LifafaFan";
import MissedOccasions from "@/components/MissedOccasions";

/* The landing hero. One question, five real lifafas, two clear buttons.
   Everything else that used to be here was explaining, and explaining is what
   made it read like a brochure. */
export default function HeroDark() {
  return (
    <section className="lf-stage relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-55 blur-[120px]"
        style={{ background: "radial-gradient(circle, #7b1e2b 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 pt-14 pb-16 text-center sm:pt-20">
        <MissedOccasions />

        <p className="mx-auto mt-7 max-w-md text-[17px] leading-[1.7] text-[#c9ab8c]">
          You cannot fix that. But the thing you actually miss is the lifafa,
          and that one you can still send.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/templates"
            className="w-full max-w-[280px] rounded-full bg-[#e8c37a] px-7 py-4 text-center text-[17px] font-semibold text-[#3a1a1c] transition hover:bg-[#f2dcae] sm:w-auto"
          >
            Pick a ready-made one
          </Link>
          <Link
            href="/make"
            className="w-full max-w-[280px] rounded-full border border-[#e8c37a]/50 px-7 py-4 text-center text-[17px] font-semibold text-[#f2dcae] transition hover:border-[#e8c37a] hover:bg-white/5 sm:w-auto"
          >
            Build your own
          </Link>
        </div>

        <p className="mt-4 text-[13px] text-[#8d7461]">
          Free · no signup · we never touch the money
        </p>

        <div className="mt-12">
          <LifafaFan />
        </div>
      </div>
    </section>
  );
}
