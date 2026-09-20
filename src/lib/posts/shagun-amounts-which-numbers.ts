import type { Post } from "../posts";
export const postOrder = 20;

export const post: Post = {
    slug: "shagun-amounts-which-numbers",
    title:
      "Is ₹3,100 a shagun amount? The numbers people use, and the pattern underneath them",
    date: "2026-09-01",
    updated: "1 September 2026",
    tag: "How it works",
    excerpt:
      "₹1,100 yes. ₹3,100 no. Nobody can tell you why, and everybody is sure. There is an actual pattern and once you see it the whole ladder makes sense.",
    body: [
      {
        p: "Somebody is standing at an ATM working out what to put in an envelope, and the number that comes out is ₹3,000. Add the customary one and it is ₹3,100, which is odd, ends in a one, and is somehow still wrong.",
      },
      {
        p: "It is wrong. Ask anyone Indian and they will tell you instantly, and then they will not be able to tell you why. This is a real enough problem that Google records people asking is 3,100 a shagun amount, is 4,100, is 7,100, is 5,001, is 11,111, and the pages that come up do not answer any of them.",
      },
      {
        p: "So here is the ladder, and then the pattern underneath it, which is arithmetic rather than superstition and which nobody seems to have written down.",
      },

      { h: "The ladder" },
      {
        p: "These are the amounts. Not a range, a list. People pick off it rather than choosing a number.",
      },
      {
        table: {
          head: ["What you give", "Total with the coin", "Where it is used"],
          rows: [
            ["₹11", "₹11", "A child, a temple hundi, a token"],
            ["₹21", "₹21", "A small blessing, a young child"],
            ["₹51", "₹51", "Domestic staff at a small occasion, a child"],
            [
              "₹101",
              "₹101",
              "The universal minimum. A child, a neighbour, anyone.",
            ],
            ["₹251", "₹251", "A child of family friends, a small function"],
            [
              "₹501",
              "₹501",
              "The workhorse. A cousin's child, a colleague, most things.",
            ],
            [
              "₹1,100",
              "₹1,101",
              "A colleague's wedding, a niece, a decent nek",
            ],
            ["₹2,100", "₹2,101", "A friend, a relative you see often"],
            ["₹5,100", "₹5,101", "A close friend or a cousin at their wedding"],
            ["₹11,000", "₹11,001", "Close family"],
            ["₹21,000", "₹21,001", "Very close family, a sibling"],
            ["₹51,000", "₹51,001", "Immediate family at a wedding"],
          ],
        },
      },
      {
        p: "Note where the one comes from, because this is the part people get wrong when they try to work it out from first principles. Up to ₹501 the one is inside the number and you count out that exact figure. Above it you give the round amount, and the one-rupee coin already stuck to the front of a traditional lifafa makes the total odd. You give ₹1,100 and it lands as ₹1,101.",
      },
      {
        p: "Nobody counts out ₹1,101 in notes. If you have been doing that, you have been doing the coin's job for it.",
      },

      { h: "So is ₹3,100 a shagun amount" },
      {
        p: "No. Nor is ₹4,100, ₹6,100, ₹7,100, ₹8,100 or ₹9,100. And here is the thing: none of them is forbidden, unlucky, or offensive. Nobody will refuse it and nobody will say anything.",
      },
      {
        p: "It will just sound slightly off, the way £37 would sound as a birthday cheque in England. Not wrong. Just not a number anybody reaches for.",
      },

      { h: "The pattern nobody writes down" },
      {
        p: "Take the ladder and strip the one off it. What is left is 10, 20, 50, 100, 250, 500, 1,000, 2,000, 5,000, and then 11, 21 and 51 thousand.",
      },
      {
        p: "That is the one-two-five series. It is the sequence Indian currency itself is built on: ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500. Every denomination in your wallet is a one, a two or a five with zeroes after it.",
      },
      {
        p: "There is no three. There is no four, no seven, no nine. Not in the notes, and so not in the ladder.",
      },
      {
        p: "That is the whole answer. ₹3,100 sounds wrong for the same reason a ₹300 note would look wrong: three is not a number this currency counts in. The shagun ladder is the note series with a one added, and the one comes off the envelope once the numbers get big.",
      },
      {
        note: "This is my own observation rather than something a source told me. I could not find any page, in English or Hindi, that connects the shagun ladder to the currency series, and plenty of pages give numerological explanations instead. Take it as a pattern that fits rather than a documented rule.",
      },
      {
        p: "Two honest exceptions to it. ₹251 is a half-step and 250 is not in the note series. And ₹11,000, ₹21,000 and ₹51,000 are the eleven-twenty-one-fifty-one pattern moved up a scale rather than the note series. So the rule is a strong tendency and not a law, which is roughly how these things always turn out.",
      },

      { h: "The other numbers people ask about" },
      { h3: "₹5,001" },
      {
        p: "Yes, and it is the older form. Before the coin became standard on printed envelopes people wrote the one into the number itself at every scale, which is where ₹1,001, ₹5,001 and ₹11,001 come from. You will still see it from older relatives and it is completely correct.",
      },
      {
        p: "What has happened since is that the envelope started arriving with the coin already attached, so the round figure plus the coin does the same job. Both totals are odd and both are right.",
      },
      { h3: "₹11,111" },
      {
        p: "Yes, and it is a different system rather than a mistake. Repeating digits are their own auspicious form, and you will see ₹111, ₹1,111, ₹11,111 and ₹1,11,111 used the same way. Common in Gujarati and Marwari business families in particular, and often for temple donations.",
      },
      {
        p: "Worth knowing it reads as slightly more deliberate than the standard ladder. Somebody chose that number.",
      },
      { h3: "₹11" },
      {
        p: "Yes, at the small end. A child touching your feet, a coin into a hundi, a token to somebody who has done a small thing for you. It is not an insult at that scale, it is the scale.",
      },
      { h3: "₹100, ₹500, ₹1,000 flat" },
      {
        p: "This is the one to actually avoid, and it is the only genuine rule on this page.",
      },
      {
        p: "Round totals are condolence money. Flat ₹500, flat ₹1,000, no coin, is what you take to a house in mourning. Not because even numbers are unlucky, but because a round number reads as complete, and completeness is the right wish for a death and the wrong one for everything else.",
      },
      {
        p: "So the rule is not really give odd. It is add the rupee at every happy occasion, and take it off at the one that is not.",
      },

      { h: "What actually decides the number" },
      {
        p: "Having said all that, the ladder is the easy part. Which rung you pick is the real question, and it is not about the number at all.",
      },
      {
        p: "It is about what that family gave at your last function. Somewhere there is a book, or a mother who remembers, and your envelope is being read against the last entry. Give a rung below what came to you and it is noticed. That is written up properly in the wedding shagun guide.",
      },
      {
        p: "If you have no history with them, there is nothing to fall short of. You are opening the account. Pick the rung that matches how close you are and stop worrying about it.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Is ₹3,100 a shagun amount?",
            a: "No, and it is the most searched version of this question. Nothing bad happens if you give it and nobody will comment, but three is not a number the ladder uses, because the ladder follows the one-two-five series that Indian currency itself is built on. Give ₹2,100 or ₹5,100 instead.",
          },
          {
            q: "Is ₹4,100 or ₹7,100 a shagun amount?",
            a: "Same answer. Four and seven are not in the series either. The rungs above ₹2,100 are ₹5,100, then ₹11,000, then ₹21,000.",
          },
          {
            q: "Is ₹5,001 a shagun amount?",
            a: "Yes. It is the older way of writing it, from before envelopes came with the coin attached, and you will still see it from older relatives. ₹5,100 plus the coin on the lifafa gets you to the same odd total.",
          },
          {
            q: "Is ₹11,111 a shagun amount?",
            a: "Yes, and it belongs to a separate tradition of repeating digits rather than to the main ladder. ₹111, ₹1,111 and ₹11,111 are all used, particularly by Gujarati and Marwari families and for temple donations. It reads as a deliberate choice rather than a default.",
          },
          {
            q: "Why not just give ₹3,000 and skip the extra rupee?",
            a: "Because a round total is what gets given at a funeral. The one is what marks the occasion as a happy one, and leaving it off is the actual mistake, more than picking an unusual number.",
          },
          {
            q: "Does the one-rupee coin have to be a real coin?",
            a: "No. Plenty of envelopes ship from the factory with the coin already attached, and there is a whole product line where the coin is printed rather than real. A hand-glued coin is the version people remember; it is not the common one.",
          },
        ],
      },
    ],
  };
