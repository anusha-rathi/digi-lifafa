import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built Digi Lifafa, what it does, and the things we deliberately don't do.",
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
      <h1 className="font-display text-4xl text-maroon">About</h1>

      <div className="prose mt-8">
        <p>
          Digi Lifafa is a shagun ka lifafa you can send as a link. You make the
          envelope, put the nek in note by note, add the one-rupee coin and a
          mithai, write what you would have said — and then you pay them
          directly over UPI and send them the envelope.
        </p>

        <h2>Why it exists</h2>
        <p>
          The ritual didn&apos;t survive the move to UPI. The money did, but the
          envelope, the coin, the handwriting and the moment of handing it over
          with both hands all collapsed into a notification that says ₹2,101
          received.
        </p>
        <p>
          We wanted the wrapper back. Not a picture of money — the actual gift,
          with the actual paper around it. So the money here is real and moves
          exactly as it always did, and everything we built sits around it
          rather than in the middle of it.
        </p>

        <h2>What we deliberately don&apos;t do</h2>
        <p>
          This part matters more than the feature list, so it is the longer half
          of this page.
        </p>
        <ul>
          <li>
            <strong>We never hold your money.</strong> There is no wallet, no
            balance, no escrow, no payment gateway. Your UPI app pays their bank
            account directly. The moment we routed funds we would become a
            Payment Aggregator under RBI rules, and more to the point, we
            don&apos;t want to be one.
          </li>
          <li>
            <strong>We don&apos;t take a cut.</strong> It is free. Not
            free-for-now, not free-with-a-paid-tier. We never handle the amount,
            so there is nothing to take a percentage of.
          </li>
          <li>
            <strong>We don&apos;t have accounts.</strong> No signup, no
            password, no phone number, no email. Nothing to log into and nothing
            to breach.
          </li>
          <li>
            <strong>We don&apos;t pretend to verify payments.</strong> UPI apps
            do not report back to websites. We are blind after handoff and we
            say so, instead of showing you a green tick we have not earned.
          </li>
          <li>
            <strong>We don&apos;t make it social.</strong> No feed, no profiles,
            no public amounts, no leaderboard of the most generous cousin. One
            person, one envelope, one other person.
          </li>
        </ul>

        <h2>The one thing we ask of you</h2>
        <p>
          Check the UPI ID before you pay. We show it in full, large, right
          above the button, precisely so that you can read it properly. Only
          send shagun to people you actually know.
        </p>

        <h2>Get in touch</h2>
        <p>
          Something broken, something wrong, or a lifafa that needs taking down?{" "}
          <Link href="/contact">Contact us</Link> — we read everything.
        </p>
      </div>
    </main>
  );
}
