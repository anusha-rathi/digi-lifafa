import type { Metadata } from "next";
import { Yatra_One, Mukta } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Digi Lifafa: send a shagun ka lifafa as a link",
    template: "%s · Digi Lifafa",
  },
  description:
    "Make a shagun ka lifafa, add your wishes, a mithai and the one-rupee coin, then pay them directly over UPI and send the envelope as a link.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${yatra.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
