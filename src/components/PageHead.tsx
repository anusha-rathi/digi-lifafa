/* The masthead for every long-form page.
 *
 * All five of these pages were an h1 and a wall of prose on flat ivory, which
 * is what "everything looks plain" meant. The landing page already had
 * full-bleed colour bands; this puts the same paper at the top of the rest, so
 * a page announces itself before it starts talking. */
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
    <header className={`band band--${tone} w-full`}>
      <div className={`mx-auto w-full px-5 py-12 sm:py-16 ${wide ? "max-w-5xl" : "max-w-2xl"}`}>
        <h1 className="font-display text-[38px] leading-[1.15] sm:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed opacity-85">
            {sub}
          </p>
        )}
      </div>
    </header>
  );
}
