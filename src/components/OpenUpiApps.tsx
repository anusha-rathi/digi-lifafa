"use client";

import { useEffect, useState } from "react";
import { UPI_APPS, openAppUri, detectPlatform, type Platform } from "@/lib/upi";

/* The sender said "no nek this time", and is now looking at the finished
 * lifafa. People change their mind at exactly this point, so the apps are
 * here.
 *
 * What is NOT here is a QR, and what these buttons cannot do is prefill
 * anything: a UPI link carries the payee in `pa=`, and there is no UPI ID on
 * this lifafa. So they open the app and the sender finds the person. The copy
 * says so, because a button that looks like it will pay somebody and does not
 * is worse than no button. */
export default function OpenUpiApps({
  lang = "en",
}: {
  lang?: "hi" | "hn" | "en";
}) {
  const [platform, setPlatform] = useState<Platform>("other");
  useEffect(() => setPlatform(detectPlatform(navigator.userAgent)), []);

  const t = {
    hi: {
      head: "पैसे भी भेजने हैं?",
      body: "इस लिफ़ाफ़े में UPI ID नहीं है, इसलिए हम रकम पहले से भर नहीं सकते। ऐप खुलेगा, वहाँ उन्हें ख़ुद चुनना होगा।",
    },
    hn: {
      head: "Paise bhi bhejne hain?",
      body: "Is lifafe mein UPI ID nahi hai, isliye hum rakam pehle se bhar nahi sakte. App khulega, wahaan unhe khud chunna hoga.",
    },
    en: {
      head: "Want to send money too?",
      body: "There is no UPI ID on this lifafa, so we cannot fill anything in. These open your app and you pick them yourself.",
    },
  }[lang];

  if (platform === "other") return null;

  return (
    <div className="mb-5 rounded-xl border border-ivory-edge bg-white/60 p-5">
      <p className="font-display text-xl text-maroon">{t.head}</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
        {t.body}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {UPI_APPS.map((a) => (
          <a
            key={a.id}
            href={openAppUri(a, platform)}
            className="rounded-lg border border-ivory-edge bg-white px-2 py-2.5 text-center text-[13px] text-ink-soft transition hover:border-marigold hover:text-ink"
          >
            {a.label}
          </a>
        ))}
      </div>
    </div>
  );
}
