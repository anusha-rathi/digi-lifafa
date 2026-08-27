import { ImageResponse } from "next/og";

/* What WhatsApp shows when somebody pastes a link.
 *
 * It was the framework's default black triangle, which told a receiver
 * nothing. Latin type only: ImageResponse has no Devanagari font unless one is
 * shipped with it, and a missing glyph renders as blank boxes. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Digi Lifafa";

const GOLD = "#e8c37a";

export default function Image() {
  return new ImageResponse(
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
          width: 460,
          height: 258,
          borderRadius: 10,
          border: `5px solid ${GOLD}`,
          background: "#a4123f",
          position: "relative",
        }}
      >
        {/* the scallop, drawn as overlapping discs because Satori has no
              clip-path and this is the shape that reads as a lifafa */}
        <div style={{ display: "flex", marginTop: -34, marginLeft: 8 }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: 92,
                height: 92,
                borderRadius: 46,
                background: "#8d0f36",
                marginLeft: i === 0 ? 0 : -6,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 26,
            right: 26,
            top: 96,
            bottom: 26,
            border: `3px solid ${GOLD}`,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 23,
              background: GOLD,
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 54,
          fontSize: 68,
          color: "#f2dcae",
        }}
      >
        Digi Lifafa
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 16,
          fontSize: 30,
          color: "#c9ab8c",
        }}
      >
        Shagun ka lifafa, bheja ja sakta hai link se
      </div>
    </div>,
    size,
  );
}
