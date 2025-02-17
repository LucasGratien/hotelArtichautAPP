<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image" />
  </div>
  <UiCardhome
      title="Spa"
      description="Profitez de nos installations de spa haut de gamme, avec piscines, massages et bien plus encore pour un moment de détente ultime."
      image="/assets/images/woman-swimming-pool-spa.png"
      imageAlt="Spa"
      link="/Spa"
      buttonText="Découvrir"
      :inverted="true"
  />
  <UiCardhome
      title="Chambre Standard"
      description="La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal."
      image="@/assets/images/parisluxe.png"
      imageAlt="Chambre Standard"
      link="/Rooms"
      buttonText="En savoir+"
      :inverted="false"
  />

  <UiCardhomespa/>
  <UiCardrestaurant/>
</template>



<script setup lang="js">
import img1 from '@/assets/video/0_Outdoor Living_Fire Pit_3840x2160_reset.mp4'
const heroPageData = {
  title: "L'Artichaut",
  text: "Passez un séjour unique dans un hotel intimiste et chaleureux",
  button: "Booking",
  image: img1,
}
</script>