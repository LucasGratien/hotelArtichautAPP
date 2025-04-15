<template>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :image="heroPageData?.image" />
  <UiCardhome
      v-for="(item, index) in spaCards"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.images && item.images.length > 0 ? item.images[0].url : ''"
      :imageAlt="item.title"
      :link="item.link"
      :buttonText="'En savoir +'"
      :inverted="index % 2 === 0"
  />
</template>
<script setup lang="js">

import {useHotelStore} from '@/stores/hotel.js'
const store = useHotelStore()

const heroPageData = computed(() => {
  const bannerData = store.language('banner').find(item => item.name.includes('spa'))
  return {
    title: bannerData?.title,
    description: bannerData?.description,
    image: bannerData.images && bannerData.images.length > 0 ? bannerData.images[0].url : ''
  }
})

const spaCards = computed(() => store.language('spa-cards'))
</script>