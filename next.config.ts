import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "blog.apiki.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "secure.gravatar.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
