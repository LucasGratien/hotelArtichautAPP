<template>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />
</template>
<script setup lang="js">
const heroPageData = {
  title: "Service",
  text: "Notre hôtel de luxe vous offre des services exclusifs tels que valet, pressing, voiturier et bien plus pour un séjour inoubliable",
  button: "Booking",
  image: "/assets/image/DALL·E 2025-01-14 14.42.14 - A luxurious hotel service scene, showcasing a variety of high-end services. A valet in uniform opening the door of a shiny luxury car, with a high-end.webp",
}
</script>