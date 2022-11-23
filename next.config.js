/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
