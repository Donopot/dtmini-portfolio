import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Donovan Beaulavon",
  description:
    "Contactez Donovan Beaulavon pour vos projets d'automatisation, développement full-stack ou IA. Formulaire avec consentement RGPD.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Me contacter
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Vous avez un projet d&apos;automatisation, de développement ou d&apos;IA ?
            Remplissez ce formulaire, je vous réponds sous 48h.
          </p>
        </div>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="mt-10 space-y-6 rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-sm"
        >
          {/* Honeypot */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Votre nom"
            />
          </div>

          {/* Entreprise */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Nom de votre entreprise (optionnel)"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="vous@entreprise.com"
            />
          </div>

          {/* Type de demande */}
          <div>
            <label htmlFor="type" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Type de demande <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              <option value="">— Sélectionnez —</option>
              <option value="recrutement">Recrutement (CDI / Freelance)</option>
              <option value="automatisation">Automatisation de processus</option>
              <option value="developpement">Développement (SaaS, app web)</option>
              <option value="projet-ia">Projet IA (RAG, agents, LLM)</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={20}
              rows={5}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 resize-y"
              placeholder="Décrivez votre projet ou votre besoin…"
            />
          </div>

          {/* Consentement RGPD */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-700 accent-brand-600"
            />
            <label htmlFor="consent" className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              J&apos;accepte que mes données personnelles soient collectées et traitées
              conformément à la{" "}
              <Link
                href="/legal/privacy"
                className="text-brand-700 underline hover:text-brand-800"
              >
                politique de confidentialité
              </Link>
              . Je peux demander la suppression de mes données à tout moment.{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 cursor-pointer"
            >
              Envoyer le message
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">
              Réponse sous 48h ouvrées. Aucun spam.
            </p>
          </div>
        </form>

        {/* Alternative */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Vous pouvez aussi me contacter directement par email :{" "}
            <a
              href="mailto:donovan@dtmini.com"
              className="font-medium text-brand-700 hover:text-brand-800 underline"
            >
              donovan@dtmini.com
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-brand-700 underline">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
