import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projects/dnd-saas" },
  title: "DnD SaaS — Générateur de contenu JDR",
  description:
    "Plateforme SaaS de génération de contenu pour jeux de rôle (D&D) avec Next.js, FastAPI, OpenAI, Stripe. Authentification, abonnements, éditeur temps réel.",
};

export default function DndSaasPage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/development"
          className="text-sm text-brand-700 hover:text-brand-700 underline"
        >
          ← Retour aux projets
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            En production
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-brand-950 dark:text-brand-50 sm:text-5xl">
            DnD SaaS
          </h1>
          <p className="mt-3 text-lg text-brand-700 dark:text-brand-400">
            Générateur de contenu pour jeux de rôle avec IA, abonnements et éditeur en temps réel.
          </p>
        </div>

        {/* Placeholder screenshot */}
        <div className="mt-8 flex h-64 items-center justify-center rounded-xl bg-brand-200 dark:bg-brand-900 text-sm text-brand-700 sm:h-80">
          [Capture d&apos;écran — DnD SaaS]
        </div>

        {/* Grille d'infos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-brand-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-700">Rôle</h3>
            <p className="mt-1 text-sm font-medium text-brand-950 dark:text-brand-50">Développeur full-stack</p>
          </div>
          <div className="rounded-lg border border-brand-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-700">Statut</h3>
            <p className="mt-1 text-sm font-medium text-green-700">En production</p>
          </div>
          <div className="rounded-lg border border-brand-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-700">GitHub</h3>
            <a
              href="https://github.com/Donopot/DnD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
            >
              github.com/Donopot/DnD ↗
            </a>
          </div>
          <div className="rounded-lg border border-brand-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-700">Type</h3>
            <p className="mt-1 text-sm font-medium text-brand-950 dark:text-brand-50">SaaS B2C</p>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-brand-950 dark:text-brand-50">Stack technique</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Stripe",
              "OpenAI API", "Docker", "Tailwind CSS", "Vercel", "Railway",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-brand-200 dark:bg-brand-900 px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-5 text-brand-800 dark:text-brand-200 leading-relaxed">
          <h2 className="text-xl font-bold text-brand-950 dark:text-brand-50">À propos du projet</h2>
          <p>
            DnD SaaS est une plateforme web complète dédiée aux maîtres de jeu de Donjons &amp; Dragons.
            Elle permet de générer instantanément du contenu narratif — scénarios, descriptions de PNJ,
            quêtes, dialogues — grâce à l&apos;API OpenAI (GPT-4).
          </p>
          <p>
            L&apos;application combine un frontend Next.js avec authentification (NextAuth), un système
            d&apos;abonnements Stripe (freemium / premium), et un backend FastAPI qui orchestre les appels
            LLM avec mise en cache et rate-limiting. Un éditeur en temps réel permet aux utilisateurs
            de modifier et sauvegarder leurs créations.
          </p>

          <h3 className="text-lg font-semibold text-brand-950 dark:text-brand-50">Fonctionnalités clés</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Génération IA de scénarios, PNJ, quêtes et dialogues</li>
            <li>Authentification utilisateur (email, Google OAuth)</li>
            <li>Abonnements Stripe (gratuit limité, premium illimité)</li>
            <li>Éditeur de contenu en temps réel avec sauvegarde automatique</li>
            <li>Bibliothèque personnelle de créations</li>
            <li>API REST documentée pour intégrations tierces</li>
          </ul>

          <h3 className="text-lg font-semibold text-brand-950 dark:text-brand-50">Défis techniques</h3>
          <p>
            Le principal défi était la gestion des coûts d&apos;API OpenAI : mise en place
            d&apos;un système de cache intelligent (prompt + paramètres → réponse), rate-limiting
            par utilisateur, et streaming des réponses pour une expérience fluide. Le backend
            FastAPI communique avec le frontend via WebSockets pour les mises à jour en temps réel.
          </p>
        </div>

        {/* Screenshots placeholder row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex h-40 items-center justify-center rounded-lg bg-brand-200 dark:bg-brand-900 text-xs text-brand-700">
            [Éditeur de contenu]
          </div>
          <div className="flex h-40 items-center justify-center rounded-lg bg-brand-200 dark:bg-brand-900 text-xs text-brand-700">
            [Dashboard utilisateur]
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Donopot/DnD"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Voir sur GitHub ↗
          </a>
          <Link
            href="/development"
            className="rounded-full border border-brand-300 px-6 py-3 text-sm font-semibold text-brand-800 dark:text-brand-200 transition hover:bg-brand-100 dark:bg-brand-900"
          >
            ← Tous les projets
          </Link>
        </div>
      </article>
    </main>
  );
}
