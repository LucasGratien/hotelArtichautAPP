<template>
  <div>
    <UiHerobanner
        :title="heroPageData?.title"
        :text="heroPageData?.text"
        :button="heroPageData?.button"
        :image="heroPageData?.image"
    />

    <div v-if="pending" class="text-center py-10">Chargement des chambres...</div>
    <div v-else-if="error" class="text-center text-red-500 py-10">Erreur lors du chargement des chambres.</div>

    <div v-else-if="rooms && rooms.length">
      <UiCardpages
          v-for="(room, index) in rooms"
          :key="index"
          :inverted="index % 2 === 0"
          :room="room"
          :image="room.image"
          :link="room.link"
      />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app';

const heroPageData = {
  title: "Rooms",
  text: "Vivez l'exception, séjournez dans l'élégance absolue",
  button: "Booking",
  image: "/assets/video/0_Modern Living Room_City View_3840x2160.mp4",
};

const { data: rooms, error } = useFetch('http://192.168.1.245:8000/api/rooms-category/lang-1');
</script>
