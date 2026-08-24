"use client";

import Link from "next/link";
import { useState } from "react";
import Lifafa, { type LifafaData } from "@/components/Lifafa";
import { stripUrls } from "@/lib/sanitise";
import {
  AMOUNT_PRESETS,
  COINS,
  ENVELOPE_COLOURS,
  ENVELOPE_STYLES,
  MAX_PAISE,
  MITHAIS,
  OCCASIONS,
  rupees,
  type Coin,
  type EnvelopeColour,
  type EnvelopeStyle,
  type Mithai,
  type Occasion,
} from "@/lib/options";

const MSG_MAX = 500;

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
  return (
    <fieldset className="space-y-2">
      <legend className="text-xs uppercase tracking-[0.18em] text-paper/45">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {allowNone && (
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-pressed={value === null}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              value === null
                ? "border-marigold bg-marigold text-night"
                : "border-paper/20 text-paper/70 hover:border-paper/40"
            }`}
          >
            none
          </button>
        )}
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            aria-pressed={value === o.id}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              value === o.id
                ? "border-marigold bg-marigold text-night"
                : "border-paper/20 text-paper/70 hover:border-paper/40"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Make() {
  const [style, setStyle] = useState<EnvelopeStyle>("jaali");
  const [colour, setColour] = useState<EnvelopeColour>("maroon");
  const [mithai, setMithai] = useState<Mithai | null>("ladoo");
  const [coin, setCoin] = useState<Coin | null>("1");
  const [occasion, setOccasion] = useState<Occasion | null>(null);
  const [receiverName, setReceiverName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [amountPaise, setAmountPaise] = useState<number | null>(50100);
  const [vpa, setVpa] = useState("");
  const [open, setOpen] = useState(true);

  // C6 — strip, then SAY SO. Never silently mangle the sender's words.
  // This is UX only; the server strip at Stage 3 is the one that counts.
  const { text: cleanMessage, removed } = stripUrls(message);

  const data: LifafaData = {
    style,
    colour,
    mithai,
    coin,
    occasion,
    receiverName,
    senderName,
    message: cleanMessage,
    amountPaise,
  };

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-8">
      <Link href="/" className="text-xs text-paper/40 hover:text-paper/70">
        ← back
      </Link>

      <div className="sticky top-0 z-40 -mx-5 mb-6 bg-night/85 px-5 py-5 backdrop-blur">
        <Lifafa data={data} open={open} onOpenChange={setOpen} />
      </div>

      <div className="space-y-7">
        <Chips label="Envelope" options={ENVELOPE_STYLES} value={style} onChange={(v) => v && setStyle(v)} />
        <Chips label="Colour" options={ENVELOPE_COLOURS} value={colour} onChange={(v) => v && setColour(v)} />
        <Chips label="Mithai" options={MITHAIS} value={mithai} onChange={setMithai} allowNone />
        <Chips label="Coin" options={COINS} value={coin} onChange={setCoin} allowNone />
        <Chips label="Occasion" options={OCCASIONS} value={occasion} onChange={setOccasion} allowNone />

        <div className="flex gap-3">
          <label className="flex-1 space-y-1.5">
            <span className="block text-xs uppercase tracking-[0.18em] text-paper/45">To</span>
            <input
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value.slice(0, 40))}
              maxLength={40}
              placeholder="Priya"
              className="w-full rounded-md border border-paper/20 bg-night-soft px-3 py-2.5 text-paper placeholder:text-paper/25"
            />
          </label>
          <label className="flex-1 space-y-1.5">
            <span className="block text-xs uppercase tracking-[0.18em] text-paper/45">From</span>
            <input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value.slice(0, 40))}
              maxLength={40}
              placeholder="Mummy"
              className="w-full rounded-md border border-paper/20 bg-night-soft px-3 py-2.5 text-paper placeholder:text-paper/25"
            />
          </label>
        </div>

        <label className="block space-y-1.5">
          <span className="block text-xs uppercase tracking-[0.18em] text-paper/45">Wishes</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, MSG_MAX))}
            maxLength={MSG_MAX}
            rows={4}
            placeholder="बहुत बहुत बधाई…"
            className="w-full resize-none rounded-md border border-paper/20 bg-night-soft px-3 py-2.5 text-paper placeholder:text-paper/25"
          />
          <span className="flex justify-between text-[11px] text-paper/35">
            <span>{message.length}/{MSG_MAX}</span>
            <span>Hindi is fine</span>
          </span>
          {removed > 0 && (
            <p className="rounded bg-kumkum/15 px-3 py-2 text-[12px] text-marigold">
              Took out {removed === 1 ? "a link" : `${removed} links`} — a lifafa
              has no business carrying one, and it keeps this place from turning
              into a scam pipe. Everything else is untouched.
            </p>
          )}
        </label>

        <fieldset className="space-y-2">
          <legend className="text-xs uppercase tracking-[0.18em] text-paper/45">Shagun</legend>
          <div className="flex flex-wrap gap-2">
            {AMOUNT_PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmountPaise(p)}
                aria-pressed={amountPaise === p}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  amountPaise === p
                    ? "border-marigold bg-marigold text-night"
                    : "border-paper/20 text-paper/70 hover:border-paper/40"
                }`}
              >
                ₹{rupees(p)}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={1}
            max={MAX_PAISE / 100}
            value={amountPaise === null ? "" : amountPaise / 100}
            onChange={(e) => {
              const r = Number(e.target.value);
              // Money is integer paise, never a float. SPEC §5.
              setAmountPaise(Number.isFinite(r) && r > 0 ? Math.round(r * 100) : null);
            }}
            placeholder="or type an amount"
            className="w-full rounded-md border border-paper/20 bg-night-soft px-3 py-2.5 text-paper placeholder:text-paper/25"
          />
          {amountPaise !== null && amountPaise > MAX_PAISE && (
            <p className="text-[12px] text-kumkum">
              ₹21,000 is the ceiling here. Bigger shagun deserves a real
              envelope anyway.
            </p>
          )}
        </fieldset>

        <label className="block space-y-1.5">
          <span className="block text-xs uppercase tracking-[0.18em] text-paper/45">
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
            className="w-full rounded-md border border-paper/20 bg-night-soft px-3 py-2.5 font-mono text-paper placeholder:text-paper/25"
          />
          <span className="block text-[11px] leading-relaxed text-paper/40">
            You have to ask them for it — there&apos;s no way to look it up.
            &ldquo;Sending you something, what&apos;s your UPI?&rdquo; does the job.
          </span>
        </label>

        <div className="rounded-lg border border-paper/10 bg-night-soft/60 p-4 text-[12px] leading-relaxed text-paper/45">
          Nothing here is saved yet — that&apos;s the next stage. This screen is
          the envelope, not the payment.
        </div>
      </div>
    </main>
  );
}
