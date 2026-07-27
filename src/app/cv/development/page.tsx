import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV Développeur Full-stack & IA — Donovan Beaulavon",
  description:
    "Aperçu du CV de Donovan Beaulavon orienté Développement Full-stack & IA agentique. React, Next.js, FastAPI, Python, RAG, systèmes agentiques.",
};

export default function CvDevelopmentPage() {
  return (
    <main className="min-h-screen bg-brand-100 dark:bg-brand-900">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* CV Header */}
        <div className="rounded-2xl bg-brand-50 dark:bg-brand-950 p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl font-extrabold text-brand-950 dark:text-brand-50">Donovan Beaulavon</h1>
          <p className="mt-2 text-lg font-semibold text-brand-700">
            Développeur Full-stack & IA agentique
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-brand-700 dark:text-brand-400">
            <span>📍 Paris, France</span>
            <span>📧 donovan@dtmini.com</span>
            <span>🔗 dtmini.com</span>
            <span>💻 github.com/Donopot</span>
          </div>

          <hr className="my-6 border-brand-200" />

          {/* Résumé */}
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Résumé
            </h2>
            <p className="mt-2 text-sm text-brand-800 dark:text-brand-200 leading-relaxed">
              Développeur full-stack passionné par les systèmes agentiques et le RAG.
              3 ans d&apos;expérience en automatisation et développement chez ChangeNOW.
              Stack : React, Next.js, TypeScript, FastAPI, Python. 3 projets open-source
              sur GitHub, spécialisé en intégration IA générative dans des applications web.
            </p>
          </section>

          {/* Compétences */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Compétences
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { cat: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS, shadcn/ui" },
                { cat: "Backend", items: "FastAPI, Python, PostgreSQL, REST APIs, WebSockets" },
                { cat: "IA & ML", items: "LangChain, OpenAI API, RAG, ChromaDB, Embeddings" },
                { cat: "DevOps", items: "Docker, GitHub Actions, Vercel, Railway, CI/CD" },
              ].map((s) => (
                <div key={s.cat}>
                  <h3 className="text-sm font-semibold text-brand-700">{s.cat}</h3>
                  <p className="text-xs text-brand-700 dark:text-brand-400">{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projets */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Projets open-source
            </h2>
            <div className="mt-3 space-y-5">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-brand-950 dark:text-brand-50">
                    DnD SaaS — Générateur de contenu JDR
                  </h3>
                  <span className="text-xs rounded-full bg-green-100 px-2 py-0.5 font-medium text-green-700">
                    Production
                  </span>
                </div>
                <p className="text-xs text-brand-700 dark:text-brand-400">
                  Next.js · FastAPI · PostgreSQL · Stripe · OpenAI
                </p>
                <p className="mt-1 text-xs text-brand-800 dark:text-brand-200">
                  Plateforme SaaS complète : authentification, abonnements, génération IA,
                  éditeur temps réel.
                </p>
                <a
                  href="https://github.com/Donopot/DnD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs text-brand-700 hover:text-brand-800"
                >
                  github.com/Donopot/DnD ↗
                </a>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-brand-950 dark:text-brand-50">
                    Epstein Files RAG — Recherche documentaire IA
                  </h3>
                  <span className="text-xs rounded-full bg-yellow-100 px-2 py-0.5 font-medium text-yellow-700">
                    En cours
                  </span>
                </div>
                <p className="text-xs text-brand-700 dark:text-brand-400">
                  Python · FastAPI · ChromaDB · LangChain · Next.js
                </p>
                <p className="mt-1 text-xs text-brand-800 dark:text-brand-200">
                  Système RAG complet : ingestion PDF, embeddings, chat sourcé, &lt;2s réponse.
                </p>
                <a
                  href="https://github.com/Donopot/Epstein_Files_RAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs text-brand-700 hover:text-brand-800"
                >
                  github.com/Donopot/Epstein_Files_RAG ↗
                </a>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-brand-950 dark:text-brand-50">
                    Prévision énergétique — ML
                  </h3>
                  <span className="text-xs rounded-full bg-yellow-100 px-2 py-0.5 font-medium text-yellow-700">
                    En cours
                  </span>
                </div>
                <p className="text-xs text-brand-700 dark:text-brand-400">
                  Python · XGBoost · Prophet · Streamlit · Docker
                </p>
                <p className="mt-1 text-xs text-brand-800 dark:text-brand-200">
                  Pipeline ETL, modèles de prévision, dashboard interactif.
                </p>
                <a
                  href="https://github.com/Donopot/DA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs text-brand-700 hover:text-brand-800"
                >
                  github.com/Donopot/DA ↗
                </a>
              </div>
            </div>
          </section>

          {/* Expérience */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Expérience
            </h2>
            <div className="mt-3 space-y-5">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-brand-950 dark:text-brand-50">
                    Chargé de projet IA & Automatisation
                  </h3>
                  <span className="text-xs text-brand-700">2023 – 2025</span>
                </div>
                <p className="text-sm text-brand-700 dark:text-brand-400">ChangeNOW · CDD</p>
                <ul className="mt-1 list-disc pl-4 text-xs text-brand-800 dark:text-brand-200 space-y-0.5">
                  <li>Développement d&apos;un assistant RAG (LangChain + ChromaDB + FastAPI)</li>
                  <li>Scripts Python pour automatisation et intégrations API</li>
                  <li>Formation des équipes aux outils tech</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-semibold text-brand-950 dark:text-brand-50">
                    Alternance Data & Automatisation
                  </h3>
                  <span className="text-xs text-brand-700">2021 – 2023</span>
                </div>
                <p className="text-sm text-brand-700 dark:text-brand-400">ChangeNOW · Alternance</p>
                <ul className="mt-1 list-disc pl-4 text-xs text-brand-800 dark:text-brand-200 space-y-0.5">
                  <li>Python pour data cleaning et automatisation</li>
                  <li>Dashboards et intégrations API</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Formation
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-brand-950 dark:text-brand-50">Master Management & Data</h3>
                  <span className="text-xs text-brand-700">2021 – 2023</span>
                </div>
                <p className="text-xs text-brand-700">École de commerce & management</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-brand-950 dark:text-brand-50">Bachelor Commerce & Entrepreneuriat</h3>
                  <span className="text-xs text-brand-700">2019 – 2021</span>
                </div>
                <p className="text-xs text-brand-700">École de commerce</p>
              </div>
            </div>
          </section>

          {/* Langues */}
          <section className="mt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-brand-900 dark:text-brand-100">
              Langues
            </h2>
            <p className="mt-2 text-sm text-brand-800 dark:text-brand-200">
              🇫🇷 Français (natif) · 🇬🇧 Anglais (professionnel)
            </p>
          </section>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/development"
            className="rounded-full border border-brand-300 bg-brand-50 dark:bg-brand-950 px-6 py-2 text-sm font-medium text-brand-800 dark:text-brand-200 transition hover:bg-brand-100 dark:bg-brand-900"
          >
            ← Parcours Développement
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
