import Link from "next/link";
import DriftingLifafas from "@/components/DriftingLifafas";
import LifafaReveal from "@/components/LifafaReveal";
import { OCCASION_LIST } from "@/lib/design";
import { POSTS } from "@/lib/posts";

const STEPS = [
  {
    n: "1",
    h: "Choose the paper",
    p: "Jaali, mor, genda or plain foil, in the colour you'd actually pick up at the shop.",
  },
  {
    n: "2",
    h: "Fill it",
    p: "Tap notes in one at a time. Add the one-rupee coin and a mithai, and write what you'd say.",
  },
  {
    n: "3",
    h: "Pay them, then send",
    p: "Your UPI app opens and you pay them directly. Then you get a link to send.",
  },
];

const FAQ = [
  {
    q: "Does it cost anything?",
    a: "No. There's no fee and no cut — we never touch the amount, so there's nothing to take a percentage of.",
  },
  {
    q: "Do I need to sign up?",
    a: "No. There are no accounts. Make the lifafa, get the link, send it.",
  },
  {
    q: "Where does the money actually go?",
    a: "Straight from your UPI app to their bank account. It never passes through this site — we have no wallet and no payment gateway.",
  },
  {
    q: "Can you tell whether I paid?",
    a: "No, and we won't pretend otherwise. UPI apps don't report back to websites. That's why we ask you afterwards, and why you can skip the question.",
  },
  {
    q: "Do I need their UPI ID?",
    a: "Yes — there's no way around it, and no directory to look it up in. \"Sending you something, what's your UPI?\" does the job.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* hero */}
      <section className="relative overflow-hidden border-b border-ivory-edge/70">
        <DriftingLifafas />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-16 text-center sm:py-24">
          <h1 className="mx-auto max-w-xl font-display text-4xl leading-[1.35] text-maroon sm:text-5xl sm:leading-[1.3]">
            Send the envelope, not just the amount
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Make a lifafa the way you would at home — pick the paper, tuck the
            notes in, add the one-rupee coin. Pay them directly over UPI, then
            send the whole thing as a link.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/make"
              className="rounded-full bg-maroon px-9 py-4 text-lg font-semibold text-ivory shadow-lg shadow-maroon/20 transition hover:bg-maroon-deep"
            >
              Make a lifafa
            </Link>
            <p className="text-[13px] text-ink-faint">
              Free · no signup · we never touch the money
            </p>
          </div>
        </div>
      </section>

      {/* the object itself */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <div className="rounded-3xl border border-ivory-edge bg-ivory-deep/40 px-2 py-8">
          <LifafaReveal
            s={{
              designId: "brocade-jaali",
              paletteId: "rani",
              textureId: "handmade",
              notes: [500, 500, 100].map((denom, key) => ({ denom, key })),
              coin: true,
              sweetId: "motichoor",
              occasionLabel: "शादी",
              messagePeek:
                "नई शुरुआत की बहुत-बहुत शुभकामनाएँ। हमेशा ऐसे ही खुश रहो।",
              name: "अनन्या",
              salutation: "प्रिय",
              lang: "hi",
            }}
          />
        </div>
        <p className="mt-4 text-center text-sm text-ink-faint">
          Tap it. This is what they get.
        </p>
      </section>

      {/* how it works */}
      <section className="border-y border-ivory-edge/70 bg-ivory-deep/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-16">
          <h2 className="text-center font-display text-3xl text-maroon">
            Three steps, about a minute
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center sm:text-left">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-marigold font-display text-lg text-night">
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold text-ink">{s.h}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* occasions */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <h2 className="text-center font-display text-3xl text-maroon">
          For every mauka
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-relaxed text-ink-soft">
          Each one comes with words already written, if you want them. Change
          them, or write your own — including your own heading.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {OCCASION_LIST.map((o) => (
            <Link
              key={o.id}
              href="/make"
              className="rounded-full border border-ivory-edge bg-white/60 px-4 py-2 text-sm text-ink-soft transition hover:border-marigold hover:text-ink"
            >
              {o.hi} <span className="text-ink-faint">· {o.en}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* trust */}
      <section className="border-y border-ivory-edge/70 bg-ivory-deep/40">
        <div className="mx-auto w-full max-w-3xl px-5 py-16">
          <h2 className="text-center font-display text-3xl text-maroon">
            We stay out of your money
          </h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-peacock">It&apos;s free</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                No fee, no cut, no premium tier. We never handle the amount, so
                there is nothing for us to take a percentage of.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-peacock">It&apos;s private</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                No accounts, no phone number, no email. Your lifafa link is
                unguessable and is never indexed by search engines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-peacock">It&apos;s peer to peer</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                The money goes from your bank to theirs through your own UPI
                app. We have no wallet and no gateway to route it through.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm">
            <Link href="/blog/is-it-safe" className="text-peacock underline underline-offset-2">
              Read the straight answer on safety
            </Link>
          </p>
        </div>
      </section>

      {/* blog */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl text-maroon">From the blog</h2>
          <Link href="/blog" className="text-sm text-peacock underline underline-offset-2">
            All posts
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-xl border border-ivory-edge bg-white/60 p-5 transition hover:border-marigold"
            >
              <span className="text-[11px] uppercase tracking-[0.16em] text-marigold">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display text-lg leading-snug text-ink group-hover:text-maroon">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-ivory-edge/70 bg-ivory-deep/40">
        <div className="mx-auto w-full max-w-2xl px-5 py-16">
          <h2 className="text-center font-display text-3xl text-maroon">
            Questions people ask
          </h2>
          <div className="mt-8 divide-y divide-ivory-edge">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                  <span className="inline-block w-5 text-marigold transition group-open:rotate-90">
                    ›
                  </span>
                  {f.q}
                </summary>
                <p className="mt-2 pl-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/make"
              className="inline-block rounded-full bg-maroon px-9 py-4 text-lg font-semibold text-ivory transition hover:bg-maroon-deep"
            >
              Make a lifafa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
