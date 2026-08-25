import Link from "next/link";
import HeroDark from "@/components/HeroDark";
import { OCCASION_LIST } from "@/lib/design";
import { TEMPLATE_FESTIVALS } from "@/lib/templates";
import { POSTS } from "@/lib/posts";

const STEPS = [
  {
    n: "1",
    h: "Choose the lifafa",
    p: "Forty-four ready-made ones, or build your own from 21 papers, 14 colours, 7 borders and 8 motifs.",
  },
  {
    n: "2",
    h: "Fill it",
    p: "Tap the notes in one at a time. Add the one-rupee coin, tuck in a mithai, and write what you would actually say.",
  },
  {
    n: "3",
    h: "Pay them, then send",
    p: "Your UPI app opens and you pay them yourself. Then you get a link to send, and they open the lifafa.",
  },
];

const FAQ = [
  {
    q: "Do they need this website to open it?",
    a: "No. They tap the link and it opens in whatever browser they already have. Nothing to install, no account, and it works on an old phone.",
  },
  {
    q: "I do not have their UPI ID. Can I still send one?",
    a: "Yes. Tick \u201cno nek this time\u201d and you get a lifafa with no money attached, which you can send on its own. The QR is only made when you actually give a UPI ID.",
  },
  {
    q: "How do I get their UPI ID without it being awkward?",
    a: "\u201cSending you something, what\u2019s your UPI?\u201d does it. There is no directory to look it up in, for anyone, so asking is the normal thing rather than a failure.",
  },
  {
    q: "Do you take a cut of the money?",
    a: "No, and we could not if we wanted to. The money goes from your UPI app straight to their bank. It never passes through us, so there is nothing to take a cut of.",
  },
  {
    q: "Can you tell whether I actually paid?",
    a: "No. UPI apps do not report back to websites, so we are blind the moment yours opens. That is why we ask you afterwards, and why you can skip the question.",
  },
  {
    q: "What if I send it to the wrong person?",
    a: "Check the UPI ID before you tap pay, because we cannot reverse anything. We show it in full, large, right above the button, for exactly that reason.",
  },
  {
    q: "Can I change it after sending?",
    a: "No, and that is deliberate. If the amount or the UPI ID could be edited later, somebody could send a lovely lifafa around a family group and swap in their own account afterwards.",
  },
  {
    q: "How long does the link last?",
    a: "As long as you want. Email us and we will delete it whenever you ask.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <HeroDark />

      {/* how it works */}
      <section className="band band--marigold">
        <div className="mx-auto w-full max-w-5xl px-5 py-20">
          <h2 className="text-center font-display text-3xl">
            Three steps, about a minute
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center sm:text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-display text-lg text-ivory">
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold">{s.h}</h3>
                <p className="mt-2 text-[16px] leading-relaxed opacity-90">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* occasions */}
      <section className="band band--peacock">
        <div className="mx-auto w-full max-w-5xl px-5 py-20">
        <h2 className="text-center font-display text-3xl">
          For every mauka
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-[17px] leading-relaxed">
          Each one comes with words already written, if you want them. Change
          them, or write your own, including your own heading.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {OCCASION_LIST.filter((o) => TEMPLATE_FESTIVALS.includes(o.id)).map((o) => (
            <Link
              key={o.id}
              href={`/templates/${o.id}`}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm transition hover:border-white/60 hover:bg-white/20"
            >
              {o.hi} <span className="opacity-65">· {o.en}</span>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* trust */}
      <section className="band band--maroon">
        <div className="mx-auto w-full max-w-4xl px-5 py-20">
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            We stay out of your money
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            <div className="text-center">
              <p className="font-display text-[30px] leading-tight text-marigold-soft sm:text-[34px]">
                It is free
              </p>
              <p className="mx-auto mt-3 max-w-[15rem] text-[17px] leading-relaxed">
                No fee, no cut, no paid version. Living away is expensive
                enough.
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[30px] leading-tight text-marigold-soft sm:text-[34px]">
                It is private
              </p>
              <p className="mx-auto mt-3 max-w-[15rem] text-[17px] leading-relaxed">
                No account, no password, no phone number. Nothing to sign up
                for.
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[30px] leading-tight text-marigold-soft sm:text-[34px]">
                No money touches us
              </p>
              <p className="mx-auto mt-3 max-w-[15rem] text-[17px] leading-relaxed">
                It goes from your bank to theirs. We have no wallet to hold it
                in.
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-[15px]">
            <Link href="/privacy" className="underline underline-offset-4 hover:text-marigold-soft">
              Read exactly what we store, which is not much
            </Link>
          </p>
        </div>
      </section>

      {/* blog */}
      <section className="band band--paper">
        <div className="mx-auto w-full max-w-5xl px-5 py-20">
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
        </div>
      </section>

      {/* faq */}
      <section className="band band--marigold">
        <div className="mx-auto w-full max-w-2xl px-5 py-20">
          <h2 className="text-center font-display text-3xl">
            Questions people ask
          </h2>
          <div className="mt-8 divide-y divide-black/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  <span className="inline-block w-5 text-maroon transition group-open:rotate-90">
                    ›
                  </span>
                  {f.q}
                </summary>
                <p className="mt-2 pl-5 text-sm leading-relaxed opacity-85">{f.a}</p>
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
