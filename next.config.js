/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "159.89.20.207", "polystyrensypany.cz", "134.122.88.214"]
  },
  i18n: {
    locales: ['cs'],
    defaultLocale: 'cs',
  },
}

module.exports = nextConfig
