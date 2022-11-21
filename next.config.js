/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
  },
  compiler: {
    styledComponents: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  }
}

module.exports = nextConfig
