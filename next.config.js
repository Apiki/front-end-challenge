/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['blog.apiki.com']
  },
}

module.exports = nextConfig
