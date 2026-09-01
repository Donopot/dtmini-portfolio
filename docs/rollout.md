# Rollout — dtmini.com (refonte « offre client »)

> **Runbook à exécuter APRÈS le correctif Next.js 15.5.x du 26/08.**
> BLOQUANT temporel : ne pas déployer avant l'application de ce correctif de sécurité.
> Aucune commande ne doit toucher au conteneur DnD ni à `dnd.dtmini.com`.

## État actuel vs cible

| Point | Actuel (prod) | Cible |
|---|---|---|
| Code | pré-P3B | `6f4bd5b` + patch Next 15.5.x |
| Binding | `0.0.0.0:3100` (LAN exposé) | `127.0.0.1:3100` (loopback) |
| `HOSTNAME` | non défini | `0.0.0.0` |
| Healthcheck | `unhealthy` | `healthy` |
| Gestion | `docker run` | `docker compose` |

## Prérequis

1. Correctif Next.js 15.5.x appliqué localement (commit + `package-lock.json` régénéré).
2. `npm run build` vert (local).
3. `.env` sur le HP Mini avec `CONTACT_EMAIL`, `CONTACT_FROM`, `RESEND_API_KEY`.
4. SSH opérationnel (clé `/opt/data/home/.ssh/id_ed25519`, préfixe `LD_PRELOAD=/tmp/getpwuid_fix.so`).

## Phase 0 — Pre-flight (lecture seule)

```bash
# ID + état du conteneur de production (noter pour comparaison + rollback)
docker ps -a --filter name=^dtmini-portfolio$ --format "{{.ID}} {{.Status}}"

# Image actuelle (pour rollback)
docker inspect dtmini-portfolio --format "{{.Image}}"

# Caddy + dnd.dtmini.com OK ?
curl -sI https://dtmini.com/ | head -1
curl -sI https://dnd.dtmini.com/ | head -1
```

## Phase 1 — Transfert + build

```bash
# 1. Depuis le conteneur Hermes : tarball du code (hors dépôt)
tar czf /tmp/dtmini-deploy.tar.gz \
  --exclude=node_modules --exclude=.next --exclude=.git \
  -C /opt/data/workspace/dtmini-portfolio .

# 2. Transfert vers le HP Mini (dossier temporaire)
cat /tmp/dtmini-deploy.tar.gz | env LD_PRELOAD=/tmp/getpwuid_fix.so ssh \
  -o StrictHostKeyChecking=no -i /opt/data/home/.ssh/id_ed25519 donopot@192.168.1.3 \
  'mkdir -p ~/deploy-dtmini && cd ~/deploy-dtmini && tar xzf -'

# 3. Build de l'image (tag daté)
env LD_PRELOAD=/tmp/getpwuid_fix.so ssh -o StrictHostKeyChecking=no \
  -i /opt/data/home/.ssh/id_ed25519 donopot@192.168.1.3 \
  'cd ~/deploy-dtmini && docker build -t dtmini-portfolio-portfolio:$(date +%Y%m%d) .'
```

## Phase 2 — Switch (bascule)

```bash
# Option A — simple (coupure ~10 s, recommandé pour un portfolio)
env LD_PRELOAD=/tmp/getpwuid_fix.so ssh -o StrictHostKeyChecking=no \
  -i /opt/data/home/.ssh/id_ed25519 donopot@192.168.1.3 '
  docker stop dtmini-portfolio
  docker rm dtmini-portfolio
  cd ~/deploy-dtmini
  docker compose up -d
'
```

> `docker compose up -d` crée le conteneur `dtmini-portfolio` avec `127.0.0.1:3100:3100` + `HOSTNAME=0.0.0.0` (port interne 3100).

## Phase 3 — Vérification

```bash
# Healthcheck → healthy
docker inspect dtmini-portfolio --format "{{.State.Health.Status}}"

# Binding loopback (doit être 127.0.0.1, PAS 0.0.0.0)
ss -tlnp | grep :3100

# Réponse port hôte
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3100/

# Réponse publique via Caddy
curl -sI https://dtmini.com/ | head -1        # HTTP/2 200

# dnd.dtmini.com intact
curl -sI https://dnd.dtmini.com/ | head -1
```

## Phase 4 — Rollback (si échec)

```bash
env LD_PRELOAD=/tmp/getpwuid_fix.so ssh -o StrictHostKeyChecking=no \
  -i /opt/data/home/.ssh/id_ed25519 donopot@192.168.1.3 '
  docker stop dtmini-portfolio
  docker rm dtmini-portfolio
  docker run -d --name dtmini-portfolio --restart unless-stopped \
    -p 3100:3100 <ANCIENNE_IMAGE>
'
```

## Checklist de déploiement

### Avant
- [ ] Correctif Next 15.5.x appliqué + commité localement
- [ ] `npm run build` vert
- [ ] `git diff --check` propre
- [ ] `.env` prêt sur le HP Mini (Resend)
- [ ] ID + état du conteneur prod relevés
- [ ] Image actuelle taguée (rollback)

### Pendant
- [ ] Transfert du code OK
- [ ] Build image OK

### Après
- [ ] Healthcheck `healthy`
- [ ] Binding `127.0.0.1:3100` (pas `0.0.0.0`)
- [ ] `curl https://dtmini.com/` → 200
- [ ] `dnd.dtmini.com` intact
- [ ] Conteneurs DnD / saas-backend inchangés
- [ ] Formulaire de contact testé (si possible)
- [ ] Fichiers temporaires nettoyés

### Rollback prêt
- [ ] Commande de rollback documentée + image précédente disponible
