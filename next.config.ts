import type { NextConfig } from "next";

/* SPEC S7 — headers. These close several holes at once and cost nothing.
 *
 * script-src omits 'unsafe-inline' in production, but Next needs 'unsafe-eval'
 * for React Refresh in dev, so the policy is relaxed only when NODE_ENV is
 * development. style-src keeps 'unsafe-inline' because Next injects inline
 * <style> for critical CSS and next/font; removing that needs a nonce and
 * middleware, which is a bigger change than this file.
 */
const dev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  // The pay screen must not be embeddable. A framed pay screen is one
  // clickjack away from someone confirming a payment they never saw.
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: https://upload.wikimedia.org",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self'${dev ? " 'unsafe-eval' 'unsafe-inline'" : ""}`,
  // Everything is same-origin: next/font self-hosts, QR codes are generated
  // locally by the qrcode package, and the DB is only reached server-side.
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // The owner_token sits in the URL. Nothing leaks it today — the outbound
  // links carry rel="noreferrer" — but this makes that true by default rather
  // than by remembering, for every link anyone adds later.
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Blog photographs come from Wikimedia Commons under CC licences.
    // See src/lib/photos.ts for why this is the only host allowed.
    remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org" }],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // S9 — a lifafa link must never be indexed. The page metadata already
      // says so; the header also covers non-HTML responses and anything that
      // never reaches the React render path.
      {
        source: "/:prefix(l|s)/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default nextConfig;
