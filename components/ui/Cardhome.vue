"<template>
  <div class="flex flex-col md:flex-row items-center bg-[var(--background-color)]/75 p-8 rounded-md shadow-lg w-full mt-4"
       :class="inverted ? 'md:flex-row-reverse' : ''">
    <div class="hover:scale-105 transition-transform duration-300 ease-in-out w-full  md:w-1/2 relative">
      <img
          class="max-h-[400px] rounded-md object-cover w-full h-auto "
          :src="image"
          :alt="imageAlt"
      />
    </div>
    <div class="text-container w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 class="font-bold text-3xl text-[var(--secondary-color)] underline mb-6 text-center md:text-left">{{ title }}</h2>
      <p class="description text-[var(--secondary-color)] leading-relaxed mb-8 text-center md:text-left">{{ description }}</p>
      <div v-if="link && link.trim().length > 0" class="text-center md:text-left">
        <NuxtLink
            :to="link"
            class="bg-[var(--primary-color)] hover:bg-[var(--champ-color)]
            text-[var(--secondary-color)] hover:text-[var(--primary-color)]
            py-3 px-8 rounded-md shadow cta-btn font-semibold"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  imageAlt: {
    type: String,
    default: 'Image',
  },
  link:String,
  buttonText: String,
  inverted: {
    type: Boolean,
    default: false,
  },
});
</script>

