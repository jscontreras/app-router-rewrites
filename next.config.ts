import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path((?!api|contact|about|shop).*)',
        destination: '/blog/:path*',
      },
    ]
  },
};

export default nextConfig;
