"use client";

import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

// NOTE: metadata export kept separate for Next.js App Router compatibility.
// The page is "use client" but we re-export metadata from a separate layout
// or just define it statically. For simplicity, we embed it here — Next.js
// allows metadata exports even in client components in App Router.

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
      "Pilotage de l'automatisation des processus métier transverses. Conception et déploiement de pipelines Airtable → Make → API, synchronisation de 10 000+ contacts entre 6 équipes, mise en place d'un tableau de bord de monitoring. Réduction de 73% des tâches manuelles.",
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
            orienté vers l&apos;automatisation et l&apos;efficacité
            opérationnelle.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{
              background: `linear-gradient(to bottom, var(--color-light-accent), var(--color-light-border), var(--color-light-accent))`,
            }}
          />
          {/* Mobile vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 md:hidden"
            style={{
              background: `linear-gradient(to bottom, var(--color-light-accent), var(--color-light-border), var(--color-light-accent))`,
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

          {/* Terminal-style "cursor" at the bottom of the timeline */}
          <AnimatedSection delay={timeline.length * 0.1}>
            <div
              className="relative mt-8 ml-4 md:ml-0 md:flex md:justify-center"
            >
              {/* Mobile connector */}
              <div className="md:hidden">
                <div
                  className="absolute left-4 top-0 -translate-x-1/2 h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: "var(--color-light-accent)",
                    boxShadow: "0 0 0 4px var(--color-light-bg)",
                  }}
                />
                <div className="ml-12 pt-2 pb-4">
                  <p
                    className="font-mono text-sm"
                    style={{ color: "var(--color-dark-accent-green)" }}
                  >
                    <span className="dark-only-inline">
                      donopot@portfolio:~$ █
                    </span>
                    <span
                      className="light-only-inline"
                      style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "var(--color-light-text-secondary)" }}
                    >
                      ... et la suite s&apos;écrit maintenant.
                    </span>
                  </p>
                </div>
              </div>
              {/* Desktop future marker */}
              <div className="hidden md:flex items-center gap-4">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: "var(--color-light-accent)",
                    boxShadow: "0 0 0 6px var(--color-light-bg), 0 0 12px var(--color-dark-accent)",
                  }}
                />
                <p
                  className="font-mono text-sm"
                  style={{ color: "var(--color-dark-accent-green)" }}
                >
                  <span className="dark-only-inline">
                    donopot@portfolio:~$ █
                  </span>
                  <span
                    className="light-only-inline"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontStyle: "italic",
                      color: "var(--color-light-text-secondary)",
                    }}
                  >
                    ... et la suite s&apos;écrit maintenant.
                  </span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
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
      ? "var(--color-light-accent)"
      : entry.type === "education"
        ? "#4F8C8C"
        : "var(--color-dark-accent-green)";

  const typeBg =
    entry.type === "work"
      ? "rgba(184,136,77,0.08)"
      : entry.type === "education"
        ? "rgba(79,140,140,0.08)"
        : "rgba(74,222,128,0.08)";

  const dotColor =
    entry.type === "work"
      ? "var(--color-light-accent)"
      : entry.type === "education"
        ? "#4F8C8C"
        : "var(--color-dark-accent-green)";

  return (
    <div className="relative flex flex-col md:flex-row md:items-start gap-0">
      {/* ---- MOBILE LAYOUT ---- */}
      <div className="md:hidden relative pl-12">
        {/* Dot */}
        <div
          className="absolute left-4 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full z-10"
          style={{
            backgroundColor: dotColor,
            boxShadow: `0 0 0 4px var(--color-light-bg)`,
          }}
        />

        {/* Date badge */}
        <span
          className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full mb-2"
          style={{
            backgroundColor: typeBg,
            color: typeColor,
            border: `1px solid ${typeColor}20`,
          }}
        >
          {entry.date}
        </span>

        {/* Content card */}
        <div
          className="rounded-2xl p-5 border transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: "var(--color-light-card)",
            borderColor: "var(--color-light-border)",
          }}
        >
          {/* Icon + type pill */}
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
          </div>

          <h3 className="text-base font-bold mb-0.5">{entry.title}</h3>
          <p
            className="text-sm mb-2"
            style={{ color: "var(--color-light-text-secondary)" }}
          >
            {entry.subtitle}
            {entry.location && ` — ${entry.location}`}
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--color-light-text-secondary)" }}
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
      </div>

      {/* ---- DESKTOP LAYOUT — alternating left/right ---- */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start w-full gap-8">
        {/* Left side (content or empty) */}
        {isLeft ? (
          <TimelineCard entry={entry} typeColor={typeColor} typeBg={typeBg} />
        ) : (
          <div />
        )}

        {/* Center dot + date */}
        <div className="flex flex-col items-center gap-2 pt-1">
          <div
            className="h-3 w-3 rounded-full z-10 shrink-0"
            style={{
              backgroundColor: dotColor,
              boxShadow: "0 0 0 5px var(--color-light-bg)",
            }}
          />
          <span
            className="text-[10px] font-mono font-semibold whitespace-nowrap px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: typeBg,
              color: typeColor,
              border: `1px solid ${typeColor}20`,
            }}
          >
            {entry.date}
          </span>
        </div>

        {/* Right side (content or empty) */}
        {!isLeft ? (
          <TimelineCard entry={entry} typeColor={typeColor} typeBg={typeBg} />
        ) : (
          <div />
        )}
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
        backgroundColor: "var(--color-light-card)",
        borderColor: "var(--color-light-border)",
      }}
    >
      {/* Icon + type pill */}
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
            style={{ color: "var(--color-light-text-secondary)" }}
          >
            📍 {entry.location}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold mb-0.5">{entry.title}</h3>
      <p
        className="text-sm mb-3"
        style={{ color: "var(--color-light-text-secondary)" }}
      >
        {entry.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--color-light-text-secondary)" }}
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
