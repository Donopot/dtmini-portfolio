import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dtmini.com";
  const lastModified = new Date();

  const routes: { url: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/expertise`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/projets`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/parcours`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/temoignages`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/experience`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/automation`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/development`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/automatisation-processus`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/data-operations`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/agents-ia`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/projects/dnd-saas`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/projects/rag-documentaire`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/projects/prevision-energetique`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/cv/automation`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/cv/development`, priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
