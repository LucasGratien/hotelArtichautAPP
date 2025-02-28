---
Instalation
---

### Compiiile

**NPM:**

```bash
npm install @compiiile/compiiile
```

- Je vérifie ensuite mon Package.json

```json
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "doc": "compiiile dev --title='Hotel artichault documentation'"
  },
  "dependencies": {
    "@compiiile/compiiile": "^2.16.1",
    "@nuxt/ui": "^2.20.0",
    "@pinia/nuxt": "^0.10.1",
    "@vueuse/core": "^12.7.0",
    "@vueuse/motion": "^2.2.6",
    "axios": "^1.7.9",
    "framer-motion": "^12.4.7",
    "nuxt": "^3.15.1",
    "pinia": "^3.0.1",
    "vue": "latest",
    "vue-router": "latest"
  }
}
```

- Dans le script je lui definie **_doc: compiiile_** dev pour lancer le serveur compiiile avec :

```bash
npm run doc
```

- je lui défini aussi un titre **_Hotel hartichault documentaion_** comme ceci :

```bash
--title = 'Hotel artichault documentation'
```

- je peux changer le titre des fichier en inscrivant ceci au début de mon fichier:

```bash
---
titre de votre choix
---
```
