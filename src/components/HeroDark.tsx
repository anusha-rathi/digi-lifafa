import Link from "next/link";
import { LifafaBackdrop } from "@/components/LifafaArt";
import MissedOccasions from "@/components/MissedOccasions";

/* The landing hero.
 *
 * The lifafas are the background now rather than a strip underneath, and the
 * paragraph that used to explain the question is gone. A page about envelopes
 * should show envelopes before it says anything. */
export default function HeroDark() {
  return (
    <section className="lf-stage relative overflow-hidden">
      <LifafaBackdrop opacity={0.4} lift />
      {/* a scrim only where the words are, so the lifafas stay visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 46% 52% at 50% 50%, rgba(26,12,11,.95) 0%, rgba(26,12,11,.8) 48%, transparent 74%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-20 text-center sm:py-24">
        <MissedOccasions />

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <p className="mt-5 text-[13px] text-[#8d7461]">
          Free · no signup · we never touch the money
        </p>
      </div>
    </section>
  );
}
