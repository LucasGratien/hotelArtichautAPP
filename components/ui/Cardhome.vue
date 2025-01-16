<template>
  <div class="ui-card flex flex-col-reverse md:flex-row items-center bg-[#f7f3eb] p-8 rounded-lg shadow-lg w-full mt-4"
       :class="inverted ? 'md:flex-row-reverse' : ''">
    <div class="image-container w-full md:w-1/2 relative">
      <img
          class="rounded-lg object-cover w-full h-auto"
          :src="image"
          :alt="imageAlt"
      />
    </div>
    <div class="text-container w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 class="title text-3xl font-serif mb-6 text-center md:text-left">{{ title }}</h2>
      <p class="description text-gray-700 leading-relaxed mb-8 text-center md:text-left">{{ description }}</p>
      <div class="text-center md:text-left">
        <NuxtLink
            :to="link"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md shadow cta-btn"
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
.ui-card {
  background-color: rgba(234, 198, 132, 0.15);
  width: 100%;
}

.title {
  font-family: 'Lora', serif;
  color: black;
  text-decoration: underline;
}

.description {
  font-family: 'Cardo', serif;
}

.cta-btn {
  transition: background-color 0.3s ease;
}

.image-container img {
  max-height: 400px;
  object-fit: cover;
}
</style>
