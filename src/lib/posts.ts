/* Blog content. Plain data, no MDX, no CMS — each post is a title plus an
   array of blocks. Adding a post means adding an entry here. */

export type Block =
  | { h: string }
  | { p: string }
  | { ul: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: "Festivals" | "How it works" | "Why we built it";
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "why-we-built-digi-lifafa",
    title: "Why we built Digi Lifafa",
    date: "2026-08-20",
    tag: "Why we built it",
    excerpt:
      "Because a UPI notification is not a lifafa, and the difference matters more than it sounds.",
    body: [
      { p: "Every family has the aunt who keeps a stack of lifafas in the almirah. Red ones with gold jaali, a few plain ones for emergencies, and always a jar of one-rupee coins beside them. Before anyone leaves for a wedding, there is the small ceremony of choosing which envelope, counting the notes, tucking the coin in last." },
      { p: "Then everyone moved to UPI, and that whole ritual collapsed into a notification. ₹2,101 received. No paper, no coin, no handwriting, no moment of handing it over with both hands. The money arrived and the gift didn't." },
      { h: "The coin is the whole point" },
      { p: "There is a reason shagun is ₹101 and not ₹100, ₹501 and not ₹500. The extra rupee is the part that can't be divided — the wish that the relationship keeps going, that this is not a settled account. Older relatives will tell you it's inauspicious to give a round number. What they mean is that a round number feels like a transaction." },
      { p: "A UPI transfer is a round number by default. You have to work to make it not one. That small friction is exactly what got lost." },
      { h: "So we made the wrapper, not the payment" },
      { p: "Digi Lifafa is the envelope. You pick the paper, you tap notes in one at a time the way you'd actually fill one, you add a mithai and the coin, you write what you'd say. Then you send it as a link, and they open it and the thing unfolds." },
      { p: "The money is real, and it moves the way it always did — directly from you to them. We are not in the middle of it, and we have gone out of our way not to be. That is a design decision and a legal one, and we would have made it either way." },
      { h: "What we are not building" },
      { p: "No wallet. No balance. No accounts. No feed of what everyone gave. No leaderboard of who is the most generous cousin. There is no version of this where we hold your money and no version where we make the amount public." },
      { p: "One person makes one envelope for one other person. That's it. If that sounds small, it's because it is — a lifafa was always a small thing. It just wasn't a nothing." },
    ],
  },
  {
    slug: "how-digi-lifafa-works",
    title: "How it works, and why we can't see your payment",
    date: "2026-08-18",
    tag: "How it works",
    excerpt:
      "Free, private, and deliberately blind to your money. Here is exactly what happens, step by step.",
    body: [
      { p: "The whole flow takes about a minute, and the most important part of it is the part we are not involved in." },
      { h: "Making it" },
      { ul: [
        "Pick the paper — the pattern, the colour, the texture.",
        "Build the nek by tapping notes. They stack inside the envelope as you go.",
        "Add the one-rupee coin, and a mithai if you want one.",
        "Write your wishes. Hindi, Hinglish or English — all three work, and the font handles Devanagari properly.",
        "Enter their UPI ID.",
      ] },
      { h: "Paying" },
      { p: "When you seal it, we build a UPI intent link — a standard deep link that opens whichever UPI app you already use, pre-filled with their UPI ID and the amount. You tap it, your app opens, you pay. On Android we can send you straight into Google Pay, PhonePe or Paytm. On iPhone the generic link is more reliable, and there is always a QR code." },
      { p: "The money goes from your bank account to their bank account. It does not pass through us. We do not have a wallet, a merchant account, or a payment gateway. There is nothing for it to pass through." },
      { h: "Why we then ask you whether you paid" },
      { p: "This is the part people find odd, so here it is plainly: once your UPI app opens, we lose sight of you completely. UPI apps do not report back to the website that launched them. There is no callback, no webhook, no status we can check. We are blind from that moment on." },
      { p: "So we ask. You can paste the twelve-digit reference number from your receipt, or skip it. If you paste it, we write it on the lifafa as a note — but we never call it verified, because we have not verified anything. We literally cannot. Anyone telling you they can check a UTR from a website is telling you something untrue." },
      { h: "Sending it" },
      { p: "You get a link. Send it on WhatsApp, or however you like. They open it, the envelope unfolds, the coin and the mithai come out, and your message is there." },
      { h: "What it costs" },
      { p: "Nothing. There is no fee, no cut, no premium tier, no ads. We do not take a percentage because we never touch the amount in the first place." },
      { h: "What we store" },
      { ul: [
        "The envelope you made and the words you wrote.",
        "The two names, and the receiving UPI ID — needed to build the payment link.",
        "The amount, so the envelope can show it.",
      ] },
      { p: "We do not ask for your phone number, your email, your own UPI ID, or your bank details. We do not have accounts, so there is nothing to log into and nothing to leak. Individual lifafa links are never indexed by search engines." },
    ],
  },
  {
    slug: "diwali-shagun-guide",
    title: "Diwali: what to give, and the one-rupee rule",
    date: "2026-08-16",
    tag: "Festivals",
    excerpt:
      "Amounts, who gets what, and why every figure ends in one.",
    body: [
      { p: "Diwali shagun runs on a quiet set of rules that nobody writes down and everybody follows. Here they are written down." },
      { h: "Always end in one" },
      { p: "₹101, ₹501, ₹1,101, ₹2,101, ₹5,101. Never ₹100, never ₹500. The extra rupee makes the sum indivisible, which is the point — it signals that the relationship carries forward rather than being squared off. This is why the one-rupee coin exists in the envelope at all." },
      { h: "Roughly who gets what" },
      { ul: [
        "Household help, drivers, the building staff — usually a month's pay or a round figure plus one, and it is given warmly, not handed over.",
        "Younger cousins, nieces and nephews — ₹101 to ₹501 depending on age and how close you are.",
        "Children of family friends — ₹101 to ₹251.",
        "Newly married couples in the family — ₹1,101 and up.",
      ] },
      { p: "These are habits, not rules. The correct amount is whatever is normal in your family, and going far above it can embarrass the person receiving rather than delight them." },
      { h: "Give it with both hands" },
      { p: "Small thing, matters a lot. Shagun is handed over with both hands and received the same way, usually with a touch of the feet if there's an age gap. If you are sending it as a link instead, the equivalent is writing something real in the message rather than leaving it blank." },
      { h: "Lakshmi Puja timing" },
      { p: "Most families give shagun after Lakshmi Puja on Diwali night, or on Bhai Dooj two days later for siblings. Sending it earlier is fine — sending it late is the thing people notice." },
    ],
  },
  {
    slug: "raksha-bandhan-neg",
    title: "Raksha Bandhan: the nek a brother owes",
    date: "2026-08-12",
    tag: "Festivals",
    excerpt:
      "The thread goes on the wrist, the nek goes in her hand. What it's for, and what to give.",
    body: [
      { p: "Rakhi is one of the few festivals where the gift is not optional and not a surprise. She ties the thread, he gives the nek. Both sides know it's coming, and it is still somehow moving every year." },
      { h: "What the nek actually means" },
      { p: "It is not payment for the rakhi. It is a standing promise, renewed annually — that she has somewhere to go if she needs it. Historically that mattered enormously for a sister who had married into another family and another town. The money was proof the door was still open." },
      { p: "That is why the amount matters less than the fact of it, and why sisters remember the year a brother forgot." },
      { h: "Amounts" },
      { ul: [
        "Younger sister, school age — ₹101 to ₹501.",
        "Adult sister — ₹1,101 to ₹5,101 is common, but this varies enormously by family.",
        "Cousin sisters and rakhi sisters — usually ₹251 to ₹1,101.",
      ] },
      { h: "When you can't be there" },
      { p: "Plenty of siblings are in different cities or different countries now, and the rakhi arrives by courier days early. The nek usually arrives as a bare UPI transfer with no message, which is a slightly sad end to a ritual that is entirely about being remembered." },
      { p: "This is more or less the exact situation Digi Lifafa was built for. Send the envelope, write the thing you would have said, let her open it." },
    ],
  },
  {
    slug: "wedding-shagun-etiquette",
    title: "Wedding shagun: how much, and when to hand it over",
    date: "2026-08-08",
    tag: "Festivals",
    excerpt:
      "The envelope at the reception, the amount nobody says out loud, and how not to get it wrong.",
    body: [
      { p: "Wedding shagun is the highest-stakes envelope in Indian social life, mostly because everyone can see you hand it over and somebody is writing your name in a register." },
      { h: "The amount" },
      { p: "It scales with closeness and with what the family gave at your own functions — many households genuinely keep a book. As a rough map:" },
      { ul: [
        "Colleague or acquaintance — ₹1,101 to ₹2,101.",
        "Friend — ₹2,101 to ₹5,101.",
        "Close friend or extended family — ₹5,101 to ₹11,001.",
        "Immediate family — whatever has been decided at home, and it is rarely your decision alone.",
      ] },
      { p: "Always ending in one, always. And if the family gave you ₹5,101 at your wedding, ₹5,101 is the floor, not the target." },
      { h: "When to give it" },
      { p: "At the reception, usually during or just after the stage photo, handed to the couple directly or dropped in the box beside them. Not at the mehendi, not at the haldi — those are for the family, not for envelopes." },
      { h: "Write your name on it" },
      { p: "The single most common mistake. An unmarked envelope in a stack of two hundred means the couple has no idea who to thank, and it is the reason the register exists. If you are sending a digital one, your name is already on it, which is one small advantage." },
    ],
  },
  {
    slug: "is-it-safe",
    title: "Is this safe? A straight answer",
    date: "2026-08-05",
    tag: "How it works",
    excerpt:
      "We ask you to pay a UPI ID someone typed in. Here is how we try to make that not be a scam, and what you should still check.",
    body: [
      { p: "We will be blunt about something most sites in this space would not admit: an app that shows you a UPI ID and a pay button is, structurally, the same shape as a phishing page. We know that. It shaped how the whole thing is built." },
      { h: "What we do about it" },
      { ul: [
        "The pay screen is only ever reachable by the person who made the lifafa — it lives behind a private link that is not the link you share. Someone cannot make a lifafa and send you the pay screen.",
        "The UPI ID is shown in full, large, right above the button. We never shorten it, never hide it behind a logo, never abbreviate it.",
        "The payment link is never triggered automatically. It always takes a deliberate tap from you.",
        "Once a lifafa is made, the UPI ID, the amount, the names and the message can never be edited by anyone, including us. That kills the attack where a nice link circulates in a family group and the UPI ID is swapped later.",
        "Links inside messages are stripped out entirely. A gift envelope has no business carrying a link, and allowing them would turn this into a delivery mechanism for scams.",
        "There is a cap of ₹21,000, which keeps the whole thing unattractive for serious fraud.",
      ] },
      { h: "What you should still do" },
      { p: "Check the UPI ID before you pay. Read it, properly, character by character. It is displayed in full precisely so you can. If you did not ask this person for their UPI ID yourself, or the amount is not what you expected, stop." },
      { p: "And the general rule, which is older than us and applies everywhere: only send shagun to people you actually know." },
      { h: "What we cannot do" },
      { p: "We cannot reverse a payment, confirm one, or refund one. The money never enters our control, so there is nothing for us to reverse. If you pay the wrong UPI ID, that is between you, your bank and NPCI — exactly as it would be if you had typed it into your UPI app yourself, which is effectively what happened." },
    ],
  },
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug) ?? null;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
