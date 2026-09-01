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
      { source: "/projects/dnd-saas", destination: "/projets/dnd-vtt", permanent: true },
      { source: "/projects/rag-documentaire", destination: "/projets/rag-documentaire", permanent: true },
      { source: "/projects/prevision-energetique", destination: "/projets/prevision-energetique", permanent: true },
      { source: "/automation", destination: "/expertise#automatisation", permanent: true },
      { source: "/development", destination: "/projets", permanent: true },
      { source: "/cv/automation", destination: "/parcours", permanent: true },
      { source: "/cv/development", destination: "/parcours", permanent: true },
    ];
  },
};

export default nextConfig;
