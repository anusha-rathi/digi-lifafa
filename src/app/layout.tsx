import type { Metadata } from "next";
import { Yatra_One, Mukta, Martel } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
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

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digilifafa.vercel.app";

const DESCRIPTION =
  "Make a shagun ka lifafa, add your wishes, a mithai and the one-rupee coin, then pay them directly over UPI and send the envelope as a link.";

export const metadata: Metadata = {
  // Without metadataBase, Next resolves opengraph-image to a relative path and
  // WhatsApp, which is where nearly every one of these links is opened, will
  // not fetch it at all.
  metadataBase: new URL(SITE),
  title: {
    default: "Digi Lifafa: send a shagun ka lifafa as a link",
    template: "%s · Digi Lifafa",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Digi Lifafa",
    locale: "hi_IN",
    title: "Digi Lifafa: send a shagun ka lifafa as a link",
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
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
      </body>
    </html>
  );
}
