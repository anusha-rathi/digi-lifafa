import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { attachPhoto, byOwnerToken, clearPhoto, putPhoto } from "@/lib/db";
import { MAX_BYTES, preparePhoto } from "@/lib/photo";

// sharp is a native module and the service key must stay server side.
export const runtime = "nodejs";

/** Attach a photo. Owner-gated and write-once. */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const row = await byOwnerToken(token);
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (row.photoKey) {
    return NextResponse.json(
      { error: "This lifafa already has a photo. Remove it first." },
      { status: 409 },
    );
  }

  const len = Number(req.headers.get("content-length") ?? 0);
  if (len > MAX_BYTES + 1024) {
    return NextResponse.json({ error: "That photo is over 6MB." }, { status: 413 });
  }

  const form = await req.formData().catch(() => null);
  const file = form?.get("photo");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No photo attached." }, { status: 400 });
  }

  const prepared = await preparePhoto(new Uint8Array(await file.arrayBuffer()));
  if (!prepared.ok) return NextResponse.json({ error: prepared.reason }, { status: 400 });

  // Not derived from the slug: a slug harvested from a forwarded message must
  // never address the object, even if the bucket were misconfigured.
  const key = `p/${nanoid(32)}`;
  await putPhoto(key, prepared.bytes);

  if (!(await attachPhoto(token, key))) {
    return NextResponse.json({ error: "This lifafa already has a photo." }, { status: 409 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  if (!(await byOwnerToken(token))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await clearPhoto(token);
  return NextResponse.json({ ok: true });
}
