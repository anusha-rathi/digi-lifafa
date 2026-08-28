-- Reporting was a read-then-write: `report_count = (select report_count) + 1`
-- across two round trips. Two concurrent reports both read N and both write
-- N+1, so the count silently under-reports exactly when something is being
-- reported hard. It also overwrote reported_at on every call, destroying the
-- "first reported" timestamp a human moderator actually needs.
--
-- One statement, evaluated in the database, fixes both.

create or replace function increment_report(p_slug text)
returns void
language sql
security definer
set search_path = public
as $$
  update lifafas
     set report_count = report_count + 1,
         -- first report wins; later ones must not reset the clock
         reported_at  = coalesce(reported_at, now())
   where slug = p_slug;
$$;

-- security definer means this runs as the owner, so it must NOT be reachable
-- by the browser's anon key. Only the service role calls it, from a route.
revoke all on function increment_report(text) from public;
revoke all on function increment_report(text) from anon;
revoke all on function increment_report(text) from authenticated;
