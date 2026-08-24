# Digi Lifafa — Design tokens

Hand-written, not exported from Stitch. Tokens live in `src/app/globals.css`
under `@theme` — this file explains *why*, the CSS is the source of truth.

## The world we're drawing from

Real shagun envelopes: screen-printed on saturated paper, gold foil stamped,
jaali lattice and peacock and marigold motifs, a ₹1 coin die-cut into a window
on the front. Slightly rough paper. Not tasteful — *festive*.

**Explicitly avoided:** cream background + high-contrast serif + terracotta
accent. That is the default AI aesthetic and it reads as templated. SPEC §7.

## Palette

| Token | Hex | Use |
|---|---|---|
| `night` | `#17090e` | page ground. Dark so the foil catches light. |
| `night-soft` | `#24121a` | inputs, raised panels |
| `paper` | `#f6e9d2` | the card inside the envelope, body text on dark |
| `paper-deep` | `#e9d6b4` | paper shadow |
| `ink` | `#2a1810` | text on paper |
| `ink-soft` | `#6b4a37` | secondary text on paper |
| `maroon` | `#7b1e2b` | envelope paper (default) |
| `kumkum` | `#c42b1c` | the seal, error states |
| `marigold` | `#e8a33d` | primary action, headings |
| `peacock` | `#0f6e5c` | envelope option |
| `indigo` | `#2b3a67` | envelope option |
| `foil` / `foil-hi` / `foil-lo` | `#c9a227` / `#f4dc8c` / `#8a6b12` | three stops so gold gradients like real stamping rather than sitting flat |

Envelope colours are duplicated in `src/lib/options.ts` because they are *data*
(persisted to the DB as an allowlisted id), not just styling.

## Type

- **Display** — Yatra One. Devanagari-native, poster-lettering character. Headings, names, amounts.
- **Body** — Mukta. Clean, Devanagari + Latin, 300/400/600/700.

Both cover Devanagari because many senders will write in Hindi. Test the
message field in Devanagari at every size — SPEC §7.

## Motion

The fold is the signature element; everything else stays quiet.

- Flap: `rotateX(0 → -172deg)`, origin top edge, spring `stiffness 90 / damping 15 / mass 1.1` — heavy, like paper.
- Contents rise on a stagger: card `0.18s`, coin `0.34s`, mithai `0.44s`.
- Coin and mithai get a small rotation settle so they land rather than appear.
- `prefers-reduced-motion`: cross-fade. The reveal still happens — it is not skipped. SPEC §7.

## Quality floor

- Mobile-first. **375px is the default test width**, desktop is the edge case —
  nearly all traffic is a WhatsApp link opened on a phone.
- `:focus-visible` is a 2px marigold outline, offset 3px, globally.
- Paper grain via a small `feTurbulence` data-URI. Keep it cheap: the first
  version (120px tile, 3 octaves, `mix-blend-mode: multiply` on 5 layers)
  pegged the renderer. Now 64px, 2 octaves, no blend mode.
