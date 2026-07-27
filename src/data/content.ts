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
    name: "Pipeline Automation",
    category: "Automatisation",
    description:
      "Connexion Airtable → Make → API : synchronisation multi-équipes, reprise sur erreur.",
    tags: ["Python", "Airtable", "Make", "API"],
  },
  {
    id: "rag",
    name: "RAG Documentaire",
    category: "IA",
    description:
      "Ingestion PDF → embeddings → recherche vectorielle. Exploration de documents par IA.",
    tags: ["LangChain", "ChromaDB", "Ollama", "Streamlit"],
  },
  {
    id: "forecast",
    name: "Prévision Énergétique",
    category: "Data",
    description:
      "Analyse de séries temporelles : SARIMA, XGBoost, visualisation et évaluation.",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
  },
  {
    id: "agent",
    name: "Agent IA Multi-canal",
    category: "IA",
    description:
      "Agent conversationnel déployé sur Discord et Telegram avec mémoire persistante.",
    tags: ["Discord", "Telegram", "Webhook", "Docker"],
  },
  {
    id: "x402",
    name: "Agent Data Foundry",
    category: "Web3",
    description:
      "Plateforme de création d'agents IA avec paiements on-chain via le protocole x402.",
    tags: ["Next.js", "x402", "PostgreSQL", "Docker"],
  },
  {
    id: "portfolio",
    name: "dtmini.com",
    category: "Web",
    description:
      "Portfolio personnel avec design dual-mode, déploiement Docker et CI/CD.",
    tags: ["Next.js", "TypeScript", "Docker", "Caddy"],
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
    title: "Ressources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Témoignages", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:donovan@dtmini.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/donovan-beaulavon" },
      { label: "GitHub", href: "https://github.com/Donopot" },
      { label: "Discord", href: "#" },
    ],
  },
];
