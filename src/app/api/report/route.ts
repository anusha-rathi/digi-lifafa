import { NextResponse } from "next/server";
import { reportLifafa } from "@/lib/db";
import { hashIp, rateLimit, tooMany } from "@/lib/ratelimit";

// In-memory rate limiting and node:crypto both require the node runtime.
export const runtime = "nodejs";

export async function POST(req: Request) {
  // A report is a row-write triggered by an anonymous stranger holding a slug.
  // Unlimited, it inflates report_count until the moderation queue is
  // meaningless — a way to bury a real report under a fake pile, and to make
  // someone else's lifafa look abusive.
  const who = hashIp(req);
  const v = rateLimit(who, "report", 5, 60 * 60 * 1000); // 5 per hour
  if (!v.ok) return tooMany(v.retryAfter);

  const body = (await req.json().catch(() => null)) as { slug?: string } | null;
  if (!body?.slug || typeof body.slug !== "string" || body.slug.length > 64) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // Always the same answer, so this cannot be used to discover which slugs
  // exist. The increment is atomic and first-report-wins — see migration 006.
  await reportLifafa(body.slug);
  return NextResponse.json({ ok: true });
}
