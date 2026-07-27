import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développement Full-stack & IA agentique — Donovan Beaulavon",
  description:
    "Parcours Développement Full-stack & IA agentique : React, Next.js, FastAPI, Python, agents IA, RAG. 3 projets open-source avec liens GitHub.",
};

interface Project {
  title: string;
  summary: string;
  description: string;
  stack: string[];
  status: "En production" | "En développement";
  github: string;
  link?: string;
  route: string;
}

const projects: Project[] = [
  {
    title: "DnD SaaS — Générateur de contenu",
    summary:
      "Plateforme SaaS de génération de contenu pour jeux de rôle, avec authentification, abonnements Stripe et éditeur en temps réel.",
    description:
      "Application full-stack combinant Next.js, FastAPI et OpenAI pour générer des scénarios, PNJs et quêtes personnalisés. Le backend gère l'orchestration des appels LLM avec cache et rate-limiting, le frontend offre une expérience d'édition fluide avec sauvegarde automatique.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Stripe", "OpenAI API", "Docker"],
    status: "En production",
    github: "https://github.com/Donopot/DnD",
    route: "/projects/dnd-saas",
  },
  {
    title: "Epstein Files RAG — Moteur de recherche documentaire",
    summary:
      "Système RAG complet pour explorer des milliers de pages de documents juridiques avec réponses sourcées et interface de chat.",
    description:
      "Pipeline d'ingestion de documents PDF (OCR, chunking, embeddings), base vectorielle ChromaDB, API FastAPI de recherche sémantique, et interface Next.js avec citations précises. Le système gère des dizaines de milliers de pages et répond en moins de 2 secondes.",
    stack: ["Python", "FastAPI", "Next.js", "ChromaDB", "LangChain", "OpenAI", "PyMuPDF"],
    status: "En développement",
    github: "https://github.com/Donopot/Epstein_Files_RAG",
    route: "/projects/rag-documentaire",
  },
  {
    title: "Prévision énergétique — Machine Learning",
    summary:
      "Outil de prévision de consommation et production énergétique avec analyse de séries temporelles et dashboard interactif.",
    description:
      "Pipeline de data engineering nettoyant et agrégeant des données énergétiques multi-sources, modèles de prévision (XGBoost, Prophet), et dashboard Streamlit avec visualisations interactives. Déploiement conteneurisé avec monitoring.",
    stack: ["Python", "Pandas", "XGBoost", "Prophet", "Streamlit", "Docker", "FastAPI"],
    status: "En développement",
    github: "https://github.com/Donopot/DA",
    route: "/projects/prevision-energetique",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "Backend", items: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "WebSockets"] },
  { category: "IA & ML", items: ["LangChain", "OpenAI API", "RAG", "Embeddings", "ChromaDB"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "CI/CD"] },
];

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Parcours 2
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Full-stack & IA agentique
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Je construis des applications web modernes et des systèmes IA autonomes,
            du frontend React au backend Python, du prototype au déploiement.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mon approche</h2>
          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Développeur full-stack orienté <strong>produit</strong>, je construis des
              applications de bout en bout : design de l&apos;API, modélisation de la base
              de données, développement frontend et intégration IA.
            </p>
            <p>
              Ma spécialité : les <strong>systèmes agentiques</strong> et le{" "}
              <strong>RAG</strong> (Retrieval-Augmented Generation). J&apos;ai conçu et
              déployé des chatbots documentaires, des pipelines d&apos;ingestion de données
              et des assistants IA autonomes capables de raisonner sur des corpus complexes.
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

      {/* Projets */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Projets open-source
          </h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Code public, démos disponibles, contributions bienvenues
          </p>
          <div className="mt-12 space-y-10">
            {projects.map((proj) => (
              <article
                key={proj.title}
                className="rounded-2xl border border-gray-200 bg-white dark:bg-gray-900 p-6 shadow-sm sm:p-10"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                      {proj.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{proj.summary}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      proj.status === "En production"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {proj.description}
                </p>

                {/* Placeholder image */}
                <div className="mt-6 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 h-48 text-sm text-gray-500">
                  [Capture d&apos;écran — {proj.title}]
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-700"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                  <Link
                    href={proj.route}
                    className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-50 dark:bg-gray-800"
                  >
                    Voir le détail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Un projet de développement ?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-brand-100">
          MVP, SaaS, système agentique — je vous accompagne de l&apos;idée au lancement.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white dark:bg-gray-900 px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-gray-100 dark:bg-gray-800"
          >
            Me contacter
          </Link>
          <Link
            href="/cv/development"
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
