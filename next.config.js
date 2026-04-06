/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.apiki.com',
      },
    ],
  },
};

module.exports = nextConfig;
