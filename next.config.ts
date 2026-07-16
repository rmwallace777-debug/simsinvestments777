import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Configure pageExtensions to include mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default nextConfig;
