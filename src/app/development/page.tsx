import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/development" },
  robots: { index: false, follow: true },
  title: "Développement Full-stack & IA agentique",
  description:
    "Parcours Développement Full-stack & IA agentique : React, Next.js, FastAPI, Python, agents IA, RAG. 3 projets open-source avec liens GitHub.",
};

interface Project {
  title: string;
  summary: string;
  description: string;
  stack: string[];
  status: string;
  github: string;
  link?: string;
  route: string;
}

const projects: Project[] = [
  {
    title: "DnD VTT — Table virtuelle",
    summary:
      "Outil web multi-utilisateurs en temps réel pour jouer à Donjons & Dragons à distance.",
    description:
      "Table virtuelle auto-hébergée : frontend React/Vite, backend FastAPI, synchronisation temps réel par WebSocket, gestion de campagnes, carte, tokens, fog of war et combat.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Docker"],
    status: "Beta privée",
    github: "https://github.com/Donopot/DnD",
    route: "/projets/dnd-vtt",
  },
  {
    title: "RAG documentaire multi-sources",
    summary:
      "Contribution à un moteur de recherche documentaire combinant recherche lexicale, vectorielle et reranking.",
    description:
      "Contribution sur un fork open source : recherche hybride BM25 + dense, fusion RRF, reranking, cache Streamlit et amélioration de l'interface conversationnelle.",
    stack: ["Python", "LangChain", "ChromaDB", "Streamlit", "Ollama", "BM25"],
    status: "Contribution open source",
    github: "https://github.com/Donopot/Epstein_Files_RAG",
    route: "/projets/rag-documentaire",
  },
  {
    title: "Analyse et prévision de la consommation énergétique",
    summary:
      "Projet d'étude DataScientest / Mines PSL : exploration de données énergétiques et comparaison de modèles de prévision.",
    description:
      "Notebooks Jupyter : analyse de corrélations température/consommation, modèles de régression et séries temporelles (SARIMA, XGBoost) sur données RTE Eco2mix et Visual Crossing.",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SARIMA", "Jupyter"],
    status: "Projet d'étude",
    github: "https://github.com/Donopot/DA",
    route: "/projets/prevision-energetique",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "Backend", items: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "WebSockets"] },
  { category: "IA & ML", items: ["LangChain", "OpenAI API", "RAG", "Embeddings", "ChromaDB"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "Caddy", "Nginx", "CI/CD"] },
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
          <h1 className="mt-4 text-3xl font-extrabold text-brand-950 dark:text-brand-50 sm:text-5xl">
            Full-stack & IA agentique
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-700 dark:text-brand-400">
            Je construis des applications web modernes et des systèmes IA autonomes,
            du frontend React au backend Python, du prototype au déploiement.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-950 dark:text-brand-50">Mon approche</h2>
          <div className="mt-4 space-y-4 text-brand-700 dark:text-brand-400 leading-relaxed">
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

      {/* Projets */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-brand-950 dark:text-brand-50 sm:text-3xl">
            Projets open-source
          </h2>
          <p className="mt-2 text-center text-brand-700 dark:text-brand-400">
            Code public, démos disponibles, contributions bienvenues
          </p>
          <div className="mt-12 space-y-10">
            {projects.map((proj) => (
              <article
                key={proj.title}
                className="rounded-2xl border border-brand-200 bg-brand-50 dark:bg-brand-950 p-6 shadow-sm sm:p-10"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-950 dark:text-brand-50 sm:text-2xl">
                      {proj.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-700">{proj.summary}</p>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--background-alt)",
                      color: "var(--accent-strong)",
                    }}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="mt-4 text-sm text-brand-800 dark:text-brand-200 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Stack
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-200 dark:bg-brand-900 px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-200"
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
                    className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                  <Link
                    href={proj.route}
                    className="rounded-full border border-brand-300 px-4 py-2 text-xs font-semibold text-brand-800 dark:text-brand-200 transition hover:bg-brand-100 dark:bg-brand-900"
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
      <section className="bg-brand-600 px-6 py-16 text-center text-brand-900">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Un projet de développement ?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-brand-100">
          MVP, SaaS, système agentique — je vous accompagne de l&apos;idée au lancement.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-brand-50 dark:bg-brand-950 px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-200 dark:bg-brand-900"
          >
            Me contacter
          </Link>
          <Link
            href="/cv/development"
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
