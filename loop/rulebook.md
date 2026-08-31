# rulebook.md — what a Digi Lifafa post has to do

Written 31 August 2026, after the Kajari Teej post shipped wrong.

## Why this file exists

The first festival posts were written against `~/anusha/bkl3/loop/rulebook.md`,
which is the rulebook for a site that prices software. Its rules were derived
from that site's failures, and three of them do real damage here.

**H25** mandates a section named exactly "what this page does not know". Its
stated reason is that the site's premise is "computed is not measured". On a
page telling somebody when they may drink water, that section reads as the
writer apologising for the article. It shipped, and the owner's response was
"fu who puts that in blogs".

**H24**'s ten-part spine ends `decision · afterbuy · unknowns · verdict`. That
is the shape of a purchase. A festival is not a purchase.

**H22** wants 25 distinct figures. A festival guide has a date, a tithi window
and a few amounts. Twenty-five would be padding, which is the thing H22 exists
to prevent.

## What carries over from bkl3

- **No em dashes in post prose.** Enforced by `scripts/slop-check.mjs`.
- **No "not just X, it's Y".** Same gate.
- **No throat-clearing.** "In today's", "let's dive in", "when it comes to".
- **Three source types minimum**, one external source per 250 body words, at
  least half of them not the same kind. Types here: `panchang`, `scripture`,
  `ethnographic`, `practitioner`, `news`, `ours`. **`ours` does not count.**
- **Practitioner voice, two minimum.** For festivals that corpus is YouTube,
  recipe blogs and community forums, not Reddit. Nobody writes down how bara
  is decorated. Plenty of people film it.
- **Freshness.** `updated` on every substantive edit. Dates get re-checked
  every year before the festival.
- **Attribution verbs**, and they matter more here than they do on a pricing
  site. "In Marwari homes", "in Bundelkhand", "some families". Dropping the
  hedge is how one region's practice gets printed as a national rule, and a
  reader whose family does it differently is then told they are wrong.
- **2,500 words** as the target. A warning, not a failure.

## What does not

- The "what this page does not know" section. Uncertainty goes inline, in the
  sentence where it matters, or it does not go in. "The moonrise time shifts
  by city, so check a panchang for where you are" belongs in the paragraph
  about moonrise. It does not belong in a list at the end.
- The 25-figure floor.
- The buyer spine.

## The spine

Each H2 takes one role, roughly in order:

    hook · date · what-it-is · how-it-is-kept · the-food ·
    the-regional-difference · what-people-get-wrong · where-money-fits · faq

`what-people-get-wrong` carries the differentiation. It is where the honest
correction lives that H25 was being misused for. On Kajari that is: the katha
every page reprints as scripture has no Puranic source.

`where-money-fits` is the only place the product is allowed to appear in the
body. The CTA at the foot of every post is already there and does the selling.

## Voice

Sentence case. Not the full lowercase of anusha.fyi, because these pages carry
dates and amounts somebody will act on.

Everything else comes from the `write-like-anusha` skill. The rules that broke
first, with the lines that broke them:

- **Never tell the reader what they may not do. Say what happens.**
  Shipped: *"We are not going to print one time here and let somebody in
  Jaipur break their fast on Patna's moon."*
  Instead: *"Moonrise shifts by about forty minutes across the country, so a
  Jaipur time is wrong in Patna."*
- **No sentence whose subject is "we" and whose verb is a refusal.**
- **No clever-clever.** Shipped: *"If your family does not do it, that is not
  an oversight. It is geography."*
- **Do not tell the reader their family is wrong.** Shipped: *"every household
  will tell you theirs is the correct one."*
- **Hinglish carries the beats and the words with no English equivalent.**
  `nirjala`, `arghya`, `sindhara`, `bara`, `shringar`, `bas`. It is the
  register, not seasoning, and a post with none of it is not in voice.

The test, from the skill: would she say this out loud.

## FAQ

From bkl3 `loop/voice-and-structure.md` §4, which transfers cleanly.

Finish the draft. Re-enter the persona. Ask what you want to know now.
Generate 6 to 10 candidates, cross-check against what people actually ask,
keep the best 4 to 6. Each answered in 2 to 4 sentences.

**An FAQ answer that says "it depends" without then saying what it depends on
is a failed FAQ.**

Questions are questions. The shipped post had *"It is cloudy and I cannot see
the moon"* as an FAQ entry, which is a situation, not a question.

They go in a `faq` block so they render as an accordion, never as bare
paragraphs.
