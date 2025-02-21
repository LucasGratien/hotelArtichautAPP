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
            <UInput type="file" @change="handleFileUpload($event)" />
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
  initialData: Object as () => Record<string, any>,
});

const emit = defineEmits(["submit"]);
const isOpen = ref(false);
const state = reactive<Record<string, any>>({});

watch(() => props.initialData, (newData) => {
  Object.assign(state, newData || {});
}, { immediate: true });

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const onSubmit = () => {
  emit("submit", { ...state });
  closeModal();
};

defineExpose({ openModal });
</script>
