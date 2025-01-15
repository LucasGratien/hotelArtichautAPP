<template>
 <div>
   <div>
     <UiHerobanner :title="heroPageData?.title"
                   :text="heroPageData?.text"
                   :button="heroPageData?.button"
                   :image="heroPageData?.image" />
   </div>
 </div>
</template>
<script setup lang="js">
const heroPageData =  {
  title: "Restaurant",
      texte: "Savourez l'excellence, où chaque moment devient une expérience",
      button: "Booking",
      image: "/assets/image/restaurant-hall-with-round-square-tables-some-chairs-plants.png",
}
</script>