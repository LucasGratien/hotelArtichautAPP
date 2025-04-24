<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div
        class="hidden md:block md:h-screen bg-[var(--secondary-color)] border-2 border-[var(--primary-color)]"
      >
        <NavigationSideBar />
      </div>
      <div
        class="block md:hidden h-auto bg-[var(--secondary-color)] border-2 border-[var(--primary-color)]"
      >
        <NavigationBurgerSideMenuAdmin />
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle
          title="Contenus-Admin"
      />
      <FormContentForm
        v-if="store.contents && store.contents.length > 0"
        :title="store.contents[0].title"
        :short_description="store.contents[0].shortDescription"
        :description="store.contents[0].description"
        :link="store.contents[0].link"
        :display_order="store.contents[0].displayOrder"
        :language_id="store.contents[0].language.id"
        :images="store.contents[0].images"
      />
    </div>
  </div>
</template>

<script setup lang="js">
import { useHotelStore } from "~/stores/hotel.js";
import { onMounted } from "vue";

const store = useHotelStore();

onMounted(async () => {
  await store.loadCommonData();
  console.log("Données du store après fetch :", store.contents);
});

console.log("Données reçues dans store.data:", store.contents);

//const { $content } = useNuxtApp();

//console.log("Données reçues via $content:", $content.data);
</script>

<style scoped></style>

