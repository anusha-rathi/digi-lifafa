import { LifafaShape } from "@/components/LifafaArt";
import { FAN } from "@/lib/decor";

/* Five real lifafas, fanned out like a hand of cards. */

export default function LifafaFan() {
  return (
    <div
      className="relative mx-auto h-[170px] w-full max-w-3xl scale-[0.62] sm:scale-90 lg:scale-100"
      aria-hidden
    >
      {FAN.map((f) => (
        <LifafaShape
          key={f.id}
          id={f.id}
          className="absolute left-1/2 top-0 h-[124px] w-[196px] origin-bottom"
          style={{
            transform: `translateX(-50%) translate(${f.x}px, ${f.y}px) rotate(${f.rot}deg)`,
            zIndex: f.z,
          }}
        />
      ))}
    </div>
  );
}
