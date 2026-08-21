# État actuel — dtmini-portfolio

> Snapshot généré le **2026-08-21**. Source : `git log`, arborescence réelle, `npm run typecheck` + `npm run build`.

## Synthèse

| Élément | État |
|---|---|
| Refonte commerciale | Lot P0 **validé + commité** (`7411c2f`), P1A éditorial **en cours** |
| Branche active | `feat/refonte-offre-client` |
| Push vers origin | ❌ 5 commits en avance, branche **non poussée** |
| Positionnement | ✅ freelance (« Freelance · Automatisation, IA & outils métier ») |
| Offres + FAQ | ✅ reliées (section Offres + section FAQ accueil + page `/faq`) |
| Thème | ✅ tokens sémantiques light/dark unifiés (`--background`, `--surface`, `--text`, …) |
| TypeScript / build | ✅ `typecheck` 0 erreur · `build` 27 routes |

## Git

- **Branche locale active** : `feat/refonte-offre-client` (5 commits en avance sur `origin/feature/dtmini-portfolio-v1`).
- **5 commits non poussés** : 4 correctifs sécurité/SEO/a11y (`32c5611` → `ce3c444`) + `7411c2f refactor(p0): unify theme and align commercial data`.
- **P1A non commité** : positionnement éditorial + restructuration accueil + correctifs ancres + docs (working tree).

## Routes (22 : 21 pages + 1 API)

- **Actives** (nav/footer) : `/`, `/expertise`, `/projets`, `/parcours`, `/contact`, `/temoignages`, `/faq`, `/legal/privacy`.
- **Héritées** (hors nav, encore dans le sitemap) : `/about`, `/experience`, `/automation`, `/automatisation-processus`, `/development`, `/data-operations`, `/agents-ia`, `/cv/automation`, `/cv/development`, `/testimonials`, `/projects/*` (3).
- Leur sort (fusion/redirection/noindex) est tranché en **P1B** (voir matrice validée).

## À faire (P1B+)

1. Routes héritées : fusionner/rediriger/noindex selon la matrice validée (ex. `/experience` → `/parcours`, `/testimonials` → 301 `/temoignages`, `/automation` + `/development` conservées comme profils partageables).
2. Retirer `services×4` (data legacy, plus utilisée) et `src/content/testimonials.ts`.
3. Supprimer `tailwind.config.ts` + nettoyer `STATS_TOKEN` / `/api/stats` résiduels (`.env.example`, `docker-compose.yml`).
4. Configurer `RESEND_API_KEY` / `CONTACT_EMAIL` / `CONTACT_FROM` avant déploiement (envoi réel).
5. Pusher `feat/refonte-offre-client` vers origin (après validation).
6. Dette technique : pas d'ESLint, pas de tests automatisés.

## Affirmations en attente de preuve

`pendingValidation` (9 affirmations) toujours masquées dans `content.ts`. Témoignages masqués (`src/content/testimonials.ts`).
