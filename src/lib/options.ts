// Single source of truth for every user-choosable enum.
// SPEC S5: envelope_style, mithai and coin must match a hardcoded allowlist.
// Zod validates against these same arrays on the server, so the UI and the
// server can never drift apart. Nothing here is ever used to build a file
// path — the art is inline SVG keyed by these ids (see components/art.tsx).

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

/* Occasions carry a starter message in each language. "custom" carries none —
   the sender writes their own heading and their own words. */
export const OCCASIONS = [
  { id: "diwali", label: "Diwali", hi: "दिवाली",
    starter: "Wishing you a Diwali full of light, sweets and good luck." },
  { id: "rakhi", label: "Raksha Bandhan", hi: "रक्षाबंधन",
    starter: "Happy Rakhi — far away, but always looking out for you." },
  { id: "janmashtami", label: "Janmashtami", hi: "जन्माष्टमी",
    starter: "Happy Janmashtami — may the year be as sweet as makhan-mishri." },
  { id: "teej", label: "Teej", hi: "तीज",
    starter: "Teej blessings — green, glad and full of song." },
  { id: "wedding", label: "Shaadi", hi: "शादी",
    starter: "Congratulations on the new beginning. Be happy, always." },
  { id: "birthday", label: "Birthday", hi: "जन्मदिन",
    starter: "Happy birthday — eat something sweet, on us." },
  { id: "eid", label: "Eid", hi: "ईद",
    starter: "Eid Mubarak — have our share of the sewai too." },
  { id: "baby", label: "New baby", hi: "नन्हा मेहमान",
    starter: "Welcome to the little one. So much love." },
  { id: "griha", label: "Griha pravesh", hi: "गृह प्रवेश",
    starter: "Blessings on the new house. May it always be full." },
  { id: "custom", label: "Something else", hi: "अपना", starter: "" },
] as const;

/* The nek is BUILT, not typed — you tap notes and they stack into the
   envelope, the way you'd actually fill one. The ₹1 coin rides on top. */
export const DENOMINATIONS = [10, 20, 50, 100, 200, 500] as const;

export const MIN_PAISE = 100; // ₹1
export const MAX_PAISE = 2100000; // ₹21,000 — cap keeps large-value fraud unattractive
export const MESSAGE_MAX = 500;
export const NAME_MAX = 40;
export const HEADING_MAX = 40;

export type EnvelopeStyle = (typeof ENVELOPE_STYLES)[number]["id"];
export type EnvelopeColour = (typeof ENVELOPE_COLOURS)[number]["id"];
export type Mithai = (typeof MITHAIS)[number]["id"];
export type Coin = (typeof COINS)[number]["id"];
export type Occasion = (typeof OCCASIONS)[number]["id"];

export const ids = <T extends readonly { id: string }[]>(xs: T) =>
  xs.map((x) => x.id) as unknown as [string, ...string[]];

export const colourOf = (id: EnvelopeColour) =>
  ENVELOPE_COLOURS.find((c) => c.id === id) ?? ENVELOPE_COLOURS[0];

export const occasionOf = (id: Occasion | null) =>
  id ? OCCASIONS.find((o) => o.id === id) ?? null : null;

export const rupees = (paise: number) =>
  (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 2 });

/* Notes are stored as a list of rupee denominations. Total is derived — never
   stored separately, so the two can't disagree. */
export const totalPaise = (notes: readonly number[], coin: Coin | null) =>
  notes.reduce((s, n) => s + n, 0) * 100 + (coin ? Number(coin) * 100 : 0);
