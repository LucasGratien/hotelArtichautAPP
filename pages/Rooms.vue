<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image" />

    <div v-if="rooms && rooms.length">
      <UiCardpages
          v-for="(room, index) in rooms"
          :inverted="index % 2 === 0"
          :key="index"
          :room="room"
          :image="room.image"
          :link="room.link"
      />
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'

const rooms = ref([])

const heroPageData = {
  title: "Rooms",
  text: "Vivez l'exception, séjournez dans l'élégance absolue",
  button: "Booking",
  image: "/assets/video/0_Modern Living Room_City View_3840x2160.mp4",
}

const getRooms = async () => {
  try {
    const response = await fetch('http://192.168.1.245:8000/api/rooms-category/lang-1')
    if (response.ok) {
      rooms.value = await response.json()
    } else {
      console.error('Erreur lors de la récupération des données')
    }
  } catch (error) {
    console.error('Erreur:', error)
  }
}
onMounted(() => {
  getRooms()
})
</script>
