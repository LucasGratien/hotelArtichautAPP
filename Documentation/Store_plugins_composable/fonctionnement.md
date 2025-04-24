### Explication de la logique du Store, Plugin et Composables dans Nuxt 3

Dans notre projet Nuxt 3, nous utilisons une architecture basée sur trois concepts principaux : **Store**, **Plugins** et **Composables**. Chacun d'eux joue un rôle spécifique pour structurer et centraliser notre logique métier de manière réutilisable et modulaire.

#### 1. **Store** (`store/hotel.js`)

Le store gère l'état global de l'application. Dans l'exemple, le store `hotel.js` utilise **Pinia** pour centraliser des données comme les catégories de chambres, les langues disponibles, et les contenus associés. Il fournit aussi des **actions** (pour charger les données depuis une API) et des **getters** (pour filtrer les données selon la langue actuelle).

- **Actions** : Méthodes pour modifier l'état, comme `loadCommonData()` qui récupère des informations depuis une API.
- **Getters** : Méthodes pour obtenir des données dérivées de l'état, comme `language()` qui filtre les contenus en fonction de la langue sélectionnée.

#### 2. **Composables** (`composables/useApiFetch.js`)

Les **composables** sont des fonctions réutilisables qui encapsulent des logiques fonctionnelles. Par exemple, `useApiFetch` est un composable qui gère la logique de récupération de données via une API. Il est utilisé partout où il est nécessaire de faire des appels API, et permet de centraliser cette logique pour éviter la duplication de code.

#### 3. **Plugins** (`plugins/useApiFetch.js`)

Les **plugins** sont utilisés pour ajouter des fonctionnalités globales ou injecter des services dans l'application. Dans cet exemple, le plugin `useApiFetch.js` configure l'URL de base de l'API pour toutes les requêtes, ce qui permet de ne pas répéter cette configuration à chaque appel d'API. Ce plugin est ensuite utilisé dans les composables pour effectuer les appels API.

---

### Conclusion

- **Store** : Centralise l'état de l'application et permet de le partager entre les composants.
- **Composables** : Encapsulent des logiques réutilisables pour les rendre accessibles dans plusieurs composants.
- **Plugins** : Injectent des services ou configurations globales, comme la configuration des appels API.

En résumé, cette approche modulaire améliore la maintenabilité, la réutilisabilité et la lisibilité du code tout en facilitant l'intégration de nouvelles fonctionnalités dans le projet.

---

