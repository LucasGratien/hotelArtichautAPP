<template>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />

  <UiCardpages
      title="Service Voiturier"
      description="Profitez de notre service voiturier pour un séjour sans souci. À votre arrivée, confiez-nous votre véhicule et nous nous occuperons du stationnement en toute sécurité. Disponible 24h/24, ce service premium vous garantit une expérience fluide et confortable dès votre arrivée."
      :image=imgroom
      imageAlt="Chambre de luxe"
      link="/reservation"
      buttonText="Réserver"
  />
  <UiCardpages
      title="Service de Blanchisserie"
      description="Notre service de blanchisserie vous assure un linge toujours impeccable. Que ce soit pour un nettoyage express ou un soin particulier de vos vêtements, notre équipe est à votre disposition pour garantir un service de qualité et rapide."
      :image=imgroom
      imageAlt="Chambre de luxe"
      link="/reservation"
      buttonText="Réserver"
      :inverted="true"
  />
  <UiCardpages
      title="Espace de Travail"
      description="Travaillez en toute sérénité dans notre espace dédié. Équipé d'une connexion Wi-Fi haut débit, de bureaux ergonomiques et d'un cadre calme, notre espace de travail est idéal pour les voyageurs d'affaires et les freelances en quête d'un environnement productif."
      :image=imgroom
      imageAlt="Chambre de luxe"
      link="/reservation"
      buttonText="Réserver"
  />

  <UiCardpages
      v-for="(item,index) in $service.data"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image= "item.images && item.images.length > 0 ? item.images[0].url : ''"
      :imageAlt="item.title"
      :link="item.link"
      buttonText="Réserver"
      :inverted="index % 2 === 0"
  />

</template>

<script setup lang="js">

import img1 from "@/assets/images/DALL·E 2025-01-14 14.42.14 - A luxurious hotel service scene, showcasing a variety of high-end services. A valet in uniform opening the door of a shiny luxury car, with a high-end.webp"
import imgroom from "assets/images/interior-design-neoclassical-style-with-furnishings-decor.jpg";


const { $service } = useNuxtApp();

const heroPageData = {
  title: "Service",
  text: "Notre hôtel de luxe vous offre des services exclusifs tels que valet, pressing, voiturier et bien plus pour un séjour inoubliable",
  button: "Booking",
  image: img1,
}
</script>