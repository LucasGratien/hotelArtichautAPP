<script setup>

//Les imports /le store/l'image du logo (à revoir, je pense) / et les composants de connection et d'enregistrement.

import {useAuthStore} from '~/stores/auth';
import signLogo from "@/assets/logo/user.png";
import LoginModal from "~/components/form/LoginModal.vue";
import RegisterModal from "~/components/form/RegisterModal.vue";

//les variables d'activation des modales et injection du store

const authStore = useAuthStore();
const isOpen = ref(false)
const isOpenRegister = ref(false)

//config du dropdown avec un markeur elvis pour afficher les boutons que si l'utilisateur est connécté ou pas.

const dropdownItems = computed(() => {
  return authStore.isLoggedIn
      ? [
        [{label: 'Settings', icon: 'i-heroicons-cog-8-tooth'}],
        [{label: 'Sign out', icon: 'i-heroicons-arrow-left-on-rectangle', action: authStore.logout}]
      ]
      : [
        [{label: 'Login', icon: 'i-heroicons-arrow-down-tray', action: () => (isOpen.value = true)}],
        [{label: 'Sign-in', icon: 'i-heroicons-arrow-right-on-rectangle', action: () => (isOpenRegister.value = true)}]
      ];
});
// propriété calculée qui va vérifier si 'l'utilisateur est connécté et que l'on peu récupérer le user
const avatarSrc = computed(() => {
  if (authStore.isLoggedIn && authStore.user) {
    const { firstname, lastname } = authStore.user;
    console.log('firstname', firstname);
    return `https://api.dicebear.com/7.x/initials/svg?seed=${firstname} ${lastname}`;
  }
  return signLogo;
});
</script>

<template>
<!--le menu dropdown-->
  <UDropdown :items="dropdownItems" :ui="{ item: { disabled: 'cursor-text select-text' } }"
             :popper="{ placement: 'bottom-start' }">
<!--    logo de connection-->
    <UAvatar :src="avatarSrc"/>
<!--Affichage des chants et logos-->
    <template #item="{ item }">
      <span class="truncate" @click="item.action && item.action()">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"/>
    </template>
  </UDropdown>
<!--  Injection des modales -->
  <LoginModal v-model="isOpen" />
  <RegisterModal v-model="isOpenRegister" />

</template>
