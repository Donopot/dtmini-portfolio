"use client";

import AnimatedSection from "@/components/AnimatedSection";

interface TimelineEntry {
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  tags: string[];
  type: "work" | "education" | "milestone";
  icon: string;
}

const timeline: TimelineEntry[] = [
  {
    date: "2023 — Aujourd'hui",
    title: "Tool & IT Coordinator",
    subtitle: "ChangeNOW",
    location: "Paris",
    description:
      "Pilotage de l'automatisation des processus métier transverses. Conception et déploiement de pipelines Airtable → Make → API, synchronisation de données entre plusieurs équipes, mise en place d'un tableau de bord de monitoring et réduction des tâches manuelles.",
    tags: ["Python", "Airtable", "Make", "API REST", "Webhooks"],
    type: "work",
    icon: "⚙️",
  },
  {
    date: "2024",
    title: "Data Science & Machine Learning",
    subtitle: "DataScientest — Mines Paris - PSL",
    location: "Paris",
    description:
      "Formation certifiante : machine learning supervisé/non supervisé, NLP, séries temporelles, déploiement de modèles. Projet fil rouge : prévision de consommation énergétique (SARIMA + XGBoost).",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "MLOps"],
    type: "education",
    icon: "🎓",
  },
  {
    date: "2023",
    title: "Développement Web Full-stack",
    subtitle: "Oreegami Academy",
    location: "Marseille",
    description:
      "Formation intensive de 6 mois : JavaScript, React, Node.js, bases de données SQL/NoSQL. Projets full-stack et méthodologies agiles.",
    tags: ["React", "Node.js", "PostgreSQL", "JavaScript", "Agile"],
    type: "education",
    icon: "🎓",
  },
  {
    date: "2022 — 2023",
    title: "Développeur Full-stack & IA",
    subtitle: "DTMini — Freelance",
    location: "Remote",
    description:
      "Conception de solutions sur mesure : pipelines RAG documentaires, agents conversationnels, APIs, dashboards analytiques. Stack Python, Next.js, FastAPI, LLMs. Déploiement continu via Docker + Caddy.",
    tags: ["React", "FastAPI", "LangChain", "Docker", "LLM"],
    type: "work",
    icon: "🚀",
  },
];

export default function ParcoursPage() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-[72rem] mx-auto">
        {/* Header */}
        <AnimatedSection>
          <span
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
            style={{ color: "var(--accent-strong)" }}
          >
            Parcours
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 dark:font-mono transition-colors">
            Mon parcours
          </h1>
          <p
            className="text-lg max-w-2xl mb-16 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            De la data science au déploiement d&apos;agents IA, un parcours
            orienté vers l&apos;automatisation et l&apos;efficacité
            opérationnelle.
          </p>
        </AnimatedSection>

        {/* Timeline — overflow-x-clip contient le décalage horizontal (±40px)
            des AnimatedSection "left"/"right" pendant l'animation d'entrée,
            évitant le débordement de 16px sur mobile/tablette sans masquer
            globalement (html/body) ni supprimer l'animation. */}
        <div className="relative overflow-x-clip">
          {/* Vertical line (mobile + desktop) */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{
              background: `linear-gradient(to bottom, var(--accent), var(--border), var(--accent))`,
            }}
          />
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 md:hidden"
            style={{
              background: `linear-gradient(to bottom, var(--accent), var(--border), var(--accent))`,
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((entry, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimatedSection
                  key={`${entry.date}-${entry.title}`}
                  delay={index * 0.1}
                  direction={isLeft ? "left" : "right"}
                >
                  <TimelineRow entry={entry} isLeft={isLeft} />
                </AnimatedSection>
              );
            })}
          </div>

          {/* Terminal-style cursor marker (rendered once) */}
          <AnimatedSection delay={timeline.length * 0.1}>
            <div className="relative mt-10 flex flex-col items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  boxShadow: "0 0 0 6px var(--background), 0 0 12px var(--accent)",
                }}
              />
              <p
                className="font-mono text-sm"
                style={{ color: "var(--accent-green)" }}
              >
                <span className="dark-only-inline">donopot@portfolio:~$ █</span>
                <span
                  className="light-only-inline"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                  }}
                >
                  ... et la suite s&apos;écrit maintenant.
                </span>
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Ce qui me motive (fusionné depuis /about) */}
        <section className="mt-24">
          <h2 className="font-display text-2xl font-bold mb-8 dark:font-mono">
            Ce qui me motive
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div
              className="rounded-2xl border p-6 text-center"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl">🎯</div>
              <h3 className="mt-3 font-semibold">Impact concret</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                Je construis des solutions qui font gagner du temps et de
                l&apos;argent, pas des POC qui finissent dans un tiroir.
              </p>
            </div>
            <div
              className="rounded-2xl border p-6 text-center"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl">🧠</div>
              <h3 className="mt-3 font-semibold">Apprentissage continu</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                La tech évolue vite. Je passe mes soirées à explorer de nouveaux
                paradigmes : agents, RAG, fine-tuning.
              </p>
            </div>
            <div
              className="rounded-2xl border p-6 text-center"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="text-3xl">🤝</div>
              <h3 className="mt-3 font-semibold">Transmission</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                J&apos;aime former les équipes, vulgariser les concepts complexes
                et rendre l&apos;IA accessible à tous.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TimelineRow({
  entry,
  isLeft,
}: {
  entry: TimelineEntry;
  isLeft: boolean;
}) {
  const typeColor =
    entry.type === "work"
      ? "var(--accent-strong)"
      : entry.type === "education"
        ? "#4F8C8C"
        : "var(--accent-green)";

  const typeBg =
    entry.type === "work"
      ? "rgba(184,136,77,0.08)"
      : entry.type === "education"
        ? "rgba(79,140,140,0.08)"
        : "rgba(74,222,128,0.08)";

  const dotColor =
    entry.type === "work"
      ? "var(--accent)"
      : entry.type === "education"
        ? "#4F8C8C"
        : "var(--accent-green)";

  return (
    <div className="relative grid grid-cols-[2rem_1fr] md:grid-cols-[1fr_2rem_1fr] items-start gap-x-4 md:gap-x-6">
      {/* Dot (left on mobile, center on desktop) */}
      <div className="col-start-1 row-start-1 md:col-start-2 flex justify-center pt-1.5">
        <div
          className="h-3 w-3 rounded-full z-10 shrink-0"
          style={{
            backgroundColor: dotColor,
            boxShadow: "0 0 0 5px var(--background)",
          }}
        />
      </div>

      {/* Content card — rendered exactly once */}
      <div
        className={`col-start-2 row-start-1 min-w-0 ${
          isLeft ? "md:col-start-1" : "md:col-start-3"
        }`}
      >
        <TimelineCard entry={entry} typeColor={typeColor} typeBg={typeBg} />
      </div>
    </div>
  );
}

function TimelineCard({
  entry,
  typeColor,
  typeBg,
}: {
  entry: TimelineEntry;
  typeColor: string;
  typeBg: string;
}) {
  return (
    <div
      className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Icon + type pill + location */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{entry.icon}</span>
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{ backgroundColor: typeBg, color: typeColor }}
        >
          {entry.type === "work"
            ? "Expérience"
            : entry.type === "education"
              ? "Formation"
              : "Étape"}
        </span>
        {entry.location && (
          <span
            className="text-[10px] ml-auto"
            style={{ color: "var(--text-muted)" }}
          >
            📍 {entry.location}
          </span>
        )}
      </div>

      {/* Date badge */}
      <span
        className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full mb-3"
        style={{
          backgroundColor: typeBg,
          color: typeColor,
          border: `1px solid ${typeColor}20`,
        }}
      >
        {entry.date}
      </span>

      <h3 className="text-lg font-bold mb-0.5">{entry.title}</h3>
      <p
        className="text-sm mb-3"
        style={{ color: "var(--text-muted)" }}
      >
        {entry.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        {entry.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[11px] font-medium"
            style={{
              backgroundColor: typeBg,
              color: typeColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
