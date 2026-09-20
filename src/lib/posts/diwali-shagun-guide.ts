import type { Post } from "../posts";
export const postOrder = 28;

export const post: Post = {
    slug: "diwali-shagun-guide",
    title: "Diwali shagun: how much to give, and when it becomes taxable",
    date: "2026-08-16",
    updated: "29 August 2026",
    tag: "Festivals",
    excerpt:
      "Diwali 2026 is Sunday 8 November. Every page tells you to give ₹101 and not ₹100. None of them tell you that shagun from a cousin is taxable income.",
    body: [
      {
        p: "Here is the thing nobody mentions. You send your cousin ₹2,100 on Diwali night over UPI, she sends you ₹1,100 back, an aunt sends ₹5,100, and by the end of the week the money has gone around the family the way it always has. Except it has not, quite. Every one of those transfers is now a dated line in a bank statement with two names on it, and cash never was.",
      },
      {
        p: "For most people that changes nothing at all. For a few it changes something specific, because the Income Tax Act has a list of who counts as your relative, and your cousin is not on it.",
      },
      {
        p: "Shagun used to be invisible by default. A note pressed into a hand left no record anywhere, so the question of whether it was income never came up. UPI did not change the custom. It changed the paperwork underneath the custom, and the custom has not caught up.",
      },
      {
        p: "This page covers both halves. What to give and why every figure ends in a one, which is the part the other pages do cover. Then the part they do not: when shagun is taxable, who the Act counts as family, what to do if you employ someone at home, and why ₹49,999 and ₹50,001 are not one rupee apart.",
      },
      {
        note: "Diwali 2026 falls on Sunday 8 November. The five days run Dhanteras on Friday 6 November through Bhai Dooj on Tuesday 10 November.",
      },

      { h: "Why every amount ends in one" },
      { p: "₹101, ₹501, ₹1,100, ₹5,100. Never ₹100, never ₹500." },
      {
        p: "Small amounts carry the one inside the number: ₹101, ₹251, ₹501. Larger ones do not. You put ₹1,100 in the envelope, or ₹2,100, or ₹5,100, and the one-rupee coin already stuck to the front of the lifafa is what makes the total ₹1,101. The coin is not decoration. It is doing the arithmetic.",
      },
      {
        p: "An even amount is a closed sum. It divides cleanly, it settles, it finishes. Closed sums are what you hand over at a funeral, where the point is precisely that an account is being closed. So ₹500 to a cousin at Diwali is not stingy and it is not rude. It is the wrong category, in the way that bringing a birthday cake to a condolence visit is the wrong category.",
      },
      {
        p: "Either way the total is indivisible and therefore unfinished, and that is the message: this carries on. Which is also why a traditional lifafa comes with the coin already on it. Nobody wants you doing sums at the door.",
      },

      { h: "What people actually give" },
      {
        p: "These are the bands people report, and they vary hugely by city, community and family. The correct amount is whatever is normal in your family, and going far above that can embarrass the person receiving it rather than please them.",
      },
      {
        table: {
          head: ["Who", "Common range", "Notes"],
          rows: [
            [
              "A child in the family",
              "₹101 to ₹501",
              "Scales with age and closeness",
            ],
            [
              "Children of family friends",
              "₹101 to ₹251",
              "Given to the child, not the parent",
            ],
            [
              "Younger cousins, nieces, nephews",
              "₹251 to ₹1,100",
              "The most common case, and see the tax section",
            ],
            [
              "A newly married couple",
              "₹1,100 and up",
              "Wedding gifts have their own tax rule, Diwali shagun does not",
            ],
            [
              "Household help, driver, building staff",
              "About a month's pay",
              "Custom, not a rule. See below.",
            ],
          ],
        },
      },
      {
        p: "Direction matters more than the number. Shagun runs downward and outward: from older to younger, from the settled to the starting out, from the household to the people who keep it running. Giving upward, to a parent or a grandparent, is a different gesture and usually not called shagun at all.",
      },
      {
        p: "These bands are the ones reported most often in north and west India. Diwali gifting in Tamil Nadu, Kerala or the north-east runs on its own logic, and if that is your family, theirs is the number that counts.",
      },

      { h: "When shagun is taxable" },
      {
        p: "This is the section no other page on this query has, so here is the whole thing plainly.",
      },
      {
        p: "Under Section 56(2)(x) of the Income Tax Act, money you receive without giving anything back is taxable as Income from Other Sources if the total from everyone who is not your relative crosses ₹50,000 in a financial year. Below that, nothing. Gifts from people the Act does count as relatives are exempt at any amount, with no ceiling.",
      },
      { p: "Two details do the real damage, and neither is intuitive." },
      {
        p: "First, it is a cliff and not a taper. If your year's total from non-relatives is ₹49,999 you owe nothing. If it is ₹50,001 then the whole ₹50,001 is taxable, not the one rupee over the line.",
      },
      {
        p: "Second, the Act's definition of relative is narrower than the word is in any Indian family. This is the list, read from the point of view of the person receiving the money.",
      },
      {
        table: {
          head: ["Counts as your relative", "Does not"],
          rows: [
            ["Spouse", "Cousins, of any degree"],
            ["Brothers and sisters, and their spouses", "Nephews and nieces"],
            [
              "Your parents' brothers and sisters, and their spouses",
              "Friends",
            ],
            ["Parents, grandparents, and further up", "Colleagues"],
            [
              "Children, grandchildren, and further down",
              "Your spouse's cousins",
            ],
            ["The same list again on your spouse's side", "Anyone else"],
          ],
        },
      },
      {
        p: "Cousins are the one that catches people, because for anyone in their twenties the cousin group is exactly where Diwali money circulates most. Shagun from a cousin is a gift from a non-relative in the eyes of the Act, and it counts toward that ₹50,000.",
      },
      {
        p: "The list also runs in one direction only, which produces a result that sounds like a mistake and is not. Your uncle is your parent's sibling, so money from him to you is exempt. You are your uncle's nephew, and nephews are not on the list, so money from you to him is not. The same two people, the same amount, opposite treatment depending on which way it moved.",
      },
      {
        p: "Worth knowing for context: gifts to a couple on the occasion of their marriage are exempt whatever the amount and whoever gives them. That exemption is specific to the wedding. It does not extend to the Diwali after it.",
      },
      {
        note: "Two caveats. This is general information and not tax advice, so if a real amount is involved, ask somebody qualified. And the section numbers here are from the Income-tax Act 1961, which the Income-tax Act 2025 replaced with effect from 1 April 2026. Returns for the year just gone still follow the old law, and the thresholds described here are unchanged as far as we can establish, but the numbering is not, and anyone citing a section should check it against the new Act. Updated 1 September 2026.",
      },

      { h: "If you employ someone at home" },
      {
        p: "One month's salary is the reported custom for a cook, a maid, a driver or building staff, and many households pay it without deducting for leave taken during the year, which is part of the point. Reported custom, not survey data: nobody appears to have measured it.",
      },
      {
        p: "The tax treatment here trips people up in the opposite direction to everything above, because this is not shagun. It is employment.",
      },
      {
        ul: [
          "A cash Diwali bonus is salary. It is fully taxable in the employee's hands regardless of size, and the ₹5,000 exemption people quote does not apply to it.",
          "That ₹5,000 exemption, under Rule 3(7)(iv) of the Income-tax Rules, covers non-cash gifts, vouchers and hampers from an employer, up to ₹5,000 in aggregate across the whole financial year.",
          "It is a cliff too. Cross ₹5,000 in non-cash gifts and the entire value becomes a taxable perquisite, not just the part above the line.",
        ],
      },
      {
        p: "For most domestic staff the amounts and the income levels involved mean nothing is owed in practice. The rule is worth knowing anyway, because the version people repeat, that any Diwali bonus up to ₹5,000 is tax free, is wrong in a way that matters if the bonus is cash.",
      },

      { h: "The timing" },
      {
        table: {
          head: ["Day", "2026 date", "What usually happens"],
          rows: [
            [
              "Dhanteras",
              "Friday 6 November",
              "Buying day. Metal, utensils, jewellery.",
            ],
            ["Chhoti Diwali", "Sunday 8 November", "Morning of the main day."],
            [
              "Diwali, Lakshmi Puja",
              "Sunday 8 November",
              "Most shagun is given after the puja.",
            ],
            [
              "Govardhan Puja",
              "Monday 9 November",
              "Annakut in many households.",
            ],
            [
              "Bhai Dooj",
              "Tuesday 10 November",
              "Between siblings. Nek is given here, not on Diwali.",
            ],
          ],
        },
      },
      {
        p: "The Lakshmi Puja muhurat is an evening window on the main day, but it shifts by city and every panchang prints its own, so check one for where you actually are.",
      },
      {
        p: "Early is fine. Late is what gets noticed, particularly for Bhai Dooj, where the whole thing is a fixed day and arriving after it reads as an afterthought.",
      },

      { h: "What UPI changed, and what it did not" },
      {
        p: "It did not change the amounts, the direction, or the one-rupee rule. Those held.",
      },
      {
        p: "It changed three practical things. Shagun now leaves a record, which is what the tax section above is really about. It arrives instantly, so the timing is entirely on you and there is no post to blame. And it arrives with nothing around it: no envelope, no name written on the front, no moment where somebody puts something into your hand.",
      },
      {
        p: "The first two are fine. The third is the reason this site exists.",
      },

      { h: "Questions people ask" },
      {
        faq: [
          {
            q: "Does my cousin have to declare the \u20b91,100 I sent her?",
            a: "Only if her total for the year from everyone outside that relatives list crosses \u20b950,000. \u20b91,100 on its own is nowhere near it. The threshold is an aggregate across the whole financial year, not per person and not per gift.",
          },
          {
            q: "Is a UPI transfer treated differently from cash?",
            a: "No. The rule turns on the relationship and the amount, not the method. What UPI changes is that there is now a record either way, where cash left the question theoretical.",
          },
          {
            q: "I forgot on the day. Is it too late?",
            a: "Send it. Late shagun is normal and it is noticed far less than nothing. What people remember is being skipped, not being second in the queue.",
          },
          {
            q: "Can I give a round number if I add a one-rupee coin?",
            a: "Yes, and that is exactly what the coin is for. \u20b9500 plus the coin is \u20b9501. It is the total that has to be odd, not the note.",
          },
          {
            q: "I do not know their UPI ID and it feels awkward to ask.",
            a: "There is no directory to look one up in, for anybody, so asking is the normal route rather than a failure. \u201cSending you something, what is your UPI?\u201d does it without ceremony.",
          },
        ],
      },
    ],
  };
