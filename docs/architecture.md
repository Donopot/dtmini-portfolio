# Architecture — dtmini-portfolio

> Doc de référence à jour (v11.x). `architecture-phase2.md` (conception v10) est conservé pour historique.

## Stack

| Couche | Technologie | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | `output: "standalone"`, `images.unoptimized: true` |
| UI | React 19 | composants serveur par défaut |
| Langage | TypeScript 5.7 | `strict` |
| Style | Tailwind CSS 4 | `@theme` dans `globals.css` (pas de `tailwind.config.ts`) |
| Animations | framer-motion 12 | timeline, transitions |
| Email | Resend 6 | formulaire `/api/contact` |
| Conteneur | Docker (node:22-alpine, multi-stage) | port 3100 |
| Reverse proxy | Caddy | externe (HP Mini) |

## Design system — thème dual light/dark

Le cœur du site : un design system **hybride** piloté par variables CSS (`@theme` dans `globals.css`) + classe `.dark` sur `<html>`.

### Tokens (source : `src/app/globals.css`)

| | Light (éditorial / luxe) | Dark (tech / data) |
|---|---|---|
| Fond | `#F5F2EC` | `#060B0E` |
| Carte | `#FAFAF7` | `#081317` |
| Texte | `#231F20` | `#E0F2FE` |
| Texte secondaire | `#6E6660` | `#6E9192` |
| Accent | or `#B8884D` | cyan `#22D3EE` |
| Accent clair | `#C89B67` | `#38BDF8` |
| Accent secondaire | — | vert `#4ADE80` |
| Texte d'accent (WCAG AA) | `#85602F` | — |
| Bordure | `#E6E1D8` | `#132F35` |

### Typographie (`next/font/google`)
- **Display** : Cormorant Garamond (titres)
- **Sans** : Inter (corps)
- **Mono** : JetBrains Mono (terminal, mode dark)

### Mécanique light/dark
- `ThemeProvider` (client) lit `localStorage` / `prefers-color-scheme`, applique `.dark`, expose le contexte.
- Script inline anti-FOUC dans `layout.tsx`.
- Classes utilitaires `light-only` / `dark-only` (+ `-inline`, `-grid`) pour les composants conditionnels.
- **Tokens sémantiques** (`--background`, `--surface`, `--text`, `--text-muted`, `--accent`, `--accent-strong`, `--border`, `--cta-bg`, `--cta-text`) définis dans `:root` / `.dark` : les composants utilisent `var(--token)` et basculent automatiquement sans logique `isDark ?` par couleur.
- Backward-compat : échelle `brand-*` (teal historique) et `--color-*` conservés pour les routes héritées.

## Arbre des composants

```
src/components/
├── ThemeProvider.tsx        # contexte light/dark + toggle
├── AnimatedSection.tsx      # wrapper animation (framer-motion)
├── Section.tsx              # wrapper section
├── layout/
│   ├── Nav.tsx              # navigation (navItems)
│   ├── Footer.tsx           # footer 3 colonnes (footerColumns)
│   ├── GeoGrid.tsx          # grille SVG décorative (fond)
│   ├── Scanlines.tsx        # effet CRT (dark only)
└── home/
    ├── Hero.tsx             # hero (promesse + CTA)
    ├── ProblemsSection.tsx  # problèmes clients
    ├── OffersSection.tsx    # 4 offres
    ├── MethodSection.tsx    # méthode de collaboration
    ├── ProjectsSection.tsx  # projets (livrables factuels)
    ├── FaqSection.tsx       # FAQ
    ├── FinalCta.tsx         # CTA final
    ├── DarkHeroSplit.tsx    # hero (dark)
    ├── ElegantStats.tsx     # stats (light)
    ├── TerminalBlock.tsx    # profil JSON type terminal
    ├── MonitorPanel.tsx     # métriques (barres de niveau)
    ├── CtaGroup.tsx         # call-to-action
    └── HeroDecor.tsx        # SVG décoratif
```

## Modèle de données (0 CMS, 0 base de données)

| Fichier | Contenu | Statut |
|---|---|---|
| `src/data/content.ts` | navItems, heroData (badge/headline/intro), terminalProfile, problems×3, method×5, services×4 (legacy), projects×6, footerColumns, pendingValidation | suivi |
| `src/data/offers.ts` | 4 offres commerciales (diagnostic, automatisation, outil-métier, production) | importé (section Offres) |
| `src/data/faq.ts` | 6 questions/réponses | importé (section FAQ + page /faq) |
| `src/content/testimonials.ts` | 3 témoignages (ChangeNOW) | masqués (validation en attente) |

Types dans `src/types/` : `nav`, `hero`, `services`, `projects`, `footer`, `theme`, `contact`.

## Règles d'architecture

- Contenu 100 % dans `src/data/` (fichiers TS versionnés) — pas de CMS.
- Pas de `'use client'` sauf nécessité (`ThemeProvider`, animations).
- Tailwind v4 : toute couleur doit être dans `globals.css` `@theme`. `tailwind.config.ts` est **ignoré** (fichier mort à supprimer).
- SEO : Metadata API par page, JSON-LD `Person`, `sitemap.ts` (19 entrées), `robots.ts` (`/api/` et `/legal/` en disallow).
- Accessibilité : WCAG AA, `:focus-visible`, `prefers-reduced-motion`.
