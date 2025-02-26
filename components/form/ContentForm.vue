<template>
  <div>
    <UTable :columns="columns" :rows="rows">
      <template #actions-data="{ row }">
        <UButton :disabled="loading" @click="handleDelete(row.id)">Supprimer</UButton>
      </template>

      <template #modify-data="{ row }">
        <UButton :disabled="loading" @click="handleModify(row.id)">Modifier</UButton>
      </template>

      <template #images-data="{ row }">

        <img  v-for="image in row.images" :src="image.url" alt="images" class="w-12 h-12 object-cover rounded" />
      </template>

    </UTable>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="content.length"/>
    </div>

    <div class="flex flex-col items-center justify-center py-6 gap-3">
      <UButton @click="openModal">Ajouter un contenu</UButton>
      <DynamicModalForm
          ref="dynamicModal"
          :fields="formFields"
          :initialData="selectedItem"
          modalTitle="Ajouter un contenu"
          @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useNuxtApp } from "#app";
import { useContentActions } from "@/composables/useContentActions";
import DynamicModalForm from "@/components/form/DynamicModalForm.vue";

const { $content } = useNuxtApp();
const dynamicModal = ref(null);
const { deleteContent, modifyContent, createContent, loading, error } = useContentActions();

// Récupérer les données au montage
const fetchContent = async () => {
  try {
    const data = await $content()?.fetch();
    if (data) content.value = data;
  } catch (err) {
    console.error("Erreur lors de la récupération des données :", err);
  }
};


onMounted(fetchContent);


// Champs du formulaire
const formFields = [
  { name: 'name', label: 'Nom', type: 'text', placeholder: 'Entrez votre nom', required: true },
  { name: 'title', label: 'Titre', type: 'text', placeholder: 'Entrez le titre', required: true },
  { name: 'short_description', label: 'Description courte', type: 'textarea', placeholder: 'Entrez une description courte', required: true },
  { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Entrez une description', required: true },
  //{ name: 'landing_page_display', label: 'landing page', type: 'number', placeholder: 'Entrez une landing page', required: true },
  { name: 'link', label: 'Lien', type: 'text', placeholder: 'Entrez le lien', required: true },
  { name: 'display_order', label: 'Ordre d`affichage', type: 'text', placeholder: 'Entrez l`ordre daffichage', required: true },
  { name: 'language_id', label: 'Langue', type: 'text', placeholder: 'Entrez la langue', required: true },
  { name: 'images', label: 'Images', type: 'file',  required: true },
  { name: 'landing_page_display', label: 'Afficher sur la page daccueil', type: 'checkbox' },
  { name: 'navbar_display', label: 'Afficher dans la barre de navigation', type: 'checkbox' },
];

const openModal = () => {
  dynamicModal.value?.openModal();
};


// Initialiser les champs du formulaire
const initializeForm = () => {
  props.fields.forEach((field) => {
    state[field.name] = field.type === 'checkbox' ? false : ''
  })
}

const page = ref(1);
const content = ref($content?.data ??[]);




const pageCount = 10
console.log(pageCount)
const rows = computed(() => content.value.slice((page.value - 1) * pageCount, page.value * pageCount));
console.log(rows)

const columns = [
  { key: "id", label: "Id" },
  { key: "name", label: "Nom" },
  { key: "title", label: "Titre" },
  { key: "short_description", label: "Description courte" },
  { key: "description", label: "Description" },
  { key: "landing_page_display", label: "landing page" },
  { key: "link", label: "Lien" },
  { key: "display_order", label: "Ordre d'affichage" },
  { key: "language_id", label: "Langue" },
  { key: "images", label: "Images" },
  { key: "navbar_display", label: "navbar display" },
  { key: "actions", label: "Actions" },
  { key: "modify", label: "Modifier" },
  // { key: 'select', label: 'Sélectionner', class: 'w-2' }
];

// Fonction de suppression
const handleDelete = async (id: number) => {
  await deleteContent(id);
  content.value = content.value.filter((item) => item.id !== id);
};


const selectedItem = ref<Record<string, any> | null>(null);

const handleSubmit = async (formData: Record<string, any>) => {
  formData.landing_page_display = formData.landing_page_display ? 1 : 0;
  formData.navbar_display = formData.navbar_display ? 1 : 0;
  console.log('Données du formulaire:', formData);
  const createdContent = await createContent(formData);
  if (createdContent) {
    content.value.push(createdContent); // Met à jour la liste avec le nouveau contenu
    newContent.value = { title: '', description: '', image: '' }; // Réinitialise le formulaire
  }
};


// Fonction pour modifier un contenu
const handleModify = async (id: number) => {
  const itemToModify = content.value.find((item) => item.id === id);
  if (itemToModify) {
    selectedItem.value = { ...itemToModify };
    dynamicModal.value?.openModal(selectedItem.value, async (updateData) => {
      await saveModifiedData(id, updateData);
    });
  }
};


const saveModifiedData = async (id: number, updatedData: any) => {

  updatedData.landing_page_display = updatedData.landing_page_display ? 1 : 0;
  updatedData.navbar_display = updatedData.navbar_display ? 1 : 0;
  try {
    const updatedContent = await modifyContent(id, updatedData);
    if (updatedContent) {
      // Mettre à jour l'élément modifié dans le tableau local
      const index = content.value.findIndex((item) => item.id === id);
      if (index !== -1) {
        content.value[index] = updatedContent;
      }
      console.log("Mise à jour réussie :", updatedContent);
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
  }
};



</script>

<style scoped></style>