import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.apiki.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "developers.elementor.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
