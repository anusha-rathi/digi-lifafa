# research/festival-shagun.md

Research for the festival cluster, following `loop/research-protocol.md` from
bkl3. Every fact carries (source, date read). Read 25 August 2026.

---

## Stage 0 — The human context

Four festival posts plus Onam, roughly 3,000 words each, aimed at ranking. The
site sells nothing, so no post ends in "buy ours". The product is a digital
shagun envelope; the posts must stand on their own as the best answer to the
question, and the product is at most a footnote.

The author's warning, inherited from bkl3's rulebook: em dashes fail a post,
"not just X, it's Y" fails a post, and any paragraph that summarises the
paragraph above it fails a post.

## Stage 1 — What we already know

`src/lib/posts.ts` already covers: why the one-rupee rule exists, how the UPI
handoff works, why we cannot verify a payment, wedding shagun bands, Diwali
bands, and a Rakhi post at ~450 words that is too thin to rank and should be
replaced by the long one.

The site's own arithmetic, already established and reusable:
- shagun ends in 1 so the sum cannot be divided (`posts.ts`, Diwali post)
- ₹21,000 is our cap
- notes stack; the coin is the part that makes it shagun

## Stage 2 — The open web

### The dates (all read 25 August 2026)

| Festival | 2026 date | Source |
|---|---|---|
| Thiruvonam (Onam day 10) | Wed 26 August 2026 | [StayVista](https://www.stayvista.com/blog/onam-2026-10-days-explained/), [Daanyam](https://daanyam.com/festivals/2026/onam-2026) |
| Atham (Onam day 1) | Sun 16 August 2026 | same |
| Raksha Bandhan | Fri 28 August 2026, muhurat 05:57 to 09:48 IST | [Samvat](https://samvat.in/festivals/raksha-bandhan-2026/), [AstroZindagi](https://astrozindagi.in/festivals/2026/raksha-bandhan-2026-date/) |
| Ganesh Chaturthi | Mon 14 September 2026, Madhyahna muhurat 11:02 to 13:31 | [SmartPuja](https://www.smartpuja.com/blog/ganesha-chaturthi-2026-date-puja-muhurat/), [Vedic Vaani](https://vedicvaani.com/blog/ganesh-chaturthi-date-puja-muhurat-vidhi-visarjan) |
| Anant Chaturdashi / Visarjan | Fri 25 September 2026 | same |
| Hartalika Teej | **CONTESTED**: 13 or 14 September 2026 | [Samvat](https://samvat.in/festivals/hartalika-teej-2026/) says 14 Sep; another source says 13 Sep |

**[verify] Hartalika Teej.** Sources disagree by a day, which is normal for a
tithi that straddles sunrise and is resolved differently by regional panchangs.
The post must say the date is contested and tell the reader to check their own
panchang, rather than pick one and look authoritative. Never print a single
Teej date as fact.

### Onakkodi (Onam gifting)

- Onakkodi is new cloth given by the elders of a family to the younger ones on
  Thiruvonam morning, traditionally a kasavu mundu or kasavu saree with a gold
  border. ([Kerala Tourism](https://www.keralatourism.org/onam/onam-market/onakodi), read 25 Aug 2026)
- It is described as "just as important as making the Pookkalam", and in south
  Kerala it is usual to give Onakkodi to close relatives. (Kerala Tourism, same)
- Historical anchor: Rani Gouri Lakshmi Bai, who ruled Travancore in the early
  1800s, gave Onakkodi to Colonel John Munro, the British Resident.
  ([Devdiscourse](https://www.devdiscourse.com/article/entertainment/3609675-onam-a-historical-journey-through-time-and-tradition), read 25 Aug 2026)
- On Thiruvonam, Mahabali is believed to visit every Malayali home. (StayVista, same)

This is the single most useful finding in the file. Onam gifting is **cloth
first, cash second**, which is a different shape from the north Indian festivals
and means the Onam post cannot simply be the Diwali post with the names
changed.

### Shagun conventions

- Cash is the most common gift and is given in odd numbers ending in one, so
  the sum cannot be divided evenly, symbolising continuity.
  ([Nyota](https://thenyota.app/blog/how-much-shagun-wedding/), [Rudraksha Ratna](https://www.rudraksha-ratna.com/articles/what-is-shagun), read 25 Aug 2026)
- **Even amounts are associated with funerals and condolence giving in Hindu
  practice**, which is the actual reason the odd rupee exists rather than a
  vague "good luck". (Nyota, same, read 25 Aug 2026)
- Reported bands, wedding context: close family ₹10,000 to ₹50,000, extended
  family ₹5,000 to ₹15,000, friends ₹2,000 to ₹5,000, colleagues ₹1,000 to
  ₹3,000. (Nyota, read 25 Aug 2026)
  **[caveat]** These are one publisher's numbers and they are high relative to
  the ₹101 to ₹2,101 range that dominates festival giving. Present them as one
  source's wedding bands, never as festival norms, and never as "the" answer.

## Stage 3 — Visuals

Decision: **draw our own.** Per the protocol, first choice is our own work, and
this site already has a drawing language, the flat-vector mithai and the
CSS-gradient papers. Stock festival photography would be the fastest way to
make the site look like the generic content farms we are trying to beat, and
would carry a licensing question on every image.

So each post gets a hand-built SVG header in the site's own palette: a
pookkalam for Onam, a rakhi thread for Raksha Bandhan, a modak for Ganesh
Chaturthi, a jhula and green bangles for Teej.

## Stage 4 — Competitors and structure check

Read after forming our own view.

**Ganesh Chaturthi SERP** (read 25 Aug 2026): Kissht, SmartPuja, JoyfulFestival,
Vedic Vaani, Art of Puja, HinduTone, Daanyam. Every one is the same page: date,
muhurat, puja vidhi, visarjan schedule. Several are lenders or puja-services
vendors publishing content to sell a service.

**Is every ranking result vendor-published?** For Ganesh Chaturthi, close to it.
Kissht is a lending app. SmartPuja and Art of Puja sell puja services. Vedic
Vaani sells puja items. The post should say so.

**The gap, stated plainly.** Two separate bodies of content exist and they do
not touch:
1. Festival pages that cover date, muhurat and vidhi, and say nothing about
   money or gifting.
2. Shagun pages that cover weddings only.

Nobody covers **festival-specific gifting**: what you give at Ganesh Chaturthi
as opposed to a wedding, what Onakkodi means for someone who cannot get to
Kerala, what a brother actually owes at Rakhi. The search engine's own summary
of the shagun query conceded it: results "focused primarily on wedding shagun
practices rather than specific festival-based guidance for Onam and Teej".

## Stage 5 — Close the file

**Answer in three sentences.** Festival gifting in India runs on rules nobody
writes down: the amount ends in one because an even number belongs at a
funeral, the giving is directional, and every festival has its own shape, cloth
at Onam, a brother's nek at Rakhi, prasad-led giving at Ganesh Chaturthi. The
pages that rank tell you the muhurat and stop. These posts cover the half that
is missing, with the dates checked and the disagreements flagged.

**The gaps we fill.**
- Festival-by-festival amounts rather than one wedding table reused everywhere
- The funeral reason behind the odd rupee, which most pages omit
- Onam as a cloth-first festival, not a cash one
- Who gives to whom, which is directional and almost never stated
- An honest note when a date is contested, instead of false precision

**Facts to add to the ledger.**
- Thiruvonam 2026: 26 Aug. Rakhi 2026: 28 Aug. Ganesh Chaturthi 2026: 14 Sep.
- Hartalika Teej 2026: contested, 13 or 14 Sep.
- Even cash amounts read as condolence money in Hindu practice.
- Onakkodi: elders to younger, Thiruvonam morning, kasavu with gold border.

**Open flags.**
- [verify] Hartalika Teej date. Do not print one date as fact.
- [caveat] Nyota's wedding bands are far above festival norms. Attribute, do
  not adopt.
- Hariyali Teej and Hartalika Teej are different festivals. The Teej post must
  separate them or it will be wrong for half its readers.
