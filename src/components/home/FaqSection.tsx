import { faq } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="max-w-[48rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--accent-strong)" }}
      >
        FAQ
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-12 dark:font-mono">
        Questions fréquentes
      </h2>

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
    </section>
  );
}
