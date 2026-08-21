# État actuel — dtmini-portfolio

> Snapshot généré le **2026-08-21**. Source : `git log`, arborescence réelle, `npm run typecheck` + `npm run build`.

## Synthèse

| Élément | État |
|---|---|
| Refonte commerciale | P0 ✅ · P1A ✅ · P1B ✅ (commités) · **P2B ✅ (commité `6aced09`)** · **P2C visuels ✅ (non commité)** |
| Branche active | `feat/refonte-offre-client` |
| Push vers origin | ❌ branche **non poussée** |
| Positionnement | ✅ freelance (« Freelance · Automatisation, IA & outils métier ») |
| Projets | ✅ 4 réalisations factuelles + visuels réels intégrés |
| Thème | ✅ tokens sémantiques light/dark unifiés |
| TypeScript / build | ✅ `typecheck` 0 erreur · `build` 22 routes |

## Git

- **8 commits non poussés** : `32c5611`→`ce3c444` (sécurité/SEO/a11y) + `7411c2f refactor(p0)` + `2600c26 feat(p1a)` + `c8c91f7 refactor(p1b)` + `6aced09 refactor(p2b)`.
- **P2C non commité** : visuels réels (démo RAG synthétique + graphiques notebooks DA) + réindexation de 2 pages + sitemap 10 URL.

## Routes & SEO

### Indexables (sitemap — 10)
`/`, `/expertise`, `/projets`, `/projets/dnd-vtt`, `/projets/automatisation-operations`, `/projets/rag-documentaire`, `/projets/prevision-energetique`, `/parcours`, `/faq`, `/contact`.

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
`/automation`, `/development`, `/cv/automation`, `/cv/development` (profils/CV partageables) · `/temoignages` (preuve sociale en attente). `/legal/privacy` : `noindex, follow`.

## Registre des projets (distinction de nature)

| Slug | Nature | Statut | Indexation |
|---|---|---|---|
| `dnd-vtt` | Projet personnel (open source) | Beta privée active · auto-hébergé | ✅ indexée |
| `automatisation-operations` | Expérience professionnelle interne (ChangeNOW) | Terminée · sans chiffre (confidentialité) | ✅ indexée |
| `rag-documentaire` | Contribution open source (fork) | Terminée · démo synthétique | ✅ indexée |
| `prevision-energetique` | Projet d'étude (DataScientest / Mines PSL 2023–2024) | Terminé · notebooks Jupyter | ✅ indexée |

## Provenance des visuels (P2C)

| Projet | Asset | Provenance | Type |
|---|---|---|---|
| `dnd-vtt` | schéma « Architecture » textuel | aucune capture production | — |
| `automatisation-operations` | — | absence volontaire (confidentialité) | — |
| `rag-documentaire` | `demo-accueil.png`, `demo-resultats.png` | application Streamlit réellement exécutée sur un corpus **100 % synthétique** (fictif) | démonstration synthétique |
| `prevision-energetique` | `temperature-consommation.png`, `evolution-consommation.png`, `prevision-consommation.png` | régénérés depuis le notebook `Project DA Energy 1.1.ipynb` + `df_monthly_mean.csv` (dépôt `Donopot/DA`) | graphique de notebook |

### Détail prévision énergétique (reproduction)
- **Notebook source** : `Project DA Energy 1.1.ipynb` (cellules 131, 137, 146-149).
- **Données** : `df_monthly_mean.csv` (96 mois, consommation + température moyenne).
- **Méthode** : régression OLS `Consommation ~ Average` → `Conso_ajuste` → lissage exponentiel (Holt-Winters) pour la prévision 2019.
- **Transformations visuelles** : libellés d'axes en français, titres explicites, palette fixe. Aucune modification des résultats.

### Détail RAG (démonstration)
- Corpus synthétique « Lumina Solutions » (6 documents fictifs, aucune donnée réelle).
- Module réutilisé : `retrievers.py` (HybridRetriever BM25 + dense + RRF) du dépôt `Donopot/Epstein_Files_RAG`.
- Légende affichée : « Démonstration réalisée sur un corpus synthétique. »

## À faire (post-P2C)

1. Pusher `feat/refonte-offre-client` vers origin (après validation).
2. Nettoyer `.env.example` / `docker-compose.yml` (`STATS_TOKEN`, `/api/stats` résiduels) + supprimer `tailwind.config.ts`.
3. Configurer `RESEND_API_KEY` / `CONTACT_EMAIL` / `CONTACT_FROM` avant déploiement (envoi réel).
4. Dette technique : pas d'ESLint, pas de tests automatisés.

## Assainissement (P2B, toujours d'actualité)

- Métriques non prouvées supprimées (« 15h→2h », « +35% », « 50 workflows », « MAPE/MAE < 5% », « < 2s », « 100 000 chunks », etc.).
- Stacks fausses retirées (Stripe, OpenAI GPT-4, NextAuth, Vercel, Railway, Prophet, etc.).
- `src/content/testimonials.ts` et `pendingValidation` supprimés (récupérables via Git).
