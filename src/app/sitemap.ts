import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dtmini.com";
  const lastModified = new Date();

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/automatisation-processus`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/data-operations`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/agents-ia`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/experience`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/projects/dnd-saas`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/projects/rag-documentaire`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/projects/prevision-energetique`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
