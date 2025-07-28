/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["blog.apiki.com", "images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.apiki.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
