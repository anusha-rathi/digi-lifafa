# Digi Lifafa — Build Spec for Claude Code

**How to use this file:** save it in your project folder as `SPEC.md`, open Claude Code in that folder, and paste the "Kickoff prompt" at the bottom. Claude Code reads this file and works through it stage by stage, stopping for your approval between each one.

---

## 1. What we are building

A web app where someone makes a beautiful digital *shagun ka lifafa* — the decorated envelope Indians give cash in at weddings, Diwali, Rakhi, birthdays — and sends it to one specific person as a link.

The reference is `digibouquet.vercel.app`. The formula: make one small personal object → get a link → send it to one person. No signup, no app, and the unboxing is the whole product.

The difference from digibouquet: **the money is real.** The envelope isn't a picture of money. The sender actually pays the receiver over UPI, and the envelope is the wrapper around that.

### The vision, in the owner's words

> Someone opens the website. They pick a lifafa. They put in wishes — they can write whatever they want, custom messages for that person. They can add a mithai. And coins, because in Indian culture we always put a ₹1 coin in the lifafa. And then it all folds up into one very nice aesthetic thing. And then when you're sending it, right there you connect your UPI, and it takes you to your UPI app and you pay the person. And then when you come back, a popup asks "have you paid?" — you can add the 12-digit reference code to verify, or skip it with a quirky message. And then you share it.

That is the product. Build exactly this.

---

## 2. Hard constraints — read before designing anything

These are not preferences. Getting these wrong makes the app illegal, insecure, or broken.

### 2.1 We never touch the money

The money moves **peer to peer**, directly from the sender's UPI app to the receiver's bank account. It never enters our account, our wallet, or our control.

The moment we hold or route funds, we become a Payment Aggregator under RBI rules, which requires authorisation and ₹15 crore net worth. We are a wrapper around a payment that happens elsewhere. Nothing in the code, the copy, or the UI may imply otherwise.

**Never** write copy like "send money", "we'll transfer", "your money is safe with us", "claim your gift". Correct framing: "pay them directly", "opens your UPI app".

### 2.2 We cannot detect whether payment happened

When the sender taps the pay button, the browser hands off to GPay/PhonePe. Those apps do not report back. There is **no callback, no webhook, no transaction status**. We are blind after handoff.

Do not attempt to build payment verification, do not invent a callback URL, do not poll for status, do not integrate a gateway. If a stage seems to require knowing whether payment succeeded, the answer is: ask the sender, and let them skip.

### 2.3 UPI Collect is dead

NPCI discontinued the UPI Collect flow on 28 February 2026. The receiver **cannot** request or claim money through our site. Only the sender can initiate.

We use **UPI intent deep links** only:

```
upi://pay?pa=<payee_vpa>&pn=<payee_name>&am=<amount>&cu=INR&tn=<note>
```

Plus a **UPI QR code** as fallback — the same string, encoded client-side with a QR library. iOS browsers handle intent links unreliably, so the QR path must be a first-class experience, not an afterthought.

### 2.4 Sender needs the receiver's UPI ID

There is no way around this. The sender must enter the receiver's VPA. This is the app's main friction point. Do not try to solve it with a lookup, directory, or resolution API — none is available to us. Solve it with copy: make asking feel normal.

---

## 3. User flow

### Sender side

1. **Landing** — one line of what this is, one button: "Make a lifafa"
2. **Choose the envelope** — a small set of designs; pick colour and pattern
3. **Decorate** — add a mithai (ladoo, barfi, jalebi, kaju katli…) and a coin (₹1, ₹5, ₹11). These sit inside the envelope and appear during the unboxing.
4. **Write the wishes** — freeform message, plus "from" and "to" names. Optional occasion (wedding / Diwali / Rakhi / birthday).
5. **Add the money** — amount, and the receiver's UPI ID. Show the amount in the traditional shagun style: default suggestions of ₹101, ₹501, ₹1,101, ₹2,101.
6. **Preview** — the whole thing folds shut. This is the emotional payoff moment for the sender too.
7. **Pay** — big button. Shows the VPA and amount clearly one last time, then opens their UPI app. QR shown alongside for iPhone or if the link fails.
8. **Return** — popup: "have you paid?" → *Yes, add reference code* / *Yes, skip it* / *Not yet*. The skip path gets warm, slightly funny copy. Never guilt the user.
9. **Share** — the link, with a one-tap WhatsApp share.

### Receiver side

1. Opens the link — a closed, sealed lifafa with their name on it
2. Taps to open — the fold animation plays, the coin and mithai reveal
3. The message appears
4. The amount is shown, with the reference code if the sender added one
5. A quiet line: "this money was sent directly to your UPI — check your bank messages"
6. A soft CTA: "make one back"

---

## 4. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | one codebase, API routes built in |
| Styling | Tailwind CSS | fast, no config drift |
| Animation | Framer Motion | the fold is the product |
| Database | Supabase (Postgres) | free tier, simple |
| Hosting | Vercel | free, auto-deploy from GitHub |
| Validation | Zod | server-side input safety |
| IDs | nanoid | unguessable slugs |
| QR | `qrcode` npm package | generated client-side, no service |
| Bot protection | Cloudflare Turnstile | free, privacy-friendly |
| Rate limiting | Upstash Redis | free tier, works on serverless |

**No payment gateway. No AI API. No image service.** All envelope art, mithai, and coins are static SVG or WebP files committed to the repo.

### Environment variables

```
NEXT_PUBLIC_SUPABASE_URL=          # safe in browser
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # safe in browser
SUPABASE_SERVICE_ROLE_KEY=         # SERVER ONLY — never NEXT_PUBLIC_
NEXT_PUBLIC_TURNSTILE_SITE_KEY=    # safe in browser
TURNSTILE_SECRET_KEY=              # server only
UPSTASH_REDIS_REST_URL=            # server only
UPSTASH_REDIS_REST_TOKEN=          # server only
```

All free tier. Set them in `.env.local` for local work **and** in Vercel → Project Settings → Environment Variables for production. Forgetting the second is the single most common deployment failure.

---

## 5. Database

One table. Keep it that way.

```sql
create table lifafas (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,          -- public share link
  owner_token     text unique not null,          -- sender's private token
  sender_name     text not null,
  receiver_name   text not null,
  message         text not null,
  occasion        text,
  amount_paise    integer not null,              -- store paise, never floats
  payee_vpa       text not null,
  envelope_style  text not null,
  envelope_colour text not null,
  mithai          text,
  coin            text,
  utr             text,                          -- nullable, set once
  payment_marked  text default 'unknown',        -- unknown | paid | skipped
  created_at      timestamptz default now(),
  opened_at       timestamptz,                   -- first time receiver opened
  ip_hash         text,                          -- salted hash, abuse only
  is_blocked      boolean default false
);

create index on lifafas (slug);
create index on lifafas (owner_token);
```

**Store money as integer paise.** Never floats. ₹501 is `50100`.

---

## 6. Security requirements

This section is not optional and not "nice to have". The app asks people to pay a stranger-supplied UPI ID — that is structurally the same shape as a phishing kit, and it must be built defensively.

### S1 — Secrets

- `SUPABASE_SERVICE_ROLE_KEY` must **never** appear in client code, never be prefixed `NEXT_PUBLIC_`, never be imported into a component.
- Before every commit, verify no secret is in the client bundle.
- `.env.local` is in `.gitignore`. Confirm it, don't assume it.

### S2 — Row Level Security

This is the most critical item in the file.

- Enable RLS on `lifafas`. **Default deny.** No exceptions.
- The browser's anon key gets **zero** write permission.
- All writes go through Next.js **server-side route handlers** using the service role key.
- Reads: either through a server route, or an RLS policy allowing select **only** on exact slug match — never a policy that allows listing the table.

A Supabase table with RLS off and a public anon key means anyone can dump every message, name, and UPI ID in your database. Verify RLS is on by trying to query the table from the browser console before shipping.

### S3 — Unguessable identifiers

- `slug`: `nanoid(16)` — never sequential, never incremental integers, never a hash of the name.
- `owner_token`: a **separate** `nanoid(24)`.
- Sequential IDs would let anyone walk the database by editing the URL.

### S4 — Immutability of financial fields

Once a lifafa is created, `payee_vpa`, `amount_paise`, `sender_name`, `receiver_name`, and `message` can **never** be changed. Not by the sender, not by anyone.

Only two fields are ever updated after creation: `utr` and `payment_marked`, each writable **once**, only with a valid `owner_token`, and only from a server route.

Reason: without this, someone sends a lovely lifafa link, waits for it to circulate in a family WhatsApp group, then swaps the UPI ID to their own. Immutability kills that attack.

### S5 — Server-side validation

Every write validated with Zod **on the server**. Client-side validation is UX, not security.

- `amount_paise`: integer, min `100` (₹1), max `2100000` (₹21,000). The cap keeps the app unattractive for large-value fraud.
- `payee_vpa`: regex `^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$`, lowercased, trimmed.
- `message`: max 500 characters.
- `sender_name` / `receiver_name`: max 40 characters each.
- `envelope_style`, `mithai`, `coin`: must match a **hardcoded allowlist**. Never accept a free-text value that will be used to build a file path.

### S6 — Injection and XSS

- The message is user input rendered on a public page. Never use `dangerouslySetInnerHTML`. React's default escaping is the whole defence — do not bypass it.
- Strip HTML tags server-side before storing, as defence in depth.
- **Strip URLs from the message field entirely.** A gift envelope has no reason to contain a link, and allowing links turns the app into a phishing delivery mechanism.
- Use the Supabase client's parameterised queries. Never build SQL by string concatenation.

### S7 — Rate limiting and bots

- Cloudflare Turnstile on the create action.
- Upstash rate limit on the create route: 5 lifafas per IP per hour, 20 per day.
- Rate limit the read route too, to prevent slug enumeration attempts.
- Store a **salted hash** of the IP, never the raw IP.

### S8 — Anti-phishing (product-level)

The pay screen must make it very hard to pay the wrong person by accident:

- Display the full VPA in large, unmissable text immediately before the pay button.
- A line: "you're paying this UPI ID directly. Only send shagun to people you know."
- Never auto-trigger the UPI intent on page load. It must always require a deliberate tap.
- Never shorten or obscure the VPA.
- The receiver's page must **not** show the sender's own UPI ID — it isn't needed and leaking it invites reverse scams.
- Add an `is_blocked` flag and a `/report/[slug]` route so abusive lifafas can be killed. A blocked lifafa shows a neutral notice, not an error.

### S9 — Headers

Set in `next.config.js`:

- `Content-Security-Policy` — restrict script sources; allow the Turnstile domain
- `X-Frame-Options: DENY` — prevents clickjacking the pay button
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security`

Also: `<meta name="robots" content="noindex">` on all `/l/[slug]` pages. Individual lifafas must never be indexed by Google.

### S10 — Data minimisation

Do not collect: phone numbers, email addresses, payment screenshots, the sender's own UPI ID, bank details, or the sender's account name.

Store the minimum needed to render the envelope. Every extra field is future breach surface.

### S11 — Disclosure

A short, plain footer on the pay screen: this site does not process, hold, or transfer money; payment happens directly between the two people through their own UPI apps; we cannot confirm, reverse, or refund any payment.

---

## 7. Design direction

Follow the two-pass process: brainstorm a token system first, critique it against generic defaults, then build.

**The world to draw from:** real shagun envelopes. Gold foil stamping on saturated paper. Screen-printed maroons and marigold. Dhol-and-shehnai motifs, peacock feathers, jaali patterns. The slightly rough texture of the paper. The ₹1 coin die-cut into a window on the front. These are the materials — use them, don't reference them vaguely.

**What to avoid:** cream background + high-contrast serif + terracotta accent. That is the default AI aesthetic and it will read as templated. This brief has a real visual tradition to draw from; use it instead.

**Typography:** pick a display face with actual character and a clean body face. Support Devanagari for names and short phrases — many users will want to write in Hindi. Test that the message field renders Devanagari correctly at every size.

**The signature element is the fold.** Everything else stays quiet. The open/close animation is what people will screenshot and remember, so spend the effort there: paper folding with real weight, the coin catching light, the mithai settling. Get this right and the rest can be restrained.

**Quality floor, unannounced:** mobile-first (nearly all traffic will be phones opening WhatsApp links), visible keyboard focus, `prefers-reduced-motion` respected — the reduced-motion path should cross-fade, not skip the reveal entirely.

**Copy voice:** warm, plain, a little playful. Sentence case. Never corporate. The "skipped verification" message is where the humour lives — make it land.

---

## 8. The build loop

Work through the stages in order. For **each** stage, run this loop:

```
┌─────────────────────────────────────────────┐
│  1. RESTATE   what this stage delivers,     │
│               in your own words             │
│                                             │
│  2. PLAN      list the files you'll create  │
│               or change, and why            │
│                                             │
│  3. ASK       if anything is ambiguous,     │
│               ask BEFORE writing code       │
│                                             │
│  4. BUILD     write it                      │
│                                             │
│  5. TEST      run it, click through it       │
│               yourself, fix what breaks     │
│                                             │
│  6. SECURITY  re-read section 6. Name every │
│               item that applies to this     │
│               stage and confirm it's done   │
│                                             │
│  7. REPORT    what works, what doesn't,     │
│               what I need to do manually    │
│                                             │
│  8. STOP      wait for my approval.         │
│               Do not start the next stage.  │
└─────────────────────────────────────────────┘
```

Step 8 is not negotiable. Do not chain stages together, even if the next one seems obvious.

---

## 9. Stages

### Stage 0 — Scaffold
Next.js + TypeScript + Tailwind + Framer Motion. Git repo. `.gitignore` verified. `.env.local.example` committed with empty values. Nothing else.
**Exit:** `npm run dev` serves a blank styled page.

### Stage 1 — The envelope
A single lifafa on screen. It opens and closes on tap, with the fold animation. Hardcoded content. No database, no forms, no routing.

This is the whole product's soul. Spend real time here. Show it to me before moving on.
**Exit:** the fold looks good enough that I'd want to send it.

### Stage 2 — Decoration
Envelope colour and pattern picker. Mithai picker. Coin picker. Message, from/to, occasion fields. All in local state — still no database. Live preview updates as I choose.
**Exit:** I can build a complete lifafa on screen and it looks right.

### Stage 3 — Persistence
Supabase table with RLS on and default-deny. Server-side route handlers for create and read. nanoid slug and owner_token. Zod validation. `/l/[slug]` receiver page. Share link generation.

Security items in scope: S1, S2, S3, S5, S6, S10.
**Exit:** I make a lifafa, get a link, open it in an incognito window on another device, and it renders. Then: I open the browser console and try to query the table with the anon key — it must fail.

### Stage 4 — The money
Amount input with shagun presets. VPA input with validation and clear formatting. UPI intent link. QR code fallback. The pay screen with prominent VPA display. The "have you paid?" popup with all three paths. UTR capture, write-once, owner-token-gated.

Security items in scope: S4, S8, S11.
**Exit:** I send ₹1 to my own UPI ID from my phone and it works end to end. Tested on Android and iPhone.

### Stage 5 — Hardening
Turnstile. Upstash rate limits. Security headers and CSP. `noindex` on lifafa pages. IP hashing. `is_blocked` flag and the report route.

Security items in scope: S7, S9, plus a full re-audit of S1–S11.
**Exit:** every item in section 6 is confirmed done, individually, in writing.

### Stage 6 — Ship
Deploy to Vercel. Env vars set in the dashboard. Test the live URL on a real phone over mobile data, not wifi. Open a lifafa link from inside WhatsApp specifically — in-app browsers behave differently and this is where things break.
**Exit:** a friend successfully receives and opens a lifafa I sent them.

---

## 10. Rules

1. **One stage at a time.** Stop and wait after each.
2. **Ask rather than assume.** If the spec is ambiguous, ask me. I'd rather answer a question than unpick a wrong guess.
3. **Never invent a payment integration.** If something feels like it needs one, re-read section 2.
4. **Never weaken security for convenience.** If a security rule makes a feature hard, tell me and we'll change the feature, not the rule.
5. **Tell me what to do manually.** Creating Supabase projects, copying keys, setting Vercel env vars — tell me the exact clicks, in order.
6. **Say when something doesn't work.** A working Stage 3 beats a broken Stage 5.
7. **Don't add features I didn't ask for.** No accounts, no analytics dashboards, no email, no notifications, no AI-generated messages.

---

## Kickoff prompt

> Read SPEC.md in this folder. It describes a web app called Digi Lifafa that we're building together.
>
> Don't write any code yet. First, do three things:
>
> 1. Restate the product back to me in about five sentences, so I know you've understood it — especially the part about how the money moves.
> 2. Tell me anything in the spec that's unclear, contradictory, or that you think is a bad idea. Be direct about it.
> 3. List everything I need to set up manually before you can start, in the order I should do it.
>
> Then stop and wait for me. We'll start Stage 0 after that.
