import { createHash } from "node:crypto";

/* C8 — abuse controls. Two jobs: identify a caller without storing their IP,
 * and refuse to serve them past a budget.
 *
 * This is an IN-MEMORY limiter. Be honest about what that means:
 *   - state is per serverless instance, so the real ceiling is roughly
 *     (limit x number of warm instances), not `limit`
 *   - it resets on deploy and on cold start
 * It is a speed bump that makes casual scripted abuse expensive, not a
 * distributed guarantee. Swapping the two functions at the bottom for Upstash
 * is the only change needed when the keys exist; nothing else imports the Map.
 *
 * Requires the `nodejs` runtime — node:crypto and module-level state both
 * disappear on edge.
 */

const salt = process.env.IP_HASH_SALT;

/* SPEC S7 / C8 — the salt is REQUIRED. Failing loudly at boot is the point:
   a missing salt silently degrades hashed IPs into a rainbow-table lookup
   over the whole IPv4 space, which is not hashing at all. */
if (!salt) {
  throw new Error(
    "Missing IP_HASH_SALT. Generate one with: openssl rand -hex 32",
  );
}

/** Salted hash of the caller's IP. The raw address is never stored or logged. */
export function hashIp(req: Request): string {
  // Vercel and most proxies put the client first in x-forwarded-for.
  const fwd = req.headers.get("x-forwarded-for");
  const ip =
    fwd?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "unknown";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

// Unbounded growth is its own denial of service. Sweep expired entries, and
// hard-cap the map so a spray of unique IPs cannot exhaust memory.
const MAX_KEYS = 20_000;
let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  if (buckets.size > MAX_KEYS) buckets.clear();
}

export type Verdict = { ok: true } | { ok: false; retryAfter: number };

/**
 * Fixed-window counter.
 * @param key    caller identity, already hashed
 * @param name   which budget — separate windows per route
 * @param limit  requests allowed per window
 * @param windowMs window length
 */
export function rateLimit(
  key: string,
  name: string,
  limit: number,
  windowMs: number,
): Verdict {
  const now = Date.now();
  sweep(now);

  const id = `${name}:${key}`;
  const b = buckets.get(id);

  if (!b || b.resetAt <= now) {
    buckets.set(id, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (b.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((b.resetAt - now) / 1000) };
  }
  b.count += 1;
  return { ok: true };
}

/** 429 with the header clients and crawlers actually respect. */
export function tooMany(retryAfter: number) {
  return new Response(
    JSON.stringify({ error: "Too many requests. Try again in a moment." }),
    {
      status: 429,
      headers: {
        "content-type": "application/json",
        "retry-after": String(retryAfter),
      },
    },
  );
}
