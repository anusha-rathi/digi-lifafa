# Digi Lifafa — Operations & Context Setup

**Companion file to `SPEC.md`.** SPEC.md says *what* to build. This file sets up the environment so Claude Code can actually build it well.

The premise: the quality of what gets built is decided mostly by what's in context at the moment work happens — not by how cleverly any single prompt is worded. So the job is arranging the project so the right information is present automatically, the agent can see the results of its own work, and nothing important depends on remembering something from an hour ago.

---

## 1. File layout

Set this up before writing any code.

```
digi-lifafa/
├── CLAUDE.md          ← auto-loads every session. Hard constraints only.
├── SPEC.md            ← the product. Read at the start of each stage.
├── OPERATIONS.md      ← this file. How we work.
├── DESIGN.md          ← design tokens (export from Google Stitch)
├── PROGRESS.md        ← running state. Updated at the end of every stage.
├── .claude/
│   └── commands/      ← reusable slash commands
│       ├── stage.md
│       ├── audit.md
│       └── handoff.md
└── src/
```

Each file has one job:

| File | Loaded | Purpose |
|---|---|---|
| `CLAUDE.md` | automatically, always | rules that must never be violated |
| `SPEC.md` | on request, per stage | what we're building |
| `OPERATIONS.md` | on request | how to work, how to verify |
| `DESIGN.md` | during UI stages | colours, type, spacing |
| `PROGRESS.md` | at session start | what's already done |

`CLAUDE.md` costs context on every single turn, so it stays short. Everything else is pulled in only when needed.

---

## 2. CLAUDE.md

Create this file first. Paste exactly this:

```markdown
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

## How we work

- One stage at a time. Stop and wait for approval. Never chain stages.
- Ask instead of assuming. A question costs less than a wrong guess.
- Never weaken a security rule to make a feature easier. Change the
  feature and tell me.
- Never add features that aren't in SPEC.md.
- After changing UI, take a screenshot and look at it before saying it works.
- Update PROGRESS.md at the end of every stage.
```

---

## 3. Giving Claude Code eyes

This is the highest-value setup step. Without it, the agent writes frontend code and never sees the result — which for a project built around a fold animation is close to fatal.

### Install

From your project folder:

```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
```

Then verify:

```bash
claude mcp list
```

Package names for MCP servers change fairly often. If that command fails, check the current name at `docs.claude.com` under MCP rather than guessing. Playwright MCP (`npx @playwright/mcp@latest`) is a good alternative and does much the same job.

### The visual loop

Once connected, this is the loop for every UI change. Put it in your instructions and hold the agent to it:

```
┌────────────────────────────────────────┐
│  1. Make the change                    │
│  2. Open localhost:3000 in the browser │
│  3. Screenshot it                      │
│  4. Actually look — does it match      │
│     DESIGN.md? Does the animation      │
│     feel right? Is anything broken     │
│     at 375px width?                    │
│  5. If not, fix and repeat from 1      │
│  6. Only then report it as done        │
└────────────────────────────────────────┘
```

**Test at 375px width by default.** Nearly all your traffic will be someone opening a WhatsApp link on a phone. Desktop is the edge case here, not the other way round.

---

## 4. Slash commands

Files in `.claude/commands/` become slash commands. This is how you stop re-typing the same instructions and stop relying on the agent remembering them.

### `.claude/commands/stage.md`

```markdown
Read PROGRESS.md, then read the stage described in SPEC.md section 9 for
stage $ARGUMENTS.

Then run the build loop from SPEC.md section 8:
restate, plan, ask, build, test, security check, report, stop.

Do not begin the next stage.
```

Use it as `/stage 3`.

### `.claude/commands/audit.md`

```markdown
You are auditing this codebase. You did not write it. Assume the developer
who did was rushing and cut corners.

Go through every item in SPEC.md section 6, S1 through S11, one at a time.
For each: state the item, show the code that satisfies it or state plainly
that nothing does, and give a verdict of PASS or FAIL.

Do not fix anything. Report only. Do not give a clean bill of health unless
every single item passes.
```

### `.claude/commands/handoff.md`

```markdown
Update PROGRESS.md with:
- which stage just completed
- what actually works, tested and confirmed
- what is stubbed, faked, or incomplete
- known bugs
- anything I need to do manually before the next stage
- the exact next step

Be honest about what isn't finished. An accurate handoff is worth more
than an optimistic one.
```

---

## 5. PROGRESS.md

This is what stops drift across sessions. Start it now:

```markdown
# Progress

## Current stage
Stage 0 — not started

## Done
(nothing yet)

## Not done / stubbed
(nothing yet)

## Known bugs
(none)

## Manual steps I still owe
- [ ] Create Supabase project
- [ ] Copy URL, anon key, service role key into .env.local
- [ ] Create Vercel project and set the same env vars there
- [ ] Get Cloudflare Turnstile keys
- [ ] Get Upstash Redis keys

## Next step
Stage 0 — scaffold
```

Run `/handoff` at the end of every session. Read it at the start of every session. This file is the memory the agent doesn't have.

---

## 6. Session hygiene

Drift happens because context fills up with dead information — failed attempts, old file contents, abandoned approaches — until the important rules are buried.

- **One stage per session.** When a stage finishes, run `/handoff`, close the session, start fresh. Do not run a marathon.
- **`/clear` after a long debugging detour.** Twenty messages of failed attempts poison everything after them.
- **Commit after every stage.** `git commit -m "stage 3: persistence"`. This is your undo button.
- **When something breaks badly, revert — don't patch.** `git reset --hard` back to the last good commit and redo the stage with better instructions. Patching a confused agent's confused output compounds the confusion.
- **Don't paste large files into chat.** Say "read src/components/Envelope.tsx" instead. Pasting duplicates it in context and the agent may edit the wrong copy.

---

## 7. Security verification

The rule: **the agent that wrote the code never gets the final word on whether it's secure.**

### After Stage 3

- [ ] Open a **fresh** Claude Code session. Run `/audit`.
- [ ] Supabase dashboard → Advisors → Security Advisor. Zero errors.
- [ ] Open the live site, open browser DevTools console, and run a query against the `lifafas` table using the anon key. **It must return nothing.** If it returns rows, RLS is off — stop everything and fix it.
- [ ] Search the built client bundle for `service_role`. Zero hits.
- [ ] Confirm `.env.local` is in `.gitignore` and was never committed.
- [ ] Run `npx gitleaks detect` on the repo. Zero findings.

### After Stage 5

- [ ] Fresh session, run `/audit` again. Every item S1–S11 must be PASS.
- [ ] Create a lifafa, note its slug, then try to change the payee VPA through the API. It must be rejected.
- [ ] Try to set the UTR twice. The second attempt must be rejected.
- [ ] Try to set the UTR without the owner token. Rejected.
- [ ] Change one character in a slug and open it. Must show a clean "not found", never an error dump.
- [ ] Put `<script>alert(1)</script>` in the message field. Must render as text.
- [ ] Put a URL in the message field. Must be stripped.
- [ ] Enter `999999999` as the amount. Must be rejected.
- [ ] Submit the create form 10 times quickly. Must be rate-limited.
- [ ] Check response headers for CSP, X-Frame-Options, HSTS.
- [ ] View source on a lifafa page and confirm `noindex` is present.

**Do these yourself.** Reading "I've verified RLS is enabled" is not verification.

---

## 8. Design context

Google Stitch is free and exports a `DESIGN.md` rules file. Use it for the design system — palette, type scale, spacing — and drop the file in your project root so the agent builds against real tokens instead of inventing new ones each session.

What Stitch handles well: landing page, the create form, the pay screen.

What Stitch will not do: the lifafa itself. That's an illustrated object with a paper-fold animation, not a UI screen. For that, gather real shagun envelope references, generate the envelope patterns, mithai and coin as separate image assets, commit them to `/public`, and let Claude Code handle motion with Framer Motion.

Give the agent the reference images directly — it can see them, and showing it what "gold foil on maroon paper" means beats describing it.

---

## 9. When something goes wrong

| Symptom | What's actually happening | Do this |
|---|---|---|
| Ignoring rules from earlier | context is full | `/handoff`, close, fresh session |
| Says it's done but it's broken | never looked at the output | require a screenshot every time |
| Keeps patching the same bug | working from a bad assumption | revert to last commit, restate the problem from scratch |
| Adding features you didn't ask for | spec not in context | tell it to re-read SPEC.md |
| Works locally, breaks live | env vars missing in Vercel | check the Vercel dashboard |
| Wants to add a payment gateway | forgot section 2 of SPEC.md | point it at CLAUDE.md rule 1 |

---

## 10. Setup checklist

Before Stage 0:

- [ ] Project folder created, `git init` run
- [ ] `SPEC.md` saved in it
- [ ] `OPERATIONS.md` saved in it
- [ ] `CLAUDE.md` created with the content from section 2
- [ ] `PROGRESS.md` created with the content from section 5
- [ ] `.claude/commands/` created with `stage.md`, `audit.md`, `handoff.md`
- [ ] Chrome DevTools MCP installed and verified with `claude mcp list`
- [ ] Supabase project created, three keys copied into `.env.local`
- [ ] `.gitignore` confirmed to contain `.env.local`
- [ ] GitHub repo created and connected
- [ ] Vercel project created and linked to the repo
- [ ] `DESIGN.md` exported from Stitch (can wait until Stage 1)

Then open Claude Code and run `/stage 0`.

## Deploys stop silently if the commit author is not a GitHub account

Vercel refuses to build a commit whose author email it cannot tie to a GitHub
account with access to the project. It reports this as `GitHub couldn't verify
an account for the commit` and `Deployment was blocked`, and it does not fail
loudly anywhere you would normally look: pushes succeed, GitHub shows the
commit, and the live site simply keeps serving the last commit that did build.
Two commits sat blocked this way on 25 August 2026 while the site looked
unchanged.

The cause is git's fallback identity. With no `user.email` configured, git
invents one from the machine hostname, and
`anusharathi@minakshis-MacBook-Air.local` belongs to nobody.

This repo is pinned to the account's GitHub noreply address, which is always
tied to the account:

    git config user.email "281120878+anusha-rathi@users.noreply.github.com"

To check a deploy actually ran rather than assuming a push means a deploy:

    gh api repos/anusha-rathi/digi-lifafa/commits/HEAD/status --jq .state
