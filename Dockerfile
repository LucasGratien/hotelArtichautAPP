# 1. On active les extensions BuildKit (utile pour le cache de mounts, secrets…)
# syntax=docker/dockerfile:1.5

# Étape de build : on utilise une image plus légère et on exploite le cache Docker
FROM node:22-alpine AS builder

# 1.1 Définir le répertoire de travail
WORKDIR /app

# 1.2 Copier uniquement les fichiers de dépendances pour profiter du cache
COPY package*.json ./

# 1.3 Installer les dépendances (seul le package.json change déclenchera cette étape)
RUN npm ci

# 1.4 Copier le reste du code
COPY . .

# 1.5 Lancer la compilation
RUN npm run build

# --------------------------------------------------

# Étape finale : image light pour la prod
FROM node:22-alpine AS runner

# 2.1 Création d’un utilisateur non‑root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app

# 2.2 Variables d’environnement
ENV NODE_ENV=production \
  PORT=3000

# 2.3 Copier le build et les dépendances de production
#     On n’apporte que l’essentiel : le dossier .output + package.json + node_modules (prod seulement)
COPY --from=builder /app/.output        ./.output
COPY --from=builder /app/node_modules   ./node_modules
COPY --from=builder /app/package.json   ./package.json

# 2.4 Exposer le port et ajouter un healthcheck
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# 2.5 Commande de démarrage
CMD ["node", ".output/server/index.mjs"]









