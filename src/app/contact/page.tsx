"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CONTACT_TYPES, type ContactType } from "@/types/contact";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<ContactType | "">("");

  // Préremplissage du type depuis /contact?type=… (ex: depuis une offre)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type") as ContactType | null;
    if (t && CONTACT_TYPES.some((c) => c.value === t)) {
      setType(t);
    }
  }, []);

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
      setType("");
    } catch {
      setError(
        "Impossible de contacter le serveur. Merci de réessayer ou d'utiliser l'email de secours."
      );
      setStatus("error");
    }
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border px-4 py-3 text-sm shadow-sm transition focus:outline-none";
  const inputStyle = {
    backgroundColor: "var(--background-alt)",
    borderColor: "var(--border)",
    color: "var(--text)",
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl" style={{ color: "var(--text)" }}>
            Me contacter
          </h1>
          <p className="mt-3" style={{ color: "var(--text-muted)" }}>
            Vous avez un projet d&apos;automatisation, de développement ou d&apos;IA ?
            Remplissez ce formulaire, je vous réponds sous 48h.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border p-8 shadow-sm"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Honeypot */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
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
              style={inputStyle}
              placeholder="Votre nom"
            />
          </div>

          {/* Entreprise */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className={inputClass}
              style={inputStyle}
              placeholder="Nom de votre entreprise (optionnel)"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              style={inputStyle}
              placeholder="vous@entreprise.com"
            />
          </div>

          {/* Type de demande */}
          <div>
            <label htmlFor="type" className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
              Type de demande <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value as ContactType)}
              className={inputClass}
              style={inputStyle}
            >
              <option value="" disabled>
                — Sélectionnez —
              </option>
              {CONTACT_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold" style={{ color: "var(--text)" }}>
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
              style={inputStyle}
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
              className="mt-1 h-4 w-4 rounded"
            />
            <label
              htmlFor="consent"
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              J&apos;accepte que mes données personnelles soient collectées et traitées
              conformément à la{" "}
              <Link
                href="/legal/privacy"
                className="underline hover:opacity-70"
                style={{ color: "var(--accent-strong)" }}
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
              className="w-full rounded-full px-8 py-3 text-sm font-semibold shadow-lg transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
            >
              {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p role="status" className="mt-3 text-center text-sm font-medium text-green-600">
                Message envoyé. Je vous réponds sous 48h ouvrées.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-3 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}
            {status !== "error" && (
              <p className="mt-2 text-center text-xs" style={{ color: "var(--text-muted)" }}>
                Réponse sous 48h ouvrées. Aucun spam.
              </p>
            )}
          </div>
        </form>

        {/* Alternative */}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Vous pouvez aussi me contacter directement par email :{" "}
            <a
              href="mailto:donovan@dtmini.com"
              className="font-medium underline hover:opacity-70"
              style={{ color: "var(--accent-strong)" }}
            >
              donovan@dtmini.com
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm underline hover:opacity-70"
            style={{ color: "var(--accent-strong)" }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
