<template>
  <UModal v-model="isOpen">
    <div class="custom-modal p-4">
      <h2 class="text-xl font-bold mb-4">{{ modalTitle }}</h2>

      <UForm :state="state" class="space-y-6" @submit="onSubmit">
        <UFormGroup v-for="field in fields" :key="field.name" :label="field.label" :name="field.name">
          <template v-if="field.type === 'checkbox'">
            <UCheckbox v-model="state[field.name]" />
          </template>
          <template v-else-if="field.type === 'file'">
            <UInput type="file" multiple @change="handleFileUpload($event, field.name)" />
          </template>
          <template v-else>
            <UInput :type="field.type" v-model="state[field.name]" :placeholder="field.placeholder" />
          </template>
        </UFormGroup>

        <div class="flex justify-end gap-2">
          <UButton type="button" color="gray" @click="closeModal">Annuler</UButton>
          <UButton type="submit" :loading="loading">{{ isEditing ? 'Modifier' : 'Créer' }}</UButton>
        </div>
      </UForm>
    </div>
  </UModal>
</template>

<script setup>
import { ref, reactive, watch, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true,
    validator: (fields) => fields.every(f => f.name && f.label && f.type)
  },
  modalTitle: {
    type: String,
    required: true
  },
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(["submit", "cancel"]);

const isOpen = ref(false);
const state = reactive({});
const isEditing = ref(false);
const loading = ref(false);
const onSaveCallback = ref(null);

// Initialisation du state
const initState = () => {
  props.fields.forEach(field => {
    const defaultValue = field.type === "checkbox" ? false :
        field.type === "file" ? [] :
            field.type === "number" ? 0 : "";

    state[field.name] = defaultValue;
  });
};

// Réinitialisation du formulaire
const resetForm = () => {
  initState();
  isEditing.value = false;
  onSaveCallback.value = null;
};

// Observer les changements de initialData
watch(() => props.initialData, (newData) => {
  if (newData) {
    Object.keys(newData).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = newData[key];
      }
    });
    isEditing.value = true;
  }
}, { deep: true });

const openModal = (initialData = null, saveCallback = null) => {
  resetForm();
  onSaveCallback.value = saveCallback;

  if (initialData) {
    Object.keys(initialData).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = initialData[key];
      }
    });
    isEditing.value = true;
  }

  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
  emit("cancel");
};

const onSubmit = async (event) => {
  event.preventDefault();
  loading.value = true;

  try {
    const formData = { ...state };

    // Conversion des valeurs booléennes pour la base de données
    if (formData.landing_page_display !== undefined) {
      formData.landing_page_display = formData.landing_page_display ? 1 : 0;
    }
    if (formData.navbar_display !== undefined) {
      formData.navbar_display = formData.navbar_display ? 1 : 0;
    }

    // Si un callback est fourni (pour la modification)
    if (onSaveCallback.value) {
      await onSaveCallback.value(formData);
    } else {
      // Sinon émettre l'événement submit (pour la création)
      emit("submit", formData);
    }

    closeModal();
  } catch (error) {
    console.error("Erreur lors de la soumission:", error);
  } finally {
    loading.value = false;
  }
};

// Gérer l'upload de fichier
const handleFileUpload = (fileList, fieldName) => {
  // Met à jour le state dynamiquement
  state[fieldName] = Array.from(fileList);

  // Corrige l'affectation de images.value
  images.value = Array.from(fileList);

  console.log("État mis à jour :", state);
  console.log("Images enregistrées :", images.value);
};

defineExpose({
  openModal,
  closeModal,
  resetForm
});
</script>
