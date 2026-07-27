"use client";

import { heroData } from "@/data/content";

export function ElegantStats() {
  return (
    <div
      className="grid grid-cols-3 gap-8 my-10 py-8 border-y"
      style={{ borderColor: "var(--color-light-border)" }}
    >
      {heroData.stats.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className="font-display text-[2.5rem] font-bold"
            style={{ color: "var(--color-light-accent)" }}
          >
            {s.value}
          </div>
          <div
            className="text-sm mt-1"
            style={{ color: "var(--color-light-text-secondary)" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
