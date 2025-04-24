<template>
  <div class="text-container mx-auto ui-card flex flex-col lg:flex-row items-end lg:justify-between lg:flex md:align-bottom  p-8 rounded-lg w-1/2 mt-4">
  <div class="container mx-auto p-8" v-if="room">
    <h1 class="text-4xl font-bold mb-4 text-gray-700 flex justify-center">{{room.category_name}}</h1>
    <img v-for="image in room.images" :key="image.url" :src="image.url" :alt="room.name" class="rounded-lg  w-full max-w-4xl mb-4" />
    <p class="mb-4 font-bold text-gray-700 flex justify-center">{{ room.description }}</p>
    <div v-for="feature in room.features">
    <p class="mb-4 font-bold text-gray-700 flex justify-center">{{feature.feature_name}}</p>
      <p class="mb-4 text-gray-700 flex justify-center">{{feature.description}}</p>
    </div>
    <p class="text-lg flex justify-end font-semibold mt-4 text-gray-700">{{ room.price_in_cent }}€/nuit</p>
  </div>
  <div v-else class="text-center py-10">Chargement...</div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: room } = await useApiFetch(`/rooms-category/${route.params.id}`);
console.log(room)
</script>
<style scoped>
.text-container {
  background-color: var(--background-color);
  border-color: 1px var(--secondary-color);
}
</style>