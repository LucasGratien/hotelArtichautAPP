<template>
  <div>
    <UiHerobanner
        :title="heroPageData?.title"
        :text="heroPageData?.text"
        :button="heroPageData?.button"
        :image="heroPageData?.image"
    />

      <UiCardpages
          v-for="(item, index) in $hotel.roomCategories"
          :key="index"
          :inverted="index % 2 === 0"
          :room="item"
      />
  </div>
</template>

<script setup>
import {useHotelStore} from '@/stores/hotel.js'
const store = useHotelStore()
const heroPageData = computed(() => {
  const bannerData = store.language('banner').find(item => item.name.includes('room'))
  return {
    title: bannerData?.title,
    text: bannerData?.short_description,
    description: bannerData?.description,
    button: bannerData?.link,
    image: bannerData.images && bannerData.images.length > 0 ? bannerData.images[0].url : ''
  }
})
</script>
