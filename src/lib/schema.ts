import { z } from "zod";
import type { Coin } from "@/lib/options";
import {
  COINS,
  DENOMINATIONS,
  ENVELOPE_COLOURS,
  ENVELOPE_STYLES,
  HEADING_MAX,
  MAX_PAISE,
  MESSAGE_MAX,
  MIN_PAISE,
  MITHAIS,
  NAME_MAX,
  OCCASIONS,
  ids,
  totalPaise,
} from "@/lib/options";
import { cleanMessage } from "@/lib/sanitise";

/* SPEC S5 — every write is validated HERE, on the server. Client validation
   is UX. Enums come from the shared allowlists so the two cannot drift. */

// SPEC S5 — lowercased, trimmed, and shaped like a real VPA.
export const vpaSchema = z
  .string()
  .trim()
  .toLowerCase()
  .regex(/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, "That doesn't look like a UPI ID");

const nameSchema = z.string().trim().min(1, "Needed").max(NAME_MAX);

export const createSchema = z
  .object({
    senderName: nameSchema,
    receiverName: nameSchema,
    message: z.string().max(MESSAGE_MAX),
    occasion: z.enum(ids(OCCASIONS)).nullable().default(null),
    customHeading: z.string().trim().max(HEADING_MAX).default(""),
    envelopeStyle: z.enum(ids(ENVELOPE_STYLES)),
    envelopeColour: z.enum(ids(ENVELOPE_COLOURS)),
    mithai: z.enum(ids(MITHAIS)).nullable().default(null),
    coin: z.enum(ids(COINS)).nullable().default(null),
    // The nek is a stack of notes, not a typed number. Only real denominations
    // count, and the length is capped so a request can't carry a hundred
    // thousand entries.
    notes: z
      .array(
        z
          .number()
          .int()
          .refine((n) => (DENOMINATIONS as readonly number[]).includes(n), "Not a note"),
      )
      .max(200),
    payeeVpa: vpaSchema,
  })
  .transform((v) => {
    const { text, removed } = cleanMessage(v.message);
    return { ...v, message: text, urlsRemoved: removed, amountPaise: totalPaise(v.notes, v.coin as Coin | null) };
  })
  .refine((v) => v.amountPaise >= MIN_PAISE, {
    message: "Put at least one note in — an empty lifafa isn't shagun",
    path: ["notes"],
  })
  .refine((v) => v.amountPaise <= MAX_PAISE, {
    message: "₹21,000 is the ceiling here",
    path: ["notes"],
  });

export type CreateInput = z.input<typeof createSchema>;
export type CreateParsed = z.output<typeof createSchema>;

/* SPEC S4 — only these two fields are ever written after creation, each once,
   and only with a valid owner_token. A UTR is twelve digits; we cannot check
   it against anything, which is exactly why it is never called "verified". */
export const markSchema = z.object({
  paymentMarked: z.enum(["paid", "skipped"]),
  utr: z
    .string()
    .trim()
    .regex(/^\d{12}$/, "A UPI reference is 12 digits")
    .nullable()
    .default(null),
});
