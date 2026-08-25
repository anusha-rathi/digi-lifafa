"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Envelope, { SweetSvg, type View } from "@/components/Envelope";
import Motif from "@/components/Motif";
import { BORDER_LIST } from "@/lib/borders";
import Celebration from "@/components/Celebration";
import { CELEBRATION_LIST, celebrationFor } from "@/lib/celebrations";
import { MOTIF_LIST } from "@/lib/motifs";
import { templateById } from "@/lib/templates";
import {
  COPY,
  DENOM_LIST,
  DESIGN_LIST,
  OCCASION_LIST,
  PALETTE_LIST,
  SALUTATION_LIST,
  SWEET_LIST,
  TEXTURE_LIST,
  motifFor,
  occasionById,
  paperStyle,
  piecesOf,
  type Lang,
} from "@/lib/design";
import { MAX_RUPEES } from "@/lib/limits";
import { stripUrls } from "@/lib/sanitise";

const NEXT_LANG: Record<Lang, Lang> = { hi: "hn", hn: "en", en: "hi" };
type Tab = "design" | "colour" | "money" | "sweet" | "note" | "name";
const TABS: Tab[] = ["design", "colour", "money", "sweet", "note", "name"];

/* Selected / unselected chrome — the canvas's one shared button treatment. */
const btn = (on: boolean) => ({
  background: on ? "var(--color-maroon)" : "rgba(255,255,255,.6)",
  color: on ? "var(--color-ivory)" : "var(--color-ink-soft)",
  borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)",
});

export default function Workbench() {
  const router = useRouter();
  // ?t=<id> arrives from a template card. Everything it sets stays editable;
  // it is a starting point, not a lock.
  const tpl = templateById(useSearchParams().get("t"));

  const [lang, setLang] = useState<Lang | null>(null);
  const [designId, setDesignId] = useState(tpl?.designId ?? DESIGN_LIST[0].id);
  const [paletteId, setPaletteId] = useState(tpl?.paletteId ?? PALETTE_LIST[0].id);
  const [textureId, setTextureId] = useState(tpl?.textureId ?? TEXTURE_LIST[1].id);
  const [borderId, setBorderId] = useState<string | null>(tpl?.borderId ?? null);
  const [motifId, setMotifId] = useState<string | null>(tpl?.motifId ?? null);
  const [celebrationId, setCelebrationId] = useState<string | null>(tpl?.celebrationId ?? null);
  // The sender picked it themselves, so an occasion change must not overwrite it.
  const [celebAuto, setCelebAuto] = useState(true);
  const [previewParty, setPreviewParty] = useState(false);
  const [notes, setNotes] = useState<{ denom: number; key: number }[]>(
    (tpl?.notes ?? []).map((denom, key) => ({ denom, key })),
  );
  const [coin, setCoin] = useState(tpl?.coin ?? false);
  const [sweetTray, setSweetTray] = useState<"desi" | "west">("desi");
  const [sweetId, setSweetId] = useState<string | null>(tpl?.sweetId ?? null);
  const [occasion, setOccasion] = useState<string | null>(tpl?.festival ?? null);
  const [customHeading, setCustomHeading] = useState("");
  const [message, setMessage] = useState("");
  // Seeded once from the template's occasion, after `lang` is known.
  const [seeded, setSeeded] = useState(false);
  // Only a message WE auto-filled may be replaced when the occasion changes.
  const [msgAuto, setMsgAuto] = useState(false);
  const [name, setName] = useState("");
  const [salutation, setSalutation] = useState(tpl?.salutation ?? SALUTATION_LIST[0]);
  const [view, setView] = useState<View>("open");
  const [pending, setPending] = useState<View>("open");
  const [tab, setTab] = useState<Tab>("design");

  const [senderName, setSenderName] = useState("");
  const [vpa, setVpa] = useState("");
  // Some lifafas are just the lifafa — cash handed over in person, or the nek
  // sent some other way. Then there is no UPI ID, no QR and no pay screen.
  const [noPay, setNoPay] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  /* ── language gate ──────────────────────────────────────────────── */
  if (!lang) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[375px] flex-col justify-center gap-6 px-4 text-center">
        <div className="flex flex-col gap-[5px]">
          <div className="text-[11.5px] font-semibold uppercase tracking-[.26em] text-[var(--color-marigold)]">
            digi lifafa
          </div>
          <h1 className="m-0 font-display text-[31px] font-normal leading-[1.6] text-[var(--color-ink)]">
            शगुन का लिफ़ाफ़ा
          </h1>
          <p className="m-0 text-sm font-light text-[var(--color-ink-soft)]">भाषा चुनिए · choose your language</p>
        </div>
        <div className="flex flex-col gap-[9px]">
          {([
            ["hi", "हिंदी"],
            ["hn", "Hinglish"],
            ["en", "English"],
          ] as const).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setLang(id)}
              className="rounded-full border border-ivory-edge bg-white/70 py-[15px] font-display text-[21px] text-maroon transition hover:border-maroon hover:bg-maroon hover:text-ivory"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const t = COPY[lang];

  // A template names an occasion; the starter message for it depends on the
  // language, which is not known until the gate is answered. Seed once.
  if (tpl && !seeded && !message.trim()) {
    const o = occasionById(tpl.festival);
    const starter = o ? (lang === "hi" ? o.mhi : lang === "hn" ? o.mrom : o.men) : "";
    if (starter) {
      setMessage(starter);
      setMsgAuto(true);
    }
    setSeeded(true);
  }
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
    setNotes((n) => [...n, { denom: d, key: (n[n.length - 1]?.key ?? -1) + 1 }]);
    go("open");
  }

  function pickOccasion(id: string) {
    setOccasion(id);
    if (celebAuto) setCelebrationId(celebrationFor(id));
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
        borderId,
        motifId,
        celebrationId,
        notes: notes.map((n) => n.denom),
        coin,
        sweetId,
        occasion,
        customHeading,
        message,
        receiverName: name,
        salutation,
        senderName,
        payeeVpa: noPay ? null : vpa,
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
    borderId,
    motifId,
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
  const ready =
    name.trim() !== "" &&
    senderName.trim() !== "" &&
    (noPay ? true : vpa.trim() !== "" && total > 0);

  const vBtn = (v: View) => btn(pending === v);

  return (
    <div className={`mx-auto w-full max-w-5xl px-4 pb-16 ${lang === "hi" ? "deva" : ""}`}>
      {/* header */}
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex-1">
          <div className="text-[11.5px] font-semibold uppercase tracking-[.22em] text-[var(--color-marigold)]">
            {t.step}
          </div>
          <h1 className="m-0 font-display text-[26px] font-normal leading-[1.6] text-[var(--color-ink)]">
            {t.title}
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setLang(NEXT_LANG[lang])}
          className="mt-[5px] rounded-[3px] border bg-transparent px-2.5 py-1.5 text-[12.5px] tracking-[.08em] text-[var(--color-ink-soft)]"
          style={{ borderColor: "var(--color-ivory-edge)" }}
        >
          {t.langSwap}
        </button>
      </div>

      <div className="mt-4 grid gap-x-12 gap-y-6 lg:grid-cols-[362px_minmax(0,1fr)] lg:items-start">
      {/* ══ LEFT: the object, and the money that goes in it ══ */}
      <div className="flex flex-col gap-[15px] lg:sticky lg:top-20">
      <div className="relative">
        <Envelope s={envState} view={view} caption={caption} />
        <Celebration kind={celebrationId} playing={previewParty} />
      </div>

      {/* view switch */}
      <div className="flex gap-1.5">
        {([["open", t.vOpen], ["back", t.vBack], ["front", t.vFront]] as const).map(([v, label]) => (
          <button
            key={v}
            type="button"
            onClick={() => go(v)}
            className="flex-1 rounded-[3px] border py-[9px] text-[14px]"
            style={vBtn(v)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* the nek + the coin, always in reach */}
      <div
        className="flex items-center justify-between gap-3 border-y px-0.5 py-[11px]"
        style={{ borderColor: "var(--color-ivory-edge)" }}
      >
        <div>
          <div className="text-[12px] uppercase tracking-[.2em] text-[var(--color-ink-soft)]">{t.total}</div>
          <div className="font-display text-[31px] leading-[1.15] text-[var(--color-ink)] [font-feature-settings:'tnum']">
            ₹{total.toLocaleString("en-IN")}
          </div>
          <div className="text-[13px] leading-[1.4] text-[var(--color-ink-soft)]">
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
          className="flex w-[104px] flex-none flex-col items-center gap-1.5 rounded-[3px] border px-2 py-2.5 text-[var(--color-ink)]"
          style={{
            background: coin ? "rgba(224,145,18,.16)" : "rgba(255,255,255,.6)",
            borderColor: coin ? "var(--color-maroon)" : "var(--color-ivory-edge)",
          }}
        >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[conic-gradient(from_210deg,#f3d489,#b8862f,#ffeab8,#9c6c22,#f3d489)] text-[16px] font-bold text-[#4a3208]">
            {coin ? "✓" : "+"}
          </span>
          <span className="text-center text-[12.5px] leading-[1.3]">
            {coin ? t.coinIn : t.coinAdd}
          </span>
        </button>
      </div>

      </div>

      {/* ══ RIGHT: everything you choose ══ */}
      <div className="flex flex-col gap-[15px]">
      {/* tray tabs */}
      <div className="grid grid-cols-3 gap-[5px] lg:grid-cols-6">
        {TABS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className="rounded-[3px] border py-[9px] text-[14px]"
            style={btn(tab === k)}
          >
            {t.tabs[k]}
          </button>
        ))}
      </div>

      {/* ── DESIGN ─────────────────────────────────────────────────── */}
      {tab === "design" && (
        <div className="lf-rise flex flex-col gap-[9px]">
          <div className="text-[14px] text-[var(--color-ink-soft)]">{t.designHint}</div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5">
            {DESIGN_LIST.map((d) => {
              const on = d.id === designId;
              const { image, size } = paperStyle(d.id, paletteId, textureId);
              const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDesignId(d.id)}
                  className="flex flex-col gap-[5px] rounded-[4px] border bg-white/70 px-[5px] pt-[5px] pb-1.5"
                  style={{ borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)" }}
                >
                  <span
                    className="block h-[42px] rounded-[2px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.16)]"
                    style={{
                      backgroundColor: pal.base,
                      backgroundImage: image,
                      backgroundSize: size,
                      outline: d.frame ? `1px solid ${pal.lace}` : "none",
                      outlineOffset: -5,
                    }}
                  />
                  <span
                    className="text-left text-[12px] leading-[1.2]"
                    style={{ color: on ? "var(--color-ink)" : "var(--color-ink-soft)" }}
                  >
                    {lang === "hi" ? d.hi : d.en}
                  </span>
                </button>
              );
            })}
          </div>

          {/* the gold edge */}
          <div className="mt-2 text-[14px] text-[var(--color-ink-soft)]">{t.borderHint}</div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-8">
            <button
              type="button"
              onClick={() => setBorderId(null)}
              className="rounded-[4px] border px-2 py-2 text-[12px]"
              style={btn(borderId === null)}
            >
              {lang === "hi" ? "बिना" : "none"}
            </button>
            {BORDER_LIST.map((b) => {
              const on = b.id === borderId;
              const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
              const gold = motifFor(pal.lace, pal.base);
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBorderId(b.id)}
                  title={lang === "hi" ? b.hi : b.en}
                  className="rounded-[4px] border p-[3px]"
                  style={{ borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)" }}
                >
                  <span
                    className="relative block h-[38px] rounded-[2px]"
                    style={{ backgroundColor: pal.base }}
                  >
                    <span className="absolute inset-[3px]" style={b.f(gold, pal.base)} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* the motif in the middle */}
          <div className="mt-2 text-[14px] text-[var(--color-ink-soft)]">{t.motifHint}</div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 xl:grid-cols-9">
            <button
              type="button"
              onClick={() => setMotifId(null)}
              className="rounded-[4px] border px-2 py-2 text-[12px]"
              style={btn(motifId === null)}
            >
              {lang === "hi" ? "बिना" : "none"}
            </button>
            {MOTIF_LIST.map((m) => {
              const on = m.id === motifId;
              const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
              const gold = motifFor(pal.lace, pal.base);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMotifId(m.id)}
                  title={lang === "hi" ? m.hi : m.en}
                  className="grid place-items-center rounded-[4px] border p-1"
                  style={{
                    borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)",
                    backgroundColor: pal.base,
                  }}
                >
                  <Motif spec={m} gold={gold} paper={pal.base} size={34} />
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
            <div className="text-[14px] text-[var(--color-ink-soft)]">{t.colourHint}</div>
            <div className="flex flex-wrap gap-2">
              {PALETTE_LIST.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  title={p.name}
                  onClick={() => setPaletteId(p.id)}
                  className="h-9 w-9 rounded-full border bg-transparent p-[3px]"
                  style={{ borderColor: p.id === paletteId ? "var(--color-maroon)" : "var(--color-ivory-edge)" }}
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
            <div className="text-[14px] text-[var(--color-ink-soft)]">{t.textureHint}</div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {TEXTURE_LIST.map((x) => {
                const on = x.id === textureId;
                const pal = PALETTE_LIST.find((p) => p.id === paletteId)!;
                return (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setTextureId(x.id)}
                    className="flex flex-col gap-[5px] rounded-[4px] border bg-white/70 px-[5px] pt-[5px] pb-1.5"
                    style={{
                      borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)",
                      color: on ? "var(--color-ink)" : "var(--color-ink-soft)",
                    }}
                  >
                    <span
                      className="block h-[30px] rounded-[2px]"
                      style={{
                        backgroundColor: pal.base,
                        backgroundImage: x.img || "none",
                        backgroundSize: x.size || "auto",
                      }}
                    />
                    <span className="text-left text-[12px]">{lang === "hi" ? x.hi : x.en}</span>
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
          <div className="text-[14px] text-[var(--color-ink-soft)]">{t.moneyHint}</div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {DENOM_LIST.map((d) => {
              const count = notes.filter((n) => n.denom === d.denom).length;
              return (
                <button
                  key={d.denom}
                  type="button"
                  onClick={() => addNote(d.denom)}
                  aria-label={`${d.denom} rupees`}
                  className="relative h-[62px] overflow-hidden rounded-[4px] border-none text-left shadow-[0_3px_8px_rgba(0,0,0,.3),inset_0_0_0_1px_rgba(255,255,255,.45)] transition active:translate-y-[1px]"
                  style={{ background: d.bg }}
                >
                  {/* the same note the envelope draws, so what you pick is
                      recognisably what lands inside it */}
                  <span className="absolute inset-y-0 left-0 w-[7px] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.22)_0_3px,transparent_3px_7px)]" />
                  <span className="absolute inset-[3px] rounded-[2px] border border-black/15" />
                  <span className="absolute right-[22px] top-[10px] h-[34px] w-[30px] rounded-[50%] bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,.6),rgba(255,255,255,0)_70%)]" />
                  <span className="absolute left-[13px] top-[7px] text-[7px] font-semibold text-black/50">
                    भारतीय रिज़र्व बैंक
                  </span>
                  <span className="absolute right-[8px] bottom-[4px] font-display text-[24px] leading-none text-black/75 [font-feature-settings:'tnum']">
                    ₹{d.denom}
                  </span>
                  <span className="absolute left-[13px] bottom-[7px] text-[9px] font-medium text-black/55">
                    {lang === "hi" ? d.hi : d.rom}
                  </span>
                  {count > 0 && (
                    <span className="absolute right-[7px] top-[5px] rounded-full bg-black/60 px-1.5 text-[11px] font-bold text-white">
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
            className="rounded-[3px] border bg-transparent py-2.5 text-[14px] text-[var(--color-ink-soft)]"
            style={{ borderColor: "var(--color-ivory-edge)" }}
          >
            {t.undo}
          </button>
        </div>
      )}

      {/* ── SWEETS ─────────────────────────────────────────────────── */}
      {tab === "sweet" && (
        <div className="lf-rise flex flex-col gap-3">
          <div className="text-[14px] text-[var(--color-ink-soft)]">{t.sweetHint}</div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setSweetTray("desi")}
              className="flex-1 rounded-[3px] border py-2 text-[14px]"
              style={btn(sweetTray === "desi")}
            >
              {t.desi}
            </button>
            <button
              type="button"
              onClick={() => setSweetTray("west")}
              className="flex-1 rounded-[3px] border py-2 text-[14px]"
              style={btn(sweetTray === "west")}
            >
              {t.western}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-6">
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
                  className="flex flex-col items-center gap-2 rounded-[4px] border bg-white/70 px-1.5 pt-[9px] pb-[7px]"
                  style={{
                    borderColor: on ? "var(--color-maroon)" : "var(--color-ivory-edge)",
                    color: on ? "var(--color-ink)" : "var(--color-ink-soft)",
                  }}
                >
                  <span className="[filter:drop-shadow(0_3px_3px_rgba(0,0,0,.5))]">
                    <SweetSvg shapes={s.sh} width={66} height={58} pieces={piecesOf(s.id)} />
                  </span>
                  <span className="text-center text-[12px] leading-[1.2]">
                    {lang === "hi" ? s.hi : s.en}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setSweetId(null)}
            className="rounded-[3px] border bg-transparent py-2.5 text-[14px] text-[var(--color-ink-soft)]"
            style={{ borderColor: "var(--color-ivory-edge)" }}
          >
            {t.noSweet}
          </button>
        </div>
      )}

      {/* ── NOTE ───────────────────────────────────────────────────── */}
      {tab === "note" && (
        <div className="lf-rise flex flex-col gap-[13px]">
          <div className="flex flex-col gap-[7px]">
            <div className="text-[14px] text-[var(--color-ink-soft)]">{t.occasionHint}</div>
            <div className="flex flex-wrap gap-1.5">
              {OCCASION_LIST.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => pickOccasion(o.id)}
                  className="whitespace-nowrap rounded-[3px] border px-[11px] py-[7px] text-[14px]"
                  style={btn(o.id === occasion)}
                >
                  {lang === "hi" ? o.hi : lang === "hn" ? o.rom : o.en}
                </button>
              ))}
            </div>
          </div>

          {occasion === "custom" && (
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="lf-heading" className="text-[14px] text-[var(--color-ink-soft)]">{t.customHint}</label>
              <input
                id="lf-heading"
                value={customHeading}
                onChange={(e) => setCustomHeading(e.target.value.slice(0, 40))}
                placeholder={t.customPlaceholder}
                className="rounded-[3px] border bg-white px-3 py-[11px] text-sm text-[var(--color-ink)] outline-none focus:border-marigold"
                style={{ borderColor: "var(--color-ivory-edge)" }}
              />
            </div>
          )}

          <div className="flex flex-col gap-[7px]">
            <div className="flex items-baseline justify-between">
              <label htmlFor="lf-message" className="text-[14px] text-[var(--color-ink-soft)]">{t.messageHint}</label>
              <span className="text-[12.5px] text-[var(--color-ink-faint)] [font-feature-settings:'tnum']">
                {message.length}/500
              </span>
            </div>
            <textarea
              id="lf-message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value.slice(0, 500));
                setMsgAuto(false);
              }}
              rows={4}
              placeholder={t.messagePlaceholder}
              className="resize-y rounded-[3px] border bg-white px-3 py-[11px] text-sm leading-[1.6] text-[var(--color-ink)] outline-none focus:border-marigold"
              style={{ borderColor: "var(--color-ivory-edge)" }}
            />
            {removed > 0 && (
              <p className="rounded-[3px] bg-marigold/15 px-3 py-2 text-[13px] leading-relaxed text-ink-soft">
                {removed === 1 ? "एक लिंक हटाया गया" : `${removed} लिंक हटाए गए`}. A lifafa
                has no business carrying one. Everything else is untouched.
              </p>
            )}
          </div>

          {/* what happens when they open it */}
          <div className="flex flex-col gap-[7px]">
            <div className="text-[14px] text-[var(--color-ink-soft)]">{t.celebrationHint}</div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => { setCelebrationId(null); setCelebAuto(false); }}
                className="rounded-[3px] border px-[11px] py-[7px] text-[14px]"
                style={btn(celebrationId === null)}
              >
                {lang === "hi" ? "कुछ नहीं" : "nothing"}
              </button>
              {CELEBRATION_LIST.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setCelebrationId(c.id);
                    setCelebAuto(false);
                    setPreviewParty(false);
                    setTimeout(() => setPreviewParty(true), 30);
                    setTimeout(() => setPreviewParty(false), 5200);
                  }}
                  className="whitespace-nowrap rounded-[3px] border px-[11px] py-[7px] text-[14px]"
                  style={btn(celebrationId === c.id)}
                >
                  {lang === "hi" ? c.hi : lang === "hn" ? c.hn : c.en}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── NAME ───────────────────────────────────────────────────── */}
      {tab === "name" && (
        <div className="lf-rise flex flex-col gap-[13px]">
          <div className="flex flex-col gap-[7px]">
            <label htmlFor="lf-name" className="text-[14px] text-[var(--color-ink-soft)]">{t.nameHint}</label>
            <input
              id="lf-name"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 40))}
              placeholder="Ananya / अनन्या"
              className="rounded-[3px] border bg-white px-[13px] py-3 text-[16px] text-[var(--color-ink)] outline-none focus:border-marigold"
              style={{ borderColor: "var(--color-ivory-edge)" }}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <div className="text-[14px] text-[var(--color-ink-soft)]">{t.salHint}</div>
            <div className="flex flex-wrap gap-1.5">
              {SALUTATION_LIST.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSalutation(s)}
                  className="rounded-[3px] border px-[13px] py-2 text-[15px]"
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
        className="mt-1 grid gap-[13px] border-t pt-4 sm:grid-cols-2"
        style={{ borderColor: "var(--color-ivory-edge)" }}
      >
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="lf-sender" className="text-[14px] text-[var(--color-ink-soft)]">{t.senderLabel}</label>
          <input
            id="lf-sender"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value.slice(0, 40))}
            placeholder={lang === "hi" ? "मम्मी" : "Mummy"}
            className="rounded-[3px] border bg-white px-[13px] py-3 text-[16px] text-[var(--color-ink)] outline-none focus:border-marigold"
            style={{ borderColor: "var(--color-ivory-edge)" }}
          />
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor="lf-vpa" className="text-[14px] text-[var(--color-ink-soft)]">{t.vpaLabel}</label>
          <input
            id="lf-vpa"
            value={noPay ? "" : vpa}
            disabled={noPay}
            onChange={(e) => setVpa(e.target.value.trim().toLowerCase())}
            placeholder="ananya@okhdfcbank"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="rounded-[3px] border bg-white px-[13px] py-3 font-mono text-[15px] text-[var(--color-ink)] outline-none focus:border-marigold disabled:bg-black/5 disabled:text-[var(--color-ink-faint)]"
            style={{ borderColor: "var(--color-ivory-edge)" }}
          />
          {!noPay && (
            <span className="text-[12.5px] leading-[1.5] text-[var(--color-ink-faint)]">
              {t.vpaHelp}
            </span>
          )}
        </div>

        {/* the way out of paying at all */}
        <label className="flex cursor-pointer items-start gap-2.5 sm:col-span-2">
          <input
            type="checkbox"
            name="no-pay"
            checked={noPay}
            onChange={(e) => setNoPay(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-maroon)]"
          />
          <span>
            <span className="block text-[14px] text-[var(--color-ink)]">{t.noPay}</span>
            {noPay && (
              <span className="mt-0.5 block text-[13px] leading-[1.5] text-[var(--color-ink-faint)]">
                {t.noPayNote}
              </span>
            )}
          </span>
        </label>
      </div>

      {error && (
        <p className="rounded-[3px] border border-kumkum/40 bg-kumkum/8 px-3 py-2.5 text-[14px] text-kumkum">
          {error}
        </p>
      )}

      <button
        type="button"
        disabled={!ready || busy}
        onClick={seal}
        className="mt-0.5 rounded-full bg-maroon py-[16px] font-display text-[19px] text-ivory shadow-[0_10px_24px_-10px_rgba(123,30,43,.6)] transition hover:bg-maroon-deep disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none"
      >
        {busy ? "…" : t.sealOpen}
      </button>
      <div className="text-center text-[13px] leading-[1.5] text-[var(--color-ink-faint)]">{t.footer}</div>
      </div>
      </div>
    </div>
  );
}
