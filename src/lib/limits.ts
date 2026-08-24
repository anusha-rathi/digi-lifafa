/* Shared limits. Kept apart from design.ts so the Zod schema can import them
   on the server without pulling the whole design catalogue into the bundle. */

export const MAX_RUPEES = 21000; // cap keeps the app unattractive for large-value fraud
export const MAX_PAISE = MAX_RUPEES * 100;
export const MIN_PAISE = 100; // ₹1
export const MESSAGE_MAX = 500;
export const NAME_MAX = 40;
export const HEADING_MAX = 40;
export const DENOMINATIONS = [10, 20, 50, 100, 200, 500] as const;

export const rupees = (paise: number) =>
  (paise / 100).toLocaleString("en-IN", { maximumFractionDigits: 2 });

export const totalPaise = (notes: readonly number[], coin: boolean) =>
  (notes.reduce((s, n) => s + n, 0) + (coin ? 1 : 0)) * 100;
