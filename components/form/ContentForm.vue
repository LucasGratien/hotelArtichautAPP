<template>
  <div>
    <UTable :columns="columns" :rows="rows">
      <template #actions-data="{ row }">
        <UButton @click="deleteContent(row.id)">Supprimer</UButton>
      </template>

      <template #modify-data="{ row }">
        <UButton @click="modifyContent(row.id)">Modifier</UButton>
      </template>

      <template #image-data="{ row }">
        <img :src="row.image" alt="image" class="w-12 h-12 object-cover rounded" />
      </template>
    </UTable>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" />
    </div>

    <div class="flex flex-col items-center justify-center py-6 gap-3">
      <UButton @click="openModal">Ajouter un contenu</UButton>
      <DynamicModalForm
          ref="dynamicModal"
          :fields="formFields"
          modalTitle="Ajouter un contenu"
          @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import DynamicModalForm from "@/components/form/DynamicModalForm.vue";

const dynamicModal = ref(null);

// Champs du formulaire
const formFields = [
  { name: 'name', label: 'Nom', type: 'text', placeholder: 'Entrez votre nom', required: true },
  { name: 'title', label: 'Titre', type: 'text', placeholder: 'Entrez le titre', required: true },
  { name: 'shortDescription', label: 'Description courte', type: 'textarea', placeholder: 'Entrez une description courte', required: true },
  { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Entrez une description', required: true },
  { name: 'link', label: 'Lien', type: 'url', placeholder: 'Entrez le lien', required: true },
  { name: 'displayOrder', label: 'Ordre daffichage', type: 'number', placeholder: 'Entrez lordre daffichage', required: true },
  { name: 'language', label: 'Langue', type: 'text', placeholder: 'Entrez la langue', required: true },
  { name: 'image', label: 'Image', type: 'file', required: true },
  { name: 'landingPageDisplay', label: 'Afficher sur la page daccueil', type: 'checkbox' },
  { name: 'navbarDisplay', label: 'Afficher dans la barre de navigation', type: 'checkbox' },
];

const openModal = () => {
  dynamicModal.value?.openModal();
};

const handleSubmit = (formData: Record<string, any>) => {
  console.log('Données du formulaire:', formData);
  // Traitez les données ici
};
// Initialiser les champs du formulaire
const initializeForm = () => {
  props.fields.forEach((field) => {
    state[field.name] = field.type === 'checkbox' ? false : ''
  })
}

const page = ref(1);
const content = ref([
  { id: 1, name: "Vue.js Guide", title: "Introduction to Vue.js", shortDescription: "Learn Vue.js basics.", description: "Vue.js est un framework progressif.", link: "https://example.com/vue-guide", displayOrder: 1, language: "French", image: "https://example.com/vue.jpg" },
  { id: 2, name: "Future Design Trends", title: "The Future of Design", shortDescription: "Exploring design trends.", description: "Design trends évoluent avec la technologie.", link: "https://example.com/design-trends", displayOrder: 2, language: "French", image: "https://example.com/design.jpg" },
  { id: 3, name: "Product Management 101", title: "Product Management Essentials", shortDescription: "Understand PM basics.", description: "A good product manager understands business.", link: "https://example.com/product-management", displayOrder: 3, language: "French", image: "https://example.com/product.jpg" },
  { id: 4, name: "Copywriting Mastery", title: "Mastering Copywriting", shortDescription: "Learn to craft compelling copy.", description: "Writing compelling copy engages your audience.", link: "https://example.com/copywriting", displayOrder: 4, language: "French", image: "https://example.com/copywriting.jpg" },
  { id: 5, name: "Senior Designer Insights", title: "Senior Designer Tips", shortDescription: "Insights from designers.", description: "Senior designers focus on aesthetics and function.", link: "https://example.com/senior-designer", displayOrder: 5, language: "French", image: "https://example.com/senior-designer.jpg" },
  { id: 6, name: "Principal Designer Role", title: "The Role of a Principal Designer", shortDescription: "Understand their impact.", description: "Principal designers shape product vision.", link: "https://example.com/principal-designer", displayOrder: 6, language: "French", image: "https://example.com/principal-designer.jpg" },
]);

const pageCount = computed(() => Math.max(1, Math.ceil(content.value.length / 5)));

const rows = computed(() => content.value.slice((page.value - 1) * 5, page.value * 5));

const columns = [
  { key: "id", label: "Id" },
  { key: "name", label: "Nom" },
  { key: "title", label: "Titre" },
  { key: "shortDescription", label: "Description courte" },
  { key: "description", label: "Description" },
  { key: "link", label: "Lien" },
  { key: "displayOrder", label: "Ordre d'affichage" },
  { key: "language", label: "Langue" },
  { key: "image", label: "Image" },
  { key: "actions", label: "Actions" },
  { key: "modify", label: "Modifier" },
  { key: 'select', label: 'Sélectionner', class: 'w-2' }
];

// Fonction de suppression
const deleteContent = (id: number) => {
  content.value = content.value.filter(item => item.id !== id);
};

// Fonction pour modifier un contenu
const modifyContent = (id: number) => {
  const itemToModify = content.value.find(item => item.id === id);
  if (itemToModify) {
    dynamicModal.value?.openModal(itemToModify);
  }
};
</script>

<style scoped></style>
