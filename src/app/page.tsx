import Link from "next/link";
import HeroDark from "@/components/HeroDark";
import { OCCASION_LIST } from "@/lib/design";
import { TEMPLATE_FESTIVALS } from "@/lib/templates";
import { POSTS } from "@/lib/posts";

const STEPS = [
  {
    n: "1",
    h: "Choose the paper",
    p: "Twenty-one papers: brocade jaali, bandhani, diya rows, khadi, in fourteen colours and five textures.",
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
    a: "No. There's no fee and no cut. We never touch the amount, so there's nothing to take a percentage of.",
  },
  {
    q: "Do I need to sign up?",
    a: "No. There are no accounts. Make the lifafa, get the link, send it.",
  },
  {
    q: "Where does the money actually go?",
    a: "Straight from your UPI app to their bank account. It never passes through this site. We have no wallet and no payment gateway.",
  },
  {
    q: "Can you tell whether I paid?",
    a: "No, and we won't pretend otherwise. UPI apps don't report back to websites. That's why we ask you afterwards, and why you can skip the question.",
  },
  {
    q: "Do I need their UPI ID?",
    a: "Yes, and there's no directory to look it up in. \"Sending you something, what's your UPI?\" does the job.",
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
                <p className="mt-1.5 text-sm leading-relaxed opacity-80">{s.p}</p>
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
        <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-relaxed opacity-80">
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
        <div className="mx-auto w-full max-w-5xl px-5 py-20">
          <h2 className="text-center font-display text-3xl">
            We stay out of your money
          </h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-marigold-soft">It&apos;s free</h3>
              <p className="mt-1.5 text-sm leading-relaxed opacity-80">
                No fee, no cut, no premium tier. We never handle the amount, so
                there is nothing for us to take a percentage of.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-marigold-soft">It&apos;s private</h3>
              <p className="mt-1.5 text-sm leading-relaxed opacity-80">
                No accounts, no phone number, no email. Your lifafa link is
                unguessable and is never indexed by search engines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-marigold-soft">It&apos;s peer to peer</h3>
              <p className="mt-1.5 text-sm leading-relaxed opacity-80">
                The money goes from your bank to theirs through your own UPI
                app. We have no wallet and no gateway to route it through.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm">
            <Link href="/blog/is-it-safe" className="text-marigold-soft underline underline-offset-2">
              Read the straight answer on safety
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
