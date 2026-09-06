/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  outputFileTracingIncludes: {
    '/*': ['./data/**/*'],
  },
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