import { NextResponse } from "next/server";
import { createLifafa } from "@/lib/db";
import { createSchema } from "@/lib/schema";
import { hashIp, rateLimit, tooMany } from "@/lib/ratelimit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  /* Anonymous, unauthenticated row creation is the app's main abuse surface:
     unlimited, it is both a free-tier exhaustion attack and a supply of
     trustworthy-looking pages on our own domain for someone else's phishing.
     Two windows — a burst allowance and a daily ceiling. */
  const who = hashIp(req);
  const burst = rateLimit(who, "create:burst", 5, 60 * 1000); // 5 a minute
  if (!burst.ok) return tooMany(burst.retryAfter);
  const daily = rateLimit(who, "create:daily", 40, 24 * 60 * 60 * 1000);
  if (!daily.ok) return tooMany(daily.retryAfter);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the form", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { slug, ownerToken } = await createLifafa(parsed.data);
  // urlsRemoved is reported back so the sender is TOLD what we stripped (C6),
  // rather than discovering their message was quietly edited.
  return NextResponse.json(
    { slug, ownerToken, urlsRemoved: parsed.data.urlsRemoved },
    { status: 201 },
  );
}
