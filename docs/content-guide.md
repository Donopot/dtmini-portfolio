# Guide de contenu — dtmini-portfolio

## Où sont les données

| Fichier | Contenu | Modifiable ? |
|---|---|---|
| `src/data/content.ts` | Navigation, hero (badge/headline/intro), problèmes, méthode, services, projets, footer | ✅ principal |
| `src/data/offers.ts` | 4 offres commerciales | ✅ importé (section Offres) |
| `src/data/faq.ts` | 6 questions/réponses | ✅ importé (section FAQ + page /faq) |
| `src/content/testimonials.ts` | 3 témoignages | 🔒 masqués (validation en attente) |

## Modifier le contenu

1. Éditer le fichier concerné dans `src/data/` (ou `src/content/`).
2. `npm run build` pour vérifier.
3. Redéployer (voir `docs/deployment.md`).

## Ajouter un projet

Dans `src/data/content.ts` → tableau `projects` :

```ts
{
  id: "mon-projet",
  name: "Nom du projet",
  category: "Automatisation | IA | Data Science | Web | Web3",
  description: "…",
  results: ["Résultat 1", "Résultat 2"],
  link: "https://…",        // optionnel
  tags: ["Python", "Docker"],
}
```

## Ajouter / modifier une offre

`src/data/offers.ts` → tableau `offers` (interface `Offer`). Relié à la section Offres de l'accueil via `OffersSection.tsx` ; le champ `contactType` préremplit le formulaire `/contact?type=…`.

## Ajouter un témoignage

`src/content/testimonials.ts` → tableau `testimonials`. ⚠️ Les témoignages actuels sont **masqués** en attendant la validation de l'identité des auteurs. Ne pas publier sans validation explicite de Donovan.

## Ajouter un CV PDF

1. Placer le PDF dans `public/cv/`.
2. Routes existantes : `/cv/automation`, `/cv/development`.

## Design tokens

Modifier les couleurs dans `src/app/globals.css` → bloc `@theme` (PAS `tailwind.config.ts`, ignoré par Tailwind v4). Voir `docs/architecture.md` pour la table complète des tokens.

## Règle d'or : affirmations chiffrées

Toute affirmation non prouvée (73 % de réduction, 10 000 contacts, ~200 fichiers, etc.) va dans `pendingValidation` (fin de `content.ts`) et ne doit **pas** être affichée publiquement. C'est une contrainte de conformité, pas une suggestion.
