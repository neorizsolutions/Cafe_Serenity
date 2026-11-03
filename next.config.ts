import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid exhausting memory when Windows starts one page worker per CPU.
  experimental: { cpus: 2 },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return ['/healthy-meals/:path*', '/meal-plans/:path*', '/healthy-choices/:path*'].map((source) => ({ source, destination: '/cafe-menu', permanent: true }));
  },
};

export default nextConfig;
