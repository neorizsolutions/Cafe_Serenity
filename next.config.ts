import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/meal-plans',
        destination: '/healthy-meals',
        permanent: true,
      },
      {
        source: '/meal-plans/:path*',
        destination: '/healthy-meals/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
