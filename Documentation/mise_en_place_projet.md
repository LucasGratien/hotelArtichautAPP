---
title: Mise en place du projet
---
# Documentation : Cloner et Lancer le Projet Nuxt 3

## 1. Cloner le projet depuis GitHub

1. **Assurez-vous d'avoir Git installé**. Si ce n'est pas le cas, vous pouvez le télécharger et l'installer depuis [git-scm.com](https://git-scm.com/).

2. **Clonez le dépôt Git**. Ouvrez un terminal et utilisez la commande suivante pour cloner le projet dans un dossier de votre choix :

   ```bash
   git clone git@github.com:LucasGratien/hotelArtichautAPP.git
   ```

3. Accédez au répertoire du projet cloné :

   ```bash
   cd Documents/Artichault/hotelArtichaultnAPP
   ```

## 2. Installer les dépendances

Avant de démarrer le projet, il faut installer les dépendances nécessaires :

1. **Assurez-vous d'avoir Node.js installé**. Vous pouvez vérifier cela avec la commande :

   ```bash
   node -v
   ```

   Si vous n'avez pas Node.js, vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).

2. **Installez les dépendances du projet** en exécutant la commande suivante :

   ```bash
   npm install
   ```

   Cette commande va installer toutes les dépendances listées dans le fichier `package.json`.

## 3. Lancer le projet

Une fois les dépendances installées, vous pouvez démarrer le serveur de développement local avec la commande suivante :

```bash
npm run dev
```

Cela démarrera le serveur Nuxt 3 et vous pourrez accéder à votre application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## 4. Autres commandes utiles

- **Pour construire le projet pour la production** :

  ```bash
  npm run build
  ```

- **Pour démarrer le serveur de production** :

  ```bash
  npm run start
  ```

## Conclusion

En résumé, voici les étapes à suivre :

1. Clonez le projet avec `git clone`.
2. Installez les dépendances avec `npm install`.
3. Démarrez le serveur avec `npm run dev`.

