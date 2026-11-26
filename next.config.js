/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  outputFileTracingIncludes: {
    '/*': ['./data/**/*'],
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