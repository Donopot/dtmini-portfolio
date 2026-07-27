import type { ReactNode } from "react";

interface SectionProps {
  /** HTML id for anchor navigation (e.g. "#projets") */
  id?: string;
  /** Section title rendered as an h2 */
  title?: string;
  /** Additional CSS classes for the outer section element */
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="mb-10 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
