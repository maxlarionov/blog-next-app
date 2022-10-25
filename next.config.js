/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
