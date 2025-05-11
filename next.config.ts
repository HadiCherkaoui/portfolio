import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // This enables Docker compatibility for standalone output
};

export default nextConfig;
