export interface CaseStudy {
  slug: string;
  title: string;
  contexte: string;
  intervention: string;
  resultat: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "base-contacts-consolidee",
    title: "Base de contacts consolidée",
    contexte:
      "Une organisation disposait de contacts éparpillés dans plusieurs fichiers Excel, formulaires en ligne, exports d'outils métier et données saisies par différentes équipes. Ces sources hétérogènes — plus de 10 000 entrées au total — contenaient des doublons, des formats incohérents (prénoms/noms inversés, numéros de téléphone avec ou sans indicatif, adresses email en minuscules/majuscules), et des informations partielles selon les équipes. Chaque service maintenait sa propre version, rendant impossible une vision unifiée des interlocuteurs.",
    intervention:
      "Définition d'un modèle de contact commun couvrant tous les champs nécessaires aux différentes équipes. Mise en place d'un pipeline de normalisation : uniformisation des formats (casse, ponctuation, indicatifs téléphoniques), parsing des noms complets en prénom/nom, validation des adresses email. Conception d'un algorithme de fusion et dédoublonnage basé sur des règles de correspondance (email, nom+prénom fuzzy, téléphone). Création de contrôles qualité automatisés pour détecter les incohérences résiduelles et les données manquantes. Centralisation dans une base unique accessible à toutes les équipes.",
    resultat:
      "Constitution d'une base de contacts unique et fiable, partagée par l'ensemble des équipes. Les doublons ont été résolus et les formats sont désormais homogènes. Les contrôles qualité automatisés permettent de maintenir la cohérence dans le temps. Les équipes disposent d'une source de vérité commune pour leurs actions de communication et de suivi.",
  },
  {
    slug: "standardisation-fichiers",
    title: "Standardisation de fichiers",
    contexte:
      "Dans le cadre d'un processus de reporting, environ 200 fichiers CSV, XLS et XLSX étaient reçus chaque période, provenant de multiples contributeurs aux pratiques hétérogènes. Les fichiers variaient dans leur structure : colonnes nommées différemment pour les mêmes données, dates dans des formats variés (JJ/MM/AAAA, MM/JJ/AAAA, AAAA-MM-JJ), séparateurs décimaux alternant entre point et virgule, lignes d'en-tête absentes ou décalées. Le traitement manuel de ces fichiers mobilisait plusieurs jours de travail à chaque cycle.",
    intervention:
      "Développement d'un système de détection automatique du format et de la structure de chaque fichier : identification de l'en-tête, du séparateur, du type des colonnes, du format des dates. Création d'un moteur de mapping intelligent associant les colonnes sources aux colonnes cibles du schéma standard, avec règles de transformation (normalisation des dates, conversion des nombres, gestion des valeurs manquantes). Implémentation d'une gestion des erreurs fine : fichiers rejetés avec diagnostic précis, corrections semi-automatiques pour les cas les plus fréquents. Script de consolidation automatique produisant un fichier unique standardisé.",
    resultat:
      "Le traitement des 200 fichiers est désormais automatisé, avec un temps de passage réduit à quelques minutes de supervision. Les erreurs sont détectées et remontées de façon explicite, permettant aux contributeurs de corriger leurs fichiers à la source. La consolidation produit un jeu de données fiable et homogène, prêt pour l'analyse.",
  },
  {
    slug: "automatisation-multi-equipes",
    title: "Automatisation multi-équipes",
    contexte:
      "Plusieurs équipes au sein d'une organisation utilisaient des outils distincts (CRM, outil de facturation, plateforme de gestion de projet) qui ne communiquaient pas entre eux. Des informations critiques — statuts de projet, données clients, suivis financiers — devaient être ressaisies manuellement d'un outil à l'autre, source d'erreurs et de retards. Les échanges reposaient sur des exports CSV manuels et des copier-coller, avec une traçabilité quasi inexistante. Une erreur de saisie dans un outil pouvait se propager silencieusement aux autres pendant des semaines.",
    intervention:
      "Cartographie des flux de données entre les outils et identification des événements déclencheurs (création client, changement de statut projet, validation de facture). Mise en place d'API et de webhooks pour interconnecter les systèmes : synchronisation automatique des données entre le CRM et l'outil de facturation, remontée des statuts projets vers le tableau de bord direction. Implémentation de mécanismes de reprise sur erreur avec journalisation détaillée et alertes en cas d'échec. Rédaction d'une documentation technique et fonctionnelle pour chaque flux. Introduction de briques d'IA supervisée pour la classification automatique de certaines données et la suggestion de rapprochements.",
    resultat:
      "Les données circulent automatiquement entre les outils, supprimant les doubles saisies et leurs erreurs associées. Les équipes ont désormais une vision à jour et cohérente des informations partagées. La traçabilité complète des échanges permet d'identifier et de corriger rapidement tout incident. Les équipes métier ont gagné en autonomie grâce à la documentation.",
  },
];
