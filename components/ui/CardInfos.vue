<template>
  <!-- la card -->
  <div class="bg-[var(--background)] dark:bg-[var(--background)] m-5 md:flex md:mx-8 md:my-0">

    <!--  mobile -->
    <div class="block md:hidden">
      <!-- Image box -->
      <div v-if="image && image.trim().length > 0" class="p-1">
        <img class="w-full aspect-square drop-shadow-xl" :src="image" alt="employee-picture"/>
      </div>

      <!-- Text box -->
      <div class="p-2">

        <div class="font-bold text-3xl text-center text-[var(--secondary-color)] p-2">
          <h1>{{ title }}</h1>
        </div>
        <div class="text-3xl text-center text-[var(--secondary-color)]">
          <h1>{{ short_description }}</h1>
        </div>
        <div class="text-center text-[var(--secondary-color)] p-2">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>

    <!--  Desktop -->
    <div class="hidden md:flex items-center">

      <!--template si images a gauche -->
      <template v-if="!inverted">
        <!-- Image box -->
        <div v-if="image && image.trim().length > 0" class="md:w-1/3 p-4">
          <img class="w-full aspect-square drop-shadow-xl" :src="image" alt="employee-picture"/>
        </div>

        <!-- Text box -->
        <div class="md:w-2/3 md:h-1/2">
          <!-- titre -->
          <div class="font-bold text-3xl text-center md:text-center text-[var(--secondary-color)] p-2">
            <h1>{{ title }}</h1>
          </div>
          <!-- Nom  -->
          <div class=" text-3xl text-center  text-[var(--secondary-color)] ">
            <h1>{{ short_description }}</h1>
          </div>
          <!-- texte -->
          <div class="text-2xl text-center md:text-center text-[var(--secondary-color)] py-2 px-20">
            <p>{{ description }}</p>
          </div>

        </div>
      </template>

      <!-- Version inversée -->
      <template v-else>
        <!-- Text box (gauche quand inversé) -->
        <div class="md:w-2/3 h-1/2">
          <!-- titre -->
          <div class="font-bold text-3xl text-center  text-[var(--secondary-color)] p-2">
            <h1>{{ title }}</h1>
          </div>
          <!-- Nom  -->
          <div class=" text-3xl text-center  text-[var(--secondary-color)] ">
            <h1>{{ short_description }}</h1>
          </div>
          <!-- texte -->
          <div class="text-2xl text-center text-[var(--secondary-color)] py-2 px-20">
            <p>{{ description }}</p>
          </div>
        </div>
        <!-- Image box (droite quand inversé) -->
        <div v-if="image && image.trim().length > 0" class="md:w-1/3 p-8">
          <img class="w-full aspect-square drop-shadow-xl" :src="image" alt="background image"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
      title: String,
      short_description: String,
      description: String,
      image: String,
      inverted: {
        type: Boolean,
        default: false,
      }
    }
)
</script>
