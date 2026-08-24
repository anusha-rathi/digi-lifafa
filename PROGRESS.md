# Progress

## Current stage
Stages 2-4 built and working on localhost. Marketing site done.
Production persistence (Supabase) still not wired.

## Done
- **Setup** — Next.js 16 + TS + Tailwind 4 + motion (framer-motion) + zod +
  nanoid + qrcode + supabase-js. Git repo. `.env.local.example` committed.
  CLAUDE.md carries the 9 corrections (C1–C9). Slash commands in
  `.claude/commands/`.
- **Spike (C3)** — route `/spike`. Tests the `upi://` intent link, an Android
  `intent://` variant, and the QR path. **NOT YET TESTED ON ANY REAL PHONE —
  this is the top blocker, see manual steps.**
- **Stage 0** — scaffold serves a styled page at `/`.
- **Stage 1** — the lifafa. Fold animation, tap to open/close, coin and mithai
  reveal. `prefers-reduced-motion` cross-fades instead of skipping.
- **Stage 2** — builder at `/make`. Envelope, colour, mithai, coin, occasion,
  names, message, and the **nek built by tapping notes in** (10/20/50/100/
  200/500) rather than typing an amount. Live preview.
- **Stage 3 (local)** — create/read/mark persisted in **local SQLite**
  (`node:sqlite`, `.data/lifafa.db`). NOT production storage — see below.
  `/l/[slug]` receiver page, `/s/[token]` sender page, share link + WhatsApp.
- **Stage 4 (local)** — UPI intent link, Android per-app intents (GPay,
  PhonePe, Paytm), QR fallback, full-VPA pay screen, "have you paid?" with
  all three paths, write-once owner-gated UTR.
- **The design canvas IS the app.** `/make` is the Lifafa Workbench: the
  language gate, all 21 papers, 14 palettes, 5 textures, 32 mithai, the
  6-denomination note stack, open/back/front 3D views, and the full
  hi/Hinglish/English copy. Data lives in `src/lib/design.ts`, extracted
  from `design/Main.dc.html`; the envelope is `src/components/Envelope.tsx`.
  The stored lifafa renders through the same component, so what the receiver
  opens is the thing that was built.
- **Marketing site** — light theme throughout. Landing page with drifting
  lifafas, how-it-works, occasions, trust section, FAQ. `/about`,
  `/contact`, `/blog` + 6 posts, `/privacy`, `/terms`. Shared header/footer.
- **Workbench fixes** — neg -> nek everywhere; switching occasion no longer
  keeps the previous occasion's message; "Something else" occasion with a
  custom heading. Same two fixes ported into `/make`.

## Not done / stubbed
- **Storage is local SQLite, not Supabase.** Vercel's filesystem is ephemeral
  and per-instance, so this works on localhost and would NOT work deployed.
  Swap the five functions in `src/lib/db.ts` for Supabase calls; everything
  else (nanoid ids, immutability, write-once UTR) moves across unchanged.
  Still needs the Supabase keys.
- (ported — see Done)
- Stage 5 (hardening) — no Turnstile, no rate limits, no CSP headers, no IP
  hashing. `noindex` IS done; `is_blocked` is in the schema and honoured by
  the receiver page, but there is no report route — reports go by email and
  the flag is flipped by hand.
- Stage 6 (ship) — not deployed.

## Known bugs
- **I still cannot see my own work.** The Chrome extension times out
  injecting into localhost (fails on a one-line static HTML page too, so it
  is a site-permission problem in the extension, not the app). The API and
  the rendered HTML are verified by curl; **nothing has been verified
  visually** — the fold, the 375px layout, the drifting lifafas, Devanagari
  at size, and the reduced-motion path have never been looked at.

## Manual steps I still owe
- [ ] **Look at `localhost:3000` yourself** — the landing page, the fold, and
      the whole make -> pay -> share flow. I have not seen any of it.
- [ ] Grant the Chrome extension permission on `localhost` so I can screenshot
      my own UI (extension settings → site permissions). Without this the
      visual loop in OPERATIONS §3 doesn't work.
- [ ] **Open `192.168.1.8:3000` on an iPhone AND an Android phone**, make a
      real lifafa and try to pay yourself ₹10. This is C3, still unrun, and
      it is still the thing that can invalidate the pay screen's design.
- [ ] Create Supabase project
- [ ] Copy URL, anon key, service role key into `.env.local`
- [ ] Generate `IP_HASH_SALT` (C8): `openssl rand -hex 32`
- [ ] Create GitHub repo and connect it
- [ ] Create Vercel project, link the repo, set the same env vars there
- [ ] Get Cloudflare Turnstile keys (Stage 5 — not urgent)
- [ ] Get Upstash Redis keys (Stage 5 — not urgent)
- [ ] Drop real shagun envelope reference images in `/public/refs/` if you
      want the design pass to match actual paper rather than my guess

## Next step
1. Owner looks at localhost:3000 and says what's wrong with it.
2. Owner tests the UPI handoff on a real iPhone and a real Android.
3. Then either: port the canvas art into the app, or swap SQLite for
   Supabase so it can be deployed. Probably the art first — it's what makes
   it worth deploying.
