"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Heading } from "@/lib/posts";

/* The contents tracker. One component, two surfaces.
 *
 * On a wide screen it is a rail in the right margin. On a phone it is a bar
 * under the site header that fills as you read and opens the list when you
 * tap it.
 *
 * The bar is PORTALLED into the header rather than positioned under it. The
 * header is not a fixed height: the nav wraps to a second row somewhere under
 * 640px, so it is about 52px on a wide phone and about 106px on a 320px one.
 * Portalling means the header lays the bar out and there is nothing to
 * measure. The portal target is `#toc-slot` in components/SiteChrome.tsx, and
 * deleting it makes this render nothing rather than throw. */
export default function Contents({ items }: { items: Heading[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const fill = useRef<HTMLDivElement>(null);
  const det = useRef<HTMLDetailsElement>(null);

  useEffect(() => setSlot(document.getElementById("toc-slot")), []);

  useEffect(() => {
    const hdr = document.querySelector("header");
    const art = document.getElementById("article");

    // The header's real height, including the bar we just portalled into it,
    // so scroll-margin-top is exact rather than a guess.
    const ro = hdr
      ? new ResizeObserver(() =>
          document.documentElement.style.setProperty("--hdr", `${hdr.offsetHeight}px`),
        )
      : null;
    if (hdr && ro) ro.observe(hdr);

    // Scroll spy. The reading band runs from under the header down to 40% of
    // the viewport, and the highest heading in it wins. Through a long section
    // the band is empty and the last answer stands, which is what you want.
    const vis = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) vis.add(e.target.id);
          else vis.delete(e.target.id);
        }
        const first = items.find((i) => vis.has(i.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-88px 0px -60% 0px" },
    );
    for (const i of items) {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    }

    /* Progress across the prose, not the document. The document includes the
       CTA and the footer, so document progress reads about 60% at the moment
       you finish reading, which is worse than no bar at all.

       Written straight to the node: one style write per frame, no re-render.
       It is a transform and not a transition, so there is nothing here for
       prefers-reduced-motion to suppress. */
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!art || !fill.current) return;
        const r = art.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        const p = span <= 0 ? 1 : Math.min(1, Math.max(0, -r.top / span));
        fill.current.style.transform = `scaleX(${p})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      ro?.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty("--hdr");
    };
  }, [items]);

  const close = () => {
    if (det.current) det.current.open = false;
  };

  const links = (onNav?: () => void) =>
    items.map((i) => (
      <a
        key={i.id}
        href={`#${i.id}`}
        onClick={onNav}
        aria-current={i.id === active ? "location" : undefined}
        className={`block break-words border-l-2 py-1.5 text-[13px] leading-snug transition ${
          i.level === 3 ? "pl-6" : "pl-3"
        } ${
          i.id === active
            ? "border-marigold font-semibold text-maroon"
            : "border-transparent text-ink-soft hover:text-ink"
        }`}
      >
        {i.text}
      </a>
    ));

  return (
    <>
      {/* The rail. display:none below xl, so it is out of the accessibility
          tree too and the two navs are never both announced. */}
      <nav
        aria-label="Contents"
        className="sticky top-20 hidden max-h-[calc(100vh-7rem)] overflow-y-auto xl:block"
      >
        <p className="mb-2 pl-3 text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          Contents
        </p>
        {links()}
      </nav>

      {slot &&
        createPortal(
          /* details/summary rather than a hand-rolled disclosure: it is what
             the homepage FAQ already uses, and it brings tap-to-toggle, Enter
             and Space, and a correctly announced expanded state for free. */
          <details
            ref={det}
            className="group xl:hidden"
            onKeyDown={(e) => e.key === "Escape" && close()}
          >
            <summary className="flex h-9 cursor-pointer list-none items-center gap-2 border-t border-ivory-edge/60 px-5 text-[12px] text-ink-soft marker:hidden">
              <span className="truncate">
                {items.find((i) => i.id === active)?.text ?? "Contents"}
              </span>
              <span className="ml-auto shrink-0 transition group-open:rotate-90">›</span>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-ivory-edge/50"
              >
                <div ref={fill} className="toc-fill h-full bg-marigold" />
              </div>
            </summary>
            <nav
              aria-label="Contents"
              onClick={close}
              className="max-h-[60vh] overflow-y-auto border-t border-ivory-edge/60 bg-ivory px-4 py-2"
            >
              {links(close)}
            </nav>
          </details>,
          slot,
        )}
    </>
  );
}
