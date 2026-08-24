// Single source of truth for every user-choosable enum.
// SPEC S5: envelope_style, mithai and coin must match a hardcoded allowlist.
// Zod validates against these same arrays at Stage 3, so the UI and the server
// can never drift apart. Nothing here is ever used to build a file path — the
// art is inline SVG keyed by these ids (see components/art.tsx).

export const ENVELOPE_STYLES = [
  { id: "jaali", label: "Jaali" },
  { id: "peacock", label: "Mor" },
  { id: "marigold", label: "Genda" },
  { id: "foil", label: "Plain foil" },
] as const;

export const ENVELOPE_COLOURS = [
  { id: "maroon", label: "Maroon", paper: "#7b1e2b", deep: "#4e0f1a" },
  { id: "kumkum", label: "Kumkum", paper: "#c42b1c", deep: "#8e1a0f" },
  { id: "peacock", label: "Peacock", paper: "#0f6e5c", deep: "#084a3e" },
  { id: "indigo", label: "Indigo", paper: "#2b3a67", deep: "#1a2444" },
  { id: "marigold", label: "Marigold", paper: "#c9761c", deep: "#94500d" },
] as const;

export const MITHAIS = [
  { id: "ladoo", label: "Ladoo" },
  { id: "barfi", label: "Barfi" },
  { id: "jalebi", label: "Jalebi" },
  { id: "kaju-katli", label: "Kaju katli" },
] as const;

export const COINS = [
  { id: "1", label: "₹1" },
  { id: "5", label: "₹5" },
  { id: "11", label: "₹11" },
] as const;

export const OCCASIONS = [
  { id: "wedding", label: "Shaadi" },
  { id: "diwali", label: "Diwali" },
  { id: "rakhi", label: "Rakhi" },
  { id: "birthday", label: "Birthday" },
] as const;

// Traditional shagun amounts — always one rupee over a round number, so the
// gift can't be divided and the relationship continues. In paise (SPEC §5).
export const AMOUNT_PRESETS = [10100, 50100, 110100, 210100] as const;

export const MIN_PAISE = 100; // ₹1
export const MAX_PAISE = 2100000; // ₹21,000 — cap keeps large-value fraud unattractive

export type EnvelopeStyle = (typeof ENVELOPE_STYLES)[number]["id"];
export type EnvelopeColour = (typeof ENVELOPE_COLOURS)[number]["id"];
export type Mithai = (typeof MITHAIS)[number]["id"];
export type Coin = (typeof COINS)[number]["id"];
export type Occasion = (typeof OCCASIONS)[number]["id"];

export const ids = <T extends readonly { id: string }[]>(xs: T) =>
  xs.map((x) => x.id) as unknown as [string, ...string[]];

export const colourOf = (id: EnvelopeColour) =>
  ENVELOPE_COLOURS.find((c) => c.id === id) ?? ENVELOPE_COLOURS[0];

export const rupees = (paise: number) =>
  (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 2 });
