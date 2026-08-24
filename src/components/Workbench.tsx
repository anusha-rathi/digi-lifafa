"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Envelope, { SweetSvg, type View } from "@/components/Envelope";
import {
  COPY,
  DENOM_LIST,
  DESIGN_LIST,
  OCCASION_LIST,
  PALETTE_LIST,
  SALUTATION_LIST,
  SWEET_LIST,
  TEXTURE_LIST,
  occasionById,
  paperStyle,
  type Lang,
} from "@/lib/design";
import { MAX_RUPEES } from "@/lib/limits";
import { stripUrls } from "@/lib/sanitise";

const NEXT_LANG: Record<Lang, Lang> = { hi: "hn", hn: "en", en: "hi" };
type Tab = "design" | "colour" | "money" | "sweet" | "note" | "name";
const TABS: Tab[] = ["design", "colour", "money", "sweet", "note", "name"];

/* Selected / unselected chrome — the canvas's one shared button treatment. */
const btn = (on: boolean) => ({
  background: on ? "rgba(232,195,122,.14)" : "transparent",
  color: on ? "#f2dcae" : "#9c8064",
  borderColor: on ? "rgba(232,195,122,.55)" : "rgba(232,195,122,.18)",
});

export default function Workbench() {
  const router = useRouter();

  const [lang, setLang] = useState<Lang | null>(null);
  const [designId, setDesignId] = useState(DESIGN_LIST[0].id);
  const [paletteId, setPaletteId] = useState(PALETTE_LIST[0].id);
  const [textureId, setTextureId] = useState(TEXTURE_LIST[1].id);
  const [notes, setNotes] = useState<{ denom: number; key: number }[]>([]);
  const [seq, setSeq] = useState(0);
  const [coin, setCoin] = useState(false);
  const [sweetTray, setSweetTray] = useState<"desi" | "west">("desi");
  const [sweetId, setSweetId] = useState<string | null>(null);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [customHeading, setCustomHeading] = useState("");
  const [message, setMessage] = useState("");
  // Only a message WE auto-filled may be replaced when the occasion changes.
  const [msgAuto, setMsgAuto] = useState(false);
  const [name, setName] = useState("");
  const [salutation, setSalutation] = useState(SALUTATION_LIST[0]);
  const [view, setView] = useState<View>("open");
  const [pending, setPending] = useState<View>("open");
  const [tab, setTab] = useState<Tab>("design");

  const [senderName, setSenderName] = useState("");
  const [vpa, setVpa] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  /* ── language gate ──────────────────────────────────────────────── */
  if (!lang) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[375px] flex-col justify-center gap-6 px-4 text-center">
        <div className="flex flex-col gap-[5px]">
          <div className="text-[10.5px] font-semibold uppercase tracking-[.26em] text-[#c2996a]">
            digi lifafa
          </div>
          <h1 className="m-0 font-display text-[31px] font-normal leading-[1.6] text-[#f6e9d6]">
            शगुन का लिफ़ाफ़ा
          </h1>
          <p className="m-0 text-sm font-light text-[#b79b86]">भाषा चुनिए · choose your language</p>
        </div>
        <div className="flex flex-col gap-[9px]">
          {([
            ["hi", "हिंदी", "#e8c37a", "#f2dcae"],
            ["hn", "Hinglish", "rgba(232,195,122,.5)", "#eccfa4"],
            ["en", "English", "rgba(232,195,122,.4)", "#e2c9a8"],
          ] as const).map(([id, label, border, colour]) => (
            <button
              key={id}
              type="button"
              onClick={() => setLang(id)}
              className="rounded-[3px] border bg-transparent py-[15px] font-display text-[21px] transition hover:bg-[rgba(232,195,122,.12)]"
              style={{ borderColor: border, color: colour }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="text-[11.5px] leading-[1.5] text-[#7c6553]">
          नाम और संबोधन आप किसी भी भाषा में लिख सकते हैं
        </div>
      </div>
    );
  }

  const t = COPY[lang];
  const total = notes.reduce((s, n) => s + n.denom, 0) + (coin ? 1 : 0);
  const occ = occasionById(occasion);
  const { text: cleanMessage, removed } = stripUrls(message);

  const occasionLabel = occ
    ? occ.id === "custom"
      ? customHeading.trim() || (lang === "hi" ? "आपका शीर्षक" : "your heading")
      : lang === "hi"
        ? occ.hi
        : lang === "hn"
          ? occ.rom
          : occ.en
    : lang === "hi"
      ? "संदेश"
      : "a note";

  const starterFor = (o: (typeof OCCASION_LIST)[number]) =>
    lang === "hi" ? o.mhi : lang === "hn" ? o.mrom : o.men;

  const messagePeek =
    cleanMessage.trim() || (occ ? starterFor(occ) : "");

  function go(next: View) {
    setPending(next);
    setTimeout(() => setView(next), 420);
  }

  function addNote(d: number) {
    if (total + d > MAX_RUPEES) return;
    setNotes((n) => [...n, { denom: d, key: seq }]);
    setSeq((s) => s + 1);
    go("open");
  }

  function pickOccasion(id: string) {
    setOccasion(id);
    const o = occasionById(id);
    const starter = o ? starterFor(o) : "";
    const mine = message.trim() !== "" && !msgAuto;
    if (!mine && starter) {
      setMessage(starter);
      setMsgAuto(true);
    }
    go("open");
  }

  async function seal() {
    setBusy(true);
    setError("");
    const res = await fetch("/api/lifafa", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lang,
        designId,
        paletteId,
        textureId,
        notes: notes.map((n) => n.denom),
        coin,
        sweetId,
        occasion,
        customHeading,
        message,
        receiverName: name,
        salutation,
        senderName,
        payeeVpa: vpa,
      }),
    });
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as {
        error?: string;
        issues?: Record<string, string[]>;
      };
      setError((j.issues ? Object.values(j.issues).flat()[0] : undefined) ?? j.error ?? "Something went wrong.");
      setBusy(false);
      return;
    }
    const { slug, ownerToken } = (await res.json()) as { slug: string; ownerToken: string };
    try {
      localStorage.setItem(`lifafa:${slug}`, ownerToken);
    } catch {}
    router.push(`/s/${ownerToken}`);
  }

  const envState = {
    designId,
    paletteId,
    textureId,
    notes,
    coin,
    sweetId,
    occasionLabel,
    messagePeek,
    name,
    salutation,
    lang,
  };

  const caption =
    view === "open" ? t.capOpen : view === "back" ? t.capBack : t.capFront;
  const ready = name.trim() && senderName.trim() && vpa.trim() && total > 0;

  const vBtn = (v: View) => btn(pending === v);

  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col gap-[15px] px-4 pb-16">
      {/* header */}
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex-1">
          <div className="text-[10.5px] font-semibold uppercase tracking-[.22em] text-[#c2996a]">
            {t.step}
          </div>
          <h1 className="m-0 font-display text-[26px] font-normal leading-[1.6] text-[#f6e9d6]">
            {t.title}
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setLang(NEXT_LANG[lang])}
          className="mt-[5px] rounded-[3px] border bg-transparent px-2.5 py-1.5 text-[11px] tracking-[.08em] text-[#c9ab8c]"
          style={{ borderColor: "rgba(232,195,122,.28)" }}
        >
          {t.langSwap}
        </button>
      </div>

      {/* the lifafa */}
      <Envelope s={envState} view={view} caption={caption} />

      {/* view switch */}
      <div className="flex gap-1.5">
        {([["open", t.vOpen], ["back", t.vBack], ["front", t.vFront]] as const).map(([v, label]) => (
          <button
            key={v}
            type="button"
            onClick={() => go(v)}
            className="flex-1 rounded-[3px] border py-[9px] text-[13px]"
            style={vBtn(v)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* the nek + the coin, always in reach */}
      <div
        className="flex items-center justify-between gap-3 border-y px-0.5 py-[11px]"
        style={{ borderColor: "rgba(232,195,122,.22)" }}
      >
        <div>
          <div className="text-[10px] uppercase tracking-[.2em] text-[#9c8064]">{t.total}</div>
          <div className="font-display text-[31px] leading-[1.15] text-[#f6e9d6] [font-feature-settings:'tnum']">
            ₹{total.toLocaleString("en-IN")}
          </div>
          <div className="text-[11.5px] leading-[1.4] text-[#a98d76]">
            {total >= MAX_RUPEES
              ? `${t.cap}₹${MAX_RUPEES.toLocaleString("en-IN")}`
              : notes.length === 0
                ? t.empty
                : coin
                  ? t.withCoin
                  : t.needCoin}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setCoin((c) => !c);
            go("open");
          }}
          className="flex w-[104px] flex-none flex-col items-center gap-1.5 rounded-[3px] border px-2 py-2.5 text-[#f6e9d6]"
          style={{
            background: coin ? "rgba(232,195,122,.16)" : "transparent",
            borderColor: coin ? "#e8c37a" : "rgba(232,195,122,.45)",
          }}
        >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[conic-gradient(from_210deg,#f3d489,#b8862f,#ffeab8,#9c6c22,#f3d489)] text-[15px] font-bold text-[#4a3208]">
            {coin ? "✓" : "+"}
          </span>
          <span className="text-center text-[11px] leading-[1.3]">
            {coin ? t.coinIn : t.coinAdd}
          </span>
        </button>
      </div>

      {/* tray tabs */}
      <div className="grid grid-cols-3 gap-[5px]">
        {TABS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className="rounded-[3px] border py-[9px] text-[12.5px]"
            style={btn(tab === k)}
          >
            {t.tabs[k]}
          </button>
        ))}
      </div>

      {/* ── DESIGN ─────────────────────────────────────────────────── */}
      {tab === "design" && (
        <div className="lf-rise flex flex-col gap-[9px]">
          <div className="text-[12.5px] text-[#a98d76]">{t.designHint}</div>
          <div className="grid grid-cols-3 gap-2">
            {DESIGN_LIST.map((d) => {
              const on = d.id === designId;
              const { image, size } = paperStyle(d.id, paletteId, textureId);
              const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDesignId(d.id)}
                  className="flex flex-col gap-[5px] rounded-[4px] border bg-white/3 px-[5px] pt-[5px] pb-1.5"
                  style={{ borderColor: on ? "#e8c37a" : "rgba(232,195,122,.18)" }}
                >
                  <span
                    className="block h-[42px] rounded-[2px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.16)]"
                    style={{
                      background: pal.base,
                      backgroundImage: image,
                      backgroundSize: size,
                      outline: d.frame ? `1px solid ${pal.lace}` : "none",
                      outlineOffset: -5,
                    }}
                  />
                  <span
                    className="text-left text-[10px] leading-[1.2]"
                    style={{ color: on ? "#f2dcae" : "#a98d76" }}
                  >
                    {lang === "hi" ? d.hi : d.en}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── COLOUR ─────────────────────────────────────────────────── */}
      {tab === "colour" && (
        <div className="lf-rise flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <div className="text-[12.5px] text-[#a98d76]">{t.colourHint}</div>
            <div className="flex flex-wrap gap-2">
              {PALETTE_LIST.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  title={p.name}
                  onClick={() => setPaletteId(p.id)}
                  className="h-9 w-9 rounded-full border bg-transparent p-[3px]"
                  style={{ borderColor: p.id === paletteId ? "#e8c37a" : "rgba(232,195,122,.2)" }}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ background: p.base, boxShadow: `inset 0 0 0 1px ${p.lace}` }}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[12.5px] text-[#a98d76]">{t.textureHint}</div>
            <div className="grid grid-cols-3 gap-2">
              {TEXTURE_LIST.map((x) => {
                const on = x.id === textureId;
                const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
                return (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setTextureId(x.id)}
                    className="flex flex-col gap-[5px] rounded-[4px] border bg-white/3 px-[5px] pt-[5px] pb-1.5"
                    style={{
                      borderColor: on ? "#e8c37a" : "rgba(232,195,122,.18)",
                      color: on ? "#f2dcae" : "#a98d76",
                    }}
                  >
                    <span
                      className="block h-[30px] rounded-[2px]"
                      style={{
                        background: pal.base,
                        backgroundImage: x.img || "none",
                        backgroundSize: x.size || "auto",
                      }}
                    />
                    <span className="text-left text-[10px]">{lang === "hi" ? x.hi : x.en}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── MONEY ──────────────────────────────────────────────────── */}
      {tab === "money" && (
        <div className="lf-rise flex flex-col gap-3">
          <div className="text-[12.5px] text-[#a98d76]">{t.moneyHint}</div>
          <div className="grid grid-cols-3 gap-2">
            {DENOM_LIST.map((d) => {
              const count = notes.filter((n) => n.denom === d.denom).length;
              return (
                <button
                  key={d.denom}
                  type="button"
                  onClick={() => addNote(d.denom)}
                  className="relative flex h-[54px] items-center justify-center rounded-[3px] border-none shadow-[0_2px_6px_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.35)]"
                  style={{ background: d.bg }}
                >
                  <span className="font-display text-[21px] text-black/75 [font-feature-settings:'tnum']">
                    ₹{d.denom}
                  </span>
                  {count > 0 && (
                    <span className="absolute right-[5px] top-[3px] text-[10px] font-bold text-black/55">
                      ×{count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setNotes((n) => n.slice(0, -1))}
            className="rounded-[3px] border bg-transparent py-2.5 text-[12.5px] text-[#c9ab8c]"
            style={{ borderColor: "rgba(232,195,122,.3)" }}
          >
            {t.undo}
          </button>
        </div>
      )}

      {/* ── SWEETS ─────────────────────────────────────────────────── */}
      {tab === "sweet" && (
        <div className="lf-rise flex flex-col gap-3">
          <div className="text-[12.5px] text-[#a98d76]">{t.sweetHint}</div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setSweetTray("desi")}
              className="flex-1 rounded-[3px] border py-2 text-[12.5px]"
              style={btn(sweetTray === "desi")}
            >
              {t.desi}
            </button>
            <button
              type="button"
              onClick={() => setSweetTray("west")}
              className="flex-1 rounded-[3px] border py-2 text-[12.5px]"
              style={btn(sweetTray === "west")}
            >
              {t.western}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {SWEET_LIST[sweetTray].map((s) => {
              const on = s.id === sweetId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSweetId(s.id);
                    go("open");
                  }}
                  className="flex flex-col items-center gap-2 rounded-[4px] border bg-white/4 px-1.5 pt-[9px] pb-[7px]"
                  style={{
                    borderColor: on ? "#e8c37a" : "rgba(232,195,122,.18)",
                    color: on ? "#f2dcae" : "#a98d76",
                  }}
                >
                  <span className="[filter:drop-shadow(0_3px_3px_rgba(0,0,0,.5))]">
                    <SweetSvg shapes={s.sh} width={66} height={58} />
                  </span>
                  <span className="text-center text-[10px] leading-[1.2]">
                    {lang === "hi" ? s.hi : s.en}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setSweetId(null)}
            className="rounded-[3px] border bg-transparent py-2.5 text-[12.5px] text-[#c9ab8c]"
            style={{ borderColor: "rgba(232,195,122,.28)" }}
          >
            {t.noSweet}
          </button>
        </div>
      )}

      {/* ── NOTE ───────────────────────────────────────────────────── */}
      {tab === "note" && (
        <div className="lf-rise flex flex-col gap-[13px]">
          <div className="flex flex-col gap-[7px]">
            <div className="text-[12.5px] text-[#a98d76]">{t.occasionHint}</div>
            <div className="flex flex-wrap gap-1.5">
              {OCCASION_LIST.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => pickOccasion(o.id)}
                  className="whitespace-nowrap rounded-[3px] border px-[11px] py-[7px] text-[12.5px]"
                  style={btn(o.id === occasion)}
                >
                  {lang === "hi" ? o.hi : lang === "hn" ? o.rom : o.en}
                </button>
              ))}
            </div>
          </div>

          {occasion === "custom" && (
            <div className="flex flex-col gap-[7px]">
              <label className="text-[12.5px] text-[#a98d76]">{t.customHint}</label>
              <input
                value={customHeading}
                onChange={(e) => setCustomHeading(e.target.value.slice(0, 40))}
                placeholder={t.customPlaceholder}
                className="rounded-[3px] border bg-white/5 px-3 py-[11px] text-sm text-[#f6e9d6] outline-none focus:border-[#e8c37a]"
                style={{ borderColor: "rgba(232,195,122,.3)" }}
              />
            </div>
          )}

          <div className="flex flex-col gap-[7px]">
            <div className="flex items-baseline justify-between">
              <label className="text-[12.5px] text-[#a98d76]">{t.messageHint}</label>
              <span className="text-[11px] text-[#7c6553] [font-feature-settings:'tnum']">
                {message.length}/500
              </span>
            </div>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value.slice(0, 500));
                setMsgAuto(false);
              }}
              rows={4}
              placeholder={t.messagePlaceholder}
              className="resize-y rounded-[3px] border bg-white/5 px-3 py-[11px] text-sm leading-[1.6] text-[#f6e9d6] outline-none focus:border-[#e8c37a]"
              style={{ borderColor: "rgba(232,195,122,.3)" }}
            />
            {removed > 0 && (
              <p className="rounded-[3px] bg-[rgba(232,195,122,.12)] px-3 py-2 text-[11.5px] leading-relaxed text-[#e0c08a]">
                {removed === 1 ? "एक लिंक हटाया गया" : `${removed} लिंक हटाए गए`} — a lifafa
                has no business carrying one. Everything else is untouched.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── NAME ───────────────────────────────────────────────────── */}
      {tab === "name" && (
        <div className="lf-rise flex flex-col gap-[13px]">
          <div className="flex flex-col gap-[7px]">
            <label className="text-[12.5px] text-[#a98d76]">{t.nameHint}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 40))}
              placeholder="Ananya / अनन्या"
              className="rounded-[3px] border bg-white/5 px-[13px] py-3 text-[15px] text-[#f6e9d6] outline-none focus:border-[#e8c37a]"
              style={{ borderColor: "rgba(232,195,122,.3)" }}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <div className="text-[12.5px] text-[#a98d76]">{t.salHint}</div>
            <div className="flex flex-wrap gap-1.5">
              {SALUTATION_LIST.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSalutation(s)}
                  className="rounded-[3px] border px-[13px] py-2 text-[13.5px]"
                  style={btn(s === salutation)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── who it's from, and where the money goes ─────────────────── */}
      <div
        className="mt-1 flex flex-col gap-[13px] border-t pt-4"
        style={{ borderColor: "rgba(232,195,122,.22)" }}
      >
        <div className="flex flex-col gap-[7px]">
          <label className="text-[12.5px] text-[#a98d76]">
            {lang === "hi" ? "आपका नाम" : lang === "hn" ? "aapka naam" : "your name"}
          </label>
          <input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value.slice(0, 40))}
            placeholder={lang === "hi" ? "मम्मी" : "Mummy"}
            className="rounded-[3px] border bg-white/5 px-[13px] py-3 text-[15px] text-[#f6e9d6] outline-none focus:border-[#e8c37a]"
            style={{ borderColor: "rgba(232,195,122,.3)" }}
          />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label className="text-[12.5px] text-[#a98d76]">
            {lang === "hi" ? "उनकी UPI ID" : lang === "hn" ? "unki UPI ID" : "their UPI ID"}
          </label>
          <input
            value={vpa}
            onChange={(e) => setVpa(e.target.value.trim().toLowerCase())}
            placeholder="ananya@okhdfcbank"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="rounded-[3px] border bg-white/5 px-[13px] py-3 font-mono text-[14px] text-[#f6e9d6] outline-none focus:border-[#e8c37a]"
            style={{ borderColor: "rgba(232,195,122,.3)" }}
          />
          <span className="text-[11px] leading-[1.5] text-[#7c6553]">
            {lang === "hi"
              ? "उनसे पूछना पड़ेगा — ढूँढने का कोई तरीका नहीं है।"
              : lang === "hn"
                ? "unse poochna padega — dhoondhne ka koi tareeka nahi hai."
                : "You have to ask them — there's no way to look it up."}
          </span>
        </div>
      </div>

      {error && (
        <p className="rounded-[3px] border border-[#c42b1c]/40 bg-[#c42b1c]/10 px-3 py-2.5 text-[13px] text-[#f0a99f]">
          {error}
        </p>
      )}

      <button
        type="button"
        disabled={!ready || busy}
        onClick={seal}
        className="mt-0.5 rounded-[3px] border bg-transparent py-[15px] font-display text-[19px] text-[#f2dcae] transition hover:bg-[rgba(232,195,122,.12)] disabled:opacity-40"
        style={{ borderColor: "#e8c37a" }}
      >
        {busy ? "…" : t.sealOpen}
      </button>
      <div className="text-center text-[11.5px] leading-[1.5] text-[#7c6553]">{t.footer}</div>
    </div>
  );
}
