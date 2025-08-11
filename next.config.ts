import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.germanboard.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
