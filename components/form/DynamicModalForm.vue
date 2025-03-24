<template>
  <UModal v-model="isOpen">
    <div class="custom-modal p-4">
      <h2>{{ modalTitle }}</h2>

      <UForm :state="state" class="space-y-6" @submit="onSubmit">
        <UFormGroup v-for="field in fields" :key="field.name" :label="field.label" :name="field.name">
          <template v-if="field.type === 'checkbox'">
            <UCheckbox v-model="state[field.name]" />
          </template>
          <template v-else-if="field.type === 'file'">
            <UInput type="file" @change="handleFileUpload($event, field.name)" />
          </template>
          <template v-else>
            <UInput :type="field.type" v-model="state[field.name]" :placeholder="field.placeholder" />
          </template>
        </UFormGroup>

        <div class="flex justify-end">
          <UButton type="submit">Soumettre</UButton>
        </div>
      </UForm>
    </div>
  </UModal>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";

const props = defineProps({
  fields: Array as () => Array<{ name: string, label: string, type: string, placeholder?: string, required?: boolean }>,
  modalTitle: String,
});

const emit = defineEmits(["submit"]);
const isOpen = ref(false);
const state = reactive<Record<string, any>>({});
const editableItem = ref({});
let onSaveCallback = null; // Fonction de sauvegarde passée par `handleModify`


// Réinitialiser le formulaire lorsque le modal est fermé
watch(isOpen, (isOpen) => {
  if (!isOpen) {
    Object.keys(state).forEach((key) => {
      state[key] = props.fields?.find((field) => field.name === key)?.type === 'checkbox' ? false : '';
    });
  }
});

// Ouvrir le modal avec des données initiales
const openModal = (initialData = {}) => {
  Object.assign(state, initialData);
  isOpen.value = true;
};

// Fermer le modal
const closeModal = () => {
  isOpen.value = false;
};

// Gérer la soumission du formulaire
const onSubmit = () => {
  emit("submit", { ...state });
  closeModal();
};
const saveChanges = () => {
  if (onSaveCallback) {
    onSaveCallback(editableItem.value); // Appeler la fonction passée
  }
  closeModal();
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

defineExpose({ openModal });
</script>