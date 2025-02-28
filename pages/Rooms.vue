<template>
  <div>
    <UiHerobanner
        :title="heroPageData?.title"
        :text="heroPageData?.text"
        :button="heroPageData?.button"
        :image="heroPageData?.image"
    />

      <UiCardpages
          v-for="(item, index) in $hotel.roomCategories"
          :key="index"
          :inverted="index % 2 === 0"
          :room="item"
      />
  </div>
</template>

<script setup>
import video1 from "@/assets/video/0_Modern Living Room_City View_3840x2160.mp4";

const heroPageData = {
  title: "Rooms",
  text: "Vivez l'exception, séjournez dans l'élégance absolue",
  button: "Booking",
  image: video1,
};
</script>
