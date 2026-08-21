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
  const { badge, name, headline, subtitle, cta } = heroData;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-[72rem] mx-auto w-full relative z-10">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border mb-6 transition-colors"
          style={{
            color: "var(--accent-strong)",
            borderColor: "var(--accent)",
          }}
        >
          {badge}
        </span>

        {/* H1 = promesse */}
        <h1
          className={`text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.12] -tracking-[0.02em] mb-3 transition-all ${
            isDark ? "font-mono" : "font-display"
          }`}
        >
          {headline}
          {isDark && <span className="cursor-blink" />}
        </h1>

        {/* Nom — visible mais secondaire */}
        <p
          className={`text-xl mb-6 ${isDark ? "font-mono" : "font-display italic"}`}
          style={{ color: "var(--accent-strong)" }}
        >
          {name}
        </p>

        {/* Intro */}
        <p
          className="text-lg max-w-xl mb-10 leading-relaxed transition-colors"
          style={{ color: "var(--text-muted)" }}
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
