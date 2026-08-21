import type { Metadata } from "next";
import Link from "next/link";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ",
  description:
    "Questions fréquentes : outils, méthode de travail, documentation, maintenance et démarrage d'une mission.",
  openGraph: {
    title: "FAQ — Donovan Beaulavon",
    description: "Tout ce que vous devez savoir avant de me contacter.",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <span
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
          style={{ color: "var(--accent-strong)" }}
        >
          FAQ
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold mb-4 dark:font-mono">
          Questions fréquentes
        </h1>
        <p
          className="text-lg mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Tout ce que vous devez savoir avant de me contacter.
        </p>

        <div className="space-y-4">
          {faq.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border transition-all"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <summary
                className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-semibold select-none"
                style={{ color: "var(--text)" }}
              >
                {item.question}
                <svg
                  className="h-5 w-5 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                  style={{ color: "var(--accent-strong)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div
          className="mt-12 text-center p-8 rounded-2xl border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p className="font-medium mb-4" style={{ color: "var(--text)" }}>
            Vous ne trouvez pas votre réponse ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
