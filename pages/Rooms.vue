<template>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />
</template>
<script setup lang="ts">
const heroPageData = {
  title: "Rooms",
      text: "Vivez l'exception, séjournez dans l'élégance absolue",
      button: "Booking",
      image: "/assets/video/0_Modern Living Room_City View_3840x2160.mp4",
}
</script>