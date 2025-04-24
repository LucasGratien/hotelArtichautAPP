<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image"/>
  </div>
  <div>
    <div
        class="bg-[#f1ebd9] text-[var(--secondary-color)] text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
        mt-6  py-4 px-2 mx-4
        md:mx-16 md:py-16 md:px-16
        ">
      <UiInfoIntro
          v-for="(card, index) in equipeInfo"
          :key="index"
          :description="card.description"
          :short_description="card.short_description"
      />

      <UiCardInfos
          v-for="(card, index) in equipeData"
          :key="index"
          :title="card.title"
          :description="card.description"
          :short_description="card.short_description"
          :image="card.images && card.images.length > 0 ? card.images[0].url : ''"
          :inverted="index % 2 === 0"
      />
    </div>
  </div>
</template>

<script setup lang="js">

// appel du store htel avec toutes les données et encapsulation dans une variable
import {useHotelStore} from '@/stores/hotel.js'
const store = useHotelStore()

const heroPageData = computed(() => {
  const bannerData = store.language('banner').find(item => item.name.includes('equipe'))
  return {
    title: bannerData?.title,
    text: bannerData?.short_description,
    description: bannerData?.description,
    button: bannerData?.link,
    image: bannerData.images && bannerData.images.length > 0 ? bannerData.images[0].url : ''
  }
})
const equipeInfo = computed(() => store.language('info-equipe'))
const equipeData = computed(() => store.language('equipe-card'))
</script>
