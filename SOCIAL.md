# Digi Lifafa — Social Asset System

Save as `SOCIAL.md` in the project. This is a **separate build** from the lifafa app itself — nothing here touches `src/`, the database, or payments. It lives in its own folder and produces images.

---

## 1. What you're actually building

Not 50 image files. **An asset factory** — a set of HTML+SVG templates plus a script that renders them to PNG at Instagram sizes.

Why this shape:

- You cannot generate illustrations the way an image model does. But the reference style here — flat vector, bold shapes, limited palette — is entirely achievable in hand-written SVG. So build it in SVG.
- One-off images go stale in a week. Templates get reused daily for months.
- Text lives in a JSON file, separate from the templates, so I can change copy without touching code.
- Everything is editable. That's the whole point of the "blank" and "half" categories below.

**Do not** attempt to source, download, or fake photographic images. Everything is drawn in SVG.

---

## 2. Output specs

| Type | Size | Format |
|---|---|---|
| Feed post | 1080 × 1350 | PNG |
| Reel / story frame | 1080 × 1920 | PNG |
| Carousel slide | 1080 × 1350 | PNG |

- Render with Playwright at `deviceScaleFactor: 2`, then downscale. Text must be razor sharp.
- Every template must render **Devanagari correctly**. Load Noto Sans Devanagari locally — do not rely on a CDN, and do not let Hindi text fall back to a Latin font. Test this on the very first template and show me the output before building the other 49.
- Keep all text at least 80px from every edge. Instagram crops the preview.

---

## 3. The illustration system

Build these as reusable SVG components **first**, before any template. Everything else composes from them.

```
components/svg/
├── Lifafa.tsx        envelope — closed, open, mid-flight variants
│                     props: colour, pattern, scale, rotation
├── Coin.tsx          ₹1 coin, front and edge-on
├── Note.tsx          currency note — ₹100 / ₹500 colourways,
│                     abstracted, NOT a realistic replica
├── Mithai.tsx        laddu, jalebi, barfi, kaju katli
├── Diya.tsx          lit and unlit
├── Marigold.tsx      single flower and a garland strand
├── Rangoli.tsx       corner motif
└── TornEdge.tsx      ripped-paper divider (the MOOCH reference
                      uses this — it's what makes it feel printed)
```

**On currency:** stylise it. Simplified shapes, brand palette, no portrait, no serial numbers, no realistic detail. Reproducing Indian banknotes accurately is a legal problem you don't need.

**Style rules for all SVG:**
- Flat fills. No gradients except one soft background wash per template, maximum.
- Thick, confident outlines — 4–6px at 1080 width.
- Slight rotation on scattered elements (−8° to +8°). Nothing perfectly aligned. Perfect alignment is what makes vector art look dead.
- Every scatter uses a seeded random so it's repeatable but not uniform.

---

## 4. Visual direction

The reference is warm, printed, retro-Indian — the aesthetic of travel posters and old mithai shop boxes, not a tech startup.

- Use the brand palette already in the project. Where it's short, extend with: marigold orange, deep maroon, cream paper, brass gold, one cool accent (dusty teal) to keep it from going all-warm.
- **Paper texture on everything.** A subtle grain overlay at low opacity. This single detail is what separates it from generic flat design.
- Display type: heavy, characterful, slightly condensed. Body type: clean, quiet.
- Hindi and English mix freely in the same layout. Design for both from the start — don't design in English and retrofit Devanagari.

**Avoid:** cream background + thin serif + terracotta accent. That's the default AI aesthetic and it will look like every other AI-designed thing.

---

## 5. The 50 assets

### A. Fully populated posts — 12
Complete and postable. Copy from `content.json` section A.

Illustration and text both final. These are the ones I post immediately.

### B. Reel cover frames — 8
1080 × 1920. Hook text large in the upper third, illustration below, safe zone kept clear at the bottom for Instagram's UI.

### C. Carousel shells — 6 sets, 4 slides each
**Backdrop, border and slide structure only. No content.**

Each set has a consistent frame — border treatment, corner motif, slide-number indicator, a footer strip with the handle. The middle is empty. I populate these myself.

Vary the border across the six: torn paper, marigold garland edge, jaali/lattice frame, stitched thread, folded-corner, plain brass rule.

### D. Half-populated — 6
Illustration finished, layout locked, **text as visible placeholder** (`{{HOOK}}`, `{{LINE}}`). I swap in copy per post.

### E. Blank structural templates — 8
Grid, safe zones, and a single anchoring element (a corner lifafa, a bottom border). Nothing else. Maximum flexibility.

Cover the layout archetypes: centred single line, top-heavy hook, two-column split, list of 5, quote block, full-bleed illustration with a text strip, chat-bubble frame, before/after.

### F. Story templates — 6
1080 × 1920. Poll frame, question box frame, countdown frame, "new post" announcement, plain quote, link-sticker frame.

### G. Hero graphics — 4
The "missing" series. Large illustrated pieces:

1. **missing ghar** — small figure, city skyline behind, lifafas floating in from off-frame toward them
2. **missing tyohaar** — an empty doorway, no rangoli, one diya lit, lifafas drifting in
3. **ghar se door, dil se paas** — split composition, two rooms, a lifafa crossing between
4. **A lifafa pattern field** — repeating lifafas at varied rotations and colours, usable as a background or a profile grid piece

These are the portfolio pieces. Spend the most time here.

**Total: 12 + 8 + 24 + 6 + 8 + 6 + 4 = 68 renders across 50 template files.**

---

## 6. Content bank

Put these in `content.json`. They are the source material — the specific, observed things, not tidy punchlines.

```json
{
  "A_populated": [
    "har shaadi mein ek chacha register leke baithta hai. har lifafa khulta hai, naam likha jaata hai, amount likha jaata hai. bees saal baad aapki shaadi mein wahi register nikalta hai.",
    "rakho. nahi nahi. rakho na. arre nahi. RAKHO. accha theek hai.",
    "mehmaan gaye. darwaza band hua. mummy ne lifafe nikale. asli function ab shuru hua.",
    "dadi ke blouse se nikla 500 ka note. thoda garam. chaar baar muda hua.",
    "jo lifafa aapko mila, wo pehle kisi aur ko mila tha. aur uske pehle kisi aur ko.",
    "us ek rupee ke sikke ko kisi ne haath se chipkaya hai. glue se. koi factory nahi hai iski.",
    "papa ka UPI pin family ka birthday hai. sabko pata hai. security ka concept nahi hai ghar mein.",
    "paise bheje. mummy ne screenshot bhej diya wapas. ye aa gaye? haan mummy, aapne hi bheja hai.",
    "joota chupai 500 se shuru hua tha. 15,000 pe settle hua. saali sahiba ne MBA kiya hai.",
    "pehli salary mein papa ko 5000 diye. unhone liye. mummy ko bataya. sabko bataya. paise abhi tak drawer mein hain.",
    "almirah mein ek lifafa hai jo chhe saal purana hai. usme ab bhi sikka hai.",
    "500 nahi. 501. wo ek rupya hi poora point hai."
  ]
}
```

**Do not write new copy.** If a template needs text I haven't supplied, use a visible placeholder and tell me. Generated caption copy is exactly what I'm trying to avoid.

---

## 7. File structure

```
social/
├── content.json           all copy. Never hardcode text in a template.
├── brand.ts               palette, type scale, spacing — imported everywhere
├── components/svg/        the illustration primitives
├── templates/
│   ├── a-populated/       01.tsx … 12.tsx
│   ├── b-reel-covers/
│   ├── c-carousels/
│   ├── d-half/
│   ├── e-blank/
│   ├── f-stories/
│   └── g-hero/
├── render.ts              Playwright → PNG
├── preview/               a local page showing all templates in a grid
└── out/                   rendered PNGs, gitignored
```

The **preview page matters most**. One scrollable page showing every template at once, so I can judge the whole set as a set rather than opening 68 files. Build it in Stage 1.

---

## 8. Build loop

For each stage: restate → plan → build → **render to PNG and look at the actual image** → report → stop and wait.

You have Chrome DevTools MCP. Use it. Never report a template as done without having rendered it and viewed the output. A template that looks correct in code and renders with clipped Devanagari is not done.

### Stages

**Stage 1 — Foundation.** `brand.ts`, font loading, `render.ts`, the preview page, and exactly **one** finished template from category A. Prove: correct dimensions, sharp text, Devanagari rendering properly, paper texture visible. Show me the PNG. Nothing else until I approve it.

**Stage 2 — SVG primitives.** All components in section 3. Render a single sheet showing every one at several sizes and colours. This is the hardest stage — the whole system's quality is decided here. Show me the sheet.

**Stage 3 — Category A.** The remaining 11 populated posts.

**Stage 4 — Categories B and G.** Reel covers and the four hero graphics.

**Stage 5 — Categories C, D, E, F.** All the templates and shells.

**Stage 6 — Render everything, review the preview page as a whole.** Flag anything that looks repetitive across the set. Variety across 68 images matters more than any single one.

---

## 9. Rules

1. One stage at a time. Stop after each.
2. Render and **look** before claiming anything works.
3. No text I didn't write. Placeholders instead.
4. No photographic assets, no stock images, no downloaded illustrations. SVG only.
5. Never hardcode copy or colour — `content.json` and `brand.ts`.
6. Currency stays stylised, never a realistic banknote.
7. If two templates end up looking alike, say so instead of shipping both.
8. This folder never imports from the lifafa app, and the app never imports from it.
