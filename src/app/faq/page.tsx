import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Donovan Beaulavon",
  description:
    "Questions fréquentes : missions, délais, tarifs, confidentialité, outils et méthodes de travail.",
  openGraph: {
    title: "FAQ — Donovan Beaulavon",
    description:
      "Tout ce que vous devez savoir avant de me contacter.",
  },
};

const faqs = [
  {
    q: "Quel type de missions acceptez-vous ?",
    a: "J'interviens sur des missions d'automatisation de processus (Airtable, Make, n8n), de consolidation et nettoyage de données (Python, Pandas), de développement d'applications web (React, FastAPI) et d'intégration IA (RAG, agents, LLMs). Les missions vont généralement de 5 à 30 jours, en freelance ou en CDD.",
  },
  {
    q: "Comment se déroule une mission type ?",
    a: "1) Cadrage : on définit le périmètre, les contraintes et les résultats attendus. 2) Prototype rapide ou audit. 3) Construction et tests. 4) Déploiement et documentation. 5) Transfert à votre équipe. Je documente chaque étape pour que vous restiez autonome.",
  },
  {
    q: "Travaillez-vous en présentiel ?",
    a: "Principalement en télétravail depuis l'Île-de-France. Je peux me déplacer ponctuellement pour des ateliers de cadrage ou des démonstrations, à convenir selon le projet.",
  },
  {
    q: "Quels sont vos délais de réponse ?",
    a: "Je réponds sous 48h ouvrées à toute demande de contact. Pour un premier échange, prévoyez un appel de 20 à 30 minutes — sans engagement, pour qualifier votre besoin.",
  },
  {
    q: "Comment gérez-vous la confidentialité des données ?",
    a: "Toutes les données que vous me confiez restent strictement confidentielles. Je signe un accord de confidentialité si nécessaire. Aucune donnée client n'est stockée hors de l'environnement convenu, et je ne réutilise jamais vos données pour d'autres projets.",
  },
  {
    q: "Qui est propriétaire du code et des livrables ?",
    a: "Vous êtes propriétaire de l'ensemble des livrables produits dans le cadre de la mission : code source, documentation, workflows, scripts et jeux de données transformés. Je vous les transmets avec les droits d'utilisation complets.",
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "Côté automatisation : Airtable, Make, n8n, Google Apps Script. Côté développement : Python, FastAPI, React, TypeScript, PostgreSQL, Docker. Côté IA : LangChain, ChromaDB, Ollama, Groq, OpenRouter. Je m'adapte à votre stack existante.",
  },
  {
    q: "Proposez-vous de la maintenance après la mission ?",
    a: "Oui. Je propose un suivi mensuel optionnel pour corriger les scénarios, mesurer les gains et ajouter des fonctionnalités progressivement. C'est un forfait flexible, sans engagement long terme.",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "Mes tarifs dépendent de la nature et de la durée de la mission. Je propose un premier diagnostic gratuit de 30 minutes pour estimer le périmètre et vous faire une proposition adaptée. Contactez-moi pour en discuter.",
  },
  {
    q: "Avez-vous des références ou témoignages ?",
    a: "Mon expérience principale est chez ChangeNOW, où j'ai travaillé 2 ans comme Tool & IT Coordinator. Les études de cas sur ce site décrivent des missions réelles, anonymisées pour respecter la confidentialité. Je peux fournir des références sur demande.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-50 dark:bg-brand-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 dark:text-brand-50 mb-4">
            Questions fréquentes
          </h1>
          <p className="text-lg text-brand-700 dark:text-brand-500 leading-relaxed mb-12">
            Tout ce que vous devez savoir avant de me contacter.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-brand-200 dark:border-brand-900 bg-brand-100 dark:bg-brand-950 transition-all hover:border-brand-200 dark:hover:border-brand-800 [&[open]]:border-brand-200 dark:[&[open]]:border-brand-800 [&[open]]:bg-brand-50 dark:bg-brand-950 dark:[&[open]]:bg-brand-950"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-semibold text-brand-950 dark:text-brand-50 select-none">
                  {faq.q}
                  <svg
                    className="h-5 w-5 text-brand-700 dark:text-brand-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-brand-700 dark:text-brand-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 text-center p-8 rounded-2xl bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-900">
            <p className="text-brand-800 dark:text-brand-400 font-medium mb-4">
              Vous ne trouvez pas votre réponse ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 dark:bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 dark:hover:bg-brand-600 transition-all shadow-lg shadow-brand-200/50 dark:shadow-brand-900/30 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me contacter
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
