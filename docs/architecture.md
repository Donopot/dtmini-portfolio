# Architecture — dtmini-portfolio

## Stack

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript 5.7 |
| Style | Tailwind CSS 4 |
| Rendu | Statique (`output: "standalone"`) |
| Package manager | npm |
| Conteneurisation | Docker (multi-stage) |
| Reverse proxy | Caddy (externe) |

## Arborescence

```
src/
├── app/                    # Routes Next.js (App Router)
│   ├── layout.tsx          # Layout racine (Header + Footer)
│   ├── page.tsx            # Page d'accueil (/)
│   ├── globals.css         # Styles globaux Tailwind
│   ├── automation/         # /automation
│   ├── development/        # /development
│   ├── experience/         # /experience
│   ├── about/              # /about
│   ├── contact/            # /contact
│   ├── projects/           # /projects/*
│   ├── cv/                 # /cv/*
│   ├── legal/              # /legal/*
│   └── not-found.tsx       # 404
├── components/             # Composants réutilisables
│   ├── Header.tsx          # Navbar responsive
│   ├── Footer.tsx          # Footer minimal
│   ├── Section.tsx         # Wrapper de section
│   ├── ProjectCard.tsx     # Carte projet
│   ├── CaseStudyCard.tsx   # Carte étude de cas
│   └── CTASection.tsx      # Section call-to-action
└── content/                # Données versionnées
    ├── site.ts             # Configuration globale
    ├── projects.ts         # Projets techniques
    ├── case-studies.ts     # Études de cas métier
    ├── experience.ts       # Expériences et formations
    └── skills.ts           # Groupes de compétences
```

## Choix techniques

- **Next.js standalone** : build produit un binaire Node.js autonome, déployable en conteneur minimal
- **Contenu versionné** : toutes les données sont dans `src/content/` en TypeScript — pas de CMS, pas de base de données
- **Composants serveur par défaut** : seul `Header.tsx` utilise `'use client'` (pour le menu burger)
- **Pas d'API routes** : le formulaire de contact utilise un `mailto:` de secours
