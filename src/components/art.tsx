import type { Coin, EnvelopeStyle, Mithai } from "@/lib/options";

/* Screen-printed pattern fills. Each is an SVG <pattern> laid over the paper
   colour in gold foil, the way real shagun envelopes are stamped. */
export function PatternDefs() {
  return (
    <defs>
      <linearGradient id="foil" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8a6b12" />
        <stop offset="35%" stopColor="#f4dc8c" />
        <stop offset="55%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#f0d67a" />
      </linearGradient>

      <pattern id="p-jaali" width="28" height="28" patternUnits="userSpaceOnUse">
        <path
          d="M14 0 L28 14 L14 28 L0 14 Z"
          fill="none"
          stroke="url(#foil)"
          strokeWidth="1.1"
        />
        <circle cx="14" cy="14" r="3.2" fill="none" stroke="url(#foil)" strokeWidth="1.1" />
      </pattern>

      <pattern id="p-peacock" width="34" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M17 4 C26 12 26 26 17 36 C8 26 8 12 17 4 Z"
          fill="none"
          stroke="url(#foil)"
          strokeWidth="1.1"
        />
        <circle cx="17" cy="15" r="4" fill="none" stroke="url(#foil)" strokeWidth="1.2" />
        <circle cx="17" cy="15" r="1.6" fill="url(#foil)" />
      </pattern>

      <pattern id="p-marigold" width="30" height="30" patternUnits="userSpaceOnUse">
        <g stroke="url(#foil)" strokeWidth="1" fill="none">
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse
              key={i}
              cx="15"
              cy="15"
              rx="3"
              ry="8.5"
              transform={`rotate(${i * 22.5} 15 15)`}
            />
          ))}
        </g>
        <circle cx="15" cy="15" r="2.2" fill="url(#foil)" />
      </pattern>

      <pattern id="p-foil" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="9" cy="9" r="1.1" fill="url(#foil)" />
      </pattern>
    </defs>
  );
}

export const patternFill: Record<EnvelopeStyle, string> = {
  jaali: "url(#p-jaali)",
  peacock: "url(#p-peacock)",
  marigold: "url(#p-marigold)",
  foil: "url(#p-foil)",
};

/* ── Mithai ───────────────────────────────────────────────────────────── */

export function MithaiArt({ id, className }: { id: Mithai; className?: string }) {
  const common = { className, viewBox: "0 0 64 64", "aria-hidden": true } as const;
  switch (id) {
    case "ladoo":
      return (
        <svg {...common}>
          <circle cx="32" cy="34" r="22" fill="#e8a33d" />
          <circle cx="32" cy="34" r="22" fill="none" stroke="#c9761c" strokeWidth="2" />
          {/* boondi texture */}
          {[
            [22, 26], [34, 22], [44, 30], [26, 38], [38, 40], [30, 32],
            [46, 42], [20, 44], [34, 50], [44, 20],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.1" fill="#f2b84b" opacity="0.85" />
          ))}
          <circle cx="27" cy="27" r="2" fill="#fff" opacity="0.5" />
        </svg>
      );
    case "barfi":
      return (
        <svg {...common}>
          <path d="M32 10 L56 32 L32 54 L8 32 Z" fill="#f6e9d2" stroke="#d8c19a" strokeWidth="2" />
          <path d="M32 14 L52 32 L32 50 L12 32 Z" fill="none" stroke="#c9a227" strokeWidth="1" />
          {/* silver varq */}
          <path d="M32 10 L56 32 L32 40 Z" fill="#e8e8ea" opacity="0.55" />
          <circle cx="32" cy="32" r="3" fill="#c42b1c" />
        </svg>
      );
    case "jalebi":
      return (
        <svg {...common}>
          <path
            d="M32 12 C46 12 52 22 48 32 C44 42 30 44 26 36 C23 30 28 24 34 26 C38 27 39 32 36 34"
            fill="none"
            stroke="#e8a33d"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M32 12 C46 12 52 22 48 32 C44 42 30 44 26 36 C23 30 28 24 34 26 C38 27 39 32 36 34"
            fill="none"
            stroke="#f2b84b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M20 44 C28 50 40 50 48 44" fill="none" stroke="#c9761c" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "kaju-katli":
      return (
        <svg {...common}>
          <path d="M12 34 L32 16 L52 34 L32 48 Z" fill="#f3e7cf" stroke="#ddc9a4" strokeWidth="2" />
          <path d="M12 34 L32 16 L52 34" fill="#e8e8ea" opacity="0.6" />
          <path d="M22 30 L32 22 L42 30" fill="none" stroke="#c9a227" strokeWidth="1.2" />
          <circle cx="32" cy="34" r="2.4" fill="#0f6e5c" opacity="0.7" />
        </svg>
      );
  }
}

/* ── Coin ─────────────────────────────────────────────────────────────── */

export function CoinArt({ id, className }: { id: Coin; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <radialGradient id={`coin-${id}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor="#f4f1e6" />
          <stop offset="55%" stopColor="#c8c4b4" />
          <stop offset="100%" stopColor="#8e8a7c" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill={`url(#coin-${id})`} />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#6f6b5e" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="21" fill="none" stroke="#6f6b5e" strokeWidth="1" opacity="0.6" />
      {/* milled edge */}
      <g stroke="#6f6b5e" strokeWidth="1.2" opacity="0.7">
        {Array.from({ length: 36 }, (_, i) => {
          const a = (i * Math.PI) / 18;
          return (
            <line
              key={i}
              x1={32 + Math.cos(a) * 24}
              y1={32 + Math.sin(a) * 24}
              x2={32 + Math.cos(a) * 26}
              y2={32 + Math.sin(a) * 26}
            />
          );
        })}
      </g>
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontSize={id === "1" ? "26" : "22"}
        fontWeight="700"
        fill="#4b4739"
        fontFamily="Georgia, serif"
      >
        {id}
      </text>
      <text x="32" y="19" textAnchor="middle" fontSize="9" fill="#4b4739" fontFamily="Georgia, serif">
        ₹
      </text>
    </svg>
  );
}
