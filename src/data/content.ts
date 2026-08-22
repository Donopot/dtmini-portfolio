// src/data/content.ts
// Fichier unique de données — pas de CMS, pas de base de données
import type { NavItem } from "@/types/nav";
import type { HeroData } from "@/types/hero";
import type { Project } from "@/types/projects";
import type { FooterColumn } from "@/types/footer";

export const navItems: NavItem[] = [
  { label: "Expertise", href: "/expertise" },
  { label: "Projets", href: "/projets" },
  { label: "Parcours", href: "/parcours" },
  { label: "Contact", href: "/contact" },
];

export const heroData: HeroData = {
  badge: "Freelance · Automatisation, IA & outils métier",
  name: "Donovan Beaulavon",
  headline:
    "J'automatise vos opérations et transforme vos données en outils fiables.",
  subtitle:
    "J'aide les équipes à remplacer les fichiers dispersés, les doubles saisies et les tâches répétitives par des processus clairs, automatisés et transmissibles.",
  cta: {
    primary: { label: "Parler de mon besoin", href: "/contact" },
    secondary: { label: "Découvrir les offres", href: "/#offres" },
  },
  stats: [
    { value: "ChangeNOW", label: "Automatisation des processus" },
    { value: "DataScientest", label: "Mines Paris - PSL" },
    { value: "Oreegami", label: "Développement Full-stack" },
  ],
  metrics: [
    { value: "Python", label: "Automatisation & scripts", bar: 88 },
    { value: "TypeScript", label: "Web & Next.js", bar: 82 },
    { value: "Docker", label: "Déploiement & infra", bar: 78 },
    { value: "IA / RAG", label: "Agents & LLM", bar: 75 },
  ],
};

export const terminalProfile = `{
  "name": "Donovan Beaulavon",
  "role": "Consultant freelance · Automatisation, IA & outils métier",
  "stack": ["Python", "TypeScript", "Airtable", "Make"],
  "mission": "automatiser vos opérations et transformer vos données en outils fiables"
}`;

export interface Problem {
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    title: "Des données dispersées",
    description:
      "Vos informations sont éparpillées entre tableurs, emails et outils qui ne communiquent pas entre eux.",
  },
  {
    title: "Des doubles saisies",
    description:
      "Les mêmes informations sont ressaisies plusieurs fois à plusieurs endroits, ce qui multiplie les erreurs.",
  },
  {
    title: "Des tâches répétitives",
    description:
      "Des opérations manuelles répétées consomment le temps de vos équipes sans valeur ajoutée.",
  },
];

export interface MethodStep {
  step: string;
  title: string;
  description: string;
}

export const method: MethodStep[] = [
  {
    step: "01",
    title: "Cadrage",
    description:
      "On définit ensemble le périmètre, les contraintes et le résultat attendu.",
  },
  {
    step: "02",
    title: "Prototype",
    description:
      "Un prototype rapide ou un audit pour valider l'approche avant de construire.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Développement et tests, avec des points réguliers pour rester alignés.",
  },
  {
    step: "04",
    title: "Déploiement",
    description:
      "Mise en production, supervision et sauvegardes.",
  },
  {
    step: "05",
    title: "Transmission",
    description:
      "Documentation et transfert de compétences pour que votre équipe reste autonome.",
  },
];

export const projects: Project[] = [
  {
    id: "dnd-vtt",
    slug: "dnd-vtt",
    name: "DnD VTT — Table virtuelle",
    category: "Outil métier · Production",
    description:
      "Conception et mise en production d'un outil web multi-utilisateurs en temps réel : une table virtuelle pour jouer à Donjons & Dragons à distance.",
    results: [
      "Frontend React/Vite + backend FastAPI",
      "Synchronisation temps réel (WebSocket)",
      "Carte, tokens, fog of war, combat",
    ],
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Docker"],
    link: "https://github.com/Donopot/DnD",
  },
  {
    id: "automatisation-operations",
    slug: "automatisation-operations",
    name: "Structuration et automatisation d'opérations événementielles",
    category: "Expérience interne",
    description:
      "Expérience interne réalisée chez ChangeNOW dans le cadre d'un poste de Tool & IT Coordinator : structuration de données, automatisation de tâches répétitives et création d'outils internes pour les équipes.",
    results: [
      "Structuration et synchronisation de données",
      "Automatisation de tâches répétitives",
      "Documentation et transmission des processus",
    ],
    tags: ["Airtable", "Make", "Python", "API REST", "Automatisation"],
  },
  {
    id: "rag-documentaire",
    slug: "rag-documentaire",
    name: "RAG documentaire multi-sources",
    category: "Contribution open source",
    description:
      "Contribution à un moteur de recherche documentaire combinant recherche lexicale, recherche vectorielle et reranking (fork open source).",
    results: [
      "Recherche hybride BM25 + dense",
      "Fusion RRF + reranking",
      "Interface conversationnelle",
    ],
    tags: ["LangChain", "ChromaDB", "Streamlit", "Ollama", "BM25"],
    link: "https://github.com/Donopot/Epstein_Files_RAG",
  },
  {
    id: "prevision-energetique",
    slug: "prevision-energetique",
    name: "Analyse et prévision de la consommation énergétique",
    category: "Data & machine learning — projet d'étude",
    badge: "Projet d'étude · DataScientest / Mines PSL · 2023–2024",
    description:
      "Projet d'étude : exploration de données énergétiques françaises, analyse des corrélations température/consommation, et comparaison de modèles de prévision.",
    results: [
      "Analyse de corrélations et saisonnalité",
      "Modèles SARIMA + XGBoost",
      "Notebooks Jupyter reproductibles",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SARIMA", "Jupyter"],
    link: "https://github.com/Donopot/DA",
  },
  {
    id: "hermes-agent",
    name: "Agent IA (Hermes) — auto-hébergé",
    category: "IA · Déploiement open source",
    description:
      "Déploiement, configuration et adaptation d'Hermes Agent (open source, Nous Research) : conteneurisation Docker, intégration Discord, règles de sécurité et d'approbation des commandes, orchestration multi-agents à profils isolés.",
    results: [
      "Auto-hébergement conteneurisé (Docker)",
      "Intégration Discord",
      "Règles de sécurité et d'approbation des commandes",
      "Orchestration multi-agents (profils isolés + cron)",
    ],
    link: "https://github.com/NousResearch/hermes-agent",
    tags: ["Discord", "Docker", "Python", "LLM"],
  },
  {
    id: "x402",
    name: "Agent Data Foundry (x402)",
    category: "Web3 · Prototype",
    badge: "Prototype local · testnet Base Sepolia · dépôt privé",
    description:
      "API de profilage, nettoyage et déduplication de données structurées, accessible via le protocole x402 (paiement HTTP 402 en USDC sur Base). Prototype local (dépôt non public), en testnet, sans disponibilité commerciale. Dashboard d'administration, Docker + PostgreSQL.",
    results: [
      "Paiement x402 (HTTP 402) en USDC sur Base Sepolia",
      "Endpoints de profilage, nettoyage et déduplication",
      "Architecture Docker + PostgreSQL (Drizzle ORM)",
    ],
    tags: ["Next.js", "TypeScript", "x402", "PostgreSQL", "Docker"],
  },
  {
    id: "portfolio",
    name: "dtmini.com — Portfolio Dual-Mode",
    category: "Web",
    description:
      "Portfolio personnel avec design system hybride : mode clair (éditorial/luxe) et mode sombre (tech/data). Composants terminal et monitoring, transitions fluides, SEO optimisé, déploiement Docker avec reverse proxy Caddy.",
    results: [
      "Design dual-mode (light/dark)",
      "Déploiement automatisé Docker + Caddy",
    ],
    link: "https://github.com/Donopot/dtmini-portfolio",
    tags: ["Next.js", "TypeScript", "Docker", "Caddy", "CSS Modules"],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Expertise", href: "/expertise" },
      { label: "Projets", href: "/projets" },
      { label: "Parcours", href: "/parcours" },
    ],
  },
  {
    title: "Expertises",
    links: [
      { label: "Automatisation", href: "/expertise#automatisation" },
      { label: "Déploiement", href: "/expertise#deploiement" },
      { label: "Structuration", href: "/expertise#structuration" },
      { label: "IA & RAG", href: "/expertise#ia" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:donovan@dtmini.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/donovan-beaulavon" },
      { label: "GitHub", href: "https://github.com/Donopot" },
    ],
  },
];
