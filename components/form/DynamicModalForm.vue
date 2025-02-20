

<template>
  <UModal v-model="isOpen">
    <div class="custom-modal">
      <div class="p-4">
        <h2>{{ modalTitle }}</h2>
      </div>

      <UForm :validate="validate" :state="state" class="space-y-6" @submit="onSubmit" @error="onError">
        <!-- Boucle sur les champs dynamiques -->
        <UFormGroup
            v-for="field in fields"
            :key="field.name"
            :label="field.label"
            :name="field.name"
        >
          <!-- Gestion des différents types de champs -->
          <template v-if="field.type === 'checkbox'">
            <UCheckbox
                v-model="state[field.name]"

            />
          </template>
          <template v-else-if="field.type === 'file'">
            <UInput
                type="file"
                @change="handleFileUpload($event)"
            />
          </template>
          <template v-else-if="field.type === 'textarea'">
            <UTextarea
                v-model="state[field.name]"
            />
          </template>
          <template v-else-if="field.type === 'text'">
            <UInput
            type="text" v-model="state[field.name]" />
          </template>
          <template v-else-if="field.type === 'url'">
            <UInput
                type="url" v-model="state[field.name]" />
          </template>
          <template v-else-if="field.type === 'number'">
            <UInput
                type="number" v-model="state[field.name]" />
          </template>
          <template v-else>
            <component
                :is="getFieldComponent(field.type)"
                v-model="state[field.name]"
                :placeholder="field.placeholder"
                :type="field.type"
            />
          </template>
        </UFormGroup>

        <!-- Bouton de soumission -->
        <div class="submit-btn">
          <UButton type="submit" class="submit-button">Submit</UButton>
        </div>
      </UForm>
    </div>
  </UModal>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

// Props pour personnaliser le formulaire
const props = defineProps({
  fields: {
    type: Array as () => Array<{
      name: string
      label: string
      type: string
      placeholder?: string
      required?: boolean
    }>,
    required: true,
  },
  modalTitle: {
    type: String,
    default: 'Formulaire',
  },
})

const isOpen = ref(false) // État pour afficher/masquer la modale

// État réactif pour les données du formulaire
const state = reactive<Record<string, any>>({})

// Initialiser les champs du formulaire
const initializeForm = () => {
  props.fields.forEach((field) => {
    state[field.name] = field.type === 'checkbox' ? false : ''
  })
}

// Ouvrir la modale et initialiser le formulaire
const openModal = () => {
  isOpen.value = true
  initializeForm()
}

// Fermer la modale
const closeModal = () => {
  isOpen.value = false
}

// Fonction pour obtenir le composant approprié en fonction du type de champ
const getFieldComponent = (type: string) => {
  switch (type) {
    case 'textarea':
      return 'UTextarea'
    case 'checkbox':
      return 'UCheckbox'
    case 'file':
      return 'UInput'
    default:
      return 'UInput'
  }
}

// Validation des champs
const validate = (state: Record<string, any>): FormError[] => {
  const errors: FormError[] = []
  props.fields.forEach((field) => {
    if (field.required && !state[field.name]) {
      errors.push({ path: field.name, message: 'Required' })
    }
  })
  return errors
}

// Soumission du formulaire
async function onSubmit(event: FormSubmitEvent<Record<string, any>>) {
  console.log('Form Data:', event.data)
  closeModal() // Fermer la modale après la soumission
}

// Gestion des erreurs
async function onError(event: FormErrorEvent) {
  if (event.errors.length > 0 && event.errors[0].id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Gestion de l'upload de fichier
const handleFileUpload = (event: Event, fieldName: string) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    state[fieldName] = target.files[0] // Stocke le fichier
  }
}

defineExpose({ openModal, closeModal }) // Exposer les méthodes
</script>

<style scoped>
.custom-modal {
  background-color: #c8c8c8;
  border-radius: 12px;
  max-width: 600px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  color: #333; /* Texte noir */
}

.custom-modal input,
.custom-modal textarea ::placeholder {
  background-color: white !important;
  color: black !important;
  border: 2px solid #333 !important;
}

.custom-modal .custom-label {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}

.custom-input:focus {
  outline: none;
  border-color: #0056b3;
}

.submit-btn {
  text-align: right;
}

.submit-button {
  background-color: rgb(54, 218, 54);
  color: black;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #45a049;
}

.custom-input[type="textarea"] {
  background-color: #fff;
  height: 120px;
  resize: vertical;
}
</style>