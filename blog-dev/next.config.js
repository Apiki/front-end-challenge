/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blog.apiki.com']
  }
}

module.exports = nextConfig
