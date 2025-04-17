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
      <div class="md:py-12 md:px-48">
        <h1 class="font-bold text-4xl">L’Équipe : Une Excellence au Service de Votre Séjour</h1>
        <p class="text-2xl py-4 md:px-10">Notre équipe incarne l’excellence et le raffinement,
          afin de garantir une expérience inoubliable à chacun de nos invités.
          Chaque membre est sélectionné avec soin pour ses compétences, son savoir-faire,
          et surtout son attention aux moindres détails.</p>
      </div>
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

const equipeData = computed(() => store.language('equipe-card'))
</script>
