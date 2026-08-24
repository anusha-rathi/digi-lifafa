# Digi Lifafa — Hard Constraints

Read PROGRESS.md before doing anything, to see where we are.
Read SPEC.md before starting any stage.

## Never violate these

1. We never hold, route, or touch money. Payment is peer-to-peer over UPI
   intent links only. Never build a gateway, callback, webhook, or any
   payment-status check. If a task seems to need one, stop and ask.
2. SUPABASE_SERVICE_ROLE_KEY is server-only. Never NEXT_PUBLIC_. Never
   imported into a component. Never in the client bundle.
3. RLS is enabled on every table, default deny. All writes go through
   server-side route handlers. The browser never writes to the database.
4. payee_vpa, amount_paise, message, sender_name and receiver_name are
   immutable after creation. utr and payment_marked are write-once and
   require a valid owner_token.
5. All input validated server-side with Zod. Client validation is UX only.
6. Never use dangerouslySetInnerHTML. Strip URLs from the message field.
7. Money is stored as integer paise. Never floats.

## The nine corrections (agreed 2026-08-24, override SPEC.md where they conflict)

These were gaps found reading SPEC.md. They are decisions, not suggestions.

- **C1 — The pay screen is owner-gated.** The pay UI (VPA, intent link, QR)
  lives ONLY at an owner_token URL. It must never be reachable from `/l/[slug]`.
  Rationale: a pay screen reachable by slug IS a phishing kit — attacker makes
  a lifafa with their own VPA "to Priya from Mummy" and sends Priya the pay URL.
  Every S8 control (big VPA, warm copy) is what a good phishing page shows too.
- **C2 — owner_token lives in the URL and in localStorage.** Returned once at
  create. Sender is redirected to `/s/[owner_token]`; we also stash it under
  `lifafa:<slug>` in localStorage as recovery. Without this the sender loses
  the ability to mark payment the moment they close the tab.
- **C3 — UPI works on the user's real phones before we build anything pretty.**
  The spike (`/public/upi-spike.html`) is tested on iPhone AND Android first.
  iOS Safari handles `upi://` unreliably, and the QR fallback is useless to a
  sender holding the only screen. If neither path works on iOS, the product
  changes before Stage 1, not at Stage 4.
- **C4 — Supabase free tier pauses after ~7 days idle.** A paused project means
  every shared lifafa link is dead. Operational fact to plan around before any
  real launch; not a code change.
- **C5 — UTR is never called "verified".** We cannot check a 12-digit reference
  against anything; a sender can type twelve random digits. Receiver-side copy
  is "the sender noted this reference" — never "verified", never "confirmed".
  Claiming otherwise is the same class of problem as rule 1.
- **C6 — URL stripping is conservative and visible.** Strip, then tell the
  sender what was removed. Never silently mangle their message. A greedy
  bare-domain regex chews through ordinary text and transliterated Devanagari.
- **C7 — No dead fields or dead routes.** `opened_at` is only stored if the
  sender-side page actually reads it. `/report/[slug]` ships with its real
  action documented (flip `is_blocked` by hand in the Supabase dashboard).
- **C8 — `IP_HASH_SALT` is a required env var.** S7 mandates a salted IP hash;
  the SPEC.md env list omits the salt.
- **C9 — Browser automation is already available in-session.** Do NOT install
  chrome-devtools-mcp. Screenshot localhost at 375px directly.

## How we work

- One stage at a time. Stop and wait for approval. Never chain stages.
- Ask instead of assuming. A question costs less than a wrong guess.
- Never weaken a security rule to make a feature easier. Change the
  feature and tell me.
- Never add features that aren't in SPEC.md.
- After changing UI, take a screenshot and look at it before saying it works.
  375px width is the default test size, not desktop.
- Update PROGRESS.md at the end of every stage.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
