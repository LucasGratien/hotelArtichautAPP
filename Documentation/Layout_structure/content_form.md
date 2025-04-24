### Composant ContentForm

Le composant ContentForm est un composant Vue.js qui gère l'affichage et la manipulation de contenus avec 

    Une vue tableau pour les écrans larges (desktop)

    Une vue cartes pour les petits écrans (mobile)

    Des fonctionnalités CRUD complètes

    Un système de pagination

    Un formulaire modal pour l'ajout/modification

### Structure du Template

  **Vue Desktop (Tableau)**

    <div class="hidden md:block">
      <UTable data-test="content-table" :columns="columns" :rows="rowsWithExpandedState">
        <!-- Colonnes personnalisées -->
        <template #actions-data="{ row }">...</template>
        <template #modify-data="{ row }">...</template>
        <template #images-data="{ row }">...</template>
        <template #description-data="{ row }">...</template>
      </UTable> 
    </div>

  
  **Vue Mobile (Cartes)**
  

    <div class="md:hidden space-y-4 px-4">
      <div v-for="row in rowsWithExpandedState" :key="row.id" class="bg-white rounded-lg shadow-md p-4 space-y-3">
        <!-- Contenu de la carte -->
      </div>
    </div>


  **Pagination & Ajout de contenu**  

    <UPagination data-test="content-pagination" v-model="page" :page-count="pageCount" :total="store.contents.length"/>
    
    <UButton @click="openModal">Ajouter un contenu</UButton>
    <DynamicModalForm ... />

### Script Setup


  **Références et Stores**
    
    const store = useHotelStore();
    const dynamicModal = ref(null);
    const { deleteContent, modifyContent, createContent, loading } = useContentActions();


  **États Réactifs**  

|Variable	|Type	|Description
|page	|Ref	|Page actuelle dans la pagination
|pageCount	|Number	|Nombre d'éléments par page (fixé à 10)
|selectedItem	|Ref	|Élément sélectionné pour modification
|windowWidth	|Ref	|Largeur de la fenêtre pour le responsive
|expandedStates	|Ref	|État d'expansion des descriptions

   **Méthodes Principales**

     toggleDescription(id)

   Bascule l'état d'expansion d'une description

     fetchContent()

   Récupère les contenus depuis le store et initialise leurs états

     openModal()

   Ouvre le modal de formulaire
   
  
   **Gestion CRUD**
   
   handleDelete(id) - Supprime un contenu

   handleSubmit(formData) - Crée un nouveau contenu

   handleModify(id) - Ouvre le modal pour modifier un contenu

   saveModifiedData(id, updatedData) - Sauvegarde les modifications


   **Computed Properties**

   rowsWithExpandedState

        const formFields = [
    // Tableau contenant la configuration des champs du formulaire
    { name: "name", label: "Nom", type: "text", required: true },
    // ... autres champs
    ];
   Retourne les contenus paginés avec leur état d'expansion 
   
   **Configuration du Formulaire**

    const formFields = [
    // Tableau contenant la configuration des champs du formulaire
    { name: "name", label: "Nom", type: "text", required: true },
    // ... autres champs
    ];


### Fonctionnalités Responsive

Le composant utilise :

    window.addEventListener("resize", updateWidth) pour suivre les changements de taille

    Classes Tailwind hidden md:block et md:hidden pour alterner entre les vues

Points d'Extension

    DynamicModalForm : Composant externe pour les formulaires

    useContentActions : Composable gérant les actions CRUD

    useHotelStore : Store Pinia pour la gestion des données

Bonnes Pratiques Implémentées

    Séparation des vues : Code distinct pour mobile/desktop

    Accessibilité : Attributs alt pour les images

    Testabilité : Attributs data-test pour les tests

    Performance : Pagination côté client

    Réactivité : Gestion fine des états avec Vue


  **Diagramme d'État (Simplifié)**

    [Initialisation]
    → [Fetch Content]
    → [Affichage Tableau/Cartes]
    → [Interactions Utilisateur]
    → [Toggle Description]
    → [Pagination]
    → [CRUD Operations]

Cette documentation couvre l'ensemble des fonctionnalités et l'architecture du composant. Pour une documentation plus approfondie des méthodes internes, référez-vous aux commentaires dans le code source.