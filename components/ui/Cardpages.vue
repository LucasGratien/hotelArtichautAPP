<template>
  <div class="container mx-auto ui-card flex flex-col lg:flex-row items-end lg:justify-between lg:flex md:align-bottom  p-8 rounded-lg w-full mt-4"
       :class="inverted ? 'lg:flex-row-reverse' : ''">
    <div class="image-container  w-full max-w-4xl">
      <img
          class="rounded-lg object-cover  w-full"
          :src="image"
          :alt="imageAlt"
      />
    </div>

    <div class="w-full :w-2/6 p-8 flex flex-col justify-end  -md-10 z-10 text-background ":class="inverted ? 'lg:-me-10' : 'lg:-ms-8'">
        <h2 class="title text-3xl font-serif mb-6 md:ml-10 text-center md:text-left">{{ room.category_name }}</h2>
        <p class="description text-gray-700 leading-relaxed mb-10 md:ml-10 text-center md:text-left">{{ room.description }}</p>
        <div class="text-center md:text-left">
          <NuxtLink
              :to="`/roomdetail/${room.id}`"
              class="bg-yellow-500 hover:bg-yellow-600 text-[var(--background)] py-3 px-8 rounded-md ml-10 shadow cta-btn"
          >
            {{ buttonText }}
          </NuxtLink>
        </div>
    </div>
  </div>

</template>

<script setup lang="js">
defineProps({
room: Object,
  link: {
    type: String,
    default: '#',
  },
  buttonText: {
    type: String,
    default: 'En savoir+',
  },
  inverted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/*.ui-card {
  width: 100%;
}*/

.text-background {
  background-color: var(--background-color);
}

.title {
  color: black;
  text-decoration: underline;
}

.cta-btn {
  transition: background-color 0.3s ease;
}

/*.images-container img {
  object-fit: cover;
}*/
</style>