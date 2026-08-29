# डिजि लिफ़ाफ़ा — brand assets

The **हاथ / giving hand** mark: cupped palms with the shagun above them.

A lifafa is pressed into a hand — nobody posts one. The product exists because
that gesture can't happen at a distance, so the mark is the thing being
replaced, not the thing being sent.

The palms are **symmetric on purpose**. The first version was a single angled
hand and at 24px it read as a rude gesture — the kind of thing only visible
once you shrink it.

---

## Colours

| | Hex | Where |
|---|---|---|
| maroon | `#7b1e2b` | tile background, palms on light |
| marigold | `#e09112` | the shagun (the disc above the palms) |
| foil-hi | `#f4dc8c` | palms on dark |
| ivory | `#fbf3e4` | light background |

These are the app's own tokens from `src/app/globals.css` — not approximations.

---

## What's in here

```
svg/
  mark.svg                  the mark alone, transparent, maroon palms
  mark-tile.svg             square maroon tile, gold palms — the app icon
  mark-tile-rounded.svg     same with a 22% corner radius
png/
  mark-256/512/1024.png     transparent, for decks and press
favicon/
  favicon.ico               multi-resolution: 16, 32 and 48 in one file
  favicon.svg               scalable, for browsers that take it
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png      180×180
  android-chrome-192x192.png
  android-chrome-512x512.png
  site.webmanifest
instagram/
  profile-1080x1080.png     upload this as the profile picture
  post-1080x1080.png        dark, maroon ground
  post-light-1080x1080.png  light, ivory ground
  story-1080x1920.png
```

**Instagram profile pictures are cropped to a circle.** The mark is centred with
generous margin so nothing clips. Upload at 1080 even though it displays at
320 — Instagram re-compresses, and starting larger survives it better.

---

## Wiring the favicon into the app

App Router picks these up by filename, no `<link>` tags needed. Copy into
`src/app/`:

```
favicon/favicon.ico              → src/app/favicon.ico
favicon/android-chrome-512x512.png → src/app/icon.png
favicon/apple-touch-icon.png     → src/app/apple-icon.png
```

`public/` currently still holds the Next.js starter SVGs (`next.svg`,
`vercel.svg`, `globe.svg`, `file.svg`, `window.svg`). None are referenced —
worth deleting when you do this.

If you'd rather serve from `public/` instead, add to `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
```

---

## Rebuilding

Everything derives from `svg/mark.svg` and `svg/mark-tile.svg`.

```sh
# raster sizes
rsvg-convert -w 512 -h 512 svg/mark-tile.svg -o favicon/android-chrome-512x512.png

# the .ico must be multi-resolution, not a renamed png
magick icon-16.png icon-32.png icon-48.png favicon/favicon.ico
```

The Instagram frames were rendered through headless Chrome rather than
`rsvg-convert`, because they set the wordmark in **Yatra One** and that font
isn't installed locally — Chrome fetches it from Google Fonts. If you rebuild
them, keep `--virtual-time-budget` high enough for the font to load, or the
Devanagari falls back and the matras come out wrong.
