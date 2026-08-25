import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Digi Lifafa: questions, ideas, partnerships, and reporting a lifafa.",
};

const HELLO = "hello@anusha.fyi";
const PARTNERSHIPS = "partnerships@anusha.fyi";

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">Contact</h1>
      <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">
        No form, no ticket number. Two inboxes, both read by a person who cares
        about this, so expect a proper reply rather than a fast one.
      </p>

      <div className="mt-9 space-y-4">
        <div className="rounded-xl border border-ivory-edge bg-white/60 p-6">
          <h2 className="font-display text-2xl text-maroon">Anything at all</h2>
          <a
            href={`mailto:${HELLO}`}
            className="mt-2 inline-block font-mono text-lg text-peacock underline underline-offset-2"
          >
            {HELLO}
          </a>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            A question, something that broke, an idea, a paper you wish we had,
            a mithai we are missing. All of it welcome.
          </p>
        </div>

        <div className="rounded-xl border border-ivory-edge bg-white/60 p-6">
          <h2 className="font-display text-2xl text-maroon">Partnerships</h2>
          <a
            href={`mailto:${PARTNERSHIPS}`}
            className="mt-2 inline-block font-mono text-lg text-peacock underline underline-offset-2"
          >
            {PARTNERSHIPS}
          </a>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            If you make mithai, run a sweet shop, or have something you think
            belongs inside a lifafa, this is the one to write to.
          </p>
        </div>

        <div className="rounded-xl border border-kumkum/30 bg-kumkum/5 p-6">
          <h2 className="font-display text-2xl text-maroon">Reporting a lifafa</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            There is a report link at the bottom of every lifafa, and using it
            is the fastest route: a reported lifafa that carries a photo is
            blocked straight away. If you would rather write, send the link to{" "}
            <a href={`mailto:${HELLO}`} className="text-peacock underline underline-offset-2">
              {HELLO}
            </a>{" "}
            with <strong className="text-ink">report</strong> in the subject.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            What we cannot do is reverse, refund or trace a payment. The money
            never passes through us, so there is nothing on our side to undo.
            For that, contact your bank and use the{" "}
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
          <h2 className="font-display text-2xl text-maroon">Deleting something</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Want a lifafa you made taken down, or a photo removed? A photo you
            can delete yourself from your own lifafa page. For anything else,
            email us the link. See the{" "}
            <Link href="/privacy" className="text-peacock underline underline-offset-2">
              privacy policy
            </Link>{" "}
            for what we hold, which is not much.
          </p>
        </div>
      </div>
    </main>
  );
}
