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
  photoKey: string | null;
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
  photoKey: r.photo_key == null ? null : String(r.photo_key),
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

export async function bySlug(slug: string): Promise<Lifafa | null> {
  const { data } = await db.from(TABLE).select("*").eq("slug", slug).maybeSingle();
  return data ? hydrate(data as Row) : null;
}

export async function byOwnerToken(token: string): Promise<Lifafa | null> {
  const { data } = await db.from(TABLE).select("*").eq("owner_token", token).maybeSingle();
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

export const PHOTO_BUCKET = "lifafa-photos";

/* SPEC S4 again: write-once, owner-gated. The `.is("photo_key", null)` filter
   is what makes it write-once, the same trick markPayment uses. */
export async function attachPhoto(ownerToken: string, key: string): Promise<boolean> {
  const { data, error } = await db
    .from(TABLE)
    .update({ photo_key: key })
    .eq("owner_token", ownerToken)
    .is("photo_key", null)
    .select("slug");
  if (error) throw new Error(`attach failed: ${error.message}`);
  return (data?.length ?? 0) > 0;
}

/** The sender's escape hatch. Removes the object as well as the reference. */
export async function clearPhoto(ownerToken: string): Promise<string | null> {
  const row = await byOwnerToken(ownerToken);
  if (!row?.photoKey) return null;
  await db.storage.from(PHOTO_BUCKET).remove([row.photoKey]);
  await db.from(TABLE).update({ photo_key: null }).eq("owner_token", ownerToken);
  return row.photoKey;
}

export async function putPhoto(key: string, bytes: Buffer) {
  const { error } = await db.storage
    .from(PHOTO_BUCKET)
    .upload(key, bytes, { contentType: "image/jpeg", upsert: false });
  if (error) throw new Error(`upload failed: ${error.message}`);
}

export async function getPhoto(key: string): Promise<ArrayBuffer | null> {
  const { data, error } = await db.storage.from(PHOTO_BUCKET).download(key);
  if (error || !data) return null;
  return data.arrayBuffer();
}

/* A public link plus a user-supplied image needs a kill switch. A report on a
   lifafa that carries a photo blocks it immediately: text is already capped at
   500 characters with links stripped, so an image is the only thing here that
   can do real harm while somebody waits for a human. Unblocking is one click
   in the Supabase dashboard. */
export async function reportLifafa(slug: string): Promise<boolean> {
  const row = await bySlug(slug);
  if (!row) return false;
  const { error } = await db
    .from(TABLE)
    .update({
      reported_at: new Date().toISOString(),
      report_count: (await countReports(slug)) + 1,
      ...(row.photoKey ? { is_blocked: true } : {}),
    })
    .eq("slug", slug);
  if (error) throw new Error(`report failed: ${error.message}`);
  return true;
}

async function countReports(slug: string): Promise<number> {
  const { data } = await db.from(TABLE).select("report_count").eq("slug", slug).maybeSingle();
  return Number((data as { report_count?: number } | null)?.report_count ?? 0);
}
