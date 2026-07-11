import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // App Router is stable, but we keep it explicit
  },
  images: {
    domains: [],
  },
};

export default nextConfig;