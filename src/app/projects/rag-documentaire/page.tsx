import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAG Documentaire — Epstein Files — Donovan Beaulavon",
  description:
    "Système RAG complet pour explorer des milliers de pages de documents juridiques (Epstein Files) avec réponses sourcées. Python, FastAPI, ChromaDB, Next.js.",
};

export default function RagDocumentairePage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/development"
          className="text-sm text-gray-500 hover:text-brand-600 underline"
        >
          ← Retour aux projets
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            En développement
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Epstein Files RAG
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Moteur de recherche documentaire intelligent pour explorer des milliers de pages juridiques.
          </p>
        </div>

        {/* Placeholder screenshot */}
        <div className="mt-8 flex h-64 items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400 sm:h-80">
          [Capture d&apos;écran — Epstein Files RAG]
        </div>

        {/* Grille d'infos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Rôle</h3>
            <p className="mt-1 text-sm font-medium text-gray-900">Développeur full-stack</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Statut</h3>
            <p className="mt-1 text-sm font-medium text-yellow-700">En développement</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">GitHub</h3>
            <a
              href="https://github.com/Donopot/Epstein_Files_RAG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-medium text-brand-600 hover:text-brand-800"
            >
              github.com/Donopot/Epstein_Files_RAG ↗
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Type</h3>
            <p className="mt-1 text-sm font-medium text-gray-900">Système RAG</p>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Stack technique</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Python", "FastAPI", "Next.js", "ChromaDB", "LangChain",
              "OpenAI", "PyMuPDF", "Docker", "TypeScript", "Tailwind CSS",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900">À propos du projet</h2>
          <p>
            Epstein Files RAG est un système de recherche documentaire intelligent qui permet
            d&apos;explorer des milliers de pages de documents juridiques (les fameux &ldquo;Epstein
            Files&rdquo;) via une interface de chat en langage naturel.
          </p>
          <p>
            Le système utilise le paradigme RAG (Retrieval-Augmented Generation) : les documents
            sont découpés en chunks, convertis en embeddings vectoriels et stockés dans ChromaDB.
            Lorsqu&apos;un utilisateur pose une question, le système retrouve les passages pertinents
            et les fournit comme contexte à GPT-4, qui génère une réponse précise avec citations.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">Fonctionnalités clés</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Ingestion de PDF (OCR, chunking intelligent, embeddings OpenAI)</li>
            <li>Recherche sémantique dans des dizaines de milliers de pages</li>
            <li>Interface de chat avec réponses sourcées et citations</li>
            <li>Temps de réponse &lt; 2 secondes (index optimisé ChromaDB)</li>
            <li>Pipeline de ré-ingestion automatique pour nouveaux documents</li>
            <li>API REST documentée via FastAPI</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900">Défis techniques</h3>
          <p>
            Le volume de documents (des milliers de pages PDF) a nécessité un pipeline d&apos;ingestion
            robuste : extraction de texte avec PyMuPDF (gestion des tableaux, colonnes), chunking
            sémantique avec LangChain, génération d&apos;embeddings par lots avec rate-limiting.
            L&apos;optimisation de la recherche hybride (dense + sparse) a permis de maintenir un temps
            de réponse inférieur à 2 secondes même avec plus de 100 000 chunks.
          </p>
        </div>

        {/* Screenshots placeholder row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
            [Interface de chat RAG]
          </div>
          <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
            [Pipeline d&apos;ingestion]
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Donopot/Epstein_Files_RAG"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Voir sur GitHub ↗
          </a>
          <Link
            href="/development"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            ← Tous les projets
          </Link>
        </div>
      </article>
    </main>
  );
}
