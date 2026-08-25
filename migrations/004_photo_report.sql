-- Phase 5: a photo tucked into the lifafa, and a way to kill an abusive one.
--
-- photo_key is a nanoid pointing at an object in a PRIVATE storage bucket. It
-- is deliberately not derived from the slug: if the bucket were ever flipped
-- public by accident, a slug harvested from a forwarded WhatsApp message must
-- still not address the object.
alter table lifafas add column if not exists photo_key    text;
alter table lifafas add column if not exists reported_at  timestamptz;
alter table lifafas add column if not exists report_count integer not null default 0;
