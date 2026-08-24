# Progress

## Current stage
Stage 2 — complete. Stage 3 blocked on Supabase credentials.

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
- **Stage 2** — full builder at `/make`. Envelope style + colour picker,
  mithai picker, coin picker, message / from / to / occasion / amount / VPA
  fields. Live preview. All local state, no database.

## Not done / stubbed
- Stage 3 (persistence) — needs Supabase keys. Nothing is persisted; a
  refresh of `/make` loses everything.
- Stage 4 (the money) — the pay screen and UTR capture are not built. The
  amount and VPA fields exist in the builder but go nowhere.
- Stage 5 (hardening) — no Turnstile, no rate limits, no CSP headers, no
  `noindex`, no IP hashing, no `is_blocked`.
- Stage 6 (ship) — not deployed.
- URL stripping (C6) is implemented client-side in the builder as UX only.
  The authoritative server-side strip lands with Stage 3.

## Known bugs
- **I could not see my own work.** The Chrome extension times out injecting
  into `localhost:3001` — it fails on a one-line static HTML page too, so it's
  a site-permission problem in the extension, not the app. This means Stage 1
  and Stage 2 are **built and type-clean but visually unverified**. The fold
  animation has never been looked at by anyone. Treat "Stage 1 done" as
  "Stage 1 written".
- Everything below is unverified for the same reason: 375px layout, Devanagari
  rendering at size, reduced-motion cross-fade.

## Manual steps I still owe
- [ ] **Look at `localhost:3001` yourself and tell me if the fold is any good.**
      I have not seen it. SPEC §9 Stage 1 exit is *your* judgement anyway.
- [ ] Grant the Chrome extension permission on `localhost` so I can screenshot
      my own UI (extension settings → site permissions). Without this the
      visual loop in OPERATIONS §3 doesn't work.
- [ ] **Open `192.168.1.8:3001/spike` on an iPhone AND an Android phone.**
      Report what happens on each. Everything downstream depends on this. (C3)
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
1. Owner eyeballs Stage 1/2 at localhost:3001 (I couldn't).
2. Owner runs `/spike` on both phones — this can invalidate Stage 4's design.
3. Then Stage 3 (persistence), which needs the Supabase keys above.
