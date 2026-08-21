// src/types/hero.ts
export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
  unit?: string;
  bar?: number;
  chartData?: number[];
}

export interface HeroData {
  badge: string;
  name: string;
  headline: string;
  subtitle: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: Stat[];
  metrics: Metric[];
}
