<script setup>
import {useAuthStore} from '~/stores/auth';
import signLogo from "@/assets/logo/user.png";
import LoginModal from "~/components/form/LoginModal.vue";
import RegisterModal from "~/components/form/RegisterModal.vue";

const authStore = useAuthStore();
const isOpen = ref(false)
const isOpenRegister = ref(false)

const dropdownItems = computed(() => {
  return authStore.isLoggedIn
      ? [
        [{label: 'Settings', icon: 'i-heroicons-cog-8-tooth'}],
        [{label: 'Sign out', icon: 'i-heroicons-arrow-left-on-rectangle', action: authStore.logout}]
      ]
      : [
        [{label: 'Login', icon: 'i-heroicons-arrow-up-on-rectangle', action: () => (isOpen.value = true)}],
        [{label: 'Sign-in', icon: 'i-heroicons-arrow-right-on-rectangle', action: () => (isOpenRegister.value = true)}]
      ];
});
</script>

<template>

  <UDropdown :items="dropdownItems" :ui="{ item: { disabled: 'cursor-text select-text' } }"
             :popper="{ placement: 'bottom-start' }">
    <UAvatar :src="signLogo"/>

    <template #item="{ item }">
      <span class="truncate" @click="item.action && item.action()">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"/>
    </template>
  </UDropdown>

  <LoginModal v-model="isOpen" />
  <RegisterModal v-model="isOpenRegister" />

</template>
