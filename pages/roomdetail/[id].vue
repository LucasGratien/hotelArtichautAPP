<template>
  <div class="container mx-auto p-8" v-if="room">
    <h1 class="text-4xl font-bold mb-4">{{ room.name }}</h1>
    <img :src="room.image" :alt="room.name" class="rounded-lg w-full max-w-4xl mb-4" />
    <p class="text-gray-700 mb-4">{{ room.description }}</p>
    <ul>
      <li v-for="(feature, index) in room.features" :key="index" class="text-gray-700">
        - {{ feature }}
      </li>
    </ul>
    <p class="text-lg font-semibold mt-4">{{ room.price_in_cent }}€</p>
  </div>
  <div v-else class="text-center py-10">Chargement...</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from '#app';

const route = useRoute();
const { data: room } = useFetch(`http://192.168.1.245:8000/api/rooms-category/${route.params.id}`);

</script>
