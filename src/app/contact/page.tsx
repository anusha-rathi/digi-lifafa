import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Digi Lifafa: questions, problems, and reporting abuse.",
};

const MAIL = "contact@anusha.fyi";

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">Contact</h1>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">
        There&apos;s no form and no ticket number, just an inbox that a person
        reads.
      </p>

      <div className="mt-9 space-y-4">
        <div className="rounded-xl border border-ivory-edge bg-white/60 p-6">
          <h2 className="font-display text-xl text-maroon">Email us</h2>
          <a
            href={`mailto:${MAIL}`}
            className="mt-2 inline-block font-mono text-lg text-peacock underline underline-offset-2"
          >
            {MAIL}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Questions, something that broke, or an idea. We usually reply within
            a couple of days.
          </p>
        </div>

        <div className="rounded-xl border border-kumkum/30 bg-kumkum/5 p-6">
          <h2 className="font-display text-xl text-maroon">Reporting a lifafa</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            If someone sent you a lifafa that looks like a scam, or is being used
            to harass you, send us the link at{" "}
            <a href={`mailto:${MAIL}`} className="text-peacock underline underline-offset-2">
              {MAIL}
            </a>{" "}
            with the word <strong className="text-ink">report</strong> in the
            subject. We can block a lifafa so the link stops working for
            everyone.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            What we <em>cannot</em> do is reverse, refund or trace a payment.
            The money never passes through us, so there is nothing on our side
            to undo. For that, contact your bank and raise a complaint on the{" "}
            <a
              href="https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-peacock underline underline-offset-2"
            >
              NPCI dispute redressal
            </a>{" "}
            route.
          </p>
        </div>

        <div className="rounded-xl border border-ivory-edge bg-white/60 p-6">
          <h2 className="font-display text-xl text-maroon">Privacy questions</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Want a lifafa you made deleted, or want to know what we hold? Email
            us with the link. See the{" "}
            <Link href="/privacy" className="text-peacock underline underline-offset-2">
              privacy policy
            </Link>{" "}
            for what we store, which is not much.
          </p>
        </div>
      </div>
    </main>
  );
}
