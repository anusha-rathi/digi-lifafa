import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Yatra_One, Mukta, Martel } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";
import "./globals.css";

// Display face with real character, Devanagari-native. Body face clean and
// also Devanagari — many senders will write in Hindi. SPEC section 7.
const yatra = Yatra_One({
  variable: "--font-yatra",
  subsets: ["latin", "devanagari"],
  weight: "400",
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

// Headlines. Yatra One is a rounded poster face and at 36px it read as a
// children's party invite, which is wrong for this audience. Martel is a
// Devanagari and Latin serif with weight and no bounce.
const martel = Martel({
  variable: "--font-martel",
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  // Without this, every relative OG and canonical URL is resolved against
  // whatever host served the request, including preview deployments.
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  openGraph: { siteName: "Digi Lifafa", type: "website", locale: "en_IN" },
  title: {
    default: "Digi Lifafa",
    template: "%s · Digi Lifafa",
  },
  // Kept under about 100 characters: WhatsApp and iMessage truncate the
  // preview line, and the old one was cut at "Make a shagun ka lifafa, add…".
  description:
    "Send a shagun ka lifafa as a link. Free, no signup, and the money never touches us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${yatra.variable} ${mukta.variable} ${martel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
        {/* Cookieless page counts. No identifiers, nothing stored on the
            visitor, so it does not change what the privacy policy promises. */}
        <Analytics />
      </body>
    </html>
  );
}
