// src/types/projects.ts
export interface Project {
  id: string;
  /** Slug interne → page détaillée /projets/[slug] */
  slug?: string;
  name: string;
  category: string;
  /** Badge contextuel (ex: "Projet d'étude · DataScientest / Mines PSL · 2023–2024") */
  badge?: string;
  description: string;
  results?: string[];
  tags: string[];
  /** Lien externe (dépôt GitHub, etc.) */
  link?: string;
}
