<script setup >
defineProps({
      title: String,
      short_description: String,
      description: String,
      image: String,
    }
)


</script>

<template>
  <div class="md:py-12 md:px-48">
    <h1 class="font-bold text-4xl">{{ short_description }}</h1>
    <p class="text-2xl py-4 md:px-10">{{description}}</p>
  </div>
</template>
