import Motif from "@/components/Motif";
import { flapMask } from "@/lib/flap";
import { borderFor } from "@/lib/borders";
import { designById, motifFor, paperStyle } from "@/lib/design";
import { motifById } from "@/lib/motifs";
import { templateById } from "@/lib/templates";

/* Five real lifafas, fanned out like a hand of cards.
 *
 * Built from actual templates rather than decoration, so the hero is showing
 * the product without describing it, and the papers on screen are ones you can
 * genuinely send. */
const FAN = [
  { id: "onam-kasavu", rot: -14, x: -240, y: 26, z: 1 },
  { id: "rakhi-thread-rani", rot: -7, x: -122, y: 8, z: 2 },
  { id: "diwali-diya-rani", rot: 0, x: 0, y: 0, z: 3 },
  { id: "wedding-damask-gold", rot: 7, x: 122, y: 8, z: 2 },
  { id: "janmashtami-mor", rot: 14, x: 240, y: 26, z: 1 },
];

function One({ id, rot, x, y, z }: (typeof FAN)[number]) {
  const t = templateById(id);
  if (!t) return null;
  const { pal, image, size } = paperStyle(t.designId, t.paletteId, t.textureId);
  const gold = motifFor(pal.lace, pal.base);
  const border = borderFor(t.borderId, designById(t.designId).frame);
  const motif = motifById(t.motifId);
  const paper = { backgroundColor: pal.base, backgroundImage: image, backgroundSize: size };

  return (
    <div
      className="absolute left-1/2 top-0 h-[124px] w-[196px] origin-bottom"
      style={{
        transform: `translateX(-50%) translate(${x}px, ${y}px) rotate(${rot}deg)`,
        zIndex: z,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{
          ...paper,
          filter: "brightness(0.88)",
          ...flapMask,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[64%] overflow-hidden rounded-[3px] shadow-[0_16px_28px_-10px_rgba(0,0,0,.7)]"
        style={paper}
      >
        {border && (
          <div className="pointer-events-none absolute inset-[4px]" style={border.f(gold, pal.base)} />
        )}
        {motif && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Motif spec={motif} gold={gold} paper={pal.base} size={30} opacity={0.95} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function LifafaFan() {
  return (
    <div className="relative mx-auto h-[170px] w-full max-w-3xl scale-[0.62] sm:scale-90 lg:scale-100" aria-hidden>
      {FAN.map((f) => (
        <One key={f.id} {...f} />
      ))}
    </div>
  );
}
