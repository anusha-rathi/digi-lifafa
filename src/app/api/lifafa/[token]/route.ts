import { NextResponse } from "next/server";
import { byOwnerToken, markPayment } from "@/lib/db";
import { markSchema } from "@/lib/schema";

/* SPEC S4 — the ONLY mutation in the app. Write-once, owner-token gated, and
   it can never touch payee_vpa, amount, names or the message. */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
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

  if (!byOwnerToken(token)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const ok = markPayment(token, parsed.data.paymentMarked, parsed.data.utr);
  if (!ok) {
    return NextResponse.json(
      { error: "This lifafa was already marked — that can only be done once." },
      { status: 409 },
    );
  }
  return NextResponse.json({ ok: true });
}
