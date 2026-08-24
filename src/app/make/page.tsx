"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Lifafa, { type LifafaData } from "@/components/Lifafa";
import {
  COINS,
  DENOMINATIONS,
  ENVELOPE_COLOURS,
  ENVELOPE_STYLES,
  HEADING_MAX,
  MAX_PAISE,
  MESSAGE_MAX,
  MITHAIS,
  NAME_MAX,
  OCCASIONS,
  rupees,
  totalPaise,
  type Coin,
  type EnvelopeColour,
  type EnvelopeStyle,
  type Mithai,
  type Occasion,
} from "@/lib/options";
import { stripUrls } from "@/lib/sanitise";

function Chips<T extends string>({
  label,
  options,
  value,
  onChange,
  allowNone,
}: {
  label: string;
  options: readonly { id: T; label: string }[];
  value: T | null;
  onChange: (v: T | null) => void;
  allowNone?: boolean;
}) {
  const cls = (on: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition ${
      on
        ? "border-maroon bg-maroon text-ivory"
        : "border-ivory-edge bg-white/60 text-ink-soft hover:border-marigold hover:text-ink"
    }`;
  return (
    <fieldset className="space-y-2">
      <legend className="text-xs uppercase tracking-[0.18em] text-ink-faint">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {allowNone && (
          <button type="button" onClick={() => onChange(null)} aria-pressed={value === null} className={cls(value === null)}>
            none
          </button>
        )}
        {options.map((o) => (
          <button key={o.id} type="button" onClick={() => onChange(o.id)} aria-pressed={value === o.id} className={cls(value === o.id)}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Make() {
  const router = useRouter();

  const [style, setStyle] = useState<EnvelopeStyle>("jaali");
  const [colour, setColour] = useState<EnvelopeColour>("maroon");
  const [mithai, setMithai] = useState<Mithai | null>("ladoo");
  const [coin, setCoin] = useState<Coin | null>("1");
  const [occasion, setOccasion] = useState<Occasion | null>(null);
  const [customHeading, setCustomHeading] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  // Tracks whether the message currently on screen was put there by us. Only
  // an auto-filled message may be replaced when the occasion changes — the
  // sender's own words are never clobbered.
  const [msgAuto, setMsgAuto] = useState(false);
  const [notes, setNotes] = useState<number[]>([]);
  const [vpa, setVpa] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const total = totalPaise(notes, coin);
  const { text: cleanMessage, removed } = stripUrls(message);

  function pickOccasion(id: Occasion | null) {
    setOccasion(id);
    if (!id) return;
    const starter = OCCASIONS.find((o) => o.id === id)?.starter ?? "";
    const mine = message.trim() !== "" && !msgAuto;
    if (!mine && starter) {
      setMessage(starter);
      setMsgAuto(true);
    }
  }

  function addNote(d: number) {
    if (total + d * 100 > MAX_PAISE) return;
    setNotes((n) => [...n, d]);
  }

  const data: LifafaData = {
    style, colour, mithai, coin, occasion, customHeading,
    receiverName, senderName, message: cleanMessage,
    amountPaise: total || null,
  };

  async function submit() {
    setBusy(true);
    setError("");
    const res = await fetch("/api/lifafa", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        senderName, receiverName, message, occasion, customHeading,
        envelopeStyle: style, envelopeColour: colour, mithai, coin, notes,
        payeeVpa: vpa,
      }),
    });
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as {
        error?: string;
        issues?: Record<string, string[]>;
      };
      const first = j.issues ? Object.values(j.issues).flat()[0] : undefined;
      setError(first ?? j.error ?? "Something went wrong.");
      setBusy(false);
      return;
    }
    const { slug, ownerToken } = (await res.json()) as { slug: string; ownerToken: string };
    // C2 — the owner token also goes to localStorage, so closing the tab
    // doesn't permanently lock the sender out of their own lifafa.
    try {
      localStorage.setItem(`lifafa:${slug}`, ownerToken);
    } catch {}
    router.push(`/s/${ownerToken}`);
  }

  const ready = senderName.trim() && receiverName.trim() && vpa.trim() && total > 0;

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-8">
      <h1 className="font-display text-3xl text-maroon">Make a lifafa</h1>

      <div className="sticky top-[57px] z-40 -mx-5 mb-7 bg-ivory/90 px-5 pt-4 pb-5 backdrop-blur">
        <div className="rounded-2xl bg-night px-4 py-7">
          <Lifafa data={data} showAmount />
        </div>
      </div>

      <div className="space-y-7">
        <Chips label="Envelope" options={ENVELOPE_STYLES} value={style} onChange={(v) => v && setStyle(v)} />
        <Chips label="Colour" options={ENVELOPE_COLOURS} value={colour} onChange={(v) => v && setColour(v)} />
        <Chips label="Mithai" options={MITHAIS} value={mithai} onChange={setMithai} allowNone />

        {/* the nek — built by tapping notes in, not typed */}
        <fieldset className="space-y-3">
          <legend className="text-xs uppercase tracking-[0.18em] text-ink-faint">The nek</legend>
          <div className="flex items-end justify-between gap-4">
            <p className="font-display text-4xl leading-none text-maroon">₹{rupees(total)}</p>
            {notes.length > 0 && (
              <button
                type="button"
                onClick={() => setNotes((n) => n.slice(0, -1))}
                className="text-sm text-peacock underline underline-offset-2"
              >
                take one out
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {DENOMINATIONS.map((d) => {
              const count = notes.filter((n) => n === d).length;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => addNote(d)}
                  className="relative rounded-lg border border-ivory-edge bg-white/70 py-3 font-display text-xl text-ink transition hover:border-marigold"
                >
                  ₹{d}
                  {count > 0 && (
                    <span className="absolute right-1.5 top-1 text-[11px] font-bold text-marigold">
                      ×{count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {total >= MAX_PAISE && (
            <p className="text-[12px] text-kumkum">
              ₹21,000 is the ceiling here. Bigger shagun deserves real paper anyway.
            </p>
          )}
          <Chips label="Coin" options={COINS} value={coin} onChange={setCoin} allowNone />
        </fieldset>

        {/* occasion */}
        <fieldset className="space-y-2">
          <legend className="text-xs uppercase tracking-[0.18em] text-ink-faint">Occasion</legend>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOccasion(null)}
              aria-pressed={occasion === null}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${occasion === null ? "border-maroon bg-maroon text-ivory" : "border-ivory-edge bg-white/60 text-ink-soft hover:border-marigold hover:text-ink"}`}
            >
              none
            </button>
            {OCCASIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => pickOccasion(o.id)}
                aria-pressed={occasion === o.id}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${occasion === o.id ? "border-maroon bg-maroon text-ivory" : "border-ivory-edge bg-white/60 text-ink-soft hover:border-marigold hover:text-ink"}`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {occasion === "custom" && (
            <label className="block space-y-1.5 pt-1">
              <span className="block text-xs uppercase tracking-[0.18em] text-ink-faint">
                Your own heading
              </span>
              <input
                value={customHeading}
                onChange={(e) => setCustomHeading(e.target.value.slice(0, HEADING_MAX))}
                maxLength={HEADING_MAX}
                placeholder="e.g. happy anniversary"
                className="w-full rounded-md border border-ivory-edge bg-white px-3 py-2.5 text-ink placeholder:text-ink-faint"
              />
            </label>
          )}
        </fieldset>

        <div className="flex gap-3">
          <label className="flex-1 space-y-1.5">
            <span className="block text-xs uppercase tracking-[0.18em] text-ink-faint">To</span>
            <input
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value.slice(0, NAME_MAX))}
              maxLength={NAME_MAX}
              placeholder="Priya"
              className="w-full rounded-md border border-ivory-edge bg-white px-3 py-2.5 text-ink placeholder:text-ink-faint"
            />
          </label>
          <label className="flex-1 space-y-1.5">
            <span className="block text-xs uppercase tracking-[0.18em] text-ink-faint">From</span>
            <input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value.slice(0, NAME_MAX))}
              maxLength={NAME_MAX}
              placeholder="Mummy"
              className="w-full rounded-md border border-ivory-edge bg-white px-3 py-2.5 text-ink placeholder:text-ink-faint"
            />
          </label>
        </div>

        <label className="block space-y-1.5">
          <span className="block text-xs uppercase tracking-[0.18em] text-ink-faint">Wishes</span>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value.slice(0, MESSAGE_MAX));
              setMsgAuto(false);
            }}
            maxLength={MESSAGE_MAX}
            rows={4}
            placeholder="बहुत बहुत बधाई…"
            className="w-full resize-none rounded-md border border-ivory-edge bg-white px-3 py-2.5 text-ink placeholder:text-ink-faint"
          />
          <span className="flex justify-between text-[11px] text-ink-faint">
            <span>{message.length}/{MESSAGE_MAX}</span>
            <span>Hindi is fine</span>
          </span>
          {removed > 0 && (
            <p className="rounded bg-marigold/12 px-3 py-2 text-[12px] leading-relaxed text-ink-soft">
              Took out {removed === 1 ? "a link" : `${removed} links`} — a lifafa
              has no business carrying one, and it keeps this place from turning
              into a scam pipe. Everything else is untouched.
            </p>
          )}
        </label>

        <label className="block space-y-1.5">
          <span className="block text-xs uppercase tracking-[0.18em] text-ink-faint">
            Their UPI ID
          </span>
          <input
            value={vpa}
            onChange={(e) => setVpa(e.target.value.trim().toLowerCase())}
            placeholder="priya@okhdfcbank"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="w-full rounded-md border border-ivory-edge bg-white px-3 py-2.5 font-mono text-ink placeholder:text-ink-faint"
          />
          <span className="block text-[11px] leading-relaxed text-ink-faint">
            You have to ask them — there&apos;s no way to look it up. &ldquo;Sending
            you something, what&apos;s your UPI?&rdquo; does the job.
          </span>
        </label>

        {error && (
          <p className="rounded-md border border-kumkum/30 bg-kumkum/8 px-3 py-2.5 text-sm text-kumkum">
            {error}
          </p>
        )}

        <button
          type="button"
          disabled={!ready || busy}
          onClick={submit}
          className="w-full rounded-full bg-maroon px-6 py-4 text-lg font-semibold text-ivory transition hover:bg-maroon-deep disabled:opacity-40"
        >
          {busy ? "Sealing…" : "Seal the lifafa"}
        </button>
        <p className="-mt-4 text-center text-[11px] leading-relaxed text-ink-faint">
          Sealing just closes the paper. You pay them on the next screen, from
          your own UPI app.
        </p>
      </div>
    </main>
  );
}
