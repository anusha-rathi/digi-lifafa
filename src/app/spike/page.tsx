"use client";

/* C3 — the UPI reality check. Build nothing pretty until this is proven on a
   real iPhone AND a real Android. Two things we cannot assume:
     1. iOS Safari handles `upi://` unreliably.
     2. The QR fallback is useless to a SENDER holding the only screen.
   If neither path works on iOS, the product changes before Stage 1. */

import QRCode from "qrcode";
import { useEffect, useState } from "react";

export function buildUpiUri(vpa: string, name: string, rupees: string, note: string) {
  const p = new URLSearchParams({
    pa: vpa,
    pn: name,
    am: rupees,
    cu: "INR",
    tn: note,
  });
  return `upi://pay?${p.toString()}`;
}

export default function Spike() {
  const [vpa, setVpa] = useState("");
  const [name, setName] = useState("Test");
  const [amount, setAmount] = useState("1");
  const [qr, setQr] = useState("");

  const uri = buildUpiUri(vpa, name, amount, "digi lifafa spike");

  useEffect(() => {
    if (!vpa) return setQr("");
    QRCode.toDataURL(uri, { width: 320, margin: 1 }).then(setQr).catch(() => setQr(""));
  }, [uri, vpa]);

  return (
    <main className="mx-auto w-full max-w-md space-y-5 px-5 py-8 text-paper">
      <h1 className="font-display text-2xl text-marigold">UPI spike</h1>
      <p className="text-sm text-paper/70">
        Open this on your phone at{" "}
        <code className="text-marigold">192.168.1.8:3001/spike</code>. Put in
        your own UPI ID and send yourself ₹1.
      </p>

      <label className="block space-y-1">
        <span className="text-xs uppercase tracking-wider text-paper/50">Your own UPI ID</span>
        <input
          value={vpa}
          onChange={(e) => setVpa(e.target.value.trim().toLowerCase())}
          placeholder="you@okhdfcbank"
          inputMode="email"
          autoCapitalize="none"
          className="w-full rounded border border-paper/20 bg-night-soft px-3 py-2"
        />
      </label>

      <div className="flex gap-3">
        <label className="block flex-1 space-y-1">
          <span className="text-xs uppercase tracking-wider text-paper/50">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-paper/20 bg-night-soft px-3 py-2"
          />
        </label>
        <label className="block w-24 space-y-1">
          <span className="text-xs uppercase tracking-wider text-paper/50">₹</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="decimal"
            className="w-full rounded border border-paper/20 bg-night-soft px-3 py-2"
          />
        </label>
      </div>

      <pre className="overflow-x-auto rounded bg-night-soft p-3 text-[11px] text-paper/60">
        {uri}
      </pre>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-paper/50">Test 1 — intent link</p>
        {/* Never auto-triggered. Always a deliberate tap. SPEC S8. */}
        <a
          href={uri}
          className="block rounded-full bg-marigold px-6 py-3 text-center font-semibold text-night"
        >
          Open UPI app
        </a>
        <a
          href={uri.replace("upi://", "intent://") + "#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end"}
          className="block rounded-full border border-paper/25 px-6 py-3 text-center text-sm"
        >
          Android intent:// → GPay (Android only)
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-paper/50">
          Test 2 — QR (needs a second device to scan)
        </p>
        {qr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={qr} alt="UPI QR code" className="w-full rounded bg-white p-3" />
        ) : (
          <p className="text-sm text-paper/40">enter a UPI ID above</p>
        )}
      </div>

      <ol className="space-y-1 border-t border-paper/15 pt-4 text-xs text-paper/50">
        <li>1. iPhone / Safari — does &ldquo;Open UPI app&rdquo; do anything?</li>
        <li>2. iPhone / Chrome — same question.</li>
        <li>3. iPhone inside the WhatsApp in-app browser — this is where it breaks.</li>
        <li>4. Android / Chrome — does it show an app chooser?</li>
        <li>5. Does the amount and VPA arrive pre-filled, or blank?</li>
      </ol>
    </main>
  );
}
