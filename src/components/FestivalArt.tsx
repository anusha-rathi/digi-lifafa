/* Post headers, drawn rather than photographed.
   Stock festival photography is the fastest way to look like the content farms
   this blog is trying to beat, and it carries a licence question on every
   image. These use the same flat-vector language as the mithai and the same
   palette as the envelopes, so a post looks like it came from this site. */

type Props = { className?: string };

const wrap = "block w-full";

/** Pookkalam: the ten concentric flower rings laid for Onam. */
export function PookkalamArt({ className }: Props) {
  const rings = [
    { r: 96, fill: "#0f6e5c" },
    { r: 84, fill: "#e8b23a" },
    { r: 72, fill: "#c42b1c" },
    { r: 60, fill: "#f0d67a" },
    { r: 48, fill: "#7b1e2b" },
    { r: 36, fill: "#e8a33d" },
    { r: 24, fill: "#f6e9d2" },
    { r: 12, fill: "#c9761c" },
  ];
  return (
    <svg viewBox="0 0 320 220" className={`${wrap} ${className ?? ""}`} role="img" aria-label="A pookkalam, the circular flower arrangement laid for Onam">
      <rect width="320" height="220" fill="#f3ebdd" />
      {rings.map((ring, i) => (
        <g key={ring.r}>
          <circle cx="160" cy="118" r={ring.r} fill={ring.fill} />
          {/* petal scallops around each ring */}
          {Array.from({ length: 16 + i }, (_, k) => {
            const a = (k / (16 + i)) * Math.PI * 2;
            return (
              <circle
                key={k}
                cx={160 + Math.cos(a) * ring.r}
                cy={118 + Math.sin(a) * ring.r}
                r={5 - i * 0.35}
                fill={ring.fill}
              />
            );
          })}
        </g>
      ))}
      <circle cx="160" cy="118" r="6" fill="#4e0f1a" />
      {/* the brass lamp that sits at the centre on Thiruvonam */}
      <path d="M154 96 h12 l-3 8 h-6 z" fill="#b8912f" />
      <ellipse cx="160" cy="94" rx="7" ry="3" fill="#f4dc8c" />
    </svg>
  );
}

/** A rakhi: thread, central disc, and the two tails that get tied. */
export function RakhiArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={`${wrap} ${className ?? ""}`} role="img" aria-label="A rakhi thread with a decorated centre">
      <rect width="320" height="220" fill="#f3ebdd" />
      {/* the thread, looping across the whole width */}
      <path d="M6 110 Q 60 62 110 110 T 210 110 Q 262 158 314 110" fill="none" stroke="#c42b1c" strokeWidth="9" strokeLinecap="round" />
      <path d="M6 110 Q 60 62 110 110 T 210 110 Q 262 158 314 110" fill="none" stroke="#e8a33d" strokeWidth="3.5" strokeLinecap="round" />
      {/* the disc */}
      <circle cx="160" cy="110" r="44" fill="#7b1e2b" />
      <circle cx="160" cy="110" r="44" fill="none" stroke="#c9a227" strokeWidth="3" />
      <circle cx="160" cy="110" r="31" fill="none" stroke="#f0d67a" strokeWidth="2" strokeDasharray="4 5" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return <circle key={i} cx={160 + Math.cos(a) * 38} cy={110 + Math.sin(a) * 38} r="3.4" fill="#f4dc8c" />;
      })}
      <circle cx="160" cy="110" r="15" fill="#e8a33d" />
      <circle cx="160" cy="110" r="6" fill="#4e0f1a" />
      {/* tassels */}
      <path d="M120 148 l-10 34 M132 154 l-4 32 M188 154 l4 32 M200 148 l10 34" stroke="#c42b1c" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Modak on a leaf, the offering Ganesha is given. */
export function ModakArt({ className }: Props) {
  const modak = (x: number, y: number, s: number) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 34 q-30 0 -30 -12 q0 -30 30 -46 q30 16 30 46 q0 12 -30 12 z" fill="#f6e9d2" stroke="#d8bd86" strokeWidth="2.5" />
      <path d="M-24 16 q24 -10 48 0" fill="none" stroke="#d8bd86" strokeWidth="2" />
      <path d="M-18 2 q18 -8 36 0" fill="none" stroke="#d8bd86" strokeWidth="2" />
      <path d="M0 -24 l0 -10" stroke="#c9a227" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 320 220" className={`${wrap} ${className ?? ""}`} role="img" aria-label="Modak arranged on a banana leaf">
      <rect width="320" height="220" fill="#f3ebdd" />
      {/* banana leaf */}
      <path d="M28 150 q132 -46 264 0 q-132 44 -264 0 z" fill="#0f6e5c" />
      <path d="M28 150 q132 -14 264 0" fill="none" stroke="#084a3e" strokeWidth="2" />
      {Array.from({ length: 13 }, (_, i) => (
        <path key={i} d={`M${52 + i * 19} 137 l6 24`} stroke="#084a3e" strokeWidth="1.4" opacity="0.55" />
      ))}
      {modak(104, 132, 0.82)}
      {modak(216, 132, 0.82)}
      {modak(160, 140, 1)}
      {/* durva grass */}
      <path d="M60 146 q10 -20 22 -24 M66 148 q6 -22 20 -26" fill="none" stroke="#2f9880" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** Teej: the jhula, and the green bangles that go with it. */
export function TeejArt({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={`${wrap} ${className ?? ""}`} role="img" aria-label="A decorated swing and green bangles for Teej">
      <rect width="320" height="220" fill="#f3ebdd" />
      {/* branch */}
      <path d="M10 34 q150 -18 300 6" stroke="#5c3a1e" strokeWidth="9" fill="none" strokeLinecap="round" />
      {Array.from({ length: 9 }, (_, i) => (
        <ellipse key={i} cx={38 + i * 32} cy={26 + (i % 3) * 5} rx="12" ry="6" fill="#0f6e5c" transform={`rotate(${-18 + i * 5} ${38 + i * 32} ${26 + (i % 3) * 5})`} />
      ))}
      {/* ropes */}
      <path d="M112 40 l6 84 M208 44 l-6 80" stroke="#c9a227" strokeWidth="4" />
      {/* seat */}
      <rect x="104" y="124" width="112" height="15" rx="4" fill="#7b1e2b" />
      <rect x="104" y="124" width="112" height="15" rx="4" fill="none" stroke="#c9a227" strokeWidth="2" />
      {/* marigold garland along the seat */}
      {Array.from({ length: 11 }, (_, i) => (
        <circle key={i} cx={110 + i * 10} cy={145} r="5" fill={i % 2 ? "#e8a33d" : "#c9761c"} />
      ))}
      {/* green bangles */}
      {[
        [56, 176, 20],
        [76, 182, 16],
        [252, 176, 20],
        [234, 182, 16],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0f6e5c" strokeWidth="6" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2f9880" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

export const FESTIVAL_ART = {
  pookkalam: PookkalamArt,
  rakhi: RakhiArt,
  modak: ModakArt,
  teej: TeejArt,
} as const;

export type FestivalArtKey = keyof typeof FESTIVAL_ART;
