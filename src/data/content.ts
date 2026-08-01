// src/data/content.ts
// Fichier unique de données — pas de CMS, pas de base de données
import type { NavItem } from "@/types/nav";
import type { HeroData } from "@/types/hero";
import type { Service } from "@/types/services";
import type { Project } from "@/types/projects";
import type { FooterColumn } from "@/types/footer";

export const navItems: NavItem[] = [
  { label: "Expertise", href: "/expertise" },
  { label: "Projets", href: "/projets" },
  { label: "Parcours", href: "/parcours" },
  { label: "Contact", href: "/contact" },
];

export const heroData: HeroData = {
  badge: "Tool & IT Coordinator",
  name: "Donovan Beaulavon",
  subtitle:
    "J'analyse, automatise et déploie des systèmes intelligents qui transforment les processus métier — du tableur au déploiement, avec ou sans IA.",
  cta: {
    primary: { label: "Me contacter", href: "/contact" },
    secondary: { label: "Voir les projets ↓", href: "#projets" },
  },
  stats: [
    { value: "2 ans", label: "chez ChangeNOW" },
    { value: "10 000+", label: "contacts consolidés" },
    { value: "~200", label: "fichiers standardisés" },
  ],
  metrics: [
    { value: "2", label: "Années ChangeNOW", bar: 66 },
    { value: "10k+", label: "Contacts consolidés", bar: 80 },
    { value: "~200", label: "Fichiers /std", bar: 45 },
    { value: "73%", label: "↓ Tâches manuelles", bar: 73 },
  ],
};

export const terminalProfile = `{
  "name": "Donovan Beaulavon",
  "role": "Tool & IT Coordinator",
  "stack": ["Python", "TypeScript", "Airtable", "Make"],
  "mission": "automatiser les processus métier"
}`;

export const services: Service[] = [
  {
    icon: "</>",
    title: "Automatisation",
    description:
      "Scripts Python, intégrations API, pipelines de données. Du tableur au workflow automatisé.",
  },
  {
    icon: ">_",
    title: "Déploiement",
    description:
      "Docker, CI/CD, reverse proxy. Des applications qui tournent 24/7 sans supervision.",
  },
  {
    icon: "{ }",
    title: "Structuration",
    description:
      "Bases Airtable, CRM, normalisation de données. Finis les fichiers éparpillés.",
  },
  {
    icon: "⚡",
    title: "IA & RAG",
    description:
      "Recherche vectorielle, embeddings, chatbots documentaires. L'IA au service de vos données.",
  },
];

export const projects: Project[] = [
  {
    id: "pipeline",
    name: "Pipeline d'Automatisation ChangeNOW",
    category: "Automatisation",
    description:
      "Conception et déploiement d'un pipeline Airtable → Make → APIs qui synchronise 10 000+ contacts entre 6 équipes en temps réel. Reprise automatique sur erreur, validation des données, et tableau de bord de monitoring.",
    results: [
      "10 000+ contacts consolidés et qualifiés",
      "73% de réduction des tâches manuelles",
      "6 équipes synchronisées en temps réel",
      "Zéro perte de données sur 18 mois",
    ],
    link: undefined,
    tags: ["Python", "Airtable", "Make", "API REST", "Webhook"],
  },
  {
    id: "rag",
    name: "RAG Documentaire Multi-Sources",
    category: "IA",
    description:
      "Pipeline d'ingestion PDF/HTML/CSV → embeddings vectoriels → recherche sémantique. Interface Streamlit pour l'exploration de documents par langage naturel. Déploiement Docker avec persistance des index.",
    results: [
      "3 formats de documents supportés",
      "Recherche sémantique < 500ms",
      "Interface no-code pour utilisateurs métier",
    ],
    link: undefined,
    tags: ["LangChain", "ChromaDB", "Ollama", "Streamlit", "Docker"],
  },
  {
    id: "forecast",
    name: "Prévision de Consommation Énergétique",
    category: "Data Science",
    description:
      "Modélisation de séries temporelles pour la prévision de consommation électrique : SARIMA pour la saisonnalité, XGBoost pour les variables exogènes (météo, vacances). Dashboard interactif et rapport d'évaluation automatique.",
    results: [
      "MAE < 5% sur données de test",
      "Pipeline reproductible (Jupyter → script)",
      "Visualisation interactive des prévisions",
    ],
    link: undefined,
    tags: ["Python", "XGBoost", "SARIMA", "Pandas", "Scikit-learn"],
  },
  {
    id: "hermes-agent",
    name: "Agent IA Multi-Canal (Hermes)",
    category: "IA",
    description:
      "Agent conversationnel autonome déployé sur Discord, Telegram et terminal. Mémoire persistante cross-session, outils intégrés (shell, web, fichiers), orchestration multi-agents via cron jobs. Architecture modulaire avec profils isolés.",
    results: [
      "3 plateformes de communication",
      "Mémoire persistante entre sessions",
      "20+ outils intégrés (shell, web, fichiers, browser)",
      "Orchestration de 14 cron jobs simultanés",
    ],
    link: "https://github.com/NousResearch/hermes-agent",
    tags: ["Discord", "Telegram", "Python", "Docker", "LLM"],
  },
  {
    id: "x402",
    name: "Agent Data Foundry (x402)",
    category: "Web3",
    description:
      "Plateforme full-stack de création et déploiement d'agents IA avec paiements on-chain via le protocole x402 (USDC sur Base). Dashboard de gestion, marketplace d'agents, et intégration API REST.",
    results: [
      "Paiements on-chain automatisés (USDC)",
      "Dashboard complet (CRUD agents, analytics)",
      "Architecture micro-services Docker",
    ],
    link: undefined,
    tags: ["Next.js", "TypeScript", "x402", "PostgreSQL", "Docker"],
  },
  {
    id: "portfolio",
    name: "dtmini.com — Portfolio Dual-Mode",
    category: "Web",
    description:
      "Portfolio personnel avec design system hybride : mode clair (éditorial/luxe) et mode sombre (tech/data). 28 routes, composants terminal et monitoring, transitions fluides, SEO optimisé, déploiement Docker avec reverse proxy Caddy.",
    results: [
      "28 routes, 0 erreur TypeScript",
      "Design dual-mode (light/dark)",
      "Score Lighthouse > 95",
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
      { label: "Témoignages", href: "/temoignages" },
    ],
  },
];
