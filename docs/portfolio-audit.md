# Audit initial — dtmini.com Portfolio

**Date** : 25 juillet 2026  
**Auditeur** : Hermes Agent (exécution automatique)  
**Référence** : Cahier des charges DT Mini Portfolio v1.0

---

## 1. Résumé exécutif

| Élément | État |
|---------|------|
| Dépôt portfolio | ❌ **Aucun** — `Donopot/Vercel-repo` est un dashboard GA4, pas un portfolio |
| Site actuel dtmini.com | 🟡 Page statique « Portail des services DT Mini » (10 KB, Caddy) |
| dnd.dtmini.com | 🔴 **502 Bad Gateway** — backend DnD DOWN |
| www.dtmini.com | 🔴 **Ne répond pas** (SSL error / pas de résolution) |
| Reverse proxy | ✅ Caddy |
| Déploiement | ✅ Fichier statique servi par Caddy (pas Vercel) |

**Décision** : Créer un nouveau dépôt `Donopot/dtmini-portfolio` (conformément au cahier des charges, section 3.1).

---

## 2. Infrastructure existante

### 2.1 DNS
- `dtmini.com` → ✅ Résout et répond (Caddy, HTTP/2 200)
- `www.dtmini.com` → ❌ Pas de réponse / SSL error
- `dnd.dtmini.com` → ⚠️ Résout mais **502** (backend down)

### 2.2 Reverse proxy
- **Caddy** détecté (header `server: Caddy`)
- Pas de Vercel (aucun header `x-vercel-*`)
- Pagina actuelle : statique, last-modified 29 mai 2026

### 2.3 Contenu actuel de dtmini.com

Page « Portail des services DT Mini » contenant des liens vers :
- SaaS documentaire, DnD Interface, Health API, Accès client, Administration documents, Console MinIO, Audit, Service IA, Monitoring, Nouveau SaaS

**Ce n'est pas un portfolio professionnel** — c'est un dashboard interne.

### 2.4 Repos GitHub

| Repo | Contenu | Pertinence |
|------|---------|------------|
| `Donopot/Vercel-repo` | KBG GA4 Dashboard (Node.js, Vercel) | ❌ Sans rapport |
| `Donopot/DnD` | Application DnD SaaS (React/FastAPI) | ⚠️ Source du backend 502 |
| `Donopot/Epstein_Files_RAG` | RAG documentaire | ✅ Projet à référencer |
| `Donopot/DA` | Prévision énergétique | ✅ Projet à référencer |
| `Donopot/pro-repo` | Hub professionnel (templates, CRM) | 🟡 Contenu réutilisable |

**Aucun dépôt `dtmini-portfolio` n'existe.**

---

## 3. État de dnd.dtmini.com — PREUVE DE RÉFÉRENCE

```
HTTP/2 502
server: Caddy
date: Sat, 25 Jul 2026 08:38:05 GMT
```

⚠️ **CRITIQUE** : Le backend DnD est DOWN au moment de l'audit. Conformément au cahier des charges :
- **Ne jamais casser, arrêter ou reconfigurer aveuglément dnd.dtmini.com**
- Le portfolio doit être déployé dans un **conteneur distinct**
- Aucune modification du bloc Caddy `dnd.dtmini.com`

La cause du 502 n'est pas investiguée ici (hors périmètre portfolio). Le déploiement du portfolio ne doit **pas aggraver** cette situation.

---

## 4. Décision technique

### 4.1 Stack proposée

| Couche | Choix | Justification |
|--------|-------|---------------|
| Framework | **Next.js (App Router)** | Rendu statique, TypeScript, routes fichiers, SEO natif |
| Style | **Tailwind CSS** | Cohérent avec les autres projets, rapide, maintenable |
| Contenu | **Fichiers TypeScript versionnés** | `src/content/experience.ts`, `projects.ts`, etc. |
| Déploiement | **Docker + Caddy** | Conteneur séparé, port 127.0.0.1 uniquement |
| Package manager | **pnpm** (déjà installé) | Cohérent avec x402 |

### 4.2 Repo

- **Nom** : `Donopot/dtmini-portfolio`
- **Branche** : `feature/dtmini-portfolio-v1`
- **Ne pas mélanger avec DnD ou x402**

---

## 5. Contraintes validées

- [x] Aucun dépôt existant n'entre en conflit
- [x] dnd.dtmini.com identifié (502) — preuve sauvegardée dans `dtmini-portfolio-backup/dnd-headers.txt`
- [x] dtmini.com actuel sauvegardé dans `dtmini-portfolio-backup/dtmini-current.html`
- [x] Pas de docker-compose existant pour le portfolio
- [x] Caddy est le reverse proxy (pas Nginx)

---

## 6. Prochaines étapes

1. Créer le repo `Donopot/dtmini-portfolio`
2. Scaffolder l'app Next.js + TypeScript + Tailwind
3. Créer la branche `feature/dtmini-portfolio-v1`
4. Implémenter selon le cahier des charges (sections 5-12)
5. Builder, tester, préparer le Dockerfile
6. Déployer via Caddy (nouveau bloc, port dédié)
7. Vérifier dnd.dtmini.com après déploiement

---

## 7. Fichiers sauvegardés

- `dtmini-portfolio-backup/dtmini-current.html` — page actuelle (10 371 bytes)
- `dtmini-portfolio-backup/dtmini-headers.txt` — en-têtes HTTP
- `dtmini-portfolio-backup/dnd-headers.txt` — preuve 502
- `dtmini-portfolio-backup/www-headers.txt` — preuve échec www

---

*Audit conforme à la section 3.1 du cahier des charges.*
*Prêt pour implémentation.*
