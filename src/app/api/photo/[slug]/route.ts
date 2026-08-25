import { bySlug, getPhoto } from "@/lib/db";

export const runtime = "nodejs";

/* The bytes are PROXIED, never redirected to a signed URL.
 *
 * A signed URL is a standalone credential that keeps working for its whole
 * lifetime, so it would survive a block: report an abusive lifafa and the
 * image stays reachable by anyone holding the minted link. Proxying means the
 * is_blocked check runs on every single request, so one report kills the image
 * everywhere on the next load. That property is worth the egress. */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const row = await bySlug(slug);
  // One shape of answer for every failure, so this cannot be used to probe
  // which slugs exist.
  if (!row || row.isBlocked || !row.photoKey) {
    return new Response("Not found", { status: 404 });
  }

  const bytes = await getPhoto(row.photoKey);
  if (!bytes) return new Response("Not found", { status: 404 });

  return new Response(bytes, {
    headers: {
      "content-type": "image/jpeg",
      "cache-control": "private, no-store",
      "x-robots-tag": "noindex, noimageindex",
      "content-security-policy": "default-src 'none'; sandbox",
    },
  });
}
