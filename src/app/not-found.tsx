import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable (404) — Donovan Beaulavon",
  description: "La page demandée n'existe pas.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-white px-6 text-center">
      <p className="text-8xl font-extrabold text-brand-300 sm:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-300">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Pas de panique, le reste du site est toujours là !
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 transition hover:bg-gray-50 dark:bg-gray-800"
        >
          Me contacter
        </Link>
      </div>
    </main>
  );
}
