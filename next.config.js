/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["blog.apiki.com", "secure.gravatar.com"],
  },
};

module.exports = nextConfig;
