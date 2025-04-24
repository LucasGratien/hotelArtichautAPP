---
title: Mise en place
---

### Documentation : Mise en place d'un Store de Plugins et Composables dans un projet Nuxt 3

#### Introduction

Dans un projet Nuxt 3, un store de plugins et composables est un moyen puissant de centraliser et de réutiliser la logique dans différentes parties de votre application. Nuxt 3 permet de créer un **store** pour gérer l'état global de l'application, et les **composables** sont des fonctions qui encapsulent des fonctionnalités réutilisables. En les combinant, vous pouvez améliorer la modularité, l'organisation du code et la réutilisation des fonctionnalités dans toute l'application.

#### 1. Pourquoi utiliser un Store de Plugins et Composables ?

- **Modularité** : Les plugins et composables permettent de diviser la logique en unités indépendantes et réutilisables.
- **Réutilisabilité** : Une fois qu'un plugin ou composable est créé, il peut être réutilisé partout dans l'application.
- **Simplification du Code** : Il permet de ne pas répéter les mêmes fonctions ou logiques dans différentes parties de l'application.
- **Gestion de l'état centralisée** : Le store Nuxt 3 est l'endroit où vous pouvez centraliser et gérer l'état de votre application de manière prévisible.

#### 2. Structure du Projet

Voici un exemple de structure de répertoires pour organiser vos plugins et composables dans un projet Nuxt 3 :

```
/Racine du projet :
  ├── /composables
  │   └── useApiFetch.js
  │
  ├── /plugins
  │   └── app.js
  │
  └── /store
      └── hotel.js
```

#### 3. Mise en place d'un Store dans Nuxt 3

Le store dans Nuxt 3 est un fichier `index.js` situé dans le répertoire `/store`. Ce fichier contient l’état centralisé, les mutations, les actions, et les getters qui peuvent être partagés à travers toute l’application.

Voici un exemple de la mise en place d'un store de base :

##### 3.1.Notre Store : `store/hotel.js`

```javascript
import { defineStore } from "pinia";
import { useApiFetch } from "@/composables/useApiFetch.js";

export const useHotelStore = defineStore("hotel", {
  state: () => ({
    roomCategories: [],
    langSelector: [],
    currentLang: { id: 1 },
    contents: [],
  }),

  getters: {
    language: (state) => {
      return (category) =>
        state.contents.filter((item) => {
          return (
            state.currentLang.id === item.language.id &&
            item.name.includes(category)
          );
        });
    },
  },

  actions: {
    async loadCommonData() {
      try {
        const roomResponse = await useApiFetch(`/rooms-category/lang-1`);
        const langResponse = await useApiFetch(`/language`);
        const contentResponse = await useApiFetch(`/content`);

        console.log("Langues récupérées:", langResponse.data.value);

        this.roomCategories = roomResponse.data.value || [];
        this.langSelector = langResponse.data.value || [];
        this.currentLang = this.langSelector.find(
          (lang) => lang.id === this.currentLang.id,
        ) || { id: 1 };
        this.contents = contentResponse.data.value || [];
      } catch (error) {
        console.error("Erreur :", error);
      }
    },

    async changeLanguage(id) {
      try {
        const langResponse = await useApiFetch(`/language/${id}`);
        console.log("Langue après changement:", langResponse.data.value);

        this.currentLang = langResponse.data.value || {
          id: 1,
          lang: "Français",
        };
      } catch (error) {
        console.error("Erreur :", error);
      }
    },
  },
});
```

#### 4. Mise en place d'un Composable

Un composable est une fonction qui encapsule une fonctionnalité réutilisable. Elle peut être utilisée dans plusieurs composants sans avoir besoin de dupliquer la logique. Les composables sont placés dans le répertoire `/composables`.

##### 4.1. Exemple de Composable : `composables/app.js`

```JavaScript
export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();

    // const tokenCookie = useCookie('token', {watch: true});
    // const token = tokenCookie.value;

    options.baseURL = config.public.apiBaseUrl;
    // options.headers = token ? {Authorization: `Bearer ${token}`} : {};

    return useFetch(path, options);
};
```

#### 5. Mise en place d'un Plugin

Les plugins dans Nuxt 3 sont des fichiers JavaScript ou TypeScript qui vous permettent de configurer des librairies externes, d'ajouter des fonctionnalités globales, ou d'injecter des objets dans l'application.

##### 5.1. Exemple de Plugin : `plugins/useApiFetch.js`

```javascript
export const useApiFetch = (path, options = {}) => {
  const config = useRuntimeConfig();

  // const tokenCookie = useCookie('token', {watch: true});
  // const token = tokenCookie.value;

  options.baseURL = config.public.apiBaseUrl;
  // options.headers = token ? {Authorization: `Bearer ${token}`} : {};

  return useFetch(path, options);
};
```

Ensuite, vous pouvez utiliser ce plugin dans vos composables ou composants :

#### 6. Utilisation du Store et des Composables

Une fois que le store, les plugins et les composables sont en place, vous pouvez les utiliser dans vos composants Vue comme suit :

##### 6.1. Exemple d'Utilisation dans un Composant

```vue
<script setup>
import { computed, onMounted } from "vue";
import { useHotelStore } from "@/stores/hotel.js";

const hotelStore = useHotelStore(); //utilisation de mon store

const activeLanguage = computed(() => hotelStore.currentLang);

const changeLanguage = (item) => {
  console.log("Changement de langue :", item.id);
  hotelStore.changeLanguage(item.id);
};
</script>

<template>
  <UDropdown
    :items="[$hotel.langSelector]"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar
      :src="
        activeLanguage?.image?.url ||
        'https://stickerapp.fr/cdn-assets/images/preview/2016/08/05/design-11220/template-sticker-300x300.png'
      "
    />

    <template #item="{ item }">
      <span class="truncate" @click="changeLanguage(item)">{{
        item.lang
      }}</span>
      <img
        v-if="item.image?.url"
        :src="item.image.url"
        class="flex-shrink-0 h-4 w-4 ms-auto"
        alt=""
      />
    </template>
  </UDropdown>
</template>
```

#### 7. Conclusion

La mise en place d'un store de plugins et composables dans un projet Nuxt 3 permet de gérer l'état de l'application de manière centralisée et d'encapsuler des fonctionnalités réutilisables de manière modulaire. Cette approche améliore la maintenabilité et la lisibilité du code, tout en facilitant l'intégration de nouvelles fonctionnalités.

En résumé, voici les principaux avantages :

- **Réutilisation du Code** : Les composables permettent de partager la logique entre plusieurs composants.
- **Gestion Centrale de l'État** : Le store facilite la gestion de l'état global de l'application.
- **Modularité** : Chaque fonctionnalité peut être isolée et facilement testée.

N'hésitez pas à adapter cette architecture en fonction de vos besoins spécifiques !
