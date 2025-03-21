<template>
  <div class="bg-[#4B6547] pt-4">
    <h2 class="text-[var(primary)] text-2xl font-cardo text-center "> OUR HAPPY CUSTOMER</h2>
    <div class="flex justify-center items-center">
      <img src="@/assets/images/component_separator.png" alt="separator">
    </div>
    <div class="relative w-full max-w-8xl mx-auto md:px-8">
      <UCarousel
          :items="reviews"
          :ui="{
      item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-2',
      container: 'rounded-lg',
      wrapper: 'relative'
    }"
          :prev-button="{
      variant: 'link',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: 'hidden sm:block -start-6'
    }"
          :next-button="{
      variant: 'link',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: 'hidden sm:block -end-6'
    }"
          arrows
          class="p-4"
      >
        <UiReviewCard
            v-for="review in reviews"
            :key="review.id"
            :name="`User #${review.user_id}`"
            :rate="review.rate"
            :description="review.review_content"
        />
      </UCarousel>
    </div>
  </div>


</template>

<script setup lang="js">

import {useApiFetch} from "~/composables/useApiFetch.js";

const { data: reviews } = await useApiFetch('/review/', {
  baseURL: useRuntimeConfig().public.apiBase,
  default: () => []
})

</script>
<style scoped>
</style>
