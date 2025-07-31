// next.config.mjs
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

export default nextConfig;
