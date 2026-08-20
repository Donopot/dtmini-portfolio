"use client";

import Link from "next/link";
import { useState } from "react";

// Must match TYPE_LABELS in src/app/api/contact/route.ts exactly.
const REQUEST_TYPES = [
  { value: "automatisation", label: "Automatisation de processus" },
  { value: "data", label: "Structuration & données" },
  { value: "developpement", label: "Développement (SaaS, app web)" },
  { value: "ia", label: "Projet IA (RAG, agents, LLM)" },
  { value: "autre", label: "Autre" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (client side) — hidden field, bots fill it
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      type: data.get("type"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(json.error || "Une erreur est survenue. Merci de réessayer.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError(
        "Impossible de contacter le serveur. Merci de réessayer ou d'utiliser l'email de secours."
      );
      setStatus("error");
    }
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border border-brand-300 px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-brand-950 dark:text-brand-50 sm:text-4xl">
            Me contacter
          </h1>
          <p className="mt-3 text-brand-700 dark:text-brand-400">
            Vous avez un projet d&apos;automatisation, de développement ou d&apos;IA ?
            Remplissez ce formulaire, je vous réponds sous 48h.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl bg-brand-50 dark:bg-brand-950 p-8 shadow-sm"
        >
          {/* Honeypot */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-800 dark:text-brand-200">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              className={inputClass}
              placeholder="Votre nom"
            />
          </div>

          {/* Entreprise */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-brand-800 dark:text-brand-200">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className={inputClass}
              placeholder="Nom de votre entreprise (optionnel)"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-800 dark:text-brand-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              placeholder="vous@entreprise.com"
            />
          </div>

          {/* Type de demande */}
          <div>
            <label htmlFor="type" className="block text-sm font-semibold text-brand-800 dark:text-brand-200">
              Type de demande <span className="text-red-500">*</span>
            </label>
            <select id="type" name="type" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                — Sélectionnez —
              </option>
              {REQUEST_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-800 dark:text-brand-200">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              className={`${inputClass} resize-y`}
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
              className="mt-1 h-4 w-4 rounded border-brand-300 text-brand-700 accent-brand-600"
            />
            <label htmlFor="consent" className="text-xs text-brand-700 dark:text-brand-400 leading-relaxed">
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
              disabled={status === "submitting"}
              className="w-full rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-brand-900 shadow-lg transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p role="status" className="mt-3 text-center text-sm font-medium text-green-700">
                Message envoyé. Je vous réponds sous 48h ouvrées.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-3 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}
            {status !== "error" && (
              <p className="mt-2 text-center text-xs text-brand-700">
                Réponse sous 48h ouvrées. Aucun spam.
              </p>
            )}
          </div>
        </form>

        {/* Alternative */}
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-700">
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
          <Link href="/" className="text-sm text-brand-700 hover:text-brand-700 underline">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
