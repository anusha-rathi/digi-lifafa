import { ImageResponse } from "next/og";

/* The card WhatsApp shows when a lifafa link is shared.
 *
 * This is the most-shared URL in the product and it had no image at all: the
 * custom metadata on the page replaced the root openGraph object, images
 * included, so every share was a text-only card.
 *
 * Deliberately anonymous. WhatsApp fetches this server-side and a forwarded
 * link shows it to whoever it reaches, so neither name goes anywhere near it.
 * A sealed envelope, because the card should look like the thing that has not
 * been opened yet. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "A lifafa for you";

const GOLD = "#e8c37a";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg,#2a1512,#1a0c0b)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 470,
            height: 262,
            borderRadius: 10,
            border: `5px solid ${GOLD}`,
            background: "#a4123f",
            position: "relative",
          }}
        >
          {/* the scallop, as overlapping discs: Satori has no clip-path */}
          <div style={{ display: "flex", marginTop: -36, marginLeft: 9 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 94,
                  height: 94,
                  borderRadius: 47,
                  background: "#8d0f36",
                  marginLeft: i === 0 ? 0 : -6,
                }}
              />
            ))}
          </div>
          {/* the seal, still shut. Drawn, not typed: Satori ships no font for
              a decorative glyph and it renders as a tofu box. */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 205,
              top: 118,
              width: 60,
              height: 60,
              borderRadius: 30,
              background: GOLD,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 34,
                height: 34,
                borderRadius: 17,
                border: "3px solid #8d0f36",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{ display: "flex", width: 12, height: 12, borderRadius: 6, background: "#8d0f36" }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 50, fontSize: 60, color: "#f2dcae" }}>
          A lifafa for you
        </div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 28, color: "#c9ab8c" }}>
          Tap to open it
        </div>
      </div>
    ),
    size,
  );
}
