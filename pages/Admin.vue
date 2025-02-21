<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[#4b6447] border-2 border-[var(primary)] ">
        <NavigationSideBar/>
      </div>
      <div class="block md:hidden h-auto bg-[#4b6447] border-2 border-[var(primary)] ">
        <NavigationBurgerSideMenuAdmin/>
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle/>
      <FormContentForm
          v-if="$content.data && $content.data.length > 0"
          :title="$content.data[0].title"
          :short_description="$content.data[0].shortDescription"
          :description="$content.data[0].description"
          :link="$content.data[0].link"
          :display_order="$content.data[0].displayOrder"
          :language_id="$content.data[0].language"
          :image="$content.data[0].image"
          :deleteButtonText="'Supprimer'"
          :editButtonText="'Modifier'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";

const { $content } = useNuxtApp();

console.log("Données reçues via $content:", $content.data);

</script>

<style scoped>

</style>