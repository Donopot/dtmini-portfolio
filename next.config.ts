import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/parcours", permanent: true },
      { source: "/experience", destination: "/parcours", permanent: true },
      { source: "/automatisation-processus", destination: "/expertise#automatisation", permanent: true },
      { source: "/data-operations", destination: "/expertise#structuration", permanent: true },
      { source: "/agents-ia", destination: "/expertise#ia", permanent: true },
      { source: "/testimonials", destination: "/temoignages", permanent: true },
    ];
  },
};

export default nextConfig;
