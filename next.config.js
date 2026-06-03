/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Clear-Site-Data',
            value: '"cache"',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/www',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig