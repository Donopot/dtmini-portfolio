import Link from "next/link";
import { offers } from "@/data/offers";

const FORMAT_LABELS: Record<string, string> = {
  diagnostic: "Diagnostic",
  sprint: "Sprint",
  projet: "Projet",
  accompagnement: "Accompagnement",
};

export function OffersSection() {
  return (
    <section id="offres" className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--accent-strong)" }}
      >
        Offres
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 dark:font-mono">
        Ce que je peux faire pour vous
      </h2>
      <p
        className="text-lg max-w-2xl mb-12 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        Quatre formats, du diagnostic au déploiement. Chaque offre répond à un
        problème concret, avec un livrable clair.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <span
              className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] mb-2"
              style={{ color: "var(--accent-strong)" }}
            >
              {FORMAT_LABELS[offer.format] ?? offer.format}
            </span>
            <h3 className="font-display dark:font-mono text-xl font-bold mb-2">
              {offer.title}
            </h3>
            <p
              className="text-sm italic mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              {offer.tagline}
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              {offer.outcome}
            </p>
            <ul className="mb-6 space-y-1.5 flex-grow">
              {offer.deliverables.map((d) => (
                <li
                  key={d}
                  className="text-sm flex items-start gap-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "var(--accent-strong)" }}>▸</span>
                  {d}
                </li>
              ))}
            </ul>
            <Link
              href={`/contact?type=${offer.contactType}`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
            >
              {offer.contactType === "diagnostic"
                ? "Demander ce diagnostic"
                : "Parler de ce besoin"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
