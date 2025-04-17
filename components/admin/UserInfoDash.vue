<script setup>

defineProps({
  lastname: String,
  firstname: String,
  address: String,
  city: String,
  postal_code: String,
  id: [String, Number],
  email: String,
  created_at: String,   // voir pour une date ici
  phone: String,
  images: String
});

const labels = {
  lastname: 'Nom',
  firstname: 'Prénom',
  address: 'Adresse',
  city: 'Ville',
  postal_code: 'Code postal',
  email: 'Email',
  phone: 'Téléphone',
  created_at: 'Créé le'
};

import {useAuthStore} from "~/stores/auth.js";

const authStore = useAuthStore();
const userInfos = computed(() => authStore.user);

</script>

<template>
  <!-- UserInfoAdmin-->
  <!-- Première card avec bouton jaune et champs de texte -->
  <!-- Card responsive -->
  <div class="bg-white rounded-lg shadow-md p-4 md:p-6 relative flex flex-col md:flex-row gap-4">

    <!-- Bouton en haut à droite (absolu par rapport à la card) -->
    <button class="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded z-5">
      Modifier
    </button>

    <!-- Image -->
    <div class="w-full md:w-1/3 h-64 md:h-auto overflow-hidden rounded-lg">
      <img :src="userInfos.images && userInfos.images.length > 0 ? userInfos.images[0].url : ''"
           alt="User image"
           class="object-cover w-full h-full"
      />
    </div>

    <!-- Infos -->
    <div class="flex-1 flex flex-col justify-center space-y-4">
      <h2 class="text-xl font-semibold text-gray-800">Infos personnelles</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <span class="text-sm font-medium text-gray-600">{{ labels.lastname }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.lastname }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.firstname }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.firstname }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.address }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.address }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.city }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.city }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.postal_code }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.postal_code }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.email }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.email }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.phone }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.phone }}</span>
        <span class="text-sm font-medium text-gray-600">{{ labels.created_at }}</span>
        <span class="p-2 bg-gray-100 rounded text-gray-800">{{ userInfos?.created_at }}</span>


      </div>
    </div>
  </div>

</template>
