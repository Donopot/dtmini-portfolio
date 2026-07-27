import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function DataOperationsPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-50 dark:bg-brand-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 dark:text-brand-50 mb-6">
            Data & opérations
          </h1>
          <p className="text-lg text-brand-700 dark:text-brand-500 leading-relaxed mb-8">
            Je consolide, nettoie et structure vos données dispersées pour les rendre
            exploitables. CSV, Excel, bases Airtable, exports d&apos;API : je construis des
            pipelines de données fiables.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-brand-700 dark:text-brand-500 leading-relaxed">
            <h2 className="text-xl font-semibold text-brand-950 dark:text-brand-50">Ce que je fais</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consolidation de fichiers hétérogènes (CSV, XLS, XLSX)</li>
              <li>Nettoyage, dédoublonnage et normalisation</li>
              <li>Synchronisation entre outils (Airtable, Sheets, API)</li>
              <li>Reporting et visualisation (Power BI, Python)</li>
              <li>Gouvernance et documentation des données</li>
            </ul>
            <p>
              <Link href="/contact" className="text-brand-700 dark:text-brand-400 underline font-medium">
                Parlons de vos données →
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
