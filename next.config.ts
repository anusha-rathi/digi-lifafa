import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // sharp strips EXIF in the upload route. Next bundles its own copy for the
  // Image Optimizer, but that one is not importable from a handler.
  serverExternalPackages: ["sharp"],
  images: {
    // Blog photographs come from Wikimedia Commons under CC licences.
    // See src/lib/photos.ts for why this is the only host allowed.
    remotePatterns: [{ protocol: "https", hostname: "upload.wikimedia.org" }],
  },
  /* config options here */
};

export default nextConfig;
