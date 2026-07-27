interface CaseStudyCardProps {
  /** Client / project name */
  title: string;
  /** The business context or problem */
  contexte: string;
  /** What was done */
  intervention: string;
  /** Measurable outcome */
  resultat: string;
}

export default function CaseStudyCard({
  title,
  contexte,
  intervention,
  resultat,
}: CaseStudyCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-200 motion-reduce:transition-none">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">{title}</h3>

      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        {/* Contexte */}
        <div className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-100 p-1 text-brand-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-0.5">Contexte</p>
            <p className="leading-relaxed">{contexte}</p>
          </div>
        </div>

        {/* Intervention */}
        <div className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-100 p-1 text-brand-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-0.5">Intervention</p>
            <p className="leading-relaxed">{intervention}</p>
          </div>
        </div>

        {/* Résultat */}
        <div className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-100 p-1 text-brand-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-0.5">Résultat</p>
            <p className="leading-relaxed">{resultat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
