"use client";

import { useState } from "react";

/* SPEC S8 asked for a way to kill an abusive lifafa and nothing ever built it.
   A report on a lifafa carrying a photo blocks it on the spot, because an
   image is the only thing here that can do real harm while somebody waits for
   a human to look. */
export default function ReportLink({ slug, lang }: { slug: string; lang: "hi" | "hn" | "en" }) {
  const [sent, setSent] = useState(false);
  const [asking, setAsking] = useState(false);

  const t = {
    hi: { link: "इस लिफ़ाफ़े की शिकायत करें", sure: "क्या यह ग़लत है?", yes: "हाँ, शिकायत करें", no: "रहने दीजिए", done: "बता दिया गया। धन्यवाद।" },
    hn: { link: "is lifafe ki shikayat karein", sure: "kya yeh galat hai?", yes: "haan, report karo", no: "rehne do", done: "bata diya gaya. shukriya." },
    en: { link: "Report this lifafa", sure: "Is something wrong with this?", yes: "Yes, report it", no: "Never mind", done: "Reported. Thank you." },
  }[lang];

  if (sent) {
    return <p className="mt-8 text-center text-[12px] text-ink-faint">{t.done}</p>;
  }

  return (
    <div className="mt-8 text-center">
      {asking ? (
        <div className="inline-flex flex-col items-center gap-2">
          <p className="text-[13px] text-ink-soft">{t.sure}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/report", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ slug }),
                });
                setSent(true);
              }}
              className="rounded-full bg-kumkum px-4 py-1.5 text-[13px] text-white"
            >
              {t.yes}
            </button>
            <button
              type="button"
              onClick={() => setAsking(false)}
              className="rounded-full border border-ivory-edge px-4 py-1.5 text-[13px] text-ink-soft"
            >
              {t.no}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAsking(true)}
          className="text-[12px] text-ink-faint underline underline-offset-2 hover:text-ink-soft"
        >
          {t.link}
        </button>
      )}
    </div>
  );
}
