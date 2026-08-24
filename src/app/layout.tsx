import type { Metadata } from "next";
import { Yatra_One, Mukta } from "next/font/google";
import "./globals.css";

// Display face with real character, Devanagari-native. Body face clean and
// also Devanagari — many senders will write in Hindi. SPEC §7.
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
  title: "Digi Lifafa",
  description: "Make a shagun ka lifafa and send it to one person.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${yatra.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
