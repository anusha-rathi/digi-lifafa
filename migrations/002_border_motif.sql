-- Phase 2: the paper gains a gold border and a central motif.
--
-- Two nullable columns rather than folding the combinations into design_id.
-- Bundling would need one id per combination (21 papers x 7 borders x 8 motifs
-- is about 4,000 enum members in Zod and a 4,000 cell picker) for identical
-- expressiveness.
--
-- No default and no backfill on purpose: NULL is already the correct value for
-- every existing row, because null border plus null motif renders exactly what
-- those lifafas render today. Nothing repoints.

alter table lifafas add column if not exists border_id text;
alter table lifafas add column if not exists motif_id  text;
