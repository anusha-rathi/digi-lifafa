import type { Post } from "../posts";
export const postOrder = 27;

export const post: Post = {
    slug: "how-digi-lifafa-works",
    title: "How it works, and why we can't see your payment",
    date: "2026-08-18",
    tag: "How it works",
    excerpt:
      "Free, private, and deliberately blind to your money. Here is exactly what happens, step by step.",
    body: [
      {
        p: "The whole flow takes about a minute, and the most important part of it is the part we are not involved in.",
      },
      { h: "Making it" },
      {
        ul: [
          "Pick the paper: the pattern, the colour, the texture.",
          "Build the nek by tapping notes. They stack inside the envelope as you go.",
          "Add the one-rupee coin, and a mithai if you want one.",
          "Write your wishes. Hindi, Hinglish or English, all three work, and the font handles Devanagari properly.",
          "Enter their UPI ID.",
        ],
      },
      { h: "Paying" },
      {
        p: "When you seal it, we build a UPI intent link, a standard deep link that opens whichever UPI app you already use, pre-filled with their UPI ID and the amount. You tap it, your app opens, you pay. On Android we can send you straight into Google Pay, PhonePe or Paytm. On iPhone the generic link is more reliable, and there is always a QR code.",
      },
      {
        p: "The money goes from your bank account to their bank account. It does not pass through us. We do not have a wallet, a merchant account, or a payment gateway. There is nothing for it to pass through.",
      },
      { h: "Why we then ask you whether you paid" },
      {
        p: "This is the part people find odd, so here it is plainly: once your UPI app opens, we lose sight of you completely. UPI apps do not report back to the website that launched them. There is no callback, no webhook, no status we can check. We are blind from that moment on.",
      },
      {
        p: "So we ask. You can paste the twelve-digit reference number from your receipt, or skip it. If you paste it, we write it on the lifafa as a note, but we never call it verified, because we have not verified anything. We literally cannot. Anyone telling you they can check a UTR from a website is telling you something untrue.",
      },
      { h: "Sending it" },
      {
        p: "You get a link. Send it on WhatsApp, or however you like. They open it, the envelope unfolds, the coin and the mithai come out, and your message is there.",
      },
      { h: "What it costs" },
      {
        p: "Nothing. There is no fee, no cut, no premium tier, no ads. We do not take a percentage because we never touch the amount in the first place.",
      },
      { h: "What we store" },
      {
        ul: [
          "The envelope you made and the words you wrote.",
          "The two names, and the receiving UPI ID, needed to build the payment link.",
          "The amount, so the envelope can show it.",
        ],
      },
      {
        p: "We do not ask for your phone number, your email, your own UPI ID, or your bank details. We do not have accounts, so there is nothing to log into and nothing to leak. Individual lifafa links are never indexed by search engines.",
      },
    ],
  };
