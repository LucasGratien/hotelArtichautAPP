<template>
  <!-- la card -->
  <div class="bg-[var(--background)] dark:bg-[var(--background)] m-5 md:flex md:mx-8 md:my-0">

    <!--  mobile -->
    <div class="block md:hidden">
      <!-- Image box -->
      <div v-if="image && image.trim().length > 0" class="p-8">
        <img class="w-full aspect-square" :src="image" alt="background image"/>
      </div>

      <!-- Text box -->
      <div class="p-2">
        <div class="font-cardo text-3xl text-center text-[#4b6447] p-2">
          <h1>{{ title }}</h1>
        </div>
        <div class="font-cardo text-center text-[#4b6447] p-2">
          <p>{{ text }}</p>
        </div>
        <div v-if="button && button.trim().length > 0" class="text-center p-2">
          <button>{{ button }}</button>
        </div>
      </div>
    </div>

    <!--  Desktop -->
    <div class="hidden md:flex">

      <!--template si image a gauche -->
      <template v-if="!inverted">
        <!-- Image box -->
        <div v-if="image && image.trim().length > 0" class="md:w-1/3 p-8">
          <img class="w-full aspect-square" :src="image" alt="background image"/>
        </div>

        <!-- Text box -->
        <div class="md:w-2/3 p-2">
          <!-- titre -->
          <div class="font-cardo text-3xl text-center md:text-center text-[#4b6447] p-2">
            <h1>{{ title }}</h1>
          </div>
          <!-- texte -->
          <div class="font-cardo text-center md:text-center text-[#4b6447] p-2">
            <p>{{ text }}</p>
          </div>

          <!-- bouton -->
          <div v-if="button && button.trim().length > 0" class="text-center md:text-left p-2">
            <button>{{ button }}</button>
          </div>

        </div>
      </template>

      <!-- Version inversée -->
      <template v-else>
        <!-- Text box (gauche quand inversé) -->
        <div class="md:w-2/3 p-2">
          <!-- titre -->
          <div class="font-cardo text-3xl text-center  text-[#4b6447] p-2">
            <h1>{{ title }}</h1>
          </div>
          <!-- texte -->
          <div class="font-cardo text-center text-[#4b6447] p-2">
            <p>{{ text }}</p>
          </div>
          <!-- bouton -->
          <div v-if="button && button.trim().length > 0" class="text-center md:text-left p-2">
            <button>{{ button }}</button>
          </div>
        </div>

        <!-- Image box (droite quand inversé) -->
        <div v-if="image && image.trim().length > 0" class="md:w-1/3 p-8">
          <img class="w-full aspect-square" :src="image" alt="background image"/>
        </div>

      </template>
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

</style>