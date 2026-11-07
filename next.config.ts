import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog photographs come from Wikimedia Commons under CC licences.
    // See src/lib/photos.ts for why this is the only host allowed.
    remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org" }],
  },
  async redirects() {
    return [
      // The combined post was split into one post per observance; keep its
      // short-lived URL pointing at the first of the two.
      {
        source: "/blog/govardhan-puja-bhai-dooj-2026",
        destination: "/blog/govardhan-puja-2026-date-annakut",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
