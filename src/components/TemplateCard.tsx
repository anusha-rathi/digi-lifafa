import Link from "next/link";
import Motif from "@/components/Motif";
import { flapMask } from "@/lib/flap";
import { borderFor } from "@/lib/borders";
import { designById, motifFor, paperStyle, sweetById } from "@/lib/design";
import { rupees } from "@/lib/limits";
import { motifById } from "@/lib/motifs";
import type { Template } from "@/lib/templates";

/* One card in the grid.
 *
 * It used to be a flat rounded rectangle, which read as a colour swatch rather
 * than an envelope, and it was titled with the paper's Hindi design name,
 * which told you nothing about what you were getting. Now it has the scalloped
 * flap the real thing has, and it is labelled with what is actually inside. */
export default function TemplateCard({ t }: { t: Template }) {
  const { pal, image, size } = paperStyle(t.designId, t.paletteId, t.textureId);
  const gold = motifFor(pal.lace, pal.base);
  const border = borderFor(t.borderId, designById(t.designId).frame);
  const motif = motifById(t.motifId);
  const sweet = sweetById(t.sweetId);
  const total = t.notes.reduce((a, b) => a + b, 0) + (t.coin ? 1 : 0);

  const paper = { backgroundColor: pal.base, backgroundImage: image, backgroundSize: size };

  return (
    <Link
      href={`/make?t=${t.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-ivory-edge bg-white/70 p-3 transition hover:-translate-y-0.5 hover:border-maroon hover:shadow-lg"
    >
      <span className="relative block aspect-[100/76] w-full">
        {/* the flap, standing above the pocket, same curve as the real one */}
        <span
          className="absolute inset-x-0 top-0 block h-[58%]"
          style={{
            ...paper,
            filter: "brightness(0.9)",
            ...flapMask,
          }}
        />
        {/* the pocket */}
        <span
          className="absolute inset-x-0 bottom-0 block h-[62%] overflow-hidden rounded-[3px] shadow-[0_6px_14px_-4px_rgba(74,18,28,.4)]"
          style={paper}
        >
          {border && (
            <span className="pointer-events-none absolute inset-[4px] block" style={border.f(gold, pal.base)} />
          )}
          {motif && (
            <span className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2">
              <Motif spec={motif} gold={gold} paper={pal.base} size={34} opacity={0.95} />
            </span>
          )}
        </span>
      </span>

      <span className="flex items-center justify-between gap-2 px-0.5">
        <span className="min-w-0 flex-1 truncate text-[14px] text-ink group-hover:text-maroon">
          {t.en}
          {sweet ? <span className="text-ink-faint"> · {sweet.en}</span> : null}
        </span>
        <span className="shrink-0 font-display text-[15px] text-maroon">
          ₹{rupees(total * 100)}
        </span>
      </span>
    </Link>
  );
}
