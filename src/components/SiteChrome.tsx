"use client";

import Link from "next/link";
import { occasionById } from "@/lib/design";
import { TEMPLATE_FESTIVALS } from "@/lib/templates";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/make", label: "Make a lifafa" },
  { href: "/templates", label: "Ready-made" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  // The landing hero is a dark stage. An ivory bar sitting on top of it reads
  // as broken chrome, so the header follows the page it is on.
  const p = usePathname();
  const dark = p === "/";

  return (
    <header
      className={
        dark
          ? "sticky top-0 z-50 border-b border-[#e8c37a]/15 bg-[#17090e]/90 backdrop-blur"
          : "sticky top-0 z-50 border-b border-ivory-edge/70 bg-ivory/85 backdrop-blur"
      }
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1.5 px-5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        <Link href="/" className={`text-xl leading-none [font-family:var(--font-wordmark)] ${dark ? "text-[#f2dcae]" : "text-maroon"}`}>
          डिजि लिफ़ाफ़ा
        </Link>
        <nav className="-mx-2 flex flex-wrap items-center gap-x-0.5 text-[13px] sm:mx-0 sm:gap-1 sm:text-sm">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-2.5 py-1.5 transition sm:px-3 ${dark ? "text-[#c9ab8c] hover:bg-white/5 hover:text-[#f6e9d6]" : "text-ink-soft hover:bg-ivory-deep hover:text-ink"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory-edge bg-ivory-deep">
      <div className="mx-auto w-full max-w-5xl px-5 py-12">
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div className="min-w-[200px] flex-1">
            <p className="text-lg text-maroon [font-family:var(--font-wordmark)]">डिजि लिफ़ाफ़ा</p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A shagun ka lifafa you can send as a link. The paper is ours; the
              money stays entirely between you and them.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">Site</span>
            <Link href="/make" className="text-ink-soft hover:text-ink">Make a lifafa</Link>
            <Link href="/templates" className="text-ink-soft hover:text-ink">Ready-made</Link>
            <Link href="/blog" className="text-ink-soft hover:text-ink">Blog</Link>
            <Link href="/about" className="text-ink-soft hover:text-ink">About</Link>
            <Link href="/contact" className="text-ink-soft hover:text-ink">Contact</Link>
          </nav>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">Lifafa for</span>
            {TEMPLATE_FESTIVALS.slice(0, 6).map((f) => {
              const o = occasionById(f);
              return (
                <Link key={f} href={`/templates/${f}`} className="text-ink-soft hover:text-ink">
                  {o ? o.en : f}
                </Link>
              );
            })}
          </nav>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">Legal</span>
            <Link href="/privacy" className="text-ink-soft hover:text-ink">Privacy policy</Link>
            <Link href="/terms" className="text-ink-soft hover:text-ink">Terms &amp; conditions</Link>
          </nav>
        </div>

        {/* SPEC S11, the disclosure, in plain words, on every page */}
        <p className="mt-9 border-t border-ivory-edge/70 pt-6 text-xs leading-relaxed text-ink-faint">
          Digi Lifafa does not process, hold, or transfer money. Payment happens
          directly between two people through their own UPI apps. We cannot
          confirm, reverse, or refund any payment.
        </p>
      </div>
    </footer>
  );
}
