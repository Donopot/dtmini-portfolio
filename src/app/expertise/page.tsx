import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise — Donovan Beaulavon",
  description:
    "Automatisation, déploiement, structuration de données et IA. Mes domaines d'expertise au service de vos processus métier.",
  openGraph: {
    title: "Expertise — Donovan Beaulavon",
    description:
      "Automatisation, déploiement, structuration de données et IA.",
  },
};

const expertises = [
  {
    icon: "</>",
    title: "Automatisation",
    items: [
      "Scripts Python sur mesure",
      "Pipelines de données (ETL, API)",
      "Workflows n8n / Make",
      "Synchronisation multi-outils (Airtable, CRM, ERP)",
      "Reprise sur erreur & monitoring",
    ],
  },
  {
    icon: ">_",
    title: "Déploiement",
    items: [
      "Docker & Docker Compose",
      "CI/CD (GitHub Actions)",
      "Reverse proxy Caddy / Nginx",
      "Hébergement bare metal & VPS",
      "Supervision (Uptime Kuma, Dozzle)",
    ],
  },
  {
    icon: "{ }",
    title: "Structuration",
    items: [
      "Conception de bases Airtable",
      "Normalisation & nettoyage de données",
      "Migrations de données legacy",
      "Documentation de processus",
      "Dashboards & reporting",
    ],
  },
  {
    icon: "⚡",
    title: "IA & RAG",
    items: [
      "Recherche vectorielle (ChromaDB, embeddings)",
      "Chatbots documentaires (LangChain, Ollama)",
      "Agents conversationnels multi-canaux",
      "Fine-tuning & évaluation de modèles",
      "Intégration IA dans les workflows",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[72rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--color-light-accent)" }}
        >
          Expertise
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Ce que je maîtrise
        </h1>
        <p
          className="text-lg max-w-2xl mb-12 leading-relaxed"
          style={{ color: "var(--color-light-text-secondary)" }}
        >
          Quatre piliers techniques pour transformer vos processus métier — de
          l&apos;analyse à la mise en production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((exp) => (
            <div
              key={exp.title}
              className="rounded-2xl p-8 border relative transition-all duration-400 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-light-card)",
                borderColor: "var(--color-light-border)",
              }}
            >
              <span
                className="text-2xl font-bold mb-4 block font-mono"
                style={{ color: "var(--color-light-accent)" }}
              >
                {exp.icon}
              </span>
              <h2 className="font-display dark:font-mono text-xl font-bold mb-4">
                {exp.title}
              </h2>
              <ul className="space-y-2">
                {exp.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--color-light-text-secondary)" }}
                  >
                    <span style={{ color: "var(--color-light-accent)" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
