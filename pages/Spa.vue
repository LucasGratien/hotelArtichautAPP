<template>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />
</template>
<script setup lang="js">
const heroPageData = {
  title: "SPA",
  text: "Évadez-vous dans un sanctuaire de sérénité et de bien-être absolu.",
  button: "Booking",
  image: "/assets/image/woman-swimming-pool-spa.png",
}
</script>