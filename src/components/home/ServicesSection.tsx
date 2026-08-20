"use client";

import Link from "next/link";
import type { Service } from "@/types/services";

interface Props {
  services: Service[];
}

export function ServicesSection({ services }: Props) {
  return (
    <section className="max-w-[72rem] mx-auto px-6 py-24 relative z-10">
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 block"
        style={{ color: "var(--color-light-accent-text)" }}
      >
        Expertise
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold mb-12 dark:font-mono">
        Ce que je fais
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="rounded-2xl p-6 border relative overflow-hidden transition-all duration-400 hover:-translate-y-1 group"
      style={{
        backgroundColor: "var(--color-light-card)",
        borderColor: "var(--color-light-border)",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: "linear-gradient(135deg, rgba(184, 136, 77, 0.06), transparent)",
        }}
      />
      <span
        className="text-2xl font-bold mb-4 block relative z-10 font-mono dark:text-[var(--color-dark-accent)] text-[var(--color-light-accent)]"
      >
        {service.icon}
      </span>
      <h3 className="font-display dark:font-mono text-lg font-bold mb-2 relative z-10 transition-colors">
        {service.title}
      </h3>
      <p
        className="text-sm leading-relaxed relative z-10 transition-colors"
        style={{ color: "var(--color-light-text-secondary)" }}
      >
        {service.description}
      </p>
    </div>
  );
}
