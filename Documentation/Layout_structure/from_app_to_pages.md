### Montage de la structure layout_pages 

#### Introduction

Sous Nuxt 3 la construction des pages est un ajout d'elements depuis app.vue (le point d'entrée de lecture du naviguateur).
Comme l'ensemble des pages sur le framework Vue.js, nous utilisons les sections 
    
    <template> 
Pour les structures html et appels de composants 

    <style> 
Pour les integrations de style css et classes

    <script> 
Pour l'intégration de Javascript

#### 1. **app.vue** (`@/app.vue`)

Ici la première page d'entrée app.vue  se présente comme suit:

```
<template>

<UiPageTransition/>
<NuxtLayout>
<NuxtPage/>
</NuxtLayout>

</template>
```

Dans notre template nous retrouvons 3 élements 

```
<UiPageTransition/>
```
UiPageTransition est notre composant qui assurera les effets de transition entre les pages, tandis que NuxtLayout et NuxtPage sont des composant natif au framework Nuxt3. 

```
<NuxtLayout/>
```
En effet lorsque nous appellons NuxtLayout, le framework va directement chercher dans notre structure de dossier, le dossier layouts et récupérer le fichier defaut.vue.
Attention ici le dossier doit être créé à la racine du projet afin d'être reconnu par le framework.

```
<NuxtPage/>
```
Le composant NuxtPage, va directement chercher le dossier pages à la racine du projet et reconnaître chaque fichier.vue et l'identifiera comme un routing possible d'une url appliqué à un NuxtLink.
Là encore bien faire attention à la casse et au typage de nos fichiers ( minuscule ou camel-case). 

A ce stade nous avons la structure suivante : 

 ```
 /Racine du projet :
  ├── /layouts
  │   └── default.vue
  │
  ├── /pages
  │   └── home.vue
  |   └── rooms.vue
  │
  └── /app.vue
 ```
    
Enfin dans le fichier app.vue nous avons aussi le css qui s'appliquera sur la globalité du site via des balises comme : 

```
html, body {
  width: 100vw;
  max-width: 100%;
  background-color: rgba(251, 249, 244, 1);
  letter-spacing: 2px;
}
```

#### 2. **default.vue** (`@/layouts/default.vue`)

Quand on se penche sur le fichier default.vue nous allons découvrir plusieurs types d'elements importants.

```
<template>
    <LayoutTheHeader/>
    <main class="main">
        <div>
            <slot/>
            <UiLogo/>
            <UiReview/>
        </div>
    </main>
    <layoutTheFooter/>
</template>
```

##### Les balises (`<LayoutTheHeader/>`)
```
<LayoutTheHeader/> et <layoutTheFooter/>
```

Il s'agit ici de deux composants que l'on va retrouver dans la structure de notre site à cette adresse : 

```
@/components/layout/TheFooter.vue
@/components/layout/TheHeader.vue
```

On constate encore ici que Nuxt va chercher composants en fonction du nommage de leur appel : 

    LayoutTheHeader

Chacun de ces composants contiennent respectivement l'ensemble des elements qui vont composer la partie haute du site (logo/navBar) ainsi que la partie basse du site (lien/payementMethode/signature)

##### La balise (`<slot/>`) 

```
<slot/>
```

Cette balise en Vue.js permet la réutilisation et l'encapsulation de la balise NuxtPage/ depuis le composant parent.
Ce sera donc à cet endroit que le contenu des fichiers présents dans pages sera projeté. 

##### Les balises (`<UiLogo/>`) & (`<UiReview/>`)

Il s'agit ici de composant que nous allons retrouver sur l'ensemble des pages de notre site. 
Là encore, on notera l'appel des composants par rapport à leur position dans la structure des dossiers : 

```
 UiReview:  correspond à '@/components/ui/Review.vue'
```

#### 3. **TheHeader.vue** (`@/components/layout/TheHeader.vue`)

Plongeons maintenant dans un des composants du layout7