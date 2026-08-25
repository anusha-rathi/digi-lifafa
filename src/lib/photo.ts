/* Turning whatever somebody uploaded into something safe to store.
 *
 * Three things happen here and all three matter:
 *
 *   1. The type is decided by the FILE'S OWN BYTES, not its declared MIME.
 *      `file.type` is attacker-controlled. SVG is refused outright: an SVG is
 *      a script-capable document, not an image.
 *   2. EXIF is removed. A phone photo carries the GPS coordinates of the place
 *      it was taken, and this one is going behind a link that gets forwarded.
 *   3. `.rotate()` runs BEFORE the metadata is dropped. The orientation flag
 *      lives in EXIF, so stripping without baking it in first leaves every
 *      portrait photo lying on its side.
 */

import sharp from "sharp";

export const MAX_BYTES = 6 * 1024 * 1024;
const MAX_SIDE = 1600;
/** A 40 megapixel decode from a small file is a bomb, not a photo. */
const MAX_PIXELS = 40_000_000;

export type Sniffed = "jpeg" | "png" | "webp" | null;

/** Magic bytes. Never trust the declared type. */
export function sniff(buf: Uint8Array): Sniffed {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpeg";
  if (
    buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47 &&
    buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a
  ) {
    return "png";
  }
  const ascii = (i: number, s: string) =>
    [...s].every((c, k) => buf[i + k] === c.charCodeAt(0));
  if (ascii(0, "RIFF") && ascii(8, "WEBP")) return "webp";
  return null;
}

export type Prepared =
  | { ok: true; bytes: Buffer; width: number; height: number }
  | { ok: false; reason: string };

export async function preparePhoto(input: Uint8Array): Promise<Prepared> {
  if (input.byteLength > MAX_BYTES) return { ok: false, reason: "That photo is over 6MB." };

  const kind = sniff(input);
  if (!kind) {
    return { ok: false, reason: "That is not a JPEG, PNG or WebP." };
  }

  let img = sharp(Buffer.from(input), { failOn: "error" });
  let meta;
  try {
    meta = await img.metadata();
  } catch {
    return { ok: false, reason: "That image could not be read." };
  }

  if (!meta.width || !meta.height) return { ok: false, reason: "That image has no dimensions." };
  if (meta.width * meta.height > MAX_PIXELS) {
    return { ok: false, reason: "That image is too large to process." };
  }

  // rotate() first: it bakes the EXIF orientation into the pixels. Everything
  // after this point has no metadata to consult.
  img = img
    .rotate()
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true });

  // sharp drops all metadata unless withMetadata() is called, which it is not.
  const bytes = await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const out = await sharp(bytes).metadata();

  return { ok: true, bytes, width: out.width ?? 0, height: out.height ?? 0 };
}
