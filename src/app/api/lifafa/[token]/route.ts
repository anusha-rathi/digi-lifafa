import { NextResponse } from "next/server";
import { byOwnerToken, markPayment } from "@/lib/db";
import { markSchema } from "@/lib/schema";
import { hashIp, rateLimit, tooMany } from "@/lib/ratelimit";

export const runtime = "nodejs";

/* SPEC S4 — the ONLY mutation in the app. Write-once, owner-token gated, and
   it can never touch payee_vpa, amount, names or the message. */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  /* A 24-char nanoid is far past brute force, so this is not guarding the
     token — it is stopping an unbounded stream of anonymous DB reads, since
     every miss still costs a query. */
  const who = hashIp(req);
  const v = rateLimit(who, "mark", 20, 10 * 60 * 1000); // 20 per 10 min
  if (!v.ok) return tooMany(v.retryAfter);

  const { token } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const parsed = markSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Check the reference number", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (!(await byOwnerToken(token))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const ok = await markPayment(token, parsed.data.paymentMarked, parsed.data.utr);
  if (!ok) {
    return NextResponse.json(
      { error: "This lifafa was already marked. That can only be done once." },
      { status: 409 },
    );
  }
  return NextResponse.json({ ok: true });
}
