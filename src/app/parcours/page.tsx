import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcours — Donovan Beaulavon",
  description:
    "De la data science au déploiement d'agents IA — mon parcours professionnel et mes formations.",
  openGraph: {
    title: "Parcours — Donovan Beaulavon",
    description:
      "De la data science au déploiement d'agents IA.",
  },
};

const experiences = [
  {
    period: "2023 — Aujourd'hui",
    role: "Tool & IT Coordinator",
    company: "ChangeNOW",
    location: "Paris",
    description:
      "Automatisation des processus métier transverses. Conception et déploiement de pipelines de données, intégration d'outils (Airtable, Make, API), coordination technique multi-équipes. Réduction de 73% des tâches manuelles.",
    tags: ["Python", "Airtable", "Make", "API", "Automatisation"],
  },
  {
    period: "2022 — 2023",
    role: "Développeur Full-stack & IA",
    company: "DTMini",
    location: "Freelance",
    description:
      "Conception de solutions sur mesure : pipelines RAG, agents conversationnels, APIs documentaires, dashboards analytiques. Stack Python, React, FastAPI, LLMs.",
    tags: ["React", "FastAPI", "LangChain", "Docker", "LLM"],
  },
];

const formations = [
  {
    period: "2024",
    title: "Data Science & Machine Learning",
    school: "DataScientest — Mines Paris - PSL",
    description: "Formation certifiante en data science, machine learning et déploiement de modèles.",
  },
  {
    period: "2023",
    title: "Développement Web Full-stack",
    school: "Oreegami Academy",
    description: "Formation intensive en développement web : JavaScript, React, Node.js, bases de données.",
  },
];

export default function ParcoursPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-[72rem] mx-auto">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--color-light-accent)" }}
        >
          Parcours
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
          Mon parcours
        </h1>
        <p
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: "var(--color-light-text-secondary)" }}
        >
          De la data science au déploiement d&apos;agents IA, un parcours
          orienté vers l&apos;automatisation et l&apos;efficacité opérationnelle.
        </p>

        {/* Timeline */}
        <h2 className="font-display dark:font-mono text-2xl font-bold mb-8">
          Expérience
        </h2>
        <div className="space-y-8 mb-16">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="relative pl-8 border-l-2"
              style={{ borderColor: "var(--color-light-border)" }}
            >
              <div
                className="absolute left-0 top-0 -translate-x-1/2 h-3 w-3 rounded-full ring-4"
                style={{
                  backgroundColor: "var(--color-light-accent)",
                  boxShadow: "0 0 0 4px var(--color-light-bg)",
                }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-light-accent)" }}
              >
                {exp.period}
              </span>
              <h3 className="mt-1 text-lg font-bold">
                {exp.role}{" "}
                <span
                  className="font-normal"
                  style={{ color: "var(--color-light-text-secondary)" }}
                >
                  — {exp.company}
                </span>
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed max-w-2xl"
                style={{ color: "var(--color-light-text-secondary)" }}
              >
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-xs border"
                    style={{
                      borderColor: "var(--color-light-border)",
                      color: "var(--color-light-text-secondary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Formations */}
        <h2 className="font-display dark:font-mono text-2xl font-bold mb-8">
          Formations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "var(--color-light-card)",
                borderColor: "var(--color-light-border)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-light-accent)" }}
              >
                {f.period}
              </span>
              <h3 className="mt-1 font-semibold">{f.title}</h3>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-light-text-secondary)" }}
              >
                {f.school}
              </p>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "var(--color-light-text-secondary)" }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
