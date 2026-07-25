export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  descriptionCourte: string;
  descriptionLongue: string;
  stack: string[];
  role: string;
  statut: "en production" | "en développement" | "terminé" | "pause";
  liens: ProjectLink[];
  image: string;
}

export const projects: Project[] = [
  {
    slug: "dnd-saas",
    title: "DnD SaaS",
    descriptionCourte:
      "Plateforme SaaS de gestion de campagnes Donjons & Dragons avec outils collaboratifs en temps réel.",
    descriptionLongue:
      "Application full-stack conçue pour les maîtres du jeu et joueurs de Donjons & Dragons. Le backend FastAPI gère l'authentification, les règles de jeu et le stockage des assets via MinIO, tandis que PostgreSQL assure la persistance des campagnes, personnages et sessions. Redis est utilisé pour le cache de sessions et les files d'attente de tâches. Les WebSockets permettent la collaboration en temps réel entre joueurs. L'ensemble est conteneurisé avec Docker et exposé via Caddy en reverse proxy avec terminaison TLS automatique. Le frontend React offre une interface réactive pour la gestion des fiches personnages, des cartes et des dés virtuels.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "WebSocket",
      "Docker",
      "Caddy",
    ],
    role: "Développeur full-stack — conception, développement et déploiement",
    statut: "en production",
    liens: [
      { label: "Site", url: "https://dnd.dtmini.com" },
      { label: "GitHub", url: "https://github.com/Donopot/DnD" },
    ],
    image: "/images/projects/dnd-saas.webp",
  },
  {
    slug: "explorateur-rag",
    title: "Explorateur RAG",
    descriptionCourte:
      "Système d'exploration documentaire par Retrieval-Augmented Generation sur des milliers de pages PDF.",
    descriptionLongue:
      "Pipeline d'ingestion et d'interrogation de documents volumineux combinant extraction de texte depuis des PDF, segmentation en chunks et génération d'embeddings vectoriels. La base vectorielle permet une recherche sémantique rapide sur l'ensemble du corpus. Ollama est utilisé en local pour l'inférence des modèles de langage, sans dépendance à des API externes. Le pipeline RAG (Retrieval-Augmented Generation) assemble les chunks pertinents en contexte avant de les soumettre au LLM, garantissant des réponses fondées sur les documents sources. L'interface permet de poser des questions en langage naturel et d'explorer les passages sources correspondants.",
    stack: [
      "Python",
      "Ollama",
      "LangChain",
      "Embeddings",
      "Base vectorielle",
      "RAG",
    ],
    role: "Développeur — conception du pipeline d'ingestion et du système RAG",
    statut: "terminé",
    liens: [
      {
        label: "GitHub",
        url: "https://github.com/Donopot/Epstein_Files_RAG",
      },
    ],
    image: "/images/projects/explorateur-rag.webp",
  },
  {
    slug: "prevision-energetique",
    title: "Prévision énergétique",
    descriptionCourte:
      "Analyse et modélisation prédictive de séries temporelles pour la prévision de consommation énergétique.",
    descriptionLongue:
      "Projet d'analyse de données exploratoire et de modélisation prédictive appliqué aux séries temporelles de consommation énergétique. Les données historiques sont nettoyées, resaisonnalisées et enrichies avec des variables exogènes (météo, calendrier). Plusieurs modèles prédictifs sont comparés — des approches statistiques classiques aux méthodes de machine learning — pour évaluer leur performance sur différents horizons de prévision. Des visualisations interactives permettent d'explorer les tendances, la saisonnalité et les résidus des modèles. L'objectif est de fournir un cadre méthodologique reproductible pour la prévision de séries temporelles.",
    stack: [
      "Python",
      "pandas",
      "Séries temporelles",
      "Modèles prédictifs",
      "Visualisation",
    ],
    role: "Data Analyst — analyse exploratoire, modélisation et visualisation",
    statut: "terminé",
    liens: [
      { label: "GitHub", url: "https://github.com/Donopot/DA" },
    ],
    image: "/images/projects/prevision-energetique.webp",
  },
];
