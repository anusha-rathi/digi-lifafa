import { NextResponse } from "next/server";
import { createLifafa } from "@/lib/db";
import { createSchema } from "@/lib/schema";

export async function POST(req: Request) {
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

  const { slug, ownerToken } = createLifafa(parsed.data);
  // urlsRemoved is reported back so the sender is TOLD what we stripped (C6),
  // rather than discovering their message was quietly edited.
  return NextResponse.json(
    { slug, ownerToken, urlsRemoved: parsed.data.urlsRemoved },
    { status: 201 },
  );
}
