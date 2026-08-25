import { motifById, type MotifSpec } from "@/lib/motifs";

/* Inks a motif for one palette. Tone 0 is the contrast-checked gold, tone 1 a
   darker gold for shading, tone 2 the paper itself so a shape can be cut back
   out. Mirrors SweetSvg's shape so it sits alongside the existing art. */

const darken = (hex: string, t = 0.32) => {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.round(v * (1 - t)).toString(16).padStart(2, "0"),
  );
  return `#${c.join("")}`;
};

export default function Motif({
  spec,
  gold,
  paper,
  size,
  opacity = 1,
}: {
  spec: MotifSpec | string | null;
  gold: string;
  paper: string;
  size: number;
  opacity?: number;
}) {
  const m = typeof spec === "string" ? motifById(spec) : spec;
  if (!m) return null;

  const tone = [gold, darken(gold), paper];

  // The om glyph is type, not a traced path. A font renders it correctly at
  // every size and in every weight; a hand-drawn approximation does not.
  if (m.p.length === 0) {
    return (
      <span
        aria-hidden
        style={{
          display: "block",
          fontSize: size * 0.82,
          lineHeight: 1,
          color: gold,
          opacity,
          fontFamily: "var(--font-body)",
        }}
      >
        {m.hi}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ display: "block", opacity, overflow: "visible" }}
      aria-hidden
    >
      {m.p.map((p, i) => (
        <path
          key={i}
          d={p.d}
          transform={p.rot ? `rotate(${p.rot} 50 50)` : undefined}
          fill={p.w ? "none" : tone[p.t]}
          stroke={p.w ? tone[p.t] : "none"}
          strokeWidth={p.w}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
