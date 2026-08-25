import Link from "next/link";
import LifafaReveal from "@/components/LifafaReveal";

/* Variant A: the lifafa on the ground it was designed against.
   The envelope art was drawn for #140c0b with gold foil catching light. On
   ivory it looks like a stationery catalogue. This puts it back. */
export default function HeroDark() {
  return (
    <section className="lf-stage relative overflow-hidden">
      {/* foil glow behind the envelope, not a floating-envelope collage */}
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-70 blur-[90px]"
        style={{ background: "radial-gradient(circle, #7b1e2b 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-3xl px-5 pt-10 pb-14 text-center sm:pt-14">
        <p className="text-[13px] text-[#c2996a]">
          शगुन का लिफ़ाफ़ा
        </p>

        <div className="mt-6">
          <LifafaReveal
            onDark
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

        <h1 className="mx-auto mt-9 max-w-lg font-display text-[34px] font-bold leading-[1.22] text-[#f6e9d6] sm:text-[44px]">
          Ek lifafa. Ek link. <span className="text-[#e8c37a]">Baaki sab wahi.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-[#c9ab8c]">
          Pick the paper, tuck the notes in, add the one-rupee coin. Pay them
          straight over UPI, then send the whole envelope as a link.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            href="/make"
            className="rounded-full bg-[#e8c37a] px-10 py-4 text-lg font-semibold text-[#3a1a1c] transition hover:bg-[#f2dcae]"
          >
            Make a lifafa
          </Link>
          <p className="text-[13px] text-[#8d7461]">
            Free · no signup · we never touch the money
          </p>
        </div>
      </div>
    </section>
  );
}
