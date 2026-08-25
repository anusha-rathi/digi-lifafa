/* What happens in the two seconds after a lifafa opens.
 *
 * The point of this is that it does nothing useful. It carries no money, no
 * message and no information. It exists so that opening the envelope is worth
 * doing, which is the whole difference between a gift and a bank transfer.
 *
 * The sender picks one while building. Null is a legitimate answer: some
 * lifafas want to be quiet.
 */

export type CelebrationSpec = {
  id: string;
  hi: string;
  hn: string;
  en: string;
  /** Which occasions this is the natural default for. */
  suits: string[];
};

export const CELEBRATION_LIST: CelebrationSpec[] = [
  {
    id: "petals",
    hi: "गेंदे की पंखुड़ियाँ",
    hn: "gende ki pankhudiyan",
    en: "Marigold Petals",
    suits: ["wedding", "griha", "teej", "janmashtami", "onam"],
  },
  {
    id: "diyas",
    hi: "दीये जलते हुए",
    hn: "diye jalte hue",
    en: "Diyas Lighting",
    suits: ["diwali", "ganesh"],
  },
  {
    id: "phuljhari",
    hi: "फुलझड़ी",
    hn: "phuljhari",
    en: "Sparkler",
    suits: ["diwali", "birthday", "eid"],
  },
  {
    id: "rakhi-thread",
    hi: "राखी के धागे",
    hn: "rakhi ke dhaage",
    en: "Rakhi Threads",
    suits: ["rakhi"],
  },
  {
    id: "coins",
    hi: "सिक्कों की बारिश",
    hn: "sikkon ki baarish",
    en: "Raining Coins",
    suits: ["baby", "birthday"],
  },
];

const byId = new Map(CELEBRATION_LIST.map((c) => [c.id, c]));

export const celebrationById = (id: string | null | undefined) =>
  id ? byId.get(id) ?? null : null;

/** The one that fits the occasion, so the sender rarely has to choose. */
export const celebrationFor = (occasion: string | null | undefined): string | null => {
  if (!occasion) return null;
  return CELEBRATION_LIST.find((c) => c.suits.includes(occasion))?.id ?? null;
};
