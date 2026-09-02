# Changelog — dtmini-portfolio

Historique reconstruit depuis `git log` (format AAAA-MM-JJ). Les entrées sont additives.

## v1.0.0 — Clôture V1 (2026-09-01)

Refonte complète finalisée et mise en production sur dtmini.com.

### Added
- Bloc « Résultat » (métriques) sur les projets : composant `MetricGrid` + `projectMetrics`
- Page témoignages réactivée : 3 retours nominatifs (ChangeNOW, Projet SaaS DnD)
- 3 études de cas ChangeNOW (qualification leads, assistant RAG, dashboard) dans `/projets/automatisation-operations`

### Fixed
- SEO : `/temoignages` indexable (retrait du `noindex`) + ajout au sitemap
- Responsive mobile : stats hero empilées + police responsive, alignement hero (`items-start`), navbar collée en haut (`top-0`)

### Removed
- Pages legacy orphelines `/automation`, `/development`, `/cv/automation`, `/cv/development` (redirigées 308 vers expertise/projets/parcours)
- Bloc « SYSTEM STATUS » (`MonitorPanel`) du dark mode

### Infra
- Resend vérifié (SPF/DKIM/MX) + DMARC posé (`p=none`)
- Formulaire de contact E2E opérationnel

## v11.x — Refonte offre client (branche `feat/refonte-offre-client`)

### P3B — Correctifs pré-déploiement (2026-08-22, non commité)
- **Correction** : suppression de l'overflow horizontal de `/parcours` (mobile/tablette) via `overflow-x-clip` local sur la timeline — sans masquage global ni suppression d'animation.
- **Accessibilité** : ajout d'un lien d'évitement « Aller au contenu principal » + `id="contenu"` sur `<main>` ; correction de la hiérarchie des titres du footer (`h4` → `h2`).
- **Visuels** : ajout d'un favicon SVG (monogramme « DB »).
- **Contenu** : reformulation de `hermes-agent` (attribution correcte du travail, retrait de Telegram non confirmé, lien upstream explicité) et de `x402` (description alignée sur le code réel, statut prototype/testnet/dépôt privé, sans lien public).
- **Déploiement** : création de `.dockerignore` ; correction du healthcheck (`HOSTNAME=0.0.0.0` + probe `127.0.0.1`) ; documentation de la frontière de confiance Caddy/loopback.
- **Nettoyage** : suppression de `tailwind.config.ts`, `public/og-image.svg` et `STATS_TOKEN`.

### P2C — Visuels vérifiés + réindexation (2026-08-21, `13c65bf`)
- Ajout des visuels vérifiés et réindexation des pages projets.

### P2B — Études de cas vérifiées (2026-08-21, `6aced09`)
- Publication des études de cas de projets vérifiées.

### P1B — Routes et indexation (2026-08-21, `c8c91f7`)
- Consolidation des routes et de l'indexation de recherche.

### P1A — Repositionnement du portfolio (2026-08-21, `2600c26`)
- Repositionnement autour de l'automatisation et de l'IA appliquée.

### P0 — Thème et données commerciales (2026-08-21, `7411c2f`)
- Unification du thème et alignement des données commerciales.

### Correctifs sécurité / SEO / accessibilité (2026-08-20)
- `ce3c444` fix : durcissement du rate limiting + suppression du tracking inutilisé
- `0ff971f` fix : retrait des affirmations non vérifiées + masquage des témoignages
- `7d6144f` fix : correction des métadonnées, SEO et accessibilité
- `32c5611` fix : sécurisation du formulaire de contact et de l'analytics

## v11.1 — 2026-08-01
Timeline visuelle `/parcours` — alternance gauche/droite, animations, icônes, 4 entrées enrichies. (`23475c5`)

## v11 — 2026-08-01
Enrichissement des projets (résultats + liens), page témoignages, nettoyage du footer, bascule du formulaire Formspree → Resend. (`8214be7`)

## v10 — 2026-07-27
Design hybride dual-mode (light éditorial/luxe + dark tech/data). 5 commits :
- `b3ee1eb` maquette hybride v2 (terminal hero, monitoring système, footer CLI, palette via Gemini)
- `d30b774` doc architecture Phase 2 (arbre composants, types TS, tokens, stratégie light/dark)
- `b0b1912` implémentation du design hybride (terminal, monitoring, dual-theme)
- `4420d3e` cleanup : suppression de 14 fichiers morts, 0 régression
- `5c980c3` pages expertise/projets/parcours, og-image.svg, fix ringColor

## v9 — 2026-07-27
Palette 100 % teal monochromatique — zéro gris. (`ef5cf6c`)

## v8 — 2026-07-27
Contrastes WCAG AA, dark mode universel, page témoignages, police Inter, SEO. (`6fc47dc`)

## MVP — 2026-07-25
Portfolio MVP : 15 routes, design teal, Docker, docs. (`7297193`) + ignore `.hermes-tmp.*` (`22d9378`)
