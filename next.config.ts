import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_CX: process.env.NEXT_PUBLIC_CX,
  },
};

export default nextConfig;
