/* Run: npm test
   The one that matters: a phone photo carries the coordinates of where it was
   taken, and this one is going behind a link that gets forwarded. If the strip
   ever breaks, nothing on screen would tell you. */

import assert from "node:assert/strict";
import test from "node:test";
import sharp from "sharp";
import { preparePhoto, sniff } from "./photo.ts";

/** A small JPEG carrying real EXIF, including GPS. */
async function jpegWithGps() {
  const exif = {
    IFD0: { Copyright: "test" },
    IFD1: {},
    GPSIFD: {
      GPSLatitudeRef: "N",
      GPSLatitude: "28/1 36/1 48/1",
      GPSLongitudeRef: "E",
      GPSLongitude: "77/1 12/1 30/1",
    },
  };
  return sharp({
    create: { width: 200, height: 320, channels: 3, background: "#a4123f" },
  })
    .withExif(exif)
    .jpeg()
    .toBuffer();
}

test("sniffs real formats and refuses everything else", async () => {
  const jpg = await sharp({ create: { width: 4, height: 4, channels: 3, background: "#fff" } }).jpeg().toBuffer();
  const png = await sharp({ create: { width: 4, height: 4, channels: 3, background: "#fff" } }).png().toBuffer();
  const webp = await sharp({ create: { width: 4, height: 4, channels: 3, background: "#fff" } }).webp().toBuffer();
  assert.equal(sniff(jpg), "jpeg");
  assert.equal(sniff(png), "png");
  assert.equal(sniff(webp), "webp");

  // An SVG is a script-capable document, not an image, and must never pass.
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>');
  assert.equal(sniff(svg), null);
  assert.equal(sniff(Buffer.from("just some text at all")), null);
});

test("GPS does not survive the strip", async () => {
  const withGps = await jpegWithGps();

  // Confirm the fixture actually carries what we claim, or the test proves nothing.
  const before = await sharp(withGps).metadata();
  assert.ok(before.exif && before.exif.length > 0, "fixture has no EXIF to strip");

  const out = await preparePhoto(withGps);
  assert.ok(out.ok, "prepare failed: " + (out.ok ? "" : out.reason));

  const after = await sharp(out.bytes).metadata();
  assert.equal(after.exif, undefined, "EXIF survived");

  // And belt and braces, straight over the bytes.
  const hay = out.bytes.toString("latin1");
  assert.ok(!hay.includes("GPS"), "the string GPS is still in the file");
  assert.ok(!hay.includes("Exif\0\0"), "an Exif APP1 marker is still in the file");
});

test("a portrait photo does not come out sideways", async () => {
  // Orientation 6 means "rotate 90 clockwise on display". Strip the EXIF
  // without applying it first and the photo lands on its side.
  // withMetadata, not withExif: sharp writes the tag either way but only
  // reads orientation back from the former, so a withExif fixture would
  // silently prove nothing.
  const sideways = await sharp({
    create: { width: 320, height: 200, channels: 3, background: "#0f6e5c" },
  })
    .withMetadata({ orientation: 6 })
    .jpeg()
    .toBuffer();

  assert.equal((await sharp(sideways).metadata()).orientation, 6, "fixture is not sideways");

  const out = await preparePhoto(sideways);
  assert.ok(out.ok);
  // 320x200 rotated by 6 becomes taller than it is wide.
  assert.ok(out.height > out.width, `came out ${out.width}x${out.height}, not rotated`);
});

test("oversized files and junk are refused", async () => {
  const huge = new Uint8Array(7 * 1024 * 1024);
  const r1 = await preparePhoto(huge);
  assert.equal(r1.ok, false);

  const junk = await preparePhoto(Buffer.from("this is not an image at all, promise"));
  assert.equal(junk.ok, false);
});

test("big photos are scaled down, which also keeps the proxy cheap", async () => {
  const big = await sharp({ create: { width: 4000, height: 3000, channels: 3, background: "#e8a33d" } })
    .jpeg()
    .toBuffer();
  const out = await preparePhoto(big);
  assert.ok(out.ok);
  assert.ok(out.width <= 1600 && out.height <= 1600, `still ${out.width}x${out.height}`);
});
