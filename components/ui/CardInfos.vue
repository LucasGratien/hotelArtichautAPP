<template>
  <!-- la card -->
  <div class="bg-[#f1ebd9] dark:bg-[#f1ebd9] m-5 md:flex md:mx-8 md:my-0"
       :class="inverted ? 'md:flex-row-reverse' : ''">
    <!-- Image box -->
    <div v-if="image && image.trim().length > 0" class="md:w-1/3 p-8">
      <img class="w-full aspect-square" :src="image" alt="background image"/>
    </div>

    <!-- Text box -->
    <div class="md:w-2/3 p-2">
      <!-- titre -->
      <div class="font-cardo text-3xl text-center md:text-left text-[#4b6447] p-2">
        <h1>{{ title }}</h1>
      </div>
      <!-- texte -->
      <div class="font-cardo text-center md:text-left text-[#4b6447] p-2">
        <p>{{ text }}</p>
      </div>

      <!-- bouton -->
      <div v-if="button && button.trim().length > 0" class="text-center md:text-left p-2">
        <button>{{ button }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
      title: String,
      text: String,
      button: String,
      image: String,
      inverted: {
        type: Boolean,
        default: false,
      }
    }
)
</script>

<style scoped>
.font-cardo {
  font-family: 'Cardo', serif;
}

.font-lora {
  font-family: 'Lora', serif;
}
</style>