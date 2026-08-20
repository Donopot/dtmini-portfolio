import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/testimonials" },
  title: "Témoignages",
  description:
    "Ce que mes collègues et collaborateurs disent de mon travail en automatisation, développement full-stack et intégration IA.",
  openGraph: {
    title: "Témoignages — Donovan Beaulavon",
    description:
      "Retours d'expérience sur mes missions d'automatisation, développement et IA.",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-50 dark:bg-brand-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            Témoignages
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 dark:text-brand-50 mb-4">
            Ils me font confiance
          </h1>
          <p className="text-lg text-brand-700 dark:text-brand-400 leading-relaxed mb-12">
            Retours d&apos;expérience de mes collaborateurs.
          </p>
        </AnimatedSection>

        {/* pendingValidation — témoignages masqués tant que l'identité et
            l'autorisation des auteurs ne sont pas confirmées. */}
        <div className="rounded-2xl border border-brand-200 dark:border-brand-900 bg-brand-100 dark:bg-brand-900/50 p-8 text-center">
          <p className="text-brand-800 dark:text-brand-200 leading-relaxed">
            Les témoignages sont actuellement en cours de vérification
            (confirmation de l&apos;identité et de l&apos;autorisation des
            auteurs). Ils seront publiés prochainement.
          </p>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 text-center p-8 rounded-2xl bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-900">
            <p className="text-brand-800 dark:text-brand-400 font-medium mb-4">
              Vous avez travaillé avec moi ? Votre retour m&apos;intéresse.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 dark:bg-brand-600 px-6 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-600 dark:hover:bg-brand-600 transition-all shadow-lg shadow-brand-200/50 dark:shadow-brand-900/30 hover:-translate-y-0.5"
            >
              Me contacter
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
