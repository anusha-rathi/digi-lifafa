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

Transcribed from `@theme` in `globals.css`, which is the source of truth. If
these disagree, the CSS is right and this table is stale.

The site is light warm paper; only the stage the envelope sits on is dark.

**Light site**

| Token | Hex | Use |
|---|---|---|
| `ivory` | `#fbf3e4` | page ground |
| `ivory-deep` | `#f4e7cf` | raised panels |
| `ivory-edge` | `#e2cfab` | borders |
| `ink` | `#4a121c` | body text |
| `ink-soft` | `#7d5a52` | secondary text |
| `ink-faint` | `#a08b81` | captions |

**The dark stage, and the paper inside**

| Token | Hex | Use |
|---|---|---|
| `night` / `night-soft` | `#17090e` / `#24121a` | the stage the envelope sits on. Dark so the foil catches light. |
| `paper` / `paper-deep` | `#f6e9d2` / `#e9d6b4` | the card inside the envelope, and its shadow |

**Print colours**

| Token | Hex | Use |
|---|---|---|
| `maroon` / `maroon-deep` | `#7b1e2b` / `#4e0f1a` | envelope paper (default) |
| `kumkum` | `#c42b1c` | the seal, error states |
| `marigold` / `marigold-soft` | `#e09112` / `#f2b84b` | primary action, headings |
| `peacock` / `peacock-soft` | `#0f6e5c` / `#2f9880` | envelope option |
| `indigo` | `#2b3a67` | envelope option |
| `foil` / `foil-hi` / `foil-lo` | `#b8912f` / `#f4dc8c` / `#8a6b12` | three stops so gold gradients like real stamping rather than sitting flat |

The envelope catalogue lives in `src/lib/design.ts`, built from `patterns.ts`.
Those ids are *data* — they are written into `design_id`, `palette_id` and
`texture_id` — and they are derived from each entry's English display name.
**Renaming an entry changes its id and orphans every lifafa already stored
against it.** A rename is a data migration, not a copy edit.

## Type

- **Display** — Martel (`--font-display`). Devanagari and Latin serif with weight and no bounce. Headings, names, amounts.
- **Wordmark** — Yatra One (`--font-wordmark`). Kept only as the logotype, where a face can be quirky. It read as a children's party invite at heading sizes.
- **Body** — Mukta (`--font-body`). Clean, Devanagari + Latin, 300/400/600/700.

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
