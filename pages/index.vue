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

import {useHotelStore} from '@/stores/hotel.js'
const store = useHotelStore()

const heroPageData = computed(() => {
  const bannerData = store.language('banner').find(item => item.name.includes('artichaut'))
  return {
    title: bannerData?.title,
    text: bannerData?.short_description,
    description: bannerData?.description,
    button: bannerData?.link,
    image: bannerData.images && bannerData.images.length > 0 ? bannerData.images[0].url : ''
  }
})

</script>
