# dtmini-portfolio

Portfolio professionnel de **Donovan Beaulavon** — [dtmini.com](https://dtmini.com)

> **Statut** : V1 clôturée — en production sur [dtmini.com](https://dtmini.com).
> État détaillé (Git, drifts, à faire) : [`docs/etat-actuel.md`](docs/etat-actuel.md).

## Stack

| Couche | Technologie |
|---|---|
| Framework | Next.js 15 (App Router, `output: "standalone"`) |
| UI | React 19 + TypeScript 5.7 |
| Style | Tailwind CSS 4 (`@theme` dans `globals.css`) |
| Animations | framer-motion 12 |
| Email | Resend 6 (formulaire de contact) |
| Conteneur | Docker (multi-stage, `node:22-alpine`) |
| Reverse proxy | Caddy (externe, HP Mini) |

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build production (standalone)
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Structure

```
src/
├── app/            # 12 pages + 13 redirections 308 + 1 API + sitemap/robots
│   ├── layout.tsx  # Layout racine : fonts, metadata, ThemeProvider, Nav/Footer
│   ├── page.tsx    # Accueil (/)
│   ├── expertise/  parcours/  contact/  faq/  temoignages/
│   ├── projets/    # 4 réalisations : dnd-vtt, automatisation-operations, rag-documentaire, prevision-energetique
│   ├── legal/      # privacy (noindex)
│   ├── api/contact/route.ts   # endpoint formulaire (Resend)
│   └── robots.ts · sitemap.ts
├── components/
│   ├── ThemeProvider.tsx · AnimatedSection.tsx · Section.tsx
│   ├── layout/     # Nav, Footer, GeoGrid, Scanlines
│   └── home/       # Hero, Problems, Offers, Method, Projects, FAQ, FinalCta, …
├── data/           # content.ts (nav, hero, problèmes, méthode, projets), offers.ts, faq.ts
└── types/          # nav, hero, projects, footer, theme, contact
```

## Sécurité

- Pas d'API exposée hors `/api/contact` (rate-limitée, validée)
- Aucun secret dans le repo (`.env.example` uniquement)
- Formulaire de contact : honeypot + rate limiting + envoi Resend
- Témoignages nominatifs vérifiés (3 retours) ; métriques projets sans chiffres non vérifiés

## Documentation

- [`docs/architecture.md`](docs/architecture.md) — stack, design system, composants
- [`docs/deployment.md`](docs/deployment.md) — Docker, Caddy, HP Mini, DNS/DDNS
- [`docs/content-guide.md`](docs/content-guide.md) — éditer le contenu
- [`docs/etat-actuel.md`](docs/etat-actuel.md) — état courant + drifts + à faire
- [`CHANGELOG.md`](CHANGELOG.md) — historique des versions
