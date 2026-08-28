import { createClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";
import type { CreateParsed } from "@/lib/schema";

/* SPEC S1/S2 — this module is SERVER ONLY. It holds the service role key,
   which bypasses RLS. It must never be imported into a client component; if
   it is, the build will leak the key into the browser bundle.
   `lifafas` has RLS on with zero policies, so the anon key in the browser can
   neither read nor write. Everything goes through here. */

const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

if (!url || !serviceKey) {
  throw new Error(
    "Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY. Run `vercel env pull` first.",
  );
}

const db = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const TABLE = "lifafas";

export type Lifafa = {
  slug: string;
  lang: "hi" | "hn" | "en";
  senderName: string;
  receiverName: string;
  salutation: string;
  message: string;
  occasion: string | null;
  customHeading: string;
  amountPaise: number;
  notes: number[];
  coin: boolean;
  payeeVpa: string | null;
  designId: string;
  paletteId: string;
  textureId: string;
  borderId: string | null;
  motifId: string | null;
  celebrationId: string | null;
  sweetId: string | null;
  utr: string | null;
  paymentMarked: "unknown" | "paid" | "skipped";
  openedAt: string | null;
  isBlocked: boolean;
};

type Row = Record<string, unknown>;

const hydrate = (r: Row): Lifafa => ({
  slug: String(r.slug),
  lang: String(r.lang) as Lifafa["lang"],
  senderName: String(r.sender_name),
  receiverName: String(r.receiver_name),
  salutation: String(r.salutation),
  message: String(r.message),
  occasion: r.occasion == null ? null : String(r.occasion),
  customHeading: String(r.custom_heading ?? ""),
  amountPaise: Number(r.amount_paise),
  notes: (r.notes ?? []) as number[],
  coin: Boolean(r.coin),
  payeeVpa: r.payee_vpa == null ? null : String(r.payee_vpa),
  designId: String(r.design_id),
  paletteId: String(r.palette_id),
  textureId: String(r.texture_id),
  borderId: r.border_id == null ? null : String(r.border_id),
  motifId: r.motif_id == null ? null : String(r.motif_id),
  celebrationId: r.celebration_id == null ? null : String(r.celebration_id),
  sweetId: r.sweet_id == null ? null : String(r.sweet_id),
  utr: r.utr == null ? null : String(r.utr),
  paymentMarked: String(r.payment_marked) as Lifafa["paymentMarked"],
  openedAt: r.opened_at == null ? null : String(r.opened_at),
  isBlocked: Boolean(r.is_blocked),
});

/* SPEC S3 — nanoid, never sequential. Two SEPARATE tokens: knowing the public
   slug must tell you nothing about the owner token. */
export async function createLifafa(v: CreateParsed) {
  const slug = nanoid(16);
  const ownerToken = nanoid(24);

  const { error } = await db.from(TABLE).insert({
    slug,
    owner_token: ownerToken,
    lang: v.lang,
    sender_name: v.senderName,
    receiver_name: v.receiverName,
    salutation: v.salutation,
    message: v.message,
    occasion: v.occasion,
    custom_heading: v.customHeading,
    amount_paise: v.amountPaise,
    notes: v.notes,
    coin: v.coin,
    payee_vpa: v.payeeVpa,
    design_id: v.designId,
    palette_id: v.paletteId,
    texture_id: v.textureId,
    sweet_id: v.sweetId,
    border_id: v.borderId,
    motif_id: v.motifId,
    celebration_id: v.celebrationId,
  });

  if (error) throw new Error(`create failed: ${error.message}`);
  return { slug, ownerToken };
}

/* Every column the receiver page is allowed to see — and deliberately NOT
   owner_token. C1 says the pay screen must be unreachable from the slug; the
   token is what makes it reachable, so it must not even be fetched on this
   path. `select("*")` kept it one careless spread away from the public page. */
// One literal, not a concatenation: supabase-js parses this string at the
// type level, and `a + b` collapses to `string` and breaks the inference.
const PUBLIC_COLUMNS =
  "slug,lang,sender_name,receiver_name,salutation,message,occasion,custom_heading,amount_paise,notes,coin,payee_vpa,design_id,palette_id,texture_id,border_id,motif_id,celebration_id,sweet_id,utr,payment_marked,opened_at,is_blocked" as const;

export async function bySlug(slug: string): Promise<Lifafa | null> {
  const { data } = await db
    .from(TABLE)
    .select(PUBLIC_COLUMNS)
    .eq("slug", slug)
    .maybeSingle();
  return data ? hydrate(data as Row) : null;
}

/* The owner path. Same columns — the caller already holds the token, so
   returning it again would only create another way to leak it. */
export async function byOwnerToken(token: string): Promise<Lifafa | null> {
  const { data } = await db
    .from(TABLE)
    .select(PUBLIC_COLUMNS)
    .eq("owner_token", token)
    .maybeSingle();
  return data ? hydrate(data as Row) : null;
}

export async function markOpened(slug: string) {
  // First open only — the receiver reloading must not reset it.
  await db
    .from(TABLE)
    .update({ opened_at: new Date().toISOString() })
    .eq("slug", slug)
    .is("opened_at", null);
}

/* SPEC S4 — write-once. The `payment_marked = 'unknown'` filter is what makes
   it write-once: a second attempt matches no rows and changes nothing.
   Returns false when nothing changed, so the caller can 409.
   Note this can NEVER touch payee_vpa, amount, the names or the message. */
export async function markPayment(
  ownerToken: string,
  paymentMarked: "paid" | "skipped",
  utr: string | null,
): Promise<boolean> {
  const { data, error } = await db
    .from(TABLE)
    .update({ payment_marked: paymentMarked, utr })
    .eq("owner_token", ownerToken)
    .eq("payment_marked", "unknown")
    .select("slug");

  if (error) throw new Error(`mark failed: ${error.message}`);
  return (data?.length ?? 0) > 0;
}

/* A report flags a lifafa for a human to look at. It deliberately does NOT
   block on its own: the only user content here is 500 characters of text with
   links already stripped, so nothing can do irreversible harm while somebody
   catches up, and auto-blocking on a single report would hand anyone holding a
   link a way to take down someone else's rakhi envelope.
   Blocking is a manual `is_blocked = true` in the Supabase dashboard. */
export async function reportLifafa(slug: string): Promise<boolean> {
  // ONE statement, evaluated in the database (migration 006). The previous
  // version read the count and wrote count+1 across two round trips, so two
  // simultaneous reports both wrote the same number — it under-counted exactly
  // when something was being reported hard. It also stamped reported_at every
  // time, so "when was this first reported" was unrecoverable.
  const { error } = await db.rpc("increment_report", { p_slug: slug });
  if (error) throw new Error(`report failed: ${error.message}`);
  return true;
}
