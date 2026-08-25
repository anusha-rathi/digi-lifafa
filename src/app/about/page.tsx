import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Digi Lifafa exists: we are a generation living away from the people we grew up with, and UPI moved the money but not the lifafa.",
};

export default function About() {
  return (
    <>
      <PageHead
        title="About"
        sub="Why this exists, written by people who also live away from home."
        tone="maroon"
      />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
        <div className="prose mt-8">
          <p>
            We are a generation that leaves. First you move away from your
            family for college or a job, and then you find friends, and then you
            move away from them too. Somewhere in all that, the cousins you grew
            up with became people you text on birthdays.
          </p>
          <p>
            The people who made this site live away from their families as well.
            That is the whole reason it exists.
          </p>

          <h2>The small thing you miss</h2>
          <p>
            Everyone talks about missing the big parts of a festival. The house,
            the food, the noise. But there is a smaller thing, and for a lot of
            us it is the one that actually stings: the shagun ka lifafa. An
            older person pressing an envelope into your hand, or now that you
            have somehow become the older one, putting it into somebody
            else&apos;s.
          </p>
          <p>
            Thanks to UPI we can all send and receive money in about four
            seconds. The money arrives perfectly. The feeling does not. Nobody
            hands you anything. There is no envelope with your name on it.
          </p>
          <p>
            And if you grew up in an Indian house you know exactly how much that
            name mattered, because you know what happened to the ones without
            it. A blank lifafa went into the almirah and came back out for the
            next wedding. The one with your name on it did not.
          </p>

          <h2>So we made the envelope</h2>
          <p>
            You pick the paper, put the notes in, tuck in whichever mithai you
            want them to have, and write the small note you would have said out
            loud. Then you pay them yourself, over UPI, and send the envelope as
            a link.
          </p>
          <p>
            It does not fix being far away. Nothing on a website does. But the
            part that goes missing when a transfer replaces a gift is the part
            we could actually put back.
          </p>

          <h2>What it costs</h2>
          <p>
            Nothing, for anyone. We do not take a cut, and the money never
            passes through us, so there is nothing to take a cut of.
          </p>
          <p>
            <strong>
              Living away is not free. Living away is very expensive. So
              something that brings you closer to your family should be.
            </strong>
          </p>

          <h2>What we do not do</h2>
          <ul>
            <li>
              <strong>No money touches us.</strong> It goes from your bank to
              theirs through your own UPI app.
            </li>
            <li>
              <strong>No accounts.</strong> No signup, no password, no phone
              number, no email.
            </li>
            <li>
              <strong>Nothing is stored that we do not need.</strong> The QR is
              only made when you give a UPI ID, and it is made in your browser
              as you look at it. We never store your UPI ID, only theirs,
              because the envelope has to know where the money was going.
            </li>
          </ul>

          <h2>Get in touch</h2>
          <p>
            Something broken, an idea, or a lifafa that needs taking down?{" "}
            <Link href="/contact">Write to us</Link>. A person reads it.
          </p>
        </div>
      </main>
    </>
  );
}
