import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "The terms for using Digi Lifafa, including the plain fact that we never handle your money.",
};

export default function Terms() {
  return (
    <>
      <PageHead
        title="Terms &amp; conditions"
        sub="The short version: we make envelopes, we never touch the money."
        tone="maroon"
      />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
        <p className="text-sm text-ink-faint">Last updated 24 August 2026</p>

        <div className="prose mt-6">
          <h2>1. What this service is</h2>
          <p>
            Digi Lifafa lets you create a decorated digital envelope and share
            it as a link. It is a greeting and gifting product. By using it you
            agree to these terms.
          </p>

          <h2>2. We are not a payment service</h2>
          <p>
            <strong>
              Digi Lifafa does not process, hold, route, transfer or refund
              money.
            </strong>{" "}
            We are not a bank, a payment aggregator, a payment gateway, a wallet
            or a money transfer service, and we do not act as an agent for
            either party to a payment.
          </p>
          <p>
            Where a payment happens, it happens directly between two people
            through their own UPI applications and their own banks, governed by
            those providers&apos; terms and by NPCI rules. All we do is build a
            standard UPI link and show it to you. Whether to tap it is entirely
            your decision.
          </p>

          <h2>3. We cannot confirm or reverse payments</h2>
          <p>
            UPI applications do not report back to websites. We have no way to
            know whether a payment was made, attempted or failed. Any reference
            number shown on a lifafa was typed in by the sender and has{" "}
            <strong>not been verified by us</strong>. We have no technical means
            to verify it.
          </p>
          <p>
            We cannot reverse, cancel, refund or trace any payment. For a
            disputed or mistaken payment, contact your bank and use the NPCI
            dispute redressal process.
          </p>

          <h2>4. Your responsibility before paying</h2>
          <p>
            You are responsible for confirming that the UPI ID shown is the
            correct one before you pay. We display it in full, unshortened, for
            exactly this reason. Only send money to people you know. A payment
            made to the wrong UPI ID cannot be undone by us.
          </p>

          <h2>5. Acceptable use</h2>
          <p>You must not use Digi Lifafa to:</p>
          <ul>
            <li>Impersonate another person or organisation.</li>
            <li>
              Solicit payments by deception, or as part of any fraudulent or
              phishing scheme.
            </li>
            <li>Harass, threaten or abuse anyone.</li>
            <li>Send unlawful, obscene or infringing content.</li>
            <li>
              Attempt to break, overload or reverse engineer the service, or to
              enumerate lifafa links belonging to others.
            </li>
          </ul>
          <p>
            We may block any lifafa that appears to breach these terms, without
            notice. A blocked lifafa shows a neutral notice to anyone who opens
            it.
          </p>

          <h2>6. Content you create</h2>
          <p>
            You keep ownership of what you write. You grant us only the
            permission needed to store and display it to whoever opens your
            link. You are responsible for what you write, and you confirm you
            have the right to send it.
          </p>
          <p>
            We automatically remove links from message text and tell you when we
            have. This is an anti-abuse measure, not editorial judgement.
          </p>

          <h2>7. Limits</h2>
          <p>
            There is a per-lifafa cap of ₹21,000. We may apply rate limits and
            anti-bot checks. We may change or withdraw the service at any time.
          </p>

          <h2>8. No warranty</h2>
          <p>
            The service is provided &ldquo;as is&rdquo;. We do not guarantee it
            will be available, uninterrupted or error-free, and we do not
            warrant that any UPI link will open successfully on your device,
            because behaviour differs between phones, browsers and apps.
          </p>

          <h2>9. Liability</h2>
          <p>
            To the extent permitted by law, we are not liable for any loss
            arising from a payment you make or fail to make, a payment sent to
            the wrong recipient, a lifafa link being shared onward, or the
            service being unavailable. Nothing here excludes liability that
            cannot lawfully be excluded.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These terms are governed by the laws of India, and the courts at{" "}
            <strong>[YOUR CITY]</strong> shall have exclusive jurisdiction.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these terms go to{" "}
            <Link href="/contact">the contact page</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
