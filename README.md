# dtmini-portfolio

Portfolio professionnel de **Donovan Beaulavon** — [dtmini.com](https://dtmini.com)

## 🚀 Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build production
npm run typecheck  # Vérification TypeScript
```

## 📦 Déploiement

```bash
docker compose up -d
```

Voir [`docs/deployment.md`](docs/deployment.md) pour la configuration Caddy complète.

## 🏗️ Stack

- **Next.js 15** (App Router) — rendu statique standalone
- **TypeScript 5.7** — typage strict
- **Tailwind CSS 4** — design responsive
- **Docker** — conteneurisation multi-stage

## 📂 Structure

```
src/
├── app/          # 15 routes (/, /automation, /development, /projects/*, etc.)
├── components/   # Header, Footer, Section, ProjectCard, CaseStudyCard, CTA
└── content/      # Données versionnées (projets, expériences, compétences)
```

## 🔒 Sécurité

- Pas d'API exposée
- Pas de secrets dans le bundle (`.env.example` uniquement)
- Formulaire de contact avec honeypot + validation
- `mailto:` de secours
