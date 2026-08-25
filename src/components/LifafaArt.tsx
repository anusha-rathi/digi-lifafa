import Motif from "@/components/Motif";
import { flapMask } from "@/lib/flap";
import { borderFor } from "@/lib/borders";
import { designById, motifFor, paperStyle } from "@/lib/design";
import { motifById } from "@/lib/motifs";
import { templateById } from "@/lib/templates";
import { SCATTER } from "@/lib/decor";

/* One lifafa, drawn at whatever size the box gives it.
 *
 * Same four layers as the real envelope: paper, border, motif, and the
 * scalloped flap standing above the pocket. */
export function LifafaShape({
  id,
  className,
  style,
  motifSize = 30,
}: {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  motifSize?: number;
}) {
  const t = templateById(id);
  if (!t) return null;
  const { pal, image, size } = paperStyle(t.designId, t.paletteId, t.textureId);
  const gold = motifFor(pal.lace, pal.base);
  const border = borderFor(t.borderId, designById(t.designId).frame);
  const motif = motifById(t.motifId);
  const paper = {
    backgroundColor: pal.base,
    backgroundImage: image,
    backgroundSize: size,
  };

  return (
    <div className={`relative ${className ?? ""}`} style={style}>
      <div
        className="absolute inset-x-0 top-0 h-[52%]"
        style={{ ...paper, filter: "brightness(0.88)", ...flapMask }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[64%] overflow-hidden rounded-[3px] shadow-[0_16px_28px_-10px_rgba(0,0,0,.5)]"
        style={paper}
      >
        {border && (
          <div
            className="pointer-events-none absolute inset-[4px]"
            style={border.f(gold, pal.base)}
          />
        )}
        {motif && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Motif
              spec={motif}
              gold={gold}
              paper={pal.base}
              size={motifSize}
              opacity={0.95}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function LifafaBackdrop({
  opacity = 0.16,
  lift = false,
}: {
  opacity?: number;
  /** Dark grounds swallow the darker papers; lift keeps them legible. */
  lift?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        opacity,
        filter: lift ? "brightness(1.45) saturate(1.15)" : undefined,
      }}
      aria-hidden
    >
      {SCATTER.map((s) => (
        <LifafaShape
          key={s.id}
          id={s.id}
          motifSize={22}
          className="absolute"
          style={{
            left: `${s.l}%`,
            top: `${s.t}%`,
            /* widths track the viewport so a phone does not get a 250px
               envelope across two thirds of its screen */
            width: `clamp(${Math.round(s.w * 0.46)}px, ${(s.w / 12).toFixed(1)}vw, ${s.w}px)`,
            aspectRatio: "100 / 63",
            transform: `rotate(${s.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}
