import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
  /** "primary" = solid brand, "secondary" = outlined */
  variant?: "primary" | "secondary";
}

interface CTASectionProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
}

export default function CTASection({ title, description, buttons }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-600">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
          {title}
        </h2>

        {description && (
          <p className="text-brand-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {description}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {buttons.map((btn) =>
              btn.variant === "secondary" ? (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-brand-50 dark:bg-brand-950 hover:text-brand-700 transition-colors"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center rounded-lg bg-brand-50 dark:bg-brand-950 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors shadow-sm"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
