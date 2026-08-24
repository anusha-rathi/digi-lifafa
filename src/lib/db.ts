import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { nanoid } from "nanoid";
import type { CreateParsed } from "@/lib/schema";

/* ponytail: local SQLite, not Supabase. Node 24 ships node:sqlite in the
   standard library, so the whole create -> link -> open flow runs on localhost
   with no accounts and no keys. It is NOT the production store: Vercel's
   filesystem is ephemeral and per-instance, so Stage 3 swaps the five queries
   below for Supabase calls behind the same four functions. Everything that
   matters for correctness — unguessable ids, immutable financial fields,
   write-once UTR — is enforced here and moves across unchanged. */

const DB_PATH = process.env.LIFAFA_DB ?? ".data/lifafa.db";

let db: DatabaseSync | null = null;

function conn() {
  if (db) return db;
  mkdirSync(DB_PATH.replace(/\/[^/]+$/, ""), { recursive: true });
  db = new DatabaseSync(DB_PATH);
  db.exec(`
    create table if not exists lifafas (
      id              integer primary key autoincrement,
      slug            text unique not null,
      owner_token     text unique not null,
      sender_name     text not null,
      receiver_name   text not null,
      message         text not null,
      occasion        text,
      custom_heading  text not null default '',
      amount_paise    integer not null,
      notes           text not null,
      payee_vpa       text not null,
      envelope_style  text not null,
      envelope_colour text not null,
      mithai          text,
      coin            text,
      utr             text,
      payment_marked  text not null default 'unknown',
      created_at      text not null default (datetime('now')),
      opened_at       text,
      is_blocked      integer not null default 0
    );
    create index if not exists lifafas_slug on lifafas (slug);
    create index if not exists lifafas_owner on lifafas (owner_token);
  `);
  return db;
}

export type Lifafa = {
  slug: string;
  senderName: string;
  receiverName: string;
  message: string;
  occasion: string | null;
  customHeading: string;
  amountPaise: number;
  notes: number[];
  payeeVpa: string;
  envelopeStyle: string;
  envelopeColour: string;
  mithai: string | null;
  coin: string | null;
  utr: string | null;
  paymentMarked: "unknown" | "paid" | "skipped";
  openedAt: string | null;
  isBlocked: boolean;
};

type Row = Record<string, string | number | null>;

const hydrate = (r: Row): Lifafa => ({
  slug: String(r.slug),
  senderName: String(r.sender_name),
  receiverName: String(r.receiver_name),
  message: String(r.message),
  occasion: r.occasion === null ? null : String(r.occasion),
  customHeading: String(r.custom_heading ?? ""),
  amountPaise: Number(r.amount_paise),
  notes: JSON.parse(String(r.notes)) as number[],
  payeeVpa: String(r.payee_vpa),
  envelopeStyle: String(r.envelope_style),
  envelopeColour: String(r.envelope_colour),
  mithai: r.mithai === null ? null : String(r.mithai),
  coin: r.coin === null ? null : String(r.coin),
  utr: r.utr === null ? null : String(r.utr),
  paymentMarked: String(r.payment_marked) as Lifafa["paymentMarked"],
  openedAt: r.opened_at === null ? null : String(r.opened_at),
  isBlocked: Number(r.is_blocked) === 1,
});

/* SPEC S3 — nanoid, never sequential. Two SEPARATE tokens: knowing the public
   slug must tell you nothing about the owner token. */
export function createLifafa(v: CreateParsed) {
  const slug = nanoid(16);
  const ownerToken = nanoid(24);
  conn()
    .prepare(
      `insert into lifafas
       (slug, owner_token, sender_name, receiver_name, message, occasion,
        custom_heading, amount_paise, notes, payee_vpa, envelope_style,
        envelope_colour, mithai, coin)
       values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    )
    .run(
      slug,
      ownerToken,
      v.senderName,
      v.receiverName,
      v.message,
      v.occasion,
      v.customHeading,
      v.amountPaise,
      JSON.stringify(v.notes),
      v.payeeVpa,
      v.envelopeStyle,
      v.envelopeColour,
      v.mithai,
      v.coin,
    );
  return { slug, ownerToken };
}

export function bySlug(slug: string): Lifafa | null {
  const r = conn().prepare("select * from lifafas where slug = ?").get(slug) as Row | undefined;
  return r ? hydrate(r) : null;
}

export function byOwnerToken(token: string): Lifafa | null {
  const r = conn()
    .prepare("select * from lifafas where owner_token = ?")
    .get(token) as Row | undefined;
  return r ? hydrate(r) : null;
}

export function markOpened(slug: string) {
  // First open only — the receiver reloading must not reset it.
  conn()
    .prepare("update lifafas set opened_at = datetime('now') where slug = ? and opened_at is null")
    .run(slug);
}

/* SPEC S4 — write-once. The `payment_marked = 'unknown'` guard in the WHERE
   clause is what makes it write-once: a second attempt matches no rows.
   Returns false when it changed nothing, so the caller can 409. */
export function markPayment(
  ownerToken: string,
  paymentMarked: "paid" | "skipped",
  utr: string | null,
): boolean {
  const res = conn()
    .prepare(
      `update lifafas set payment_marked = ?, utr = ?
       where owner_token = ? and payment_marked = 'unknown'`,
    )
    .run(paymentMarked, utr, ownerToken);
  return Number(res.changes) > 0;
}
