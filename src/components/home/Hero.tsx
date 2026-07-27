"use client";

import { useTheme } from "@/components/ThemeProvider";
import { heroData } from "@/data/content";
import { ElegantStats } from "./ElegantStats";
import { DarkHeroSplit } from "./DarkHeroSplit";
import { HeroDecor } from "./HeroDecor";
import { CtaGroup } from "./CtaGroup";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { badge, name, subtitle, cta } = heroData;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-[72rem] mx-auto w-full relative z-10">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border mb-6 transition-colors"
          style={{
            color: isDark ? "var(--color-dark-accent)" : "var(--color-light-accent)",
            borderColor: isDark ? "var(--color-dark-accent)" : "var(--color-light-accent)",
          }}
        >
          {badge}
        </span>

        {/* Heading */}
        <h1
          className={`text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.08] -tracking-[0.02em] mb-1 transition-all ${
            isDark ? "font-mono" : "font-display"
          }`}
        >
          {name}
          {isDark && <span className="cursor-blink" />}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg max-w-xl mb-10 leading-relaxed transition-colors"
          style={{ color: isDark ? "var(--color-dark-text-secondary)" : "var(--color-light-text-secondary)" }}
        >
          {subtitle}
        </p>

        {/* Light: Elegant stats | Dark: Terminal + Monitor */}
        {isDark ? <DarkHeroSplit /> : <ElegantStats />}

        {/* CTAs */}
        <CtaGroup primary={cta.primary} secondary={cta.secondary} />
      </div>

      <HeroDecor />
    </section>
  );
}
