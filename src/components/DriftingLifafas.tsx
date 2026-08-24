import MiniLifafa from "@/components/MiniLifafa";

/* Six envelopes drifting up and down behind the hero. Each gets its own
   duration, delay, tilt and rise so they never move as a block. Pure CSS —
   the .drift keyframe is disabled entirely under prefers-reduced-motion. */
const FLOATERS = [
  { paper: "#7b1e2b", deep: "#4e0f1a", left: "4%", top: "6%", w: 62, dur: "9s", delay: "0s", tilt: "-8deg", rise: "-24px" },
  { paper: "#0f6e5c", deep: "#084a3e", left: "76%", top: "2%", w: 52, dur: "11s", delay: "-3s", tilt: "7deg", rise: "-30px" },
  { paper: "#c9761c", deep: "#94500d", left: "86%", top: "46%", w: 44, dur: "10s", delay: "-6s", tilt: "-11deg", rise: "-18px" },
  { paper: "#2b3a67", deep: "#1a2444", left: "0%", top: "56%", w: 48, dur: "12s", delay: "-2s", tilt: "9deg", rise: "-26px" },
  { paper: "#c42b1c", deep: "#8e1a0f", left: "66%", top: "74%", w: 40, dur: "8.5s", delay: "-5s", tilt: "-6deg", rise: "-20px" },
  { paper: "#7b1e2b", deep: "#4e0f1a", left: "16%", top: "80%", w: 36, dur: "13s", delay: "-8s", tilt: "12deg", rise: "-28px" },
];

export default function DriftingLifafas() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {FLOATERS.map((f, i) => (
        <MiniLifafa
          key={i}
          paper={f.paper}
          deep={f.deep}
          className="drift absolute opacity-60 drop-shadow-[0_10px_20px_rgba(74,18,28,0.18)]"
          style={
            {
              left: f.left,
              top: f.top,
              width: f.w,
              "--dur": f.dur,
              "--delay": f.delay,
              "--tilt": f.tilt,
              "--rise": f.rise,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
