<template>
 <div>
   <div>
     <UiHerobanner :title="heroPageData?.title"
                   :text="heroPageData?.text"
                   :button="heroPageData?.button"
                   :image="heroPageData?.image" />
   </div>
   <UiCardpages
       title="Luxury rooms"
       description="La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal."
       image="/assets/image/parisluxe.png"
       imageAlt="Chambre de luxe"
       link="/reservation"
       buttonText="Réserver"
   />
   <UiCardpages
       title="Luxury rooms"
       description="La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal."
       image="/assets/image/parisluxe.png"
       imageAlt="Chambre de luxe"
       link="/reservation"
       buttonText="Réserver"
       :inverted="true"
   />
   <UiCardpages
       title="Luxury rooms"
       description="La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal."
       image="/assets/image/parisluxe.png"
       imageAlt="Chambre de luxe"
       link="/reservation"
       buttonText="Réserver"
   /></div>
</template>
<script setup lang="js">
const heroPageData =  {
  title: "Restaurant",
      text: "Savourez l'excellence, où chaque moment devient une expérience",
      button: "Booking",
      image: "/assets/image/restaurant-hall-with-round-square-tables-some-chairs-plants.png",
}
</script>

