import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // This enables Docker compatibility
  experimental: {
    // Enable if you're using app directory
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
