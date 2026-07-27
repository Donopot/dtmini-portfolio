# Architecture dtmini.com — Phase 2
## Design System → TypeScript Architecture

> **Date :** 27 juillet 2026  
> **Source :** maquette hybride v2 (direction-hybrid.html)  
> **Stack :** Next.js 14+ (App Router) · TypeScript · Tailwind CSS v4 · Docker

---

## 1. Arbre des composants

```
layout.tsx
├── <ThemeProvider>            # Context CSS custom properties + classe <html>
├── <ModeBanner>              # Bandeau top avec toggle ☀️/🌙
├── <GeoGrid>                 # Grille SVG fixed (z-0)
├── <Scanlines>               # Effet CRT (dark only, z-max)
├── <Nav>
│   ├── <Logo />              # "DB" invariant
│   └── <NavLinks />          # Liens — sans-serif (light) / mono (dark)
│   └── <ModeToggle />        # Bouton circulaire ☀️/🌙
├── <main>
│   ├── page.tsx (Home)
│   │   ├── <Hero>
│   │   │   ├── <HeroBadge />
│   │   │   ├── <h1> + <CursorBlink />     # dark only
│   │   │   ├── <p.subtitle>
│   │   │   ├── <ElegantStats />            # light only
│   │   │   ├── <DarkHeroSplit>             # dark only
│   │   │   │   ├── <TerminalBlock />
│   │   │   │   └── <MonitorPanel />
│   │   │   ├── <CtaGroup />
│   │   │   └── <HeroDecor />              # SVG cercles
│   │   ├── <ServicesSection>
│   │   │   └── <ServiceCard /> ×4
│   │   ├── <ProjectsSection>
│   │   │   ├── <ProjectsIntro />
│   │   │   └── <ProjectPreviewGrid>
│   │   │       └── <ProjectPreview /> ×6
│   │   └── <Footer>
│   │       ├── <FooterGrid /> (4 cols)
│   │       ├── <FooterBottom />
│   │       └── <TerminalPrompt />         # dark only
│   ├── expertise/page.tsx
│   ├── projets/page.tsx
│   ├── parcours/page.tsx
│   └── contact/page.tsx
└── <AnalyticsScript />       # middleware injecté
```

---

## 2. Design Tokens — Tailwind v4 `@theme`

```css
/* globals.css */
@import "tailwindcss";

@theme {
  /* === LIGHT MODE (default) === */
  --color-brand-50:  #FDFAF5;
  --color-brand-100: #F5F2EC;
  --color-brand-200: #F3EFE8;
  --color-brand-300: #E6E1D8;
  --color-brand-400: #C89B67;
  --color-brand-500: #B8884D;
  --color-brand-600: #A67A3F;
  --color-brand-700: #8B6914;
  --color-brand-800: #6E6660;
  --color-brand-900: #2D2420;
  --color-brand-950: #231F20;

  /* === DARK MODE overrides (via .dark class) === */
  --color-dark-50:  #E0F2FE;
  --color-dark-100: #72F29A;
  --color-dark-200: #4ADE80;
  --color-dark-300: #38BDF8;
  --color-dark-400: #22D3EE;
  --color-dark-500: #5A7C7D;
  --color-dark-600: #132F35;
  --color-dark-700: #081317;
  --color-dark-800: #0D1411;
  --color-dark-900: #060B0E;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --section-gap: 6rem;
  --content-width: 72rem;

  /* Outer canvas */
  --color-outer-bg: #181316;
}
```

---

## 3. Types TypeScript

```typescript
// types/theme.ts
export type Theme = 'light' | 'dark';

export interface ThemeContext {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

// types/nav.ts
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// types/hero.ts
export interface HeroData {
  badge: string;
  name: string;
  subtitle: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: Stat[];
  metrics: Metric[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
  unit?: string;
  bar?: number;         // 0–100
  chartData?: number[];  // mini chart bars
}

// types/services.ts
export interface Service {
  icon: string;         // '</>' | '>_' | '{ }' | '⚡'
  title: string;
  description: string;
}

// types/projects.ts
export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
}

// types/footer.ts
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// types/seo.ts
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}
```

---

## 4. Stratégie Light ↔ Dark

### Principe
Pas de `next-themes` ni de lib externe. Un simple `ThemeProvider` Client Component qui :

1. **Lit** `localStorage.getItem('theme')` ou `prefers-color-scheme`
2. **Ajoute/retire** la classe `.dark` sur `<html>`
3. **Stocke** dans un React Context pour les composants
4. **Transition CSS** : `transition: background-color 0.8s, color 0.8s`

### Mécanique CSS
- Tous les tokens sont définis dans `:root` (light)
- `.dark` surcharge chaque token
- Chaque composant utilise les variables CSS (jamais de classes `.dark` inline)
- Les composants dark-only utilisent `hidden dark:block` (Tailwind)
- Les composants light-only utilisent `block dark:hidden`

### Composants conditionnels
```
<ElegantStats />     → block dark:hidden
<DarkHeroSplit />    → hidden dark:grid
<Scanlines />        → hidden dark:block
<TerminalPrompt />   → hidden dark:block
<CursorBlink />      → hidden dark:inline
```

---

## 5. Fichier de données (content layer)

```typescript
// data/content.ts
// Fichier unique — pas de CMS, pas de base de données
// Modifiable directement pour itérer vite

export const navItems: NavItem[] = [
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projets', href: '/projets' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Contact', href: '/contact' },
];

export const heroData: HeroData = {
  badge: 'Tool & IT Coordinator',
  name: 'Donovan Beaulavon',
  subtitle: 'J\'analyse, automatise et déploie des systèmes intelligents...',
  cta: {
    primary: { label: 'Me contacter', href: '/contact' },
    secondary: { label: 'Voir les projets ↓', href: '#projets' },
  },
  stats: [
    { value: '2 ans', label: 'chez ChangeNOW' },
    { value: '10 000+', label: 'contacts consolidés' },
    { value: '~200', label: 'fichiers standardisés' },
  ],
  metrics: [
    { value: '2', label: 'Années', bar: 66 },
    { value: '10k+', label: 'Contacts', bar: 80 },
    { value: '~200', label: 'Fichiers', bar: 45 },
    { value: '73%', label: '↓ Tâches manuelles', bar: 73 },
  ],
};

export const services: Service[] = [
  { icon: '</>', title: 'Automatisation', description: 'Scripts Python, intégrations API...' },
  { icon: '>_', title: 'Déploiement', description: 'Docker, CI/CD, reverse proxy...' },
  { icon: '{ }', title: 'Structuration', description: 'Bases Airtable, CRM, normalisation...' },
  { icon: '⚡', title: 'IA & RAG', description: 'Recherche vectorielle, embeddings...' },
];

export const projects: Project[] = [
  { id: 'pipeline', name: 'Pipeline Automation', category: 'Automatisation', tags: ['Python', 'Airtable', 'Make', 'API'] },
  { id: 'rag', name: 'RAG Documentaire', category: 'IA', tags: ['LangChain', 'ChromaDB', 'Ollama'] },
  { id: 'forecast', name: 'Prévision Énergétique', category: 'Data', tags: ['XGBoost', 'SARIMA', 'Pandas'] },
  { id: 'agent', name: 'Agent IA Multi-canal', category: 'IA', tags: ['Discord', 'Telegram', 'Webhook'] },
  { id: 'x402', name: 'Agent Data Foundry', category: 'Web3', tags: ['Next.js', 'x402', 'PostgreSQL'] },
  { id: 'portfolio', name: 'dtmini.com', category: 'Web', tags: ['Next.js', 'Docker', 'Caddy'] },
];

export const footerColumns: FooterColumn[] = [
  { title: 'Navigation', links: [
    { label: 'Accueil', href: '/' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Projets', href: '/projets' },
    { label: 'Parcours', href: '/parcours' },
  ]},
  { title: 'Expertises', links: [
    { label: 'Automatisation', href: '/expertise#automatisation' },
    { label: 'Déploiement', href: '/expertise#deploiement' },
    { label: 'Structuration', href: '/expertise#structuration' },
    { label: 'IA & RAG', href: '/expertise#ia' },
  ]},
  { title: 'Ressources', links: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Témoignages', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
  ]},
  { title: 'Contact', links: [
    { label: 'Email', href: 'mailto:donovan@dtmini.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/donovan-beaulavon' },
    { label: 'GitHub', href: 'https://github.com/Donopot' },
    { label: 'Discord', href: '#' },
  ]},
];
```

---

## 6. Structure des fichiers

```
src/
├── app/
│   ├── layout.tsx              # <ThemeProvider> + métadonnées globales
│   ├── page.tsx                # Page d'accueil (assemble Hero, Services, Projets)
│   ├── expertise/page.tsx
│   ├── projets/page.tsx
│   ├── parcours/page.tsx
│   ├── contact/page.tsx
│   ├── testimonials/page.tsx   # Conservé de v9
│   ├── faq/page.tsx            # Conservé de v9
│   ├── admin/analytics/        # Conservé de v9
│   ├── api/stats/route.ts      # Conservé de v9
│   └── globals.css             # @theme tokens + base styles
│
├── components/
│   ├── theme/
│   │   └── ThemeProvider.tsx   # Client component, context
│   ├── layout/
│   │   ├── ModeBanner.tsx
│   │   ├── GeoGrid.tsx
│   │   ├── Scanlines.tsx
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ElegantStats.tsx
│   │   ├── DarkHeroSplit.tsx
│   │   ├── TerminalBlock.tsx
│   │   ├── MonitorPanel.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectPreview.tsx
│   │   └── HeroDecor.tsx
│   └── ui/
│       ├── CtaButton.tsx
│       ├── CursorBlink.tsx
│       └── TerminalPrompt.tsx
│
├── data/
│   └── content.ts             # Toutes les données du site
│
├── types/
│   ├── theme.ts
│   ├── nav.ts
│   ├── hero.ts
│   ├── services.ts
│   ├── projects.ts
│   ├── footer.ts
│   └── seo.ts
│
└── lib/
    ├── theme.ts               # Helpers: getInitialTheme, applyTheme
    └── analytics.ts           # Conservé de v9
```

---

## 7. Règles d'architecture

### 7.1 Composants
- **Pas de `use client` sauf nécessité** (ThemeProvider, animations)
- **Données dans `data/content.ts`** — un seul fichier, pas de CMS
- **Chaque composant est un fichier** — pas de barrel exports complexes
- **Props typées explicitement** — pas de `any`

### 7.2 Performance
- **Images Next/Image** avec `priority` sur le hero
- **Police Inter : `next/font/google`** — pas de `<link>` Google Fonts
- **Cormorant Garamond + JetBrains Mono : `next/font/google`**
- **CSS critique inline** via Tailwind (déjà optimisé)

### 7.3 SEO
- **Metadata API Next.js** par page
- **JSON-LD** structuré dans `layout.tsx`
- **Open Graph** + Twitter Cards par page
- **`sitemap.ts`** et **`robots.ts`** générés

### 7.4 Accessibilité
- **WCAG AA minimum** (contrastes vérifiés)
- **`sr-only`** pour les textes cachés
- **`aria-label`** sur tous les boutons sans texte
- **Navigation au clavier** (tabIndex, focus-visible)

---

## 8. Migration depuis v9

| v9 (actuel) | v10 (cible) | Impact |
|-------------|-------------|--------|
| Palette 100% teal | Palette duale or/cyan | `globals.css` rewrit |
| 16 composants | ~25 composants | Nouveaux fichiers |
| Pas de theme switch | ThemeProvider + .dark | Nouveau composant |
| Police Inter uniquement | 3 polices (Inter, Cormorant, JetBrains) | Config fonts |
| Projets : grille simple | Layout asymétrique | Refactor composants |
| Footer simple | Footer + terminal prompt | Extension composant |
| 25 routes | ~25 routes (conservées) | Pas de breaking change |

### Fichiers à supprimer de v9
```
src/app/globals.css       → remplacé par nouvelle version
tailwind.config.ts         → supprimé (Tailwind v4 utilise @theme)
src/components/*           → refactor complet
```

### Fichiers à conserver de v9
```
src/middleware.ts          → RealAnalyticsMiddleware
src/app/api/stats/route.ts → API analytics
src/app/admin/analytics/   → Dashboard analytics
src/app/testimonials/      → Page témoignages
src/app/faq/               → Page FAQ
Dockerfile                 → (vérifier compatibilité)
```

---

## 9. Prochaines étapes (Phase 3 — Implémentation)

1. **Créer `ThemeProvider`** — le cœur du système
2. **Réécrire `globals.css`** — tokens @theme + base
3. **Remplacer les polices** — next/font/google
4. **Composants layout** — GeoGrid, Scanlines, Nav, ModeBanner, Footer
5. **Composants home** — Hero, Services, Projets
6. **Migrer `data/content.ts`** — exporter les données depuis le HTML
7. **Vérifier les routes conservées** — testimonials, FAQ, analytics
8. **Build + déploiement** — `docker build && docker compose up -d`
