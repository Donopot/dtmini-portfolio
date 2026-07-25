export interface SkillGroup {
  categorie: string;
  competences: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    categorie: "Automatisation & Intégration",
    competences: [
      "Airtable",
      "Make",
      "n8n",
      "Fillout",
      "Softr",
      "Notion",
      "Google Workspace",
      "API REST",
      "Webhooks",
      "Google Apps Script",
    ],
  },
  {
    categorie: "Données & Analyse",
    competences: [
      "Nettoyage de données",
      "Dédoublonnage",
      "Synchronisation",
      "Modélisation de données",
      "Python",
      "pandas",
    ],
  },
  {
    categorie: "Développement",
    competences: [
      "TypeScript",
      "React",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Caddy",
    ],
  },
  {
    categorie: "IA & RAG",
    competences: [
      "Embeddings",
      "Bases vectorielles",
      "Ollama",
      "LangChain",
      "RAG",
      "Agents IA",
    ],
  },
];
