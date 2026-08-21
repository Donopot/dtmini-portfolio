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
    id: "pipeline",
    name: "Pipeline d'Automatisation ChangeNOW",
    category: "Automatisation",
    description:
      "Conception et déploiement d'un pipeline Airtable → Make → APIs qui synchronise les contacts entre plusieurs équipes en temps réel. Reprise automatique sur erreur, validation des données, et tableau de bord de monitoring.",
    results: [
      "Pipelines Airtable → Make → API déployés",
      "Synchronisation multi-équipes en temps réel",
      "Tableau de bord de monitoring mis en place",
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
      "PDF, HTML et CSV supportés",
      "Recherche sémantique sur documents internes",
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
      "Multi-plateformes (Discord, Telegram, terminal)",
      "Mémoire persistante entre sessions",
      "Outils intégrés (shell, web, fichiers, navigateur)",
      "Orchestration de cron jobs simultanés",
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
      { label: "Témoignages", href: "/temoignages" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// AFFIRMATIONS EN ATTENTE DE VALIDATION — NON AFFICHÉES PUBLIQUEMENT
// Ces chiffres ont été retirés du rendu tant qu'ils ne sont pas
// étayés par une preuve vérifiable. Ne pas réutiliser sans validation.
// ─────────────────────────────────────────────────────────────
export const pendingValidation: { claim: string; source: string }[] = [
  { claim: "73% de réduction des tâches manuelles", source: "hero / projet pipeline / témoignages" },
  { claim: "10 000+ contacts consolidés", source: "hero / projet pipeline" },
  { claim: "~200 fichiers standardisés", source: "hero" },
  { claim: "6 équipes synchronisées en temps réel", source: "projet pipeline" },
  { claim: "Zéro perte de données sur 18 mois", source: "projet pipeline" },
  { claim: "28 routes, 0 erreur TypeScript", source: "projet portfolio" },
  { claim: "Score Lighthouse > 95", source: "projet portfolio" },
  { claim: "Recherche sémantique < 500ms", source: "projet rag" },
  { claim: "MAE < 5% sur données de test", source: "projet forecast" },
];
