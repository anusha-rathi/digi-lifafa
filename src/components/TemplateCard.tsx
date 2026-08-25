import Link from "next/link";
import Motif from "@/components/Motif";
import { borderFor } from "@/lib/borders";
import { designById, motifFor, paperStyle, sweetById } from "@/lib/design";
import { rupees } from "@/lib/limits";
import { motifById } from "@/lib/motifs";
import type { Template } from "@/lib/templates";

/* A small standing envelope, so the grid shows the actual paper rather than a
   name. Not the full Envelope component: that is 330px of fixed geometry built
   for one-at-a-time, and forty of them would be a scroll. */
export default function TemplateCard({ t }: { t: Template }) {
  const { pal, image, size } = paperStyle(t.designId, t.paletteId, t.textureId);
  const gold = motifFor(pal.lace, pal.base);
  const border = borderFor(t.borderId, designById(t.designId).frame);
  const motif = motifById(t.motifId);
  const sweet = sweetById(t.sweetId);
  const total = t.notes.reduce((a, b) => a + b, 0) + (t.coin ? 1 : 0);

  return (
    <Link
      href={`/make?t=${t.id}`}
      className="group flex flex-col gap-2.5 rounded-xl border border-ivory-edge bg-white/60 p-3 transition hover:border-maroon hover:shadow-md"
    >
      <span
        className="relative block aspect-[100/58] w-full overflow-hidden rounded-[3px] shadow-[0_4px_10px_rgba(0,0,0,.18)]"
        style={{ backgroundColor: pal.base, backgroundImage: image, backgroundSize: size }}
      >
        {border && (
          <span className="pointer-events-none absolute inset-[5px] block" style={border.f(gold, pal.base)} />
        )}
        {motif && (
          <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2">
            <Motif spec={motif} gold={gold} paper={pal.base} size={40} opacity={0.95} />
          </span>
        )}
      </span>

      <span className="flex items-baseline justify-between gap-2">
        <span className="font-display text-[15px] leading-tight text-ink group-hover:text-maroon">
          {t.hi}
        </span>
        <span className="shrink-0 text-[13px] text-ink-faint">₹{rupees(total * 100)}</span>
      </span>
      <span className="text-[12px] leading-tight text-ink-faint">
        {t.en}
        {sweet ? ` · ${sweet.en}` : ""}
      </span>
    </Link>
  );
}
