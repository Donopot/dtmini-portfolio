# Guide de contenu — dtmini-portfolio

## Mettre à jour les données

Tout le contenu textuel est dans `src/content/` :

| Fichier | Ce qu'il contient |
|---------|-------------------|
| `site.ts` | Nom, titre, tagline, disponibilité, preuves chiffrées, liens sociaux |
| `projects.ts` | Projets techniques (titre, description, stack, liens) |
| `case-studies.ts` | Études de cas métier anonymisées |
| `experience.ts` | Expériences professionnelles et formations |
| `skills.ts` | Groupes de compétences |

Modifier un de ces fichiers → `npm run build` → redéployer.

## Ajouter une image

1. Placer l'image dans `public/images/`
2. Référencer avec `/images/nom-fichier.jpg` dans le composant

## Ajouter un CV PDF

1. Placer les PDF dans `public/cv/`
2. Les routes `/cv/automation` et `/cv/development` pointent vers ces fichiers

## Style

- Palette : teal (`#0f766e`), blanc, gris
- Typographie : system fonts
- Responsive : mobile-first, testé à 360/390/768/1024/1440 px
