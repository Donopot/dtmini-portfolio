import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/automation" },
  robots: { index: false, follow: true },
  title: "Automatisation & IA métier",
  description:
    "Parcours Automatisation & IA métier : workflows n8n/Zapier, intégrations API, chatbots, RAG documentaire.",
};

interface CaseStudy {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Workflow de qualification des leads",
    subtitle: "ChangeNOW — expérience interne",
    problem:
      "Les leads issus de plusieurs canaux étaient traités manuellement : tri, enrichissement et assignation, une source d'erreurs et de temps perdu.",
    solution:
      "Conception d'un pipeline automatisé qui capture, enrichit et assigne les leads au bon interlocuteur, avec validation des données.",
    stack: ["n8n", "Airtable", "API REST", "Webhooks"],
    impact:
      "Réduction du temps de traitement manuel et fiabilisation de l'assignation.",
  },
  {
    title: "Assistant IA documentaire (RAG)",
    subtitle: "ChangeNOW — expérience interne",
    problem:
      "La documentation interne était dispersée entre plusieurs outils, ce qui compliquait l'accès à l'information.",
    solution:
      "Mise en place d'un assistant documentaire RAG : ingestion de la documentation dans une base vectorielle et interface de chat avec réponses sourcées.",
    stack: ["Python", "LangChain", "ChromaDB", "RAG"],
    impact:
      "Accès centralisé à la documentation et autonomie accrue des équipes.",
  },
  {
    title: "Dashboard de pilotage automatisé",
    subtitle: "ChangeNOW — expérience interne",
    problem:
      "Les indicateurs étaient suivis dans des fichiers disparates, consolidés manuellement.",
    solution:
      "Automatisation de la collecte et de la consolidation des données, avec un tableau de bord centralisé.",
    stack: ["Make", "Airtable", "Python", "API REST"],
    impact:
      "Reporting centralisé et vision plus fiable des indicateurs.",
  },
];

const skills = [
  { category: "Automatisation", items: ["n8n", "Zapier", "Make (Integromat)", "Airtable Automations"] },
  { category: "IA & LLM", items: ["OpenAI API", "LangChain", "RAG", "ChromaDB / Pinecone", "Prompt Engineering"] },
  { category: "Intégrations", items: ["API REST", "Webhooks", "Slack API", "HubSpot", "Notion API"] },
  { category: "Low-code / No-code", items: ["Airtable", "Notion", "Softr", "Glide", "Google Workspace"] },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Parcours 1
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-brand-950 dark:text-brand-50 sm:text-5xl">
            Automatisation & IA métier
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-700 dark:text-brand-400">
            Je conçois des workflows intelligents qui connectent vos outils, exploitent
            l&apos;IA générative et libèrent vos équipes des tâches répétitives.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-950 dark:text-brand-50">Ma philosophie</h2>
          <div className="mt-4 space-y-4 text-brand-700 dark:text-brand-400 leading-relaxed">
            <p>
              L&apos;automatisation n&apos;est pas une fin en soi — c&apos;est un levier.
              Mon approche consiste à <strong>identifier les goulots d&apos;étranglement</strong>,
              à <strong>cartographier les flux de données</strong>, puis à construire des
              solutions sur mesure, du prototype rapide au déploiement robuste.
            </p>
            <p>
              Chez ChangeNOW, dans le cadre de mon poste de Tool &amp; IT
              Coordinator, j&apos;ai accompagné les équipes sur la structuration des
              données, l&apos;automatisation de tâches répétitives et la création
              d&apos;outils internes. Chaque projet commence par une question simple :{" "}
              <em>&ldquo;combien de temps cette tâche vole-t-elle à votre équipe
              chaque semaine ?&rdquo;</em>
            </p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="bg-brand-100 dark:bg-brand-900 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-brand-950 dark:text-brand-50">Compétences</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-brand-200 bg-brand-50 dark:bg-brand-950 p-6"
              >
                <h3 className="font-semibold text-brand-700">{group.category}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-brand-950 dark:text-brand-50 sm:text-3xl">
            Études de cas
          </h2>
          <p className="mt-2 text-center text-brand-700 dark:text-brand-400">
            Trois projets concrets déployés chez ChangeNOW
          </p>
          <div className="mt-12 space-y-12">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.title}
                className="rounded-2xl border border-brand-200 bg-brand-50 dark:bg-brand-950 p-6 shadow-sm sm:p-10"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      Étude de cas #{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-brand-950 dark:text-brand-50 sm:text-2xl">
                      {cs.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-700">{cs.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-red-600">
                      Problème
                    </h4>
                    <p className="mt-1 text-sm text-brand-800 dark:text-brand-200 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-green-600">
                      Solution
                    </h4>
                    <p className="mt-1 text-sm text-brand-800 dark:text-brand-200 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                    Stack technique
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-200 dark:bg-brand-900 px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-brand-50 p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                    Impact mesurable
                  </h4>
                  <p className="mt-1 text-sm text-brand-900 font-medium">{cs.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 px-6 py-16 text-center text-brand-900">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Un processus à automatiser ?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-brand-100">
          Discutons de vos besoins. Premier échange gratuit.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brand-50 dark:bg-brand-950 px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-200 dark:bg-brand-900"
          >
            Me contacter
          </Link>
          <Link
            href="/cv/automation"
            className="rounded-full border-2 border-brand-900 px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-600"
          >
            Voir mon CV
          </Link>
        </div>
      </section>

      <div className="text-center py-8">
        <Link href="/" className="text-sm text-brand-700 hover:text-brand-700 underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
