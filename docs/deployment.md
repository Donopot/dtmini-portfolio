# Déploiement — dtmini-portfolio

## Vue d'ensemble

- Build Next.js **`standalone`**, déployé via **Docker Compose**.
- Le conteneur écoute en `0.0.0.0:3100` **à l'intérieur** de son réseau Docker ; l'hôte ne publie que `127.0.0.1:3100` (loopback).
- **Seul Caddy** (reverse proxy sur l'hôte) atteint l'application ; aucun accès direct depuis le réseau local ou Internet.
- **Frontière de confiance** : Caddy est l'unique proxy d'entrée. Il ignore les en-têtes `X-Forwarded-*` fournis par le client et construit les siens. Le formulaire de contact peut donc lire `x-forwarded-for` fourni par Caddy, uniquement parce que l'application est limitée au loopback.

## Variables requises (`.env`)

| Variable | Rôle | Source |
|---|---|---|
| `PORT` | Port interne (fixé à `3100`) | Dockerfile / Compose |
| `HOSTNAME` | Binding interne (`0.0.0.0`) — requis pour le healthcheck | Dockerfile / Compose |
| `CONTACT_EMAIL` | Destinataire du formulaire de contact | `.env` |
| `CONTACT_FROM` | Expéditeur (domaine vérifié Resend) | `.env` |
| `RESEND_API_KEY` | Clé API Resend | `.env` |

> `HOSTNAME=0.0.0.0` est indispensable : sinon le serveur standalone se lie au hostname Docker (adresse de pont) et le healthcheck échoue en `Connection refused`.

## Build standalone

```bash
npm run build
# → génère .next/standalone/ (serveur auto-suffisant)
```

## Déploiement (Docker Compose)

```bash
cd dtmini-portfolio
docker compose build
docker compose up -d
```

Le `docker-compose.yml` publie `127.0.0.1:3100:3100` (loopback uniquement).

> ⚠️ Ne **jamais** utiliser `docker run -p 3100:3100` — cela exposerait l'application sur toutes les interfaces et contournerait Caddy.

## Healthcheck

- Interroge `http://127.0.0.1:3100/` (`wget -qO-`).
- Avec `HOSTNAME=0.0.0.0`, le serveur écoute sur toutes les interfaces du conteneur (loopback compris) → healthcheck `healthy`.

## Configuration Caddy

```caddy
www.dtmini.com {
    redir https://dtmini.com{uri} permanent
}
dtmini.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3100
}
```

> ⚠️ **Ne jamais toucher** au bloc `dnd.dtmini.com` (service séparé). Vérifier après chaque déploiement que le conteneur DnD est inchangé.

## Vérifications avant déploiement (local)

```bash
npm run typecheck
npm run lint          # si disponible
npm run build
```

## Vérifications après déploiement (hôte)

```bash
docker compose ps                                            # état healthy
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3100/   # 200
curl -sI https://dtmini.com/ | head -1                            # HTTP/2 200
# Conteneurs DnD / SaaS inchangés :
docker ps --filter name=dnd --filter name=saas-backend --format '{{.Names}} {{.Status}}'
```

## Redirections (9 permanentes)

| Source | Destination |
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

## Sitemap (10 URL)

`/`, `/expertise`, `/projets`, `/projets/dnd-vtt`, `/projets/automatisation-operations`, `/projets/rag-documentaire`, `/projets/prevision-energetique`, `/parcours`, `/faq`, `/contact`.

## Rollback

1. **Code** : `git checkout <commit précédent>` puis rebuild.
2. **Image** : re-tag l'image précédente (`docker image ls`) puis `docker compose up -d`.

## Pièges connus

- **SSH depuis le conteneur Hermes** : préfixer `LD_PRELOAD=/tmp/getpwuid_fix.so` (bug « No user exists for uid 1000 »).
- **Clé SSH autorisée** : `/opt/data/home/.ssh/id_ed25519` (pas `~/.ssh/`).
- **Porkbun `edit` BUGGÉ** : renomme la racine en `dtmini.com.dtmini.com` → toujours `DELETE` puis `CREATE` (avec `name=""` pour la racine).
- **Après reboot HP Mini** : si HTTPS renvoie `000`, purger le cache de certs Caddy puis redémarrer.

> Diagnostic complet « site down » : skill `dtmini-deploy` → `references/site-down-troubleshooting.md`.
