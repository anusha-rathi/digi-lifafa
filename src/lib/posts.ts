/* Blog content. Plain data, no MDX, no CMS — each post is a title plus an
   array of blocks. Adding a post means adding an entry here. */

import type { FestivalArtKey } from "@/components/FestivalArt";

export type Block =
  | { h: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  | { table: { head: string[]; rows: string[][] } }
  | { photo: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag: "Festivals" | "How it works" | "Why we built it";
  /** Drawn header, see components/FestivalArt.tsx. Never a stock photo. */
  art?: FestivalArtKey;
  /** Shown under the title. Dates get checked and re-checked each year. */
  updated?: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "onam-onakkodi-gifting",
    title: "Onam gifting: Onakkodi, and what to send when you cannot get home",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "pookkalam",
    excerpt:
      "Thiruvonam 2026 is Wednesday 26 August. Onam gifting runs on cloth, not cash, which is why the north Indian shagun rules give you the wrong answer.",
    body: [
      { p: "Here is where people from outside Kerala go wrong. You have been to Indian weddings. You know the envelope, you know the number ends in one, you know cash is the default and everybody prefers it. So for Onam you put ₹2,101 in an envelope and you feel prepared." },
      { p: "Then you watch what actually happens on Thiruvonam morning. The elders of the house hand out cloth. A kasavu mundu for one person, a kasavu saree for another, folded, given by hand, touched to the feet on the way back. Nobody produces an envelope. Your envelope is not wrong exactly, but it is answering a question nobody asked." },
      { p: "Onam gifting is cloth first. The whole grammar is different, and if you import the north Indian shagun rules you will get the amount right and the gesture wrong." },
      { p: "This page covers what Onakkodi is and who gives it to whom, what to do when cash is genuinely the practical answer, what the ten days actually contain, and how people who live outside Kerala handle a festival built almost entirely around being physically in the house." },

      { h: "Onam 2026: the dates" },
      { p: "Onam runs ten days. It opens on Atham and closes on Thiruvonam, which is the day people mean when they say Onam." },
      { table: {
        head: ["Day", "Name", "2026 date"],
        rows: [
          ["Day 1", "Atham", "Sunday 16 August 2026"],
          ["Day 10", "Thiruvonam", "Wednesday 26 August 2026"],
        ],
      } },
      { p: "The pookkalam, the circular flower carpet at the entrance, starts small on Atham and gains a ring a day. By Thiruvonam it is at full size. It is a ten-day countdown you can see from the street, which is a better calendar than anything on your phone." },
      { note: "Onam follows the Malayalam calendar and the Thiruvonam nakshatram, so the Gregorian date moves each year. The 2026 dates above were checked on 25 August 2026." },

      { photo: "pookkalamThrissur", caption: "The pookkalam gains a ring a day for ten days." },
      { h: "What Onakkodi actually is" },
      { p: "Onakkodi is new cloth, given for Onam. The traditional form is a kasavu mundu or a kasavu saree: off-white cotton with a gold border, which is the visual signature of the whole festival." },
      { p: "Kerala Tourism puts its weight bluntly, describing gifting Onakkodi as just as important as making the pookkalam. That is a strong claim, because the pookkalam is the thing every photograph of Onam is of." },
      { p: "The custom is old and documented. Rani Gouri Lakshmi Bai, who ruled Travancore in the early 1800s, gave Onakkodi to Colonel John Munro, the British Resident. When a ruler gives festival cloth to a foreign administrator, the gift is doing diplomatic work, which tells you it was already a serious social instrument two centuries ago." },

      { h3: "Who gives Onakkodi to whom" },
      { p: "The direction is fixed and it is worth getting right, because reversing it is the actual mistake outsiders make." },
      { ul: [
        "Elders to younger, on Thiruvonam morning. Parents to children, grandparents to grandchildren.",
        "The head of the household to everyone in it, including in many homes the people who work there.",
        "In south Kerala it is usual to extend it to close relatives beyond the immediate household.",
        "Younger to elder: not Onakkodi. You give something else, or you give your presence.",
      ] },
      { p: "So a twenty-five year old buying a kasavu saree for their mother is doing something warm and slightly out of order. The gift is fine. It is not Onakkodi. Onakkodi runs downhill." },

      { h: "When cash is the right answer anyway" },
      { p: "Cloth assumes you know a size, a taste, and a colour, and that you can get the thing into their hands. Once any of those breaks, cash stops being a lazy substitute and starts being the sensible option." },
      { ul: [
        "You are abroad and shipping a saree costs more than the saree.",
        "You are gifting to household staff, who may prefer to choose their own or need the money for something else entirely.",
        "You are gifting to adults whose taste in clothes you genuinely do not know.",
        "You left it late, which on a ten-day festival is easier than it sounds.",
      ] },
      { p: "If you are giving cash for Onam, the shagun conventions do apply. Keep the amount ending in a one, and avoid round even numbers, which in Hindu practice belong to condolence giving rather than celebration. ₹501, ₹1,001, ₹2,101." },
      { p: "The useful move is to say what the money is for. Cash handed over with no frame is just money. Cash handed over as buy yourself the Onakkodi I could not pick is the actual custom, delegated. It costs you one sentence and it puts the gift back in the right category." },

      { h: "What the ten days contain" },
      { p: "Onam is not a puja festival in the way Ganesh Chaturthi is. There is no long muhurat window everyone is working around. It is a homecoming festival, and the structure reflects that." },
      { p: "The story is that Mahabali, the asura king whose reign was so just that the gods removed him from it, is permitted to return once a year to see his people. On Thiruvonam he visits every Malayali home. Everything you do that day is a preparation for a guest who is definitely coming: the flowers at the door, the food, the new clothes, the house being visibly at its best." },
      { p: "That is why the festival is so painful to be away for, and why the gifting is shaped the way it is. The pookkalam says the house is ready. The Onakkodi says the people in it are ready. Both are for the benefit of somebody arriving." },
      { h3: "Onasadya" },
      { p: "The Thiruvonam meal is served on a banana leaf and runs to somewhere between twenty and twenty-six items depending on the household and the region. It is vegetarian, it is eaten with the hands, and the order of items on the leaf is fixed rather than decorative." },
      { p: "If you are a guest and unsure, the two things that matter: leave the leaf folded towards you when you finish, and do not ask for a spoon before you have tried." },

      { h: "Being outside Kerala for Onam" },
      { p: "There are more Malayalis outside Kerala at any given Onam than there are people reading this page, and the festival does not travel well. It is built around a house, a doorway, a floor you can lay flowers on, and a lunch that takes a day to cook." },
      { p: "What survives relocation, in rough order of how well it works:" },
      { ul: [
        "The sadya. Malayali associations and restaurants run them everywhere, and eating one with strangers is closer to the real thing than eating alone with the correct family.",
        "The pookkalam, scaled down. A doorway-sized one in a flat corridor still does the job.",
        "The kasavu. Wearing it is half the point, and it packs flat.",
        "The phone calls, made at the right hour rather than late at night.",
      ] },
      { p: "What does not survive is the giving, because the giving was physical. This is the gap people feel and usually paper over with a transfer." },
      { p: "If you are sending money home for Onam, send it before Thiruvonam morning rather than during it, and send it with the words attached rather than in a separate message afterwards. A transfer that lands mid-sadya with no context gets looked at, acknowledged, and put away." },

      { h: "How Onam differs from the north Indian festivals" },
      { table: {
        head: ["", "Onam", "Diwali or Rakhi"],
        rows: [
          ["Default gift", "Cloth (Onakkodi)", "Cash in an envelope"],
          ["Direction", "Elders to younger, downward", "Brother to sister, elders to younger"],
          ["Timing", "Thiruvonam morning", "After puja, or the muhurat window"],
          ["Cash role", "Practical substitute, framed as such", "The primary gift"],
          ["Governing rule", "New cloth, given by hand", "The amount ends in one"],
        ],
      } },
      { p: "The practical consequence: if you are gifting into a Malayali household and you only know the north Indian rules, ask. What would you like is not a failure of preparation at Onam. It is close to the correct question, because the answer is frequently a specific colour of mundu." },

      { h: "So what should you send this year?" },
      { p: "If you can get cloth to them in time, send cloth, and send kasavu rather than something more expensive and less correct. If you cannot, send money, keep it ending in a one, and say in words that it is for the Onakkodi you would have chosen." },
      { p: "And if you are the one at home this year with the family arriving, the gifting runs downhill and it runs on Thiruvonam morning. Everything else about Onam is negotiable by household. Those two are not." },
    ],
  },
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
      { p: "There is a reason shagun is ₹101 and not ₹100, ₹501 and not ₹500. The extra rupee is the part that can't be divided. It is the wish that the relationship keeps going, that this is not a settled account. Older relatives will tell you it's inauspicious to give a round number. What they mean is that a round number feels like a transaction." },
      { p: "A UPI transfer is a round number by default. You have to work to make it not one. That small friction is exactly what got lost." },
      { h: "So we made the wrapper, not the payment" },
      { p: "Digi Lifafa is the envelope. You pick the paper, you tap notes in one at a time the way you'd actually fill one, you add a mithai and the coin, you write what you'd say. Then you send it as a link, and they open it and the thing unfolds." },
      { p: "The money is real, and it moves the way it always did, directly from you to them. We are not in the middle of it, and we have gone out of our way not to be. That is a design decision and a legal one, and we would have made it either way." },
      { h: "What we are not building" },
      { p: "No wallet. No balance. No accounts. No feed of what everyone gave. No leaderboard of who is the most generous cousin. There is no version of this where we hold your money and no version where we make the amount public." },
      { p: "One person makes one envelope for one other person. That's it. If that sounds small, it's because it is. A lifafa was always a small thing. It just wasn't a nothing." },
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
        "Pick the paper: the pattern, the colour, the texture.",
        "Build the nek by tapping notes. They stack inside the envelope as you go.",
        "Add the one-rupee coin, and a mithai if you want one.",
        "Write your wishes. Hindi, Hinglish or English, all three work, and the font handles Devanagari properly.",
        "Enter their UPI ID.",
      ] },
      { h: "Paying" },
      { p: "When you seal it, we build a UPI intent link, a standard deep link that opens whichever UPI app you already use, pre-filled with their UPI ID and the amount. You tap it, your app opens, you pay. On Android we can send you straight into Google Pay, PhonePe or Paytm. On iPhone the generic link is more reliable, and there is always a QR code." },
      { p: "The money goes from your bank account to their bank account. It does not pass through us. We do not have a wallet, a merchant account, or a payment gateway. There is nothing for it to pass through." },
      { h: "Why we then ask you whether you paid" },
      { p: "This is the part people find odd, so here it is plainly: once your UPI app opens, we lose sight of you completely. UPI apps do not report back to the website that launched them. There is no callback, no webhook, no status we can check. We are blind from that moment on." },
      { p: "So we ask. You can paste the twelve-digit reference number from your receipt, or skip it. If you paste it, we write it on the lifafa as a note, but we never call it verified, because we have not verified anything. We literally cannot. Anyone telling you they can check a UTR from a website is telling you something untrue." },
      { h: "Sending it" },
      { p: "You get a link. Send it on WhatsApp, or however you like. They open it, the envelope unfolds, the coin and the mithai come out, and your message is there." },
      { h: "What it costs" },
      { p: "Nothing. There is no fee, no cut, no premium tier, no ads. We do not take a percentage because we never touch the amount in the first place." },
      { h: "What we store" },
      { ul: [
        "The envelope you made and the words you wrote.",
        "The two names, and the receiving UPI ID, needed to build the payment link.",
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
      { p: "₹101, ₹501, ₹1,101, ₹2,101, ₹5,101. Never ₹100, never ₹500. The extra rupee makes the sum indivisible, which is the point. It signals that the relationship carries forward rather than being squared off. This is why the one-rupee coin exists in the envelope at all." },
      { h: "Roughly who gets what" },
      { ul: [
        "Household help, drivers, the building staff: usually a month's pay or a round figure plus one, and it is given warmly, not handed over.",
        "Younger cousins, nieces and nephews: ₹101 to ₹501 depending on age and how close you are.",
        "Children of family friends: ₹101 to ₹251.",
        "Newly married couples in the family: ₹1,101 and up.",
      ] },
      { p: "These are habits, not rules. The correct amount is whatever is normal in your family, and going far above it can embarrass the person receiving rather than delight them." },
      { h: "Give it with both hands" },
      { p: "Small thing, matters a lot. Shagun is handed over with both hands and received the same way, usually with a touch of the feet if there's an age gap. If you are sending it as a link instead, the equivalent is writing something real in the message rather than leaving it blank." },
      { h: "Lakshmi Puja timing" },
      { p: "Most families give shagun after Lakshmi Puja on Diwali night, or on Bhai Dooj two days later for siblings. Sending it earlier is fine. Sending it late is the thing people notice." },
    ],
  },
  {
    slug: "raksha-bandhan-neg",
    title: "Raksha Bandhan nek: how much to give, and why it ends in one",
    date: "2026-08-25",
    updated: "25 August 2026",
    tag: "Festivals",
    art: "rakhi",
    excerpt:
      "Rakhi 2026 falls on Friday 28 August. The thread has rules everybody knows. The nek has rules nobody writes down, so here they are.",
    body: [
      { p: "Here is the part nobody prepares you for. You know how the thread works. She ties it on your right wrist, you both do the aarti, somebody photographs it badly. Then she puts her hand out, and you are supposed to know what goes in it." },
      { p: "Nobody tells you the number. Your mother will not tell you the number, because in her generation the number was obvious from context and asking out loud was slightly shameful. So you guess. You give ₹500 because it is a note you have, and she says thank you, and something is very slightly off for the rest of the afternoon and you cannot work out what." },
      { p: "What was off is that ₹500 is an even number, and in Hindu practice even amounts of cash are what you hand over at a funeral. Not as an insult. Just as a category error, like bringing a birthday cake to a condolence visit." },
      { p: "This page covers the half of Raksha Bandhan that the muhurat pages leave out: what the nek is actually for, why every amount ends in a one, what people in different relationships actually give in 2026, who gives to whom, and what to do when you are twelve hundred kilometres away and the rakhi came by courier." },

      { h: "Raksha Bandhan 2026: the date and the window" },
      { p: "Raksha Bandhan 2026 falls on Friday 28 August. The auspicious window runs from roughly 05:57 to 09:48 IST, which is unusually early, so the tying tends to happen before the working day rather than after lunch." },
      { note: "Muhurat timings shift by city because they are calculated from local sunrise. The window above is the widely published Delhi figure. If your family is strict about timing, check a panchang for your own city rather than trusting any single page, including this one." },
      { p: "The reason the window matters more some years than others is Bhadra. Bhadra is a period considered inauspicious for tying the rakhi, and when it falls across the morning, families push the ceremony later or earlier to avoid it. In years when Bhadra clears early, as it does in 2026, the morning window is the good one and most households use it." },

      { photo: "rakhiOnHand", caption: "The thread is a claim. The nek is the acceptance of it." },
      { h: "What the nek actually is" },
      { p: "The nek is not payment for the thread. This matters, because if you treat it as payment you will get the amount wrong in a specific way: you will scale it to the cost of the rakhi, and the rakhi cost eighty rupees." },
      { p: "The thread is a claim. She ties it and says, in effect, you are responsible for me. The nek is the acceptance of that claim. It is a promise renewed once a year that if something goes wrong, she has somewhere to go." },
      { p: "That sounds abstract until you look at where the custom comes from. A sister who married moved into another household, often in another town, among people who were not hers. Her brother's house was the one place she could arrive at without an invitation. The annual gift was proof, in front of witnesses, that the door had not closed. The money was never the point. The money was the receipt." },
      { p: "This is why sisters remember the year a brother forgot, and do not remember what he gave the year he did not. The amount is almost incidental. The fact of it is the whole thing." },

      { h: "Why the amount always ends in one" },
      { p: "Every festival amount in India ends in a one. ₹101, ₹501, ₹1,101, ₹2,101, ₹5,101. Most explanations you will read say it is for good luck, which is true in the way that saying a car runs on fuel is true." },
      { p: "The actual mechanism is arithmetic. A number ending in one cannot be divided into two equal parts. ₹500 splits cleanly into two ₹250s and the transaction closes. ₹501 does not. The extra rupee is a deliberate remainder, and a remainder means the account is still open, which means the relationship continues." },
      { p: "The other half of the reason is the one people are more careful about. Even, round amounts are the convention for condolence money and funeral offerings. Giving a round ₹500 at a happy occasion puts your envelope in the wrong category. Nobody will say anything. Somebody will notice." },
      { p: "This is also why the physical ₹1 coin goes into the envelope at all. If you are handing over ₹500 in notes, the coin is what converts it into ₹501 and moves it out of the funeral column." },
      { note: "One rupee is the standard remainder, but it is not the only one. Some families use ₹11, ₹21 or ₹51 as the tail, which is the same logic scaled up. ₹5,100 becomes ₹5,101 or ₹5,151 depending on the household. Follow whatever your family already does." },

      { h: "How much to give in 2026" },
      { p: "There is no correct number, and anybody publishing one is guessing. What exists is a set of bands that most families operate inside. The bands below are what is common, not what is required." },
      { table: {
        head: ["Who", "Common range", "Notes"],
        rows: [
          ["Younger sister, school age", "₹101 to ₹501", "Often given as cash she is allowed to spend herself, which is half the pleasure"],
          ["Younger sister, college age", "₹501 to ₹2,101", "Scale it to whether she is funding her own life yet"],
          ["Adult sister, both earning", "₹1,101 to ₹5,101", "The widest band and the most family-dependent"],
          ["Sister who is unwell or between jobs", "As much as you can", "The one case where the ritual and the practical purpose meet"],
          ["Cousin sister", "₹251 to ₹1,101", "Usually a step below a full sibling"],
          ["Rakhi sister, no blood relation", "₹251 to ₹1,101", "Match what you would give a cousin"],
          ["Bhabhi tying rakhi to you", "₹501 to ₹2,101", "Increasingly common in north Indian households"],
        ],
      } },
      { p: "Three rules matter more than the table." },
      { ul: [
        "Match the family, not the internet. If your family has given ₹1,101 for a decade, ₹5,101 is not generous, it is a statement, and everyone will ask what happened.",
        "Never go down. If you gave ₹2,101 last year and ₹1,101 this year, that reads as a message about the relationship whether or not you meant one. If money is tight, keep the number and say less.",
        "Never make it a competition between sisters. Sisters compare. If you have two, give the same, or have a reason you are prepared to say out loud.",
      ] },
      { p: "You will also see wedding shagun tables quoted for Rakhi, with numbers like ₹10,000 to ₹50,000 for close family. Those are wedding numbers. A wedding is a household-forming event and the giving reflects that. Festival giving runs an order of magnitude lower and always has." },

      { h: "Who gives to whom" },
      { p: "Rakhi giving is directional, and the direction is not always the one people assume." },
      { ul: [
        "Brother to sister, always. This is the nek proper.",
        "Elder to younger, generally. An older sister ties the thread and may still receive from a younger brother if he is earning and she is not.",
        "Sister to brother: sweets, a small gift, sometimes a shirt. Cash from sister to brother is unusual in most regions and can read oddly.",
        "Parents to both, in many households, on the same morning, separately from the nek.",
      ] },
      { p: "The case people get wrong is a younger brother who is not yet earning. He is not expected to give money. A younger brother giving ₹101 he saved is doing the ritual correctly and completely. The obligation attaches to capacity, not to gender or birth order alone." },

      { photo: "rakhiShopping", caption: "A rakhi stall in the week before the festival." },
      { h: "What to do when you are not in the same city" },
      { p: "This is now the normal case rather than the exception, and it is where the ritual quietly falls apart." },
      { p: "Here is what usually happens. She courier's the rakhi ten days early so it arrives in time. It sits on your desk. On the morning of the twenty-eighth you tie it yourself, or your flatmate does, and you send a photo. Then you open your UPI app and send ₹2,101, and the notification she receives says ₹2,101 received." },
      { p: "Look at what survived that and what did not. The money survived. The thread survived. What did not survive is every part that made it a ritual: the handing over, the words, the fact that it happened in front of people, the small physical object with her name on it." },
      { p: "A bank notification is a receipt. The nek was always a receipt for something else, and when the something else is missing, the receipt is all that arrives." },
      { p: "Whatever you do about that, do something about it. Send a voice note before you send the money. Call at the time she would have tied it rather than at eleven at night. Write the thing you would have said out loud, and send it with the amount rather than after it. The specific method matters less than the fact that the money is not travelling alone." },

      { h: "What to write" },
      { p: "Most people write nothing, because a UPI transfer has a twenty-character note field designed for invoice numbers. If you have room to write properly, the things worth saying are small and concrete." },
      { ul: [
        "Something only you two would know. A nickname, an old fight, the thing she says every year.",
        "The promise, said plainly rather than implied. It is the entire content of the ritual and almost nobody puts it in words.",
        "What you would have done if you were there. Where you would have taken her, what you would have eaten.",
      ] },
      { p: "Avoid the forwarded message. She has received nine of them by nine in the morning, all with the same clip art, and yours will be the tenth." },

      { h: "Common mistakes" },
      { ul: [
        "Round numbers. ₹500, ₹1,000, ₹5,000. Add the rupee.",
        "Sending the money the day before because you will be busy. The date is the point of the date.",
        "Giving a gift card instead of cash to an adult sister. The nek is meant to be unconditional, and a gift card has conditions printed on the back.",
        "Forgetting the rakhi sister who has tied one to you every year since school. She is counting.",
        "Making it about the amount in either direction. Announcing it, apologising for it, or comparing it to last year all do the same damage.",
      ] },

      { h: "So what should you actually give?" },
      { p: "If you want one number and you are an earning adult with an adult sister, ₹2,101 sits in the middle of the common band in 2026 and will not be wrong in most families. If she is younger and still studying, ₹1,101. If she is a cousin or a rakhi sister, ₹501." },
      { p: "Then check it against what your family gave last year, and if the two disagree, follow the family. The table on this page is a description of what people do. Your household is the actual authority, and it always was." },
      { p: "And whichever number you land on, make it end in a one." },
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
      { p: "It scales with closeness and with what the family gave at your own functions, many households genuinely keep a book. As a rough map:" },
      { ul: [
        "Colleague or acquaintance: ₹1,101 to ₹2,101.",
        "Friend, ₹2,101 to ₹5,101.",
        "Close friend or extended family: ₹5,101 to ₹11,001.",
        "Immediate family: whatever has been decided at home, and it is rarely your decision alone.",
      ] },
      { p: "Always ending in one, always. And if the family gave you ₹5,101 at your wedding, ₹5,101 is the floor, not the target." },
      { h: "When to give it" },
      { p: "At the reception, usually during or just after the stage photo, handed to the couple directly or dropped in the box beside them. Not at the mehendi, not at the haldi, those are for the family, not for envelopes." },
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
        "The pay screen is only ever reachable by the person who made the lifafa, it lives behind a private link that is not the link you share. Someone cannot make a lifafa and send you the pay screen.",
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
      { p: "We cannot reverse a payment, confirm one, or refund one. The money never enters our control, so there is nothing for us to reverse. If you pay the wrong UPI ID, that is between you, your bank and NPCI, exactly as it would be if you had typed it into your UPI app yourself, which is effectively what happened." },
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
