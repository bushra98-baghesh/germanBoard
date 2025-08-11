import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["backend.germanboard.org"], // السماح بجلب الصور من هذا الدومين
  },
};

export default nextConfig;
