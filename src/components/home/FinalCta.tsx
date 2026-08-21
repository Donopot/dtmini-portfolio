import Link from "next/link";

export function FinalCta() {
  return (
    <section className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <div
        className="rounded-2xl p-12 text-center border"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4 dark:font-mono">
          Parlons de votre besoin
        </h2>
        <p
          className="text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Un premier échange sans engagement pour qualifier votre besoin et vous
          proposer une approche adaptée.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
        >
          Parler de mon besoin
        </Link>
      </div>
    </section>
  );
}
