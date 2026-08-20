import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/automatisation-processus" },
  title: "Automatisation de processus",
  description:
    "Analyse de processus, connexion d'outils (Airtable, Make, n8n) et automatisation des tâches répétitives.",
};

export default function AutomatisationPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-50 dark:bg-brand-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 dark:text-brand-50 mb-6">
            Automatisation de processus
          </h1>
          <p className="text-lg text-brand-700 dark:text-brand-500 leading-relaxed mb-8">
            J&apos;analyse vos processus existants, je connecte vos outils (Airtable, Make, n8n,
            Google Workspace) et j&apos;automatise les tâches répétitives sans perturber vos
            opérations.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-brand-700 dark:text-brand-500 leading-relaxed">
            <h2 className="text-xl font-semibold text-brand-950 dark:text-brand-50">Ce que je fais</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cartographie et analyse des processus existants</li>
              <li>Connexion d&apos;outils via API, webhooks et scripts</li>
              <li>Workflows automatisés avec Make, n8n et Apps Script</li>
              <li>Documentation, tests et transfert aux équipes</li>
            </ul>
            <p>
              <Link href="/contact" className="text-brand-700 dark:text-brand-400 underline font-medium">
                Décrivez-moi votre besoin →
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
