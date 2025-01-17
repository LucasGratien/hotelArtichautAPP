<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image" />
  </div>
  <UiCardhome/>
  <UiCardhomespa/>
<UiCardrestaurant/>
</template>



<script setup lang="js">
const heroPageData = {
  title: "L'Artichaut",
  text: "Passez un séjour unique dans un hotel intimiste et chaleureux",
  button: "Booking",
  image: "/assets/video/0_Outdoor Living_Fire Pit_3840x2160_reset.mp4",
}
</script>
