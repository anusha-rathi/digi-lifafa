import type { Post } from "../posts";
export const postOrder = 26;

export const post: Post = {
    slug: "why-we-built-digi-lifafa",
    title: "Why we built Digi Lifafa",
    date: "2026-08-20",
    tag: "Why we built it",
    excerpt:
      "Because a UPI notification is not a lifafa, and the difference matters more than it sounds.",
    body: [
      {
        p: "Every family has the aunt who keeps a stack of lifafas in the almirah. Red ones with gold jaali, a few plain ones for emergencies, and always a jar of one-rupee coins beside them. Before anyone leaves for a wedding, there is the small ceremony of choosing which envelope, counting the notes, tucking the coin in last.",
      },
      {
        p: "Then everyone moved to UPI, and that whole ritual collapsed into a notification. ₹2,100 received. No paper, no coin, no handwriting, no moment of handing it over with both hands. The money arrived and the gift didn't.",
      },
      { h: "The coin is the whole point" },
      {
        p: "There is a reason shagun is ₹101 and not ₹100, ₹501 and not ₹500. The extra rupee is the part that can't be divided. It is the wish that the relationship keeps going, that this is not a settled account. Older relatives will tell you it's inauspicious to give a round number. What they mean is that a round number feels like a transaction.",
      },
      {
        p: "A UPI transfer is a round number by default. You have to work to make it not one. That small friction is exactly what got lost.",
      },
      { h: "So we made the wrapper, not the payment" },
      {
        p: "Digi Lifafa is the envelope. You pick the paper, you tap notes in one at a time the way you'd actually fill one, you add a mithai and the coin, you write what you'd say. Then you send it as a link, and they open it and the thing unfolds.",
      },
      {
        p: "The money is real, and it moves the way it always did, directly from you to them. We are not in the middle of it, and we have gone out of our way not to be. That is a design decision and a legal one, and we would have made it either way.",
      },
      { h: "What we are not building" },
      {
        p: "No wallet. No balance. No accounts. No feed of what everyone gave. No leaderboard of who is the most generous cousin. There is no version of this where we hold your money and no version where we make the amount public.",
      },
      {
        p: "One person makes one envelope for one other person. That's it. If that sounds small, it's because it is. A lifafa was always a small thing. It just wasn't a nothing.",
      },
    ],
  };
