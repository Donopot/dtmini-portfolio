# Déploiement — dtmini-portfolio

## Prérequis serveur

- Docker + Docker Compose
- Caddy (reverse proxy existant)
- Port 3100 libre sur 127.0.0.1

## Build et déploiement

```bash
# 1. Builder l'image
docker compose build

# 2. Lancer le conteneur
docker compose up -d

# 3. Vérifier
curl http://127.0.0.1:3100
```

## Configuration Caddy

Ajouter ce bloc au Caddyfile existant (NE PAS toucher à `dnd.dtmini.com`) :

```caddy
www.dtmini.com {
    redir https://dtmini.com{uri} permanent
}

dtmini.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3100
}
```

Recharger Caddy :

```bash
caddy reload --config /etc/caddy/Caddyfile
```

## Retour arrière

```bash
# Arrêter le conteneur portfolio
docker compose down

# Restaurer l'ancienne configuration Caddy
cp Caddyfile.backup /etc/caddy/Caddyfile
caddy reload --config /etc/caddy/Caddyfile

# Revenir au commit précédent
git checkout <commit-avant-portfolio>
docker compose up -d
```

## Vérifications post-déploiement

- [ ] `curl -I https://dtmini.com` → 200
- [ ] `curl -I https://www.dtmini.com` → 301 → 200
- [ ] `curl -I https://dnd.dtmini.com` → inchangé (ne pas régresser)
- [ ] Navigation mobile : 360px, 390px, 768px
- [ ] Formulaire de contact fonctionnel
- [ ] CV téléchargeables
- [ ] Tous les liens externes fonctionnels

## Mise à jour

```bash
git pull origin main
docker compose build --no-cache
docker compose up -d
```
