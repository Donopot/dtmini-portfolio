import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import testimonials from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Témoignages — Donovan Beaulavon",
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
    <div className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            Témoignages
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Ils me font confiance
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            Retours d&apos;expérience de mes collaborateurs chez ChangeNOW et au-delà.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <blockquote className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-8 transition-all duration-300 hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-800">
                {/* Quote mark */}
                <svg
                  className="absolute top-6 right-6 h-12 w-12 text-brand-100 dark:text-brand-900/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>

                <p className="relative text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-6 pr-12">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex-1">
                    <cite className="not-italic font-semibold text-gray-900 dark:text-white text-sm block">
                      {t.author}
                    </cite>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t.role}
                      {t.organization && (
                        <>
                          {" — "}
                          <span className="text-brand-700 dark:text-brand-400">
                            {t.organization}
                          </span>
                        </>
                      )}
                    </span>
                    {t.date && (
                      <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                        {t.date}
                      </span>
                    )}
                  </div>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center p-8 rounded-2xl bg-brand-50 dark:bg-brand-950 border border-brand-100 dark:border-brand-900">
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
              Vous avez travaillé avec moi ? Votre retour m&apos;intéresse.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-700 dark:bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 dark:hover:bg-brand-600 transition-all shadow-lg shadow-brand-200/50 dark:shadow-brand-900/30 hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Me contacter
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
