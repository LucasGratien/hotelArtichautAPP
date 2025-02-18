<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image"/>
  </div>
  <UiCardhome
      title="Spa"
      description="Profitez de nos installations de spa haut de gamme, avec piscines, massages et bien plus encore pour un moment de détente ultime."
      :image=img2swim
      imageAlt="Spa"
      link="/Spa"
      buttonText="Découvrir"
      :inverted="true"
  />
  <UiCardhome
      title="Chambre Standard"
      description="La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal."
      :image=img2room
      imageAlt="Chambre Standard"
      link="/Rooms"
      buttonText="En savoir+"
      :inverted="false"
  />
  <UiCardhome
      v-for="(item, index) in contentStore.data"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.images[0]"
      :imageAlt="item.title"
      :link="item.link || '/Rooms'"
      :buttonText="'En savoir +'"
      :inverted="index % 2 === 0"
  />

  <UiCardhomespa/>
  <UiCardrestaurant/>

</template>


<script setup lang="js">
import img1 from '@/assets/video/0_Outdoor Living_Fire Pit_3840x2160_reset.mp4'
import img2room from "@/assets/images/parisluxe.png"
import img2swim from "@/assets/images/woman-swimming-pool-spa.png"

import { useContentStore } from '~/stores/contentStore.js'
import { onMounted, watch } from 'vue'

const contentStore = useContentStore()

watch(() => contentStore.error, (error) => {
  if (error) {
    console.error('Content fetch error:', error)
  }
})

onMounted(() => {
  contentStore.fetchContent()
})

const heroPageData = {
  title: "L'Artichaut",
  text: "Passez un séjour unique dans un hotel intimiste et chaleureux",
  button: "Booking",
  image: img1,
}

</script>
