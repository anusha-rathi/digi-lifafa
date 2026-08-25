import { NextResponse } from "next/server";
import { reportLifafa } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { slug?: string } | null;
  if (!body?.slug) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  // Always the same answer, so this cannot be used to discover which slugs
  // exist. Reporting is idempotent, so there is nothing to rate limit yet.
  await reportLifafa(body.slug);
  return NextResponse.json({ ok: true });
}
