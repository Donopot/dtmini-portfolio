import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prévision énergétique — Machine Learning — Donovan Beaulavon",
  description:
    "Outil de prévision de consommation et production énergétique avec analyse de séries temporelles (XGBoost, Prophet) et dashboard Streamlit.",
};

export default function PrevisionEnergetiquePage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/development"
          className="text-sm text-gray-500 hover:text-brand-700 underline"
        >
          ← Retour aux projets
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            En développement
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Prévision énergétique
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Analyse de séries temporelles et machine learning pour prédire consommation et production d&apos;énergie.
          </p>
        </div>

        {/* Placeholder screenshot */}
        <div className="mt-8 flex h-64 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 sm:h-80">
          [Capture d&apos;écran — Prévision énergétique]
        </div>

        {/* Grille d'infos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Rôle</h3>
            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">Data Scientist / ML Engineer</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Statut</h3>
            <p className="mt-1 text-sm font-medium text-yellow-700">En développement</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">GitHub</h3>
            <a
              href="https://github.com/Donopot/DA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
            >
              github.com/Donopot/DA ↗
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Type</h3>
            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">Data Science / ML</p>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Stack technique</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Python", "Pandas", "XGBoost", "Prophet", "Streamlit",
              "Docker", "FastAPI", "Scikit-learn", "Plotly", "PostgreSQL",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-5 text-gray-700 dark:text-gray-200 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">À propos du projet</h2>
          <p>
            Le projet Prévision énergétique est un outil de data science appliqué au secteur
            de l&apos;énergie. Il ingère des données de consommation et de production énergétique
            (multi-sources, multi-formats), les nettoie, les agrège, puis entraîne des modèles
            de machine learning pour prédire les tendances futures.
          </p>
          <p>
            Le pipeline complet inclut : ingestion de données brutes (CSV, APIs, bases),
            nettoyage et feature engineering avec Pandas, modélisation avec XGBoost pour les
            prévisions court-terme et Prophet pour l&apos;analyse de saisonnalité, dashboard
            interactif Streamlit avec visualisations Plotly.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fonctionnalités clés</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Pipeline ETL automatisé (ingestion, nettoyage, agrégation)</li>
            <li>Prévisions court-terme (24-48h) avec XGBoost</li>
            <li>Analyse de tendances et saisonnalité avec Prophet</li>
            <li>Dashboard Streamlit interactif avec filtres temporels</li>
            <li>API FastAPI pour servir les prédictions en temps réel</li>
            <li>Conteneurisation Docker pour déploiement reproductible</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Défis techniques</h3>
          <p>
            La qualité des données était le défi principal : valeurs manquantes, formats
            hétérogènes, granularités variables. Le pipeline de nettoyage utilise des stratégies
            adaptatives (interpolation, forward-fill, imputation par modèle). L&apos;optimisation
            des hyperparamètres XGBoost via GridSearchCV a permis d&apos;atteindre un MAPE
            inférieur à 5% sur les prévisions 24h.
          </p>
        </div>

        {/* Screenshots placeholder row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-xs text-gray-500">
            [Dashboard Streamlit]
          </div>
          <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-xs text-gray-500">
            [Courbes de prévision]
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Donopot/DA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Voir sur GitHub ↗
          </a>
          <Link
            href="/development"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-50 dark:bg-gray-800"
          >
            ← Tous les projets
          </Link>
        </div>
      </article>
    </main>
  );
}
