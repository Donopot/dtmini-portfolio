# État actuel — dtmini-portfolio

> Snapshot généré le **2026-08-21**. Source : `git log`, arborescence réelle, `npm run typecheck` + `npm run build`.

## Synthèse

| Élément | État |
|---|---|
| Refonte commerciale | P0 ✅ · P1A ✅ · P1B ✅ (commités) · **P2B mise en conformité ✅ (non commité)** |
| Branche active | `feat/refonte-offre-client` |
| Push vers origin | ❌ branche **non poussée** |
| Positionnement | ✅ freelance (« Freelance · Automatisation, IA & outils métier ») |
| Projets | ✅ 4 réalisations factuelles (dnd-vtt, automatisation-operations, rag-documentaire, prevision-energetique) |
| Thème | ✅ tokens sémantiques light/dark unifiés |
| TypeScript / build | ✅ `typecheck` 0 erreur · `build` 22 routes |

## Git

- **7 commits non poussés** : `32c5611`→`ce3c444` (sécurité/SEO/a11y) + `7411c2f refactor(p0)` + `2600c26 feat(p1a)` + `c8c91f7 refactor(p1b)`.
- **P2B non commité** : 4 pages `/projets/[slug]`, assainissement (métriques/stack fausses), suppression `testimonials.ts` + `pendingValidation` + 3 pages `/projects/*`, 3 redirections, indexation de 2 projets.

## Routes & SEO

### Indexables (sitemap — 8)
`/`, `/expertise`, `/projets`, `/projets/dnd-vtt`, `/projets/automatisation-operations`, `/parcours`, `/faq`, `/contact`.

### Redirections 308 (next.config.ts — 9)
| Ancienne | Vers |
|---|---|
| `/about` | `/parcours` |
| `/experience` | `/parcours` |
| `/automatisation-processus` | `/expertise#automatisation` |
| `/data-operations` | `/expertise#structuration` |
| `/agents-ia` | `/expertise#ia` |
| `/testimonials` | `/temoignages` |
| `/projects/dnd-saas` | `/projets/dnd-vtt` |
| `/projects/rag-documentaire` | `/projets/rag-documentaire` |
| `/projects/prevision-energetique` | `/projets/prevision-energetique` |

### noindex, follow (accès direct conservé, hors sitemap)
`/automation`, `/development`, `/cv/automation`, `/cv/development` (profils/CV partageables) · `/temoignages` (preuve sociale en attente) · `/projets/rag-documentaire`, `/projets/prevision-energetique` (en attente de visuels). `/legal/privacy` : `noindex, follow`.

## Registre des projets (distinction de nature)

| Slug | Nature | Statut | Indexation |
|---|---|---|---|
| `dnd-vtt` | Projet personnel (open source) | Beta privée active · auto-hébergé | ✅ indexée |
| `automatisation-operations` | Expérience professionnelle interne (ChangeNOW) | Terminée · sans chiffre (confidentialité) | ✅ indexée |
| `rag-documentaire` | Contribution open source (fork) | Terminée · périmètre = commits confirmés | ⏸️ noindex (démo synthétique manquante) |
| `prevision-energetique` | Projet d'étude (DataScientest / Mines PSL 2023–2024) | Terminé · notebooks Jupyter | ⏸️ noindex (graphiques notebooks manquants) |

## Provenance des preuves / captures

| Projet | Preuve | Captures |
|---|---|---|
| `dnd-vtt` | Repo `Donopot/DnD` (README, docs/, 158 tests, 119 endpoints) | schéma « Architecture » textuel (aucune capture sur la production) |
| `automatisation-operations` | Aucune publique (confidentiel) | aucune (absence volontaire, confidentialité) |
| `rag-documentaire` | Repo `Donopot/Epstein_Files_RAG` (fork, commits) | ⚠️ démo locale synthétique à prévoir (P2C) |
| `prevision-energetique` | Repo `Donopot/DA` (notebooks, CSVs) | ⚠️ graphiques à exporter depuis les notebooks (P2C) |

## À faire (P2C)

1. P2C — Visuels et réindexation : démo synthétique neutre pour `rag-documentaire` ; export des graphiques notebooks pour `prevision-energetique` ; puis passage en `index, follow` + ajout au sitemap.
2. Nettoyer `.env.example` / `docker-compose.yml` (`STATS_TOKEN`, `/api/stats` résiduels) + supprimer `tailwind.config.ts`.
3. Configurer `RESEND_API_KEY` / `CONTACT_EMAIL` / `CONTACT_FROM` avant déploiement (envoi réel).
4. Pusher `feat/refonte-offre-client` vers origin (après validation).
5. Dette technique : pas d'ESLint, pas de tests automatisés.

## Assainissement (P2B)

- Suppression de toute métrique non prouvée : « 15h→2h », « +35% », « 50 workflows », « 200 questions/mois », « 8h/semaine », « 3 anomalies », « 500+ heures », « 30+ workflows », « 20+ collaborateurs », « 73% », « 10 000+ », « MAE/ MAPE < 5% », « < 2s », « 100 000 chunks ».
- Stacks fausses retirées : Stripe, OpenAI GPT-4, NextAuth, Vercel, Railway, Prophet, Streamlit (sur DA), Docker/FastAPI (sur DA et RAG).
- `src/content/testimonials.ts` supprimé (témoignages non autorisés) — récupérable via Git.
- `pendingValidation` (9 affirmations) supprimé de `content.ts` — récupérable via Git.
