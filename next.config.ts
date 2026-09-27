import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.tentetamiri.com.tr" },
    ],
  },
};

export default nextConfig;
