"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { rupees } from "@/lib/limits";

/* SPEC 2.3 — UPI intent deep links only. No gateway, no callback, no status
   check: once the UPI app opens we are blind, by design. */
export function buildUpiUri(vpa: string, payeeName: string, paise: number, note: string) {
  const p = new URLSearchParams({
    pa: vpa,
    pn: payeeName,
    am: (paise / 100).toFixed(2),
    cu: "INR",
    tn: note,
  });
  return `upi://pay?${p.toString()}`;
}

/* Android honours intent:// with a package name, which skips the app chooser
   and lands straight in the right app. iOS ignores it, so the generic upi://
   link stays the primary button and the QR stays a first-class path. */
const ANDROID_APPS = [
  { label: "Google Pay", pkg: "com.google.android.apps.nbu.paisa.user" },
  { label: "PhonePe", pkg: "com.phonepe.app" },
  { label: "Paytm", pkg: "net.one97.paytm" },
];

const intentUri = (upi: string, pkg: string) =>
  `${upi.replace("upi://", "intent://")}#Intent;scheme=upi;package=${pkg};end`;

export default function UpiPay({
  vpa,
  payeeName,
  paise,
  note,
}: {
  vpa: string;
  payeeName: string;
  paise: number;
  note: string;
}) {
  const uri = buildUpiUri(vpa, payeeName, paise, note);
  const [qr, setQr] = useState("");

  useEffect(() => {
    QRCode.toDataURL(uri, { width: 420, margin: 1 }).then(setQr).catch(() => setQr(""));
  }, [uri]);

  return (
    <div className="space-y-5">
      {/* SPEC S8, the VPA is large, complete, and never shortened. */}
      <div className="rounded-xl border-2 border-marigold/50 bg-marigold/8 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">You are paying</p>
        <p className="mt-1 font-mono text-lg leading-tight break-all text-ink">{vpa}</p>
        <p className="mt-2 font-display text-3xl text-maroon">₹{rupees(paise)}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
          You&apos;re paying this UPI ID directly, from your own app. Only send
          shagun to people you know.
        </p>
      </div>

      {/* Never auto-triggered, it always takes a deliberate tap. SPEC S8. */}
      <a
        href={uri}
        className="block rounded-full bg-maroon px-6 py-4 text-center text-lg font-semibold text-ivory transition hover:bg-maroon-deep"
      >
        Open my UPI app
      </a>

      <div className="grid grid-cols-3 gap-2">
        {ANDROID_APPS.map((a) => (
          <a
            key={a.pkg}
            href={intentUri(uri, a.pkg)}
            className="rounded-lg border border-ivory-edge bg-white/60 px-2 py-2.5 text-center text-[13px] text-ink-soft transition hover:border-marigold hover:text-ink"
          >
            {a.label}
          </a>
        ))}
      </div>
      <p className="-mt-2 text-center text-[11px] text-ink-faint">
        Those three are Android-only. On an iPhone, use the button above or the QR.
      </p>

      <div className="rounded-xl border border-ivory-edge bg-white/60 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">
          Or scan from another phone
        </p>
        {qr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={qr}
            alt={`UPI QR code to pay ${vpa}`}
            className="mx-auto mt-3 w-full max-w-[240px] rounded-lg bg-white p-2"
          />
        ) : (
          <p className="mt-3 text-sm text-ink-faint">Building the QR…</p>
        )}
        <p className="mt-2 text-center text-[11px] leading-relaxed text-ink-faint">
          Same payment, same UPI ID. Useful when the link doesn&apos;t open.
        </p>
      </div>
    </div>
  );
}
