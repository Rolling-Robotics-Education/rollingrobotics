/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
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