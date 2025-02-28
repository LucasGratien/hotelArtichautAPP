<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image"/>
  </div>
<UiLogo/>
  <UiCardhome
      v-for="(item, index) in store.language('content')"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.images && item.images.length > 0 ? item.images[0].url : ''"
      :imageAlt="item.title"
      :link="item.link"
      :buttonText="'En savoir +'"
      :inverted="index % 2 === 0"
  />

  <UiCardhomespa/>
  <UiCardrestaurant/>

</template>


<script setup lang="js">
import img1 from '@/assets/video/0_Outdoor Living_Fire Pit_3840x2160_reset.mp4'
import {useHotelStore} from '@/stores/hotel.js'

const store = useHotelStore()

const heroPageData = computed(() => {
  const bannerItem = store.language('banner-')

  return {
    title: bannerItem.title,

    text: bannerItem.short_description,

    button: bannerItem.link || '',

    image: bannerItem.images && bannerItem.images.length > 0 ? bannerItem.images[0].url : ''
  }
})


// const heroPageData = {
//   title: "L'Artichaut",
//   text: "Passez un séjour unique dans un hotel intimiste et chaleureux",
//   button: "Booking",
//   image: img1,
// }

</script>
