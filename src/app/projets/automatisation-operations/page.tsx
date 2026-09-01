import type { Metadata } from "next";
import Link from "next/link";
import { MetricGrid } from "@/components/projects/MetricGrid";
import { projectMetrics } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/projets/automatisation-operations" },
  robots: { index: true, follow: true },
  title: "Structuration et automatisation d'opérations événementielles",
  description:
    "Expérience interne réalisée chez ChangeNOW dans le cadre d'un poste de Tool & IT Coordinator : structuration de données, automatisation de tâches répétitives et création d'outils internes.",
};

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Workflow de qualification des leads",
    problem:
      "Les leads issus de plusieurs canaux étaient traités manuellement : tri, enrichissement et assignation, une source d'erreurs et de temps perdu.",
    solution:
      "Conception d'un pipeline automatisé qui capture, enrichit et assigne les leads au bon interlocuteur, avec validation des données.",
    stack: ["n8n", "Airtable", "API REST", "Webhooks"],
    impact: "Réduction du temps de traitement manuel et fiabilisation de l'assignation.",
  },
  {
    title: "Assistant IA documentaire (RAG)",
    problem:
      "La documentation interne était dispersée entre plusieurs outils, ce qui compliquait l'accès à l'information.",
    solution:
      "Mise en place d'un assistant documentaire RAG : ingestion de la documentation dans une base vectorielle et interface de chat avec réponses sourcées.",
    stack: ["Python", "LangChain", "ChromaDB", "RAG"],
    impact: "Accès centralisé à la documentation et autonomie accrue des équipes.",
  },
  {
    title: "Dashboard de pilotage automatisé",
    problem:
      "Les indicateurs étaient suivis dans des fichiers disparates, consolidés manuellement.",
    solution:
      "Automatisation de la collecte et de la consolidation des données, avec un tableau de bord centralisé.",
    stack: ["Make", "Airtable", "Python", "API REST"],
    impact: "Reporting centralisé et vision plus fiable des indicateurs.",
  },
];

export default function AutomatisationOperationsPage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/projets"
          className="text-sm underline hover:opacity-70"
          style={{ color: "var(--accent-strong)" }}
        >
          ← Retour aux projets
        </Link>

        <header className="mt-6">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "var(--background-alt)",
              color: "var(--accent-strong)",
            }}
          >
            Expérience interne
          </span>
          <h1
            className="mt-4 font-display dark:font-mono text-3xl font-bold sm:text-5xl"
          >
            Structuration et automatisation d&apos;opérations événementielles
          </h1>
          <p
            className="mt-3 text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Expérience interne réalisée chez ChangeNOW dans le cadre de mon poste
            de Tool &amp; IT Coordinator.
          </p>
        </header>

        <div className="mt-8">
          <span
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
            style={{ color: "var(--accent-strong)" }}
          >
            Résultats clés
          </span>
          <MetricGrid metrics={projectMetrics["automatisation-operations"]} />
        </div>

        {/* 1. Contexte général */}
        <Section title="Contexte général">
          <p>
            Dans le cadre d&apos;un poste interne de Tool &amp; IT Coordinator, j&apos;ai
            accompagné les équipes opérationnelles d&apos;une organisation
            événementielle sur la structuration de leurs données et
            l&apos;automatisation de leurs processus récurrents.
          </p>
        </Section>

        {/* 2. Problèmes rencontrés */}
        <Section title="Problèmes rencontrés par les équipes">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Données dispersées entre plusieurs outils et fichiers</li>
            <li>Doubles saisies et ressaisies manuelles sources d&apos;erreurs</li>
            <li>Tâches répétitives qui mobilisaient du temps sans valeur ajoutée</li>
            <li>Processus peu documentés, difficiles à transmettre</li>
          </ul>
        </Section>

        {/* 3. Responsabilité exacte */}
        <Section title="Responsabilité exacte">
          <p>
            Identification des besoins, structuration et synchronisation des
            données, automatisation des tâches répétitives et création
            d&apos;outils internes. Cette expérience a été réalisée en tant
            qu&apos;employé, dans le périmètre de mon poste — et non en tant que
            mission freelance.
          </p>
        </Section>

        {/* 4. Types de processus */}
        <Section title="Types de processus structurés ou automatisés">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Structuration et synchronisation de données entre équipes</li>
            <li>Automatisation de tâches répétitives</li>
            <li>Création d&apos;outils internes de suivi et de pilotage</li>
            <li>Documentation et transmission des processus</li>
          </ul>
        </Section>

        {/* 5. Méthode employée */}
        <Section title="Méthode employée">
          <p>
            Une approche pragmatique : cartographier le flux de données, repérer
            les goulots d&apos;étranglement, prototyper rapidement, puis stabiliser
            et documenter la solution pour qu&apos;elle reste maintenable par
            l&apos;équipe.
          </p>
        </Section>

        {/* 6. Livrables factuels */}
        <Section title="Livrables factuels">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Processus structurés et synchronisés</li>
            <li>Automatisations opérationnelles en place</li>
            <li>Outils internes utilisés par les équipes</li>
            <li>Documentation des processus</li>
          </ul>
        </Section>

        {/* 6bis. Réalisations concrètes */}
        <section className="mt-12">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Trois réalisations concrètes
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            Exemples d&apos;automatisations déployées dans ce périmètre.
          </p>
          <div className="mt-6 space-y-6">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.title}
                className="rounded-2xl border p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <h3
                    className="font-display dark:font-mono text-lg font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    {cs.title}
                  </h3>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1.5"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      Problème
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1.5"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      Solution
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em] block mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-xs font-medium font-mono"
                        style={{
                          backgroundColor: "var(--background-alt)",
                          color: "var(--text)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-5 rounded-lg p-4"
                  style={{ backgroundColor: "var(--background-alt)" }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em] block mb-1"
                    style={{ color: "var(--accent-strong)" }}
                  >
                    Impact
                  </span>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {cs.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 7. Accompagnement et transmission */}
        <Section title="Accompagnement et transmission aux équipes">
          <p>
            Formation et accompagnement des équipes pour qu&apos;elles soient
            autonomes dans l&apos;utilisation des outils mis en place, avec une
            documentation claire et transmissible.
          </p>
        </Section>

        {/* 8. Limites liées à la confidentialité */}
        <Section title="Limites liées à la confidentialité">
          <p>
            Cette réalisation est présentée sans chiffre, sans capture interne
            et sans détail opérationnel, afin de respecter la confidentialité de
            l&apos;organisation. Le nom « ChangeNOW » est cité uniquement comme
            employeur et contexte d&apos;expérience professionnelle interne.
          </p>
        </Section>

        {/* 9. CTA */}
        <Cta
          text="Un processus à automatiser ou des données à structurer ?"
          href="/contact"
          label="Parler de mon besoin"
        />
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="text-xl font-bold"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      <div
        className="mt-3 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </div>
    </section>
  );
}

function Cta({
  text,
  href,
  label,
}: {
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div
      className="mt-12 rounded-2xl border p-8 text-center"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <p className="text-lg font-semibold">{text}</p>
      <Link
        href={href}
        className="mt-5 inline-block rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
        style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
      >
        {label}
      </Link>
    </div>
  );
}
