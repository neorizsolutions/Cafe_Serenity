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
        source: '/healthy-meals',
        destination: '/healthy-choices',
        permanent: true,
      },
      {
        source: '/healthy-meals/:path*',
        destination: '/healthy-choices/:path*',
        permanent: true,
      },
      {
        source: '/meal-plans',
        destination: '/healthy-choices',
        permanent: true,
      },
      {
        source: '/meal-plans/:path*',
        destination: '/healthy-choices/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
