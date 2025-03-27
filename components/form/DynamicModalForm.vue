<template>
  <UModal v-model="isOpen">
    <div class="custom-modal p-4">
      <h2 class="text-xl font-bold mb-4">{{ modalTitle }}</h2>

      <UForm :state="state" class="space-y-6" @submit.prevent="onSubmit">
        <UFormGroup v-for="field in fields" :key="field.name" :label="field.label" :name="field.name">
          <template v-if="field.type === 'checkbox'">
            <UCheckbox v-model="state[field.name]" />
          </template>
          <template v-else-if="field.type === 'file'">
            <UInput
                type="file"
                multiple
                @change="handleFileUpload($event, field.name)"
                accept="image/*"
            />
            <div v-if="state[field.name] && state[field.name].length" class="mt-2">
              <div v-for="(file, index) in state[field.name]" :key="index" class="text-sm text-gray-500">
                {{ file.name || file }}
              </div>
            </div>
          </template>
          <template v-else-if="field.type === 'textarea'">
            <UTextarea v-model="state[field.name]" :placeholder="field.placeholder" />
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
import { ref, reactive, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true
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

// Initialisation du state
const initState = () => {
  props.fields.forEach(field => {
    state[field.name] = field.type === "checkbox" ? false :
        field.type === "file" ? [] : "";
  });

  if (props.initialData) {
    Object.keys(props.initialData).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = props.initialData[key];
      }
    });
  }
};

// Réinitialisation du formulaire
const resetForm = () => {
  props.fields.forEach(field => {
    state[field.name] = field.type === "checkbox" ? false :
        field.type === "file" ? [] : "";
  });
  isEditing.value = false;
};

// Ouvrir le modal avec des données initiales
const openModal = (initialData = null) => {
  resetForm();
  if (initialData) {
    isEditing.value = true;
    Object.keys(initialData).forEach(key => {
      if (state.hasOwnProperty(key)) {
        state[key] = initialData[key];
      }
    });
  }
  isOpen.value = true;
};

// Fermer le modal
const closeModal = () => {
  isOpen.value = false;
  emit("cancel");
};

// Soumission du formulaire
const onSubmit = async () => {
  loading.value = true;
  try {
    const formData = new FormData();

    Object.keys(state).forEach(key => {
      if (Array.isArray(state[key])) {
        state[key].forEach(item => {
          formData.append(`${key}[]`, item instanceof File ? item : String(item));
        });
      } else if (typeof state[key] === "boolean") {
        formData.append(key, state[key] ? "1" : "0");
      } else if (state[key] !== null && state[key] !== undefined) {
        formData.append(key, String(state[key]));
      }
    });

    emit("submit", formData);
    closeModal();
  } catch (error) {
    console.error("Erreur formulaire:", error);
  } finally {
    loading.value = false;
  }
};

// Gestion de l'upload des fichiers
const handleFileUpload = (event, fieldName) => {
  const files = event.target.files;
  state[fieldName] = files ? Array.from(files) : [];
};

// Initialisation au montage
initState();

defineExpose({
  openModal,
  closeModal,
  resetForm
});
</script>
