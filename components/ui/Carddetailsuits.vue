<template>
  <div>
    <h2 class="title text-3xl font-serif mb-6 md:ml-10 text-center md:text-left">{{ room.name }}</h2>
    <p class="description text-gray-700 leading-relaxed mb-10 md:ml-10 text-center md:text-left">{{ room.description }}</p>
  </div>
    <div>
    <p class="service text-gray-700 leading-relaxed mb-10 md:ml-10 text-center md:text-left">{{room.features.name}}</p>
      <p class="tv text-gray-700 leading-relaxed mb-10 md:ml-10 text-center md:text-left">{{room.features.description}}</p>
  </div>
   <div>
    <p class="price text-[var(--black-color)] flex justify-end">{{room.price_in_cent}}€</p>
  </div>
</template>

<script setup lang="js">
defineProps(
    {
      room: Object,
      link: {
        type: String,
        default: '#',
      },
      buttonText: {
        type: String,
        default: 'En savoir+',
      }, }
)
</script>