-- Digi Lifafa — one table. Keep it that way (SPEC §5).
--
-- Money is stored as integer paise, never a float. `notes` is the stack of
-- rupee denominations that make up the nek, so the total can always be
-- re-derived and the two can never disagree.

create table if not exists lifafas (
  id              bigserial primary key,
  slug            text unique not null,          -- public share link
  owner_token     text unique not null,          -- sender's private token
  lang            text not null default 'hi',
  sender_name     text not null,
  receiver_name   text not null,
  salutation      text not null,
  message         text not null,
  occasion        text,
  custom_heading  text not null default '',
  amount_paise    integer not null,
  notes           jsonb not null default '[]'::jsonb,
  coin            boolean not null default false,
  payee_vpa       text,                          -- null = "just the lifafa"
  design_id       text not null,
  palette_id      text not null,
  texture_id      text not null,
  sweet_id        text,
  utr             text,                          -- write-once
  payment_marked  text not null default 'unknown',  -- unknown | paid | skipped
  created_at      timestamptz not null default now(),
  opened_at       timestamptz,                   -- first time receiver opened
  ip_hash         text,                          -- salted hash, abuse only
  is_blocked      boolean not null default false
);

create index if not exists lifafas_slug on lifafas (slug);
create index if not exists lifafas_owner on lifafas (owner_token);

-- SPEC S5 — the cap and the payment states are enforced by the database too,
-- not only by Zod. A bug in a route handler must not be able to store ₹9 lakh.
alter table lifafas drop constraint if exists lifafas_amount_ck;
alter table lifafas add constraint lifafas_amount_ck
  check (amount_paise >= 0 and amount_paise <= 2100000);

alter table lifafas drop constraint if exists lifafas_marked_ck;
alter table lifafas add constraint lifafas_marked_ck
  check (payment_marked in ('unknown', 'paid', 'skipped'));

-- SPEC S2 — the most critical item in the file.
-- RLS on, and DELIBERATELY ZERO POLICIES: default deny means the browser's
-- anon key can neither read nor write a single row. Every read and write goes
-- through a server route holding the service role key, which bypasses RLS.
-- The grant revocation is belt and braces on top of that.
alter table lifafas enable row level security;
revoke all on table lifafas from anon;
revoke all on table lifafas from authenticated;
revoke all on sequence lifafas_id_seq from anon;
revoke all on sequence lifafas_id_seq from authenticated;
