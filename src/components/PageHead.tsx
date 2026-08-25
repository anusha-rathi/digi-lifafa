import { LifafaBackdrop } from "@/components/LifafaArt";

/* The masthead for every long-form page.
 *
 * These pages were an h1 and a wall of prose on flat ivory, which is what
 * "everything looks plain" meant. Colour, texture and a scatter of lifafas
 * behind the title, so a page shows something before it starts talking. */
export default function PageHead({
  title,
  sub,
  tone = "maroon",
  wide = false,
}: {
  title: string;
  sub?: string;
  tone?: "maroon" | "peacock" | "marigold";
  wide?: boolean;
}) {
  return (
    <header className={`band band--${tone} relative w-full overflow-hidden`}>
      <LifafaBackdrop opacity={tone === "marigold" ? 0.2 : 0.16} />
      <div
        className={`relative mx-auto w-full px-5 py-14 sm:py-20 ${wide ? "max-w-5xl" : "max-w-2xl"}`}
      >
        <h1 className="font-display text-[38px] leading-[1.15] sm:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-3 max-w-lg text-[17px] leading-relaxed opacity-85">
            {sub}
          </p>
        )}
      </div>
    </header>
  );
}
