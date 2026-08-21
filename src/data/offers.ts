// src/data/offers.ts
// Les quatre offres commerciales, orientées résultat client (pas technologie).

import type { ContactType } from "@/types/contact";

export interface Offer {
  id: string;
  title: string;
  tagline: string; // problème client, une phrase
  problem: string;
  outcome: string;
  deliverables: string[];
  tools: string[];
  notIncluded: string;
  contactType: ContactType; // valeur de préremplissage du formulaire /contact
  format: string; // diagnostic | sprint | projet | accompagnement
}

export const offers: Offer[] = [
  {
    id: "diagnostic",
    title: "Diagnostic et plan d'automatisation",
    tagline:
      "Vous savez que des tâches vous font perdre du temps, mais vous ne savez pas par où commencer.",
    problem:
      "Les processus reposent sur des saisies manuelles répétées et des outils qui ne communiquent pas entre eux, sans vision claire de ce qu'il faut traiter en premier.",
    outcome:
      "Une feuille de route claire et priorisée, avec une recommandation d'outils adaptés à votre budget et à vos compétences.",
    deliverables: [
      "Cartographie du processus",
      "Identification des blocages",
      "Priorisation des automatisations",
      "Feuille de route",
      "Recommandation d'outils",
    ],
    tools: ["Airtable", "Make", "n8n", "Google Workspace"],
    notIncluded:
      "L'implémentation des automatisations (elle fait l'objet d'une mission dédiée).",
    contactType: "diagnostic",
    format: "diagnostic",
  },
  {
    id: "automatisation",
    title: "Automatisation et structuration des données",
    tagline:
      "Vos données sont dispersées entre tableurs, emails et outils qui ne se parlent pas.",
    problem:
      "Les mêmes informations sont saisies plusieurs fois à des endroits différents, ce qui crée des erreurs et rend toute exploitation fiable impossible.",
    outcome:
      "Des données centralisées et fiables, et des workflows qui suppriment la double saisie.",
    deliverables: [
      "Base de données ou CRM structuré",
      "Nettoyage et normalisation",
      "Workflows Airtable, Make ou n8n",
      "Intégrations API",
      "Contrôles d'erreurs et documentation",
    ],
    tools: ["Airtable", "Make", "n8n", "PostgreSQL", "APIs"],
    notIncluded:
      "Le développement d'une application métier sur mesure (voir l'offre dédiée).",
    contactType: "automatisation",
    format: "projet",
  },
  {
    id: "outil-metier",
    title: "Outils métier et IA sur mesure",
    tagline:
      "Les outils génériques ne couvrent pas votre besoin ; il vous faut un outil adapté à votre métier.",
    problem:
      "Vous contournez les limites de vos outils actuels avec des bricolages fragiles, et l'information clé est inaccessible ou mal exploitée.",
    outcome:
      "Un outil ou une application qui correspond exactement à votre façon de travailler, simple à utiliser au quotidien.",
    deliverables: [
      "Portail ou application interne",
      "API",
      "Tableau de bord",
      "Recherche documentaire / RAG",
      "Assistant spécialisé (quand l'IA apporte réellement une valeur)",
    ],
    tools: ["FastAPI", "Next.js", "PostgreSQL", "MinIO", "LLM / RAG"],
    notIncluded:
      "L'hébergement et la maintenance continue (voir l'offre de mise en production).",
    contactType: "outil-metier",
    format: "projet",
  },
  {
    id: "production",
    title: "Mise en production et transmission",
    tagline:
      "Vous avez un outil ou un prototype qui n'est ni documenté, ni sécurisé, ni maintenable.",
    problem:
      "Le savoir repose sur une seule personne ; un incident ou un départ suffit à mettre le système en danger.",
    outcome:
      "Un système déployé, supervisé, sauvegardé et documenté, que votre équipe peut maintenir.",
    deliverables: [
      "Docker et configuration d'exécution",
      "Supervision",
      "Sauvegardes",
      "Documentation",
      "Transfert de compétences",
      "Maintenance optionnelle",
    ],
    tools: ["Docker", "Caddy", "Uptime Kuma", "PostgreSQL", "Gitea"],
    notIncluded: "Le développement de nouvelles fonctionnalités métier.",
    contactType: "production",
    format: "accompagnement",
  },
];
