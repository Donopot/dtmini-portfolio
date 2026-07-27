import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatisation & IA métier — Donovan Beaulavon",
  description:
    "Parcours Automatisation & IA métier : workflows n8n/Zapier, intégrations API, chatbots, RAG documentaire. 3 études de cas détaillées chez ChangeNOW.",
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
    subtitle: "ChangeNOW — Équipe Partenariats",
    problem:
      "L'équipe partenariats traitait manuellement des centaines de leads issus de multiples canaux (formulaires, emails, LinkedIn). Le tri, l'enrichissement et l'assignation prenaient ~15h/semaine.",
    solution:
      "Conception d'un pipeline automatisé n8n + Airtable + API ChatGPT : le lead est capturé, enrichi (entreprise, secteur, taille), scoré automatiquement, puis assigné au bon chargé de partenariat avec un template d'email personnalisé.",
    stack: ["n8n", "Airtable", "OpenAI API", "Slack API", "Google Sheets"],
    impact:
      "Temps de qualification réduit de 15h à 2h/semaine. Taux de réponse aux leads +35% grâce aux emails personnalisés générés par IA.",
  },
  {
    title: "Assistant IA documentaire (RAG)",
    subtitle: "ChangeNOW — Équipe Opérations",
    problem:
      "La documentation interne (procédures, guides, historiques) était dispersée sur Notion, Google Drive et Slack. Les nouveaux arrivants mettaient 2 semaines à être autonomes.",
    solution:
      "Mise en place d'un chatbot RAG (Retrieval-Augmented Generation) : ingestion de toute la documentation dans une base vectorielle, interface de chat connectée à GPT-4, réponses sourcées avec liens vers les documents originaux.",
    stack: ["Python", "LangChain", "ChromaDB", "OpenAI", "FastAPI", "Streamlit"],
    impact:
      "Autonomie des nouveaux arrivants en 3 jours (au lieu de 2 semaines). Plus de 200 questions traitées par mois sans solliciter les équipes.",
  },
  {
    title: "Dashboard de pilotage automatisé",
    subtitle: "ChangeNOW — Direction",
    problem:
      "Les KPIs étaient suivis dans des fichiers Excel disparates, consolidés manuellement chaque semaine pour le CODIR. Aucune vue en temps réel.",
    solution:
      "Automatisation de la collecte de données depuis Airtable, HubSpot et Stripe via Make + scripts Python. Dashboard Airtable Interfaces avec graphiques, alertes automatiques Slack en cas d'anomalies.",
    stack: ["Make (Integromat)", "Airtable", "Python", "Slack API", "Stripe API", "HubSpot API"],
    impact:
      "Reporting CODIR disponible en temps réel. Détection proactive de 3 anomalies critiques évitées. Gain de 8h/semaine pour l'équipe finance.",
  },
];

const skills = [
  { category: "Automatisation", items: ["n8n", "Zapier", "Make (Integromat)", "Airtable Automations"] },
  { category: "IA & LLM", items: ["OpenAI API", "LangChain", "RAG", "ChromaDB / Pinecone", "Prompt Engineering"] },
  { category: "Intégrations", items: ["API REST", "Webhooks", "Slack API", "HubSpot", "Stripe", "Notion API"] },
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
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Automatisation & IA métier
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Je conçois des workflows intelligents qui connectent vos outils, exploitent
            l&apos;IA générative et libèrent vos équipes des tâches répétitives.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ma philosophie</h2>
          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              L&apos;automatisation n&apos;est pas une fin en soi — c&apos;est un levier.
              Mon approche consiste à <strong>identifier les goulots d&apos;étranglement</strong>,
              à <strong>cartographier les flux de données</strong>, puis à construire des
              solutions sur mesure, du prototype rapide au déploiement robuste.
            </p>
            <p>
              Chez ChangeNOW, j&apos;ai automatisé plus de <strong>50 workflows</strong>
              couvrant les ventes, les opérations, la finance et les RH. Chaque projet
              commence par une question simple : <em>&ldquo;combien de temps cette tâche
              vole-t-elle à votre équipe chaque semaine ?&rdquo;</em>
            </p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">Compétences</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-gray-200 bg-white dark:bg-gray-900 p-6"
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
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Études de cas
          </h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Trois projets concrets déployés chez ChangeNOW
          </p>
          <div className="mt-12 space-y-12">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.title}
                className="rounded-2xl border border-gray-200 bg-white dark:bg-gray-900 p-6 shadow-sm sm:p-10"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      Étude de cas #{i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                      {cs.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{cs.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-red-600">
                      Problème
                    </h4>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-green-600">
                      Solution
                    </h4>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Stack technique
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
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
      <section className="bg-brand-700 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Un processus à automatiser ?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-brand-100">
          Discutons de vos besoins. Premier échange gratuit.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white dark:bg-gray-900 px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-gray-100 dark:bg-gray-800"
          >
            Me contacter
          </Link>
          <Link
            href="/cv/automation"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Voir mon CV
          </Link>
        </div>
      </section>

      <div className="text-center py-8">
        <Link href="/" className="text-sm text-gray-500 hover:text-brand-700 underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
