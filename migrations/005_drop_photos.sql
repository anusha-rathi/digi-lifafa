-- Photos are gone. They contradicted SPEC S10, whose do-not-collect list names
-- payment screenshots explicitly, and shipping them turned an app that held
-- 500 characters of text into an anonymous image host behind shareable public
-- links. The storage bucket is deleted; this drops the reference.
--
-- reported_at and report_count STAY: the report route is still worth having,
-- it just flags for a human now rather than auto-blocking, since text is
-- already bounded and auto-block on one report is a griefing vector.
alter table lifafas drop column if exists photo_key;
