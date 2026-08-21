# État actuel — dtmini-portfolio

> Snapshot généré le **2026-08-21**. Source : `git log`, arborescence réelle, `npm run typecheck` + `npm run build`.

## Synthèse

| Élément | État |
|---|---|
| Refonte commerciale | P0 ✅ · P1A ✅ (commités) · P1B routes/SEO **en cours (non commité)** |
| Branche active | `feat/refonte-offre-client` |
| Push vers origin | ❌ 6 commits en avance, branche **non poussée** |
| Positionnement | ✅ freelance (« Freelance · Automatisation, IA & outils métier ») |
| Offres + FAQ | ✅ reliées (section Offres + FAQ accueil + page `/faq`) |
| Thème | ✅ tokens sémantiques light/dark unifiés |
| TypeScript / build | ✅ `typecheck` 0 erreur · `build` 19 routes |

## Git

- **6 commits non poussés** : 4 correctifs sécurité/SEO/a11y (`32c5611`→`ce3c444`) + `7411c2f refactor(p0)` + `2600c26 feat(p1a)`.
- **P1B non commité** : redirections + noindex + sitemap + nettoyage `services×4` + fusion `/about`→`/parcours`.

## Routes & SEO (P1B)

### Indexables (sitemap — 6)
`/`, `/expertise`, `/projets`, `/parcours`, `/faq`, `/contact`.

### Redirections 308 (next.config.ts)
| Ancienne | Vers |
|---|---|
| `/about` | `/parcours` (valeurs fusionnées) |
| `/experience` | `/parcours` |
| `/automatisation-processus` | `/automation` |
| `/data-operations` | `/expertise#structuration` |
| `/agents-ia` | `/expertise#ia` |
| `/testimonials` | `/temoignages` |

### noindex, follow (accès direct conservé, hors sitemap)
`/automation`, `/development`, `/cv/automation`, `/cv/development` (profils/CV partageables) · `/temoignages` (vide, preuve sociale en attente) · `/projects/dnd-saas`, `/projects/rag-documentaire`, `/projects/prevision-energetique` (incomplètes : placeholders + chiffres non vérifiés). `/legal/privacy` : `noindex, nofollow`.

## À faire (P2+)

1. Compléter les 3 pages `/projects/*` (captures réelles + chiffres validés), puis les réindexer et relier les cartes `/projets`.
2. Nettoyer `.env.example` / `docker-compose.yml` (`STATS_TOKEN`, `/api/stats` résiduels) + supprimer `tailwind.config.ts`.
3. Déplacer `src/content/testimonials.ts` (masqués) vers `src/data/` ou attendre validation.
4. Configurer `RESEND_API_KEY` / `CONTACT_EMAIL` / `CONTACT_FROM` avant déploiement (envoi réel).
5. Pusher `feat/refonte-offre-client` vers origin (après validation).
6. Dette technique : pas d'ESLint, pas de tests automatisés.

## Affirmations en attente de preuve

`pendingValidation` (9 affirmations) toujours masquées. Témoignages masqués (`src/content/testimonials.ts`).
