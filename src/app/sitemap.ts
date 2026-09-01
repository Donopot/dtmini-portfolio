import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dtmini.com";
  const lastModified = new Date();

  const routes: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/expertise`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets/dnd-vtt`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets/automatisation-operations`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets/rag-documentaire`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets/prevision-energetique`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/parcours`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/temoignages`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
