-- Phase 4: the sender chooses what happens when the lifafa is opened.
-- Nullable, no backfill: null means the quiet opening, which is what every
-- existing lifafa already does.
alter table lifafas add column if not exists celebration_id text;
