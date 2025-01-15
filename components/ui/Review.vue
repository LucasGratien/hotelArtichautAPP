<template>
  <div class="bg-[#4B6547] pt-4">
    <h2 class="text-[#eac684] text-2xl font-cardo text-center "> OUR HAPPY CUSTOMER</h2>
    <div class="flex justify-center items-center">
      <img src="public/assets/image/component_separator.png" alt="separator">
    </div>
    <div class="relative w-full max-w-8xl mx-auto px-16">
      <UCarousel
          v-slot="{ item }"
          :items="reviews"
          :ui="{
      item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-2',
      container: 'rounded-lg',
      wrapper: 'relative'
    }"
          :prev-button="{
      variant: 'link',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: 'absolute -left- text-[#eac684] hover:text-[#eac684]/80'
    }"
          :next-button="{
      variant: 'link',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: 'absolute -right- text-[#eac684] hover:text-[#eac684]/80'
    }"
          arrows
          class="p-4"
      >
        <ReviewCard
            :name="item.name"
            :rate="item.rate"
            :description="item.description"
        />
      </UCarousel>
    </div>
  </div>


</template>

<script setup lang="ts">

import ReviewCard from "~/components/ui/ReviewCard.vue";

const reviews = [
  {
    rate: 5,
    name: "Johnny",
    description: "Mais c'était merveilleux cet Hotel, je recommande vivement ! Le service était impeccable et les installations sont magnifiques."
  },
  {
    rate: 4,
    name: "Marie",
    description: "Très bon séjour, personnel attentionné. Seul petit bémol : le petit-déjeuner pourrait être plus varié."
  },
  {
    rate: 5,
    name: "Pierre",
    description: "Une expérience inoubliable ! La vue depuis la chambre était à couper le souffle."
  },
  {
    rate: 5,
    name: "Sophie",
    description: "Excellent rapport qualité-prix. Je reviendrai sans hésiter !"
  },
  {
    rate: 4,
    name: "Lucas",
    description: "Très satisfait de mon séjour. L'emplacement est parfait pour visiter la ville."
  }
]
</script>

<style scoped>
.font-cardo {
  font-family: 'Cardo', serif;
}
.font-lora {
  font-family: 'Lora', serif;
}
</style>