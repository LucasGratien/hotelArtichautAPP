<script setup>

//Les imports /le store/l'image du logo (à revoir, je pense).

import {useAuthStore} from '~/stores/auth';
import signLogo from "@/assets/logo/user.png";

//les variables d'activation des modales et injection du store

const authStore = useAuthStore();

const isOpen = ref(false);
const isOpenRegister = ref(false);

//config du dropdown avec un markeur elvis pour afficher les boutons que si l'utilisateur est connécté ou pas.

const dropdownItems = computed(() => {
  return authStore.isLoggedIn
      ? [
        [{label: 'Settings', icon: 'i-heroicons-cog-8-tooth', to: '/dashboard'}],
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
    // // si le user a une image
    // if (authStore.user.images && authStore.user.images.length >= 0) {
    //   // ce sera la première image du user qui sera utilisée
    //   return authStore.user.images[0];
    // }
    // Si pas d'images, on applique la logique dicebar
    const firstname = authStore.user.firstname;
    const lastname = authStore.user.lastname;
    return `https://api.dicebear.com/7.x/initials/svg?seed=${firstname} ${lastname}`;
  }

  //Enfin si pas authentifié on garde le logo initiale
  return signLogo;
});
//pemret de charge les données du user à partir du token au chargement du composable
onMounted(() => {
  authStore.initializeAuth();
});
</script>

<template>
  <!--le menu dropdown-->
  <UDropdown
    :items="dropdownItems"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
  >
    <!--    logo de connection-->
    <UAvatar :src="avatarSrc" />
    <!--Affichage des chants et logos-->
    <template #item="{ item }">
  <span
      class="truncate text-[var(--primary-color)] dark:text-[var(--primary-color)]"
      @click="item.action && item.action()">
    {{ item.label }}
  </span>
      <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-[var(--primary-color)] dark:text-[var(--primary-color)] ms-auto"
      />
    </template>
  </UDropdown>
<!--  Injection des modales -->
  <FormLoginModal v-model="isOpen" />
  <FormRegisterModal v-model="isOpenRegister" />

</template>
