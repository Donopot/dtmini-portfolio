export interface Experience {
  slug: string;
  entreprise: string;
  poste: string;
  typeContrat: "CDI" | "CDD" | "Alternance" | "Freelance" | "Stage";
  periode: string;
  missions: string[];
  stack?: string[];
}

export interface Formation {
  slug: string;
  etablissement: string;
  diplome: string;
  periode: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    slug: "changenow-cdd-2025",
    entreprise: "ChangeNOW",
    poste: "Tool & IT Coordinator",
    typeContrat: "CDD",
    periode: "2025 – 2026",
    missions: [
      "Poursuite en CDD des missions initiées pendant l'alternance, avec autonomie et périmètre élargi.",
      "Développement et maintenance des outils internes : scripts d'automatisation, flux de données entre services, API et webhooks.",
      "Introduction et déploiement de briques d'IA supervisée : transcription automatique de réunions, classification de contenus, enrichissement de bases de données.",
      "Documentation des processus, des outils et des flux pour garantir la maintenabilité et la transmission.",
      "Support technique aux équipes et gestion des incidents sur les outils internes.",
    ],
    stack: ["Python", "Google Apps Script", "API REST", "Webhooks", "IA"],
  },
  {
    slug: "changenow-alternance-2024",
    entreprise: "ChangeNOW",
    poste: "Tool & IT Coordinator",
    typeContrat: "Alternance",
    periode: "2024 – 2025",
    missions: [
      "Analyse des besoins des équipes programme, speakers, investisseurs, partenaires et opérations pour identifier les opportunités d'automatisation et d'amélioration des processus.",
      "Prototypage et mise en place de formulaires intelligents, bases de données, interfaces de suivi, reportings automatisés et workflows de validation.",
      "Conception de modèles de données adaptés aux besoins métier et définition des règles de gestion associées.",
      "Établissement de standards de qualité pour les données et les processus, documentation des bonnes pratiques.",
      "Collaboration étroite avec les équipes métier pour itérer sur les solutions et assurer l'adoption.",
    ],
    stack: ["Airtable", "Make", "Fillout", "Google Workspace", "Python"],
  },
];

export const formations: Formation[] = [
  {
    slug: "oreegami-academy",
    etablissement: "Oreegami Academy",
    diplome: "No-code & Automatisation",
    periode: "2024",
    description:
      "Formation aux outils no-code et aux méthodologies d'automatisation des processus métier.",
  },
  {
    slug: "datascientest",
    etablissement: "DataScientest (Mines Paris - PSL)",
    diplome: "Data Analyst",
    periode: "2023 – 2024",
    description:
      "Formation en analyse de données : statistiques, Python, pandas, visualisation, machine learning, séries temporelles.",
  },
  {
    slug: "bts-muc",
    etablissement: "BTS MUC",
    diplome: "Management des Unités Commerciales",
    periode: "2020 – 2022",
  },
];
