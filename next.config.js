const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path((?!api|contact|about|shop).*)',
        destination: '/blog/:path*',
      },
    ]
  },
}

module.exports = nextConfig