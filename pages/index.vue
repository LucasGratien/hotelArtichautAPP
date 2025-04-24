<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image"
                 />
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
    <UiHerobanner :title="heroPageDataEquipe?.title"
                  :buttonText="'Je découvre'"
                  :image="heroPageDataEquipe?.image"
                  :link="'/Equipe'" >
    </UiHerobanner>
  <UiCardrestaurant
      :title="restaurantData?.title"
      :description="restaurantData?.description"
      :images="restaurantData?.images.map(img => img.url)"
  />
</template>
<script setup lang="js">

//gestion des imports pour l'hydratation

import {useHotelStore} from '@/stores/hotel.js'
const store = useHotelStore()


//gestion de la récupération des données pour les banners en fonction de leur nature (artichaut / equipe)
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

const heroPageDataEquipe = computed(() => {
  const bannerData = store.language('banner').find(item => item.name.includes('equipe'))
  return {
    title: bannerData?.title,
    link: bannerData?.link,
    image: bannerData.images && bannerData.images.length > 0 ? bannerData.images[0].url : ''
  }
})
const restaurantData = computed(() => {
  const carouselData = store.language('restaurant-carousel').find(item => item.name.includes('restaurant-carousel'));
  return {
    title: carouselData?.title,
    description: carouselData?.description,
    images: carouselData?.images || []
  };
});
</script>
