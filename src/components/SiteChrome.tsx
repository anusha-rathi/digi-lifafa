import Link from "next/link";

const NAV = [
  { href: "/make", label: "Make a lifafa" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ivory-edge/70 bg-ivory/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="font-display text-xl leading-none text-maroon">
          डिजि लिफ़ाफ़ा
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-ink-soft transition hover:bg-ivory-deep hover:text-ink"
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
    <footer className="mt-20 border-t border-ivory-edge/70 bg-ivory-deep/50">
      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div className="min-w-[200px] flex-1">
            <p className="font-display text-lg text-maroon">डिजि लिफ़ाफ़ा</p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A shagun ka lifafa you can send as a link. The paper is ours; the
              money stays entirely between you and them.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">Site</span>
            <Link href="/make" className="text-ink-soft hover:text-ink">Make a lifafa</Link>
            <Link href="/blog" className="text-ink-soft hover:text-ink">Blog</Link>
            <Link href="/about" className="text-ink-soft hover:text-ink">About</Link>
            <Link href="/contact" className="text-ink-soft hover:text-ink">Contact</Link>
          </nav>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">Legal</span>
            <Link href="/privacy" className="text-ink-soft hover:text-ink">Privacy policy</Link>
            <Link href="/terms" className="text-ink-soft hover:text-ink">Terms &amp; conditions</Link>
          </nav>
        </div>

        {/* SPEC S11 — the disclosure, in plain words, on every page */}
        <p className="mt-9 border-t border-ivory-edge/70 pt-6 text-xs leading-relaxed text-ink-faint">
          Digi Lifafa does not process, hold, or transfer money. Payment happens
          directly between two people through their own UPI apps. We cannot
          confirm, reverse, or refund any payment.
        </p>
      </div>
    </footer>
  );
}
