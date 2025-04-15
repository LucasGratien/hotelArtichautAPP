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
import { useNuxtApp } from "#app";
import { useHotelStore } from "~/stores/hotel.js";
import { onMounted } from "vue";

const store = useHotelStore();

onMounted(async () => {
  await store.loadCommonData();
  console.log("Données du store après fetch :", store.contents);
});

console.log("Données reçues dans store.data:", store.contents)


//const { $content } = useNuxtApp();

//console.log("Données reçues via $content:", $content.data);

</script>

