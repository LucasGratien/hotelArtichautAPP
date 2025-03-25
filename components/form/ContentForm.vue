<template>
  <div>
    <!-- Vue desktop : tableau -->
    <div class="hidden md:block">
      <UTable :columns="columns" :rows="rowsWithExpandedState">
        <template #actions-data="{ row }">
          <div class="flex justify-center w-full">
            <UButton
              :disabled="loading"
              @click="handleDelete(row.id)"
              class="whitespace-nowrap w-full flex-grow"
              color="red"
              size="sm"
              >Supprimer</UButton
            >
          </div>
        </template>

        <template #modify-data="{ row }">
          <div class="flex justify-center w-full">
            <UButton
              :disabled="loading"
              @click="handleModify(row.id)"
              class="whitespace-nowrap w-full flex-grow"
              size="sm"
              >Modifier</UButton
            >
          </div>
        </template>

        <template #images-data="{ row }">
          <div class="flex justify-center shadow-lg flex-wrap gap-1">
            <img
              v-for="image in row.images"
              :key="image.id"
              :src="image.url"
              alt="images"
              class="w-12 h-12 object-cover rounded"
            />
          </div>
        </template>
        <template #title-data="{ row }">
          <div class="text-[var(--secondary-color)] font-semibold">
            <p>{{ row.title }}</p>
          </div>
        </template>
        <template #name-data="{ row }">
          <div class="text-[var(--secondary-color)] font-semibold">
            <p>{{ row.name }}</p>
          </div>
        </template>

        <template #description-data="{ row }">
          <div
            class="flex items-center text-[var(--secondary-color)] font-semibold text-md gap-2"
          >
            <div
              :class="[
                'transition-all duration-300',
                row.expanded
                  ? 'whitespace-normal'
                  : 'whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]',
              ]"
            >
              <p>{{ row.description }}</p>
            </div>
            <UButton
              size="text-lg"
              :style="{ color: 'var(--secondary-color)' }"
              variant="ghost"
              @click="toggleDescription(row.id)"
            >
              {{ row.expanded ? "Réduire" : "Voir plus" }}
            </UButton>
          </div>
        </template>
      </UTable>
    </div>

    <!-- Vue mobile : cards -->
    <div class="md:hidden space-y-4 px-4">
      <div
        v-for="row in rowsWithExpandedState"
        :key="row.id"
        class="bg-white rounded-lg shadow-md p-4 space-y-3"
      >
        <div
          class="flex text-[var(--secondary-color)] items-center justify-between"
        >
          <h3 class="text-lg font-bold">{{ row.name }}</h3>
          <div class="flex gap-2">
            <UButton
              :disabled="loading"
              @click="handleModify(row.id)"
              size="md"
              color="green"
              >Modifier</UButton
            >
            <UButton
              :disabled="loading"
              @click="handleDelete(row.id)"
              size="xs"
              color="red"
              >Supprimer</UButton
            >
          </div>
        </div>

        <div class="text-[var(--secondary-color)]">
          <p class="font-bold">Titre:</p>
          <p>{{ row.title }}</p>
        </div>

        <div class="text-sm font-semibold text-[var(--secondary-color)]">
          <p class="font-semibold">Description:</p>
          <div class="relative">
            <p :class="{ 'line-clamp-2': !row.expanded }">
              {{ row.description }}
            </p>
            <UButton
              size="xs"
              color="gray"
              variant="ghost"
              @click="toggleDescription(row.id)"
              class="mt-1"
            >
              {{ row.expanded ? "Réduire" : "Voir plus" }}
            </UButton>
          </div>
        </div>

        <div
          v-if="row.images && row.images.length"
          class="flex flex-wrap gap-2"
        >
          <img
            v-for="image in row.images"
            :key="image.id"
            :src="image.url"
            alt="images"
            class="w-16 h-16 object-cover rounded"
          />
        </div>
      </div>
    </div>

    <div
      class="flex justify-end px-3 py-3.5 border-t border-[var(--primary-color)] dark:border-[var(--primary-color)]"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="store.contents.length"
      />
    </div>

    <div class="flex flex-col items-center justify-center py-6 gap-3">
      <UButton
        class="text-[var(--secondary-color)] bg-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--secondary-color)] font-semibold text-lg hover:border-[2px] hover:border-[var(--primary-color)] dark:text-[var(--secondary-color)] dark:bg-[var(--primary-color)] dark:hover:text-[var(--primary-color)] dark:hover:bg-[var(--secondary-color)] dark:hover:border-[2px] dark:hover:border-[var(--primary-color)]"
        @click="openModal"
        >Ajouter un contenu</UButton
      >
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

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { useContentActions } from "@/composables/useContentActions";
import { useHotelStore } from "@/stores/hotel";
import DynamicModalForm from "@/components/form/DynamicModalForm.vue";

const store = useHotelStore();
const dynamicModal = ref(null);
const { deleteContent, modifyContent, createContent, loading } =
  useContentActions();
const page = ref(1);
const pageCount = 10;
const selectedItem = ref(null);
const newContent = ref({ title: "", description: "", image: "" });
const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const rowsWithExpandedState = ref(
  store.contents
    .slice((page.value - 1) * pageCount, page.value * pageCount)
    .map((row) => ({
      ...row,
      expanded: false,
    })),
);

watch(page, () => {
  rowsWithExpandedState.value = store.contents
    .slice((page.value - 1) * pageCount, page.value * pageCount)
    .map((row) => ({
      ...row,
      expanded: false,
    }));
});

const toggleDescription = (id) => {
  const rowIndex = rowsWithExpandedState.value.findIndex(
    (row) => row.id === id,
  );
  if (rowIndex !== -1) {
    const updatedRow = {
      ...rowsWithExpandedState.value[rowIndex],
      expanded: !rowsWithExpandedState.value[rowIndex].expanded,
    };
    rowsWithExpandedState.value.splice(rowIndex, 1, updatedRow);
  }
};

const fetchContent = async () => {
  try {
    await store.fetch();
  } catch (err) {
    console.error("Erreur lors de la récupération des données :", err);
  }
};

onMounted(fetchContent);

const formFields = [
  {
    name: "name",
    label: "Nom",
    type: "text",
    placeholder: "Entrez votre nom",
    required: true,
  },
  {
    name: "title",
    label: "Titre",
    type: "text",
    placeholder: "Entrez le titre",
    required: true,
  },
  {
    name: "short_description",
    label: "Description courte",
    type: "textarea",
    placeholder: "Entrez une description courte",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Entrez une description",
    required: true,
  },
  {
    name: "link",
    label: "Lien",
    type: "text",
    placeholder: "Entrez le lien",
    required: true,
  },
  {
    name: "display_order",
    label: "Ordre d`affichage",
    type: "text",
    placeholder: "Entrez l`ordre daffichage",
    required: true,
  },
  {
    name: "language_id",
    label: "Langue",
    type: "text",
    placeholder: "Entrez la langue",
    required: true,
  },
  { name: "images", label: "Images", type: "file", required: true },
  {
    name: "landing_page_display",
    label: "Afficher sur la page daccueil",
    type: "checkbox",
  },
  {
    name: "navbar_display",
    label: "Afficher dans la barre de navigation",
    type: "checkbox",
  },
];

const openModal = () => {
  dynamicModal.value?.openModal();
};

const columns = ref([
  { key: "name", label: "Nom", align: "left" },
  { key: "title", label: "Titre" },
  { key: "description", label: "Description" },
  { key: "images", label: "Images" },
  { key: "actions", label: "Supprimer", align: "center" },
  { key: "modify", label: "Modifier", align: "center" },
]);

const handleDelete = async (id) => {
  await deleteContent(id);
  store.contents = store.contents.filter((item) => item.id !== id);
};

const handleSubmit = async (formData) => {
  formData.landing_page_display = formData.landing_page_display ? 1 : 0;
  formData.navbar_display = formData.navbar_display ? 1 : 0;

  console.log("Données du formulaire:", formData);
  const createdContent = await createContent(formData);

  if (createdContent) {
    store.contents.push(createdContent);
    newContent.value = { title: "", description: "", image: "" };
  }
};

const handleModify = async (id) => {
  const itemToModify = store.contents.find((item) => item.id === id);
  if (itemToModify) {
    selectedItem.value = { ...itemToModify };
    dynamicModal.value?.openModal(selectedItem.value, async (updateData) => {
      await saveModifiedData(id, updateData);
    });
  }
};

const saveModifiedData = async (id, updatedData) => {
  updatedData.landing_page_display = updatedData.landing_page_display ? 1 : 0;
  updatedData.navbar_display = updatedData.navbar_display ? 1 : 0;

  try {
    const updatedContent = await modifyContent(id, updatedData);
    if (updatedContent) {
      const index = store.contents.findIndex((item) => item.id === id);
      if (index !== -1) {
        store.contents[index] = updatedContent;
      }
      console.log("Mise à jour réussie :", updatedContent);
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
  }
};
</script>

<style scoped></style>
