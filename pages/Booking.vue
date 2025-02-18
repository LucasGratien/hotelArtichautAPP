<template>
  <div>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />
  </div>
  <div>
    <UiCardform/>
  </div>
</template>
<script setup lang="js">
const heroPageData =  {
  title: "Booking",
  text: "Réservé votre séjour",
  button: "Booking",
  image: "/assets/image/restaurant-hall-with-round-square-tables-some-chairs-plants.png",
}
</script>