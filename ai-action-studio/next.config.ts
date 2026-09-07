import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "aiwealthbase.com" }],
        destination: "https://aiactionstudio.com",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "aiwealthbase.com" }],
        destination: "https://aiactionstudio.com/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.aiwealthbase.com" }],
        destination: "https://www.aiactionstudio.com",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aiwealthbase.com" }],
        destination: "https://www.aiactionstudio.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
