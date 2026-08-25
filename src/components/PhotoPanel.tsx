"use client";

import { useRef, useState } from "react";

/* Attaching a photo, on the sender's own page.
   The wording under it is the important part of this component. A photo inside
   a lifafa can never be more private than the link that opens the lifafa, and
   saying otherwise would be the same failure as calling an unchecked UTR
   "verified". */
export default function PhotoPanel({
  token,
  slug,
  hasPhoto,
}: {
  token: string;
  slug: string;
  hasPhoto: boolean;
}) {
  const [present, setPresent] = useState(hasPhoto);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [bust, setBust] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    setBusy(true);
    setError("");
    const body = new FormData();
    body.append("photo", file);
    const res = await fetch(`/api/lifafa/${token}/photo`, { method: "POST", body });
    setBusy(false);
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      setError(j.error ?? "That did not upload.");
      return;
    }
    setPresent(true);
    setBust(Date.now());
  }

  async function remove() {
    setBusy(true);
    await fetch(`/api/lifafa/${token}/photo`, { method: "DELETE" });
    setBusy(false);
    setPresent(false);
  }

  return (
    <div className="mt-6 rounded-xl border border-ivory-edge bg-white/70 p-5">
      <p className="font-display text-xl text-maroon">Tuck a photo in</p>

      {present ? (
        <div className="mt-3 space-y-3">
          {/* Plain img, never next/image: the optimizer would cache a copy at a
              public path and bypass the block check on this route. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/api/photo/${slug}?v=${bust}`}
            alt="The photo inside this lifafa"
            className="w-full rounded-lg border border-ivory-edge"
          />
          <button
            type="button"
            onClick={remove}
            disabled={busy}
            className="text-sm text-kumkum underline underline-offset-2 disabled:opacity-40"
          >
            {busy ? "removing…" : "Remove this photo"}
          </button>
        </div>
      ) : (
        <div className="mt-3">
          <input
            ref={input}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) upload(f);
            }}
          />
          <button
            type="button"
            onClick={() => input.current?.click()}
            disabled={busy}
            className="w-full rounded-full border border-ivory-edge bg-white px-6 py-3 text-ink-soft transition hover:border-marigold hover:text-ink disabled:opacity-40"
          >
            {busy ? "adding…" : "Choose a photo"}
          </button>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-kumkum">{error}</p>}

      <div className="mt-4 space-y-2 border-t border-ivory-edge pt-3 text-[12.5px] leading-relaxed text-ink-faint">
        <p>
          <strong className="text-ink-soft">It is not public.</strong> It sits in
          no folder anyone can browse and has no address that works on its own.
          Our server only ever sends it to someone already opening your lifafa.
        </p>
        <p>
          <strong className="text-ink-soft">It is exactly as private as your
          link.</strong> Anyone you send the link to can see the photo, and so
          can anyone they forward it to.
        </p>
        <p>
          <strong className="text-ink-soft">We remove the hidden data.</strong>{" "}
          Phone photos carry where and when they were taken. We strip that
          before saving, so whoever opens this cannot read where you were.
        </p>
        <p>
          <strong className="text-ink-soft">We can see it, because we store
          it.</strong> We do not look unless somebody reports the lifafa. Remove
          it here and it is deleted from our storage.
        </p>
      </div>
    </div>
  );
}
