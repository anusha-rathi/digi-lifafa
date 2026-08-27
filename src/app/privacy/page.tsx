import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Digi Lifafa stores, what it doesn't, and how to get it deleted.",
};

export default function Privacy() {
  return (
    <>
      <PageHead
        title="Privacy policy"
        sub="There are no accounts, we collect the minimum needed to draw your envelope, and we never see your money."
        tone="peacock"
      />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
        <p className="text-sm text-ink-faint">Last updated 24 August 2026</p>

        <div className="prose mt-6">
          <h2>What we store</h2>
          <p>When you make a lifafa, we store:</p>
          <ul>
            <li>The envelope you chose: paper, colour, mithai, coin.</li>
            <li>The two names you typed, and the message you wrote.</li>
            <li>The occasion, or your own heading if you wrote one.</li>
            <li>The amount, and the notes that make it up.</li>
            <li>
              The <strong>recipient&apos;s</strong> UPI ID, needed to build the
              payment link.
            </li>
            <li>
              If you choose to add one, the twelve-digit UPI reference number.
              This is optional and you can skip it.
            </li>
            <li>
              A one-way salted hash of your IP address, used only to stop abuse.
              The raw address is never stored.
            </li>
          </ul>

          <h2>What we never collect</h2>
          <ul>
            <li>Your name for an account. There are no accounts.</li>
            <li>Your phone number or email address.</li>
            <li>
              <strong>Your own UPI ID</strong>, bank details, card details or
              any payment credential. We never see them, because you pay inside
              your own UPI app.
            </li>
            <li>
              Payment screenshots, or photographs of any kind. You cannot upload
              an image here at all.
            </li>
            <li>Your location, contacts, or anything from your device.</li>
          </ul>

          <h2>We cannot see your payment</h2>
          <p>
            When you tap to pay, your browser hands off to your UPI app. That
            app does not report back to us. We receive no confirmation, no
            status and no transaction record, ever. If you add a reference
            number, that is you typing it in, not us retrieving it, and we have
            no way to check whether it is real.
          </p>

          <h2>Who can see a lifafa</h2>
          <p>
            Anyone with the link. Lifafa links use a long random identifier that
            cannot be guessed or walked through, and every lifafa page is marked{" "}
            <code>noindex</code> so search engines never list it. Treat the link
            the way you would treat the envelope: give it to the person
            it&apos;s for.
          </p>
          <p>
            The private link you keep as the sender is a separate, different
            token. Someone who has the shared link cannot reach your payment
            screen.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            We set no cookies at all, and there is no cookie banner because
            there is nothing to consent to. We run no advertising trackers and
            no cross-site tracking of any kind.
          </p>
          <p>
            We do count page views, using Vercel Web Analytics. It records the
            page, the country, and the kind of device and browser. It sets no
            cookie and stores nothing on your device. To tell one visit from
            another within a single day it derives a hash from your request and
            throws it away daily, so there is no identifier that follows you
            between days, between devices or to any other site. We use it to
            see which pages people actually reach, and nothing else.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell, rent or share your data with anyone. The only
            exception would be a lawful order from a competent authority, or
            where we must act on a report of abuse.
          </p>

          <h2>How long we keep it</h2>
          <p>
            A lifafa stays until you ask us to delete it. Email us the link from{" "}
            <Link href="/contact">the contact page</Link> and we will remove it.
          </p>

          <h2>Children</h2>
          <p>
            This site is not directed at children under 13, and we do not
            knowingly store information from them.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes we will update the date at the top. Material
            changes will be called out on the home page.
          </p>
        </div>
      </main>
    </>
  );
}
