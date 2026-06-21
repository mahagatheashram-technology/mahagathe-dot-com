import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mahagathe.org",
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalise www.ayuri.org -> ayuri.org (apex is primary)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ayuri.org" }],
        destination: "https://ayuri.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
