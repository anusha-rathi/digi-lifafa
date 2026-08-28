import { z } from "zod";
import { BORDER_LIST } from "@/lib/borders";
import { CELEBRATION_LIST } from "@/lib/celebrations";
import { MOTIF_LIST } from "@/lib/motifs";
import {
  DESIGN_LIST,
  PALETTE_LIST,
  TEXTURE_LIST,
  ALL_SWEETS,
  OCCASION_LIST,
  SALUTATION_LIST,
} from "@/lib/design";
import {
  DENOMINATIONS,
  HEADING_MAX,
  MAX_PAISE,
  MESSAGE_MAX,
  MIN_PAISE,
  NAME_MAX,
  totalPaise,
} from "@/lib/limits";
import { cleanMessage } from "@/lib/sanitise";

/* SPEC S5 — every write is validated HERE, on the server. Client validation
   is UX. The allowlists are the design catalogue's own ids, so a value that
   isn't a real paper, palette, texture or mithai can never be stored. */

const idsOf = (xs: readonly { id: string }[]) =>
  xs.map((x) => x.id) as unknown as [string, ...string[]];

// SPEC S5 — lowercased, trimmed, and shaped like a real VPA.
export const vpaSchema = z
  .string()
  .trim()
  .toLowerCase()
  .regex(/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, "That doesn't look like a UPI ID");

const nameSchema = z.string().trim().min(1, "Needed").max(NAME_MAX);

export const createSchema = z
  .object({
    lang: z.enum(["hi", "hn", "en"]).default("hi"),
    designId: z.enum(idsOf(DESIGN_LIST)),
    paletteId: z.enum(idsOf(PALETTE_LIST)),
    textureId: z.enum(idsOf(TEXTURE_LIST)),
    // Null renders exactly what existing lifafas render, so null stays legal.
    borderId: z.enum(idsOf(BORDER_LIST)).nullable().default(null),
    motifId: z.enum(idsOf(MOTIF_LIST)).nullable().default(null),
    celebrationId: z.enum(idsOf(CELEBRATION_LIST)).nullable().default(null),
    sweetId: z.enum(idsOf(ALL_SWEETS)).nullable().default(null),
    occasion: z.enum(idsOf(OCCASION_LIST)).nullable().default(null),
    customHeading: z.string().trim().max(HEADING_MAX).default(""),
    salutation: z.enum(SALUTATION_LIST as [string, ...string[]]),
    senderName: nameSchema,
    receiverName: nameSchema,
    message: z.string().max(MESSAGE_MAX),
    coin: z.boolean().default(false),
    // The nek is a stack of notes, not a typed number. Only real
    // denominations count, and the length is capped so one request can't
    // carry a hundred thousand entries.
    notes: z
      .array(
        z
          .number()
          .int()
          .refine((n) => (DENOMINATIONS as readonly number[]).includes(n), "Not a note"),
      )
      .max(200),
    // null when the sender chose "just the lifafa" — no UPI ID, no QR,
    // no pay screen. The lifafa is then a greeting and nothing more.
    payeeVpa: vpaSchema.nullable().default(null),
  })
  .transform((v) => {
    const { text, removed } = cleanMessage(v.message);
    return {
      ...v,
      message: text,
      urlsRemoved: removed,
      amountPaise: totalPaise(v.notes, v.coin),
    };
  })
  // A nek only has to be there when there is a payment to make.
  .refine((v) => v.payeeVpa === null || v.amountPaise >= MIN_PAISE, {
    message: "Put at least one note in, an empty lifafa isn't shagun",
    path: ["notes"],
  })
  .refine((v) => v.amountPaise <= MAX_PAISE, {
    message: "₹21,000 is the ceiling here",
    path: ["notes"],
  });

export type CreateParsed = z.output<typeof createSchema>;

/* SPEC S4 — only these two fields are ever written after creation, each once,
   and only with a valid owner_token. A UTR is twelve digits; we cannot check
   it against anything, which is exactly why it is never called "verified". */
export const markSchema = z
  .object({
    paymentMarked: z.enum(["paid", "skipped"]),
    utr: z
      .string()
      .trim()
      .regex(/^\d{12}$/, "A UPI reference is 12 digits")
      .nullable()
      .default(null),
  })
  // "I skipped the payment, and here is its reference number" is not a state
  // that can exist. Rejecting it here keeps the row honest, so the receiver
  // page can never render a payment reference under a skipped payment.
  .refine((v) => v.paymentMarked === "paid" || v.utr === null, {
    message: "A reference number only makes sense with a payment",
    path: ["utr"],
  });
