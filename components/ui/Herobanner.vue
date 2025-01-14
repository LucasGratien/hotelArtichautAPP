<template>
  <div class="herobaner-wrapper">
  <div class="video-container relative">
    <div class="image-container">
    <video v-if="hero[name]?.image && hero[name]?.image.includes('.mp4')" autoplay muted loop class="background-video">
      <source :src="hero[name]?.image" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture des vidéos.
    </video>
      <img v-else :src="hero[name]?.image" alt="background image" class="background-image" />
    <div class="filter absolute top-0 bottom-0 right-0 left-0"></div>
    <div class="content">
      <h1>{{ hero[name]?.titre }}</h1>
      <p>{{ hero[name]?.texte }}</p>
      <button>Booking</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup lang="js">
const route = useRoute();
const name = route.name;

const hero = {
  Home: {
    titre: "L'Artichaut",
    texte: "Passez un séjour unique dans un hotel intimiste et chaleureux",
    button: "Booking",
    image: "/assets/video/0_Outdoor Living_Fire Pit_3840x2160_reset.mp4",
  },
  Rooms: {
    titre: "Rooms",
    texte: "Vivez l'exception, séjournez dans l'élégance absolue",
    button: "Booking",
    image: "/assets/video/0_Modern Living Room_City View_3840x2160.mp4",
  },
  Restaurant: {
    titre: "Restaurant",
    texte: "Savourez l'excellence, où chaque moment devient une expérience",
    button: "Booking",
    image: "/assets/image/restaurant-hall-with-round-square-tables-some-chairs-plants.png",
  },
  Spa: {
    titre: "SPA",
    texte: "Évadez-vous dans un sanctuaire de sérénité et de bien-être absolu.",
    button: "Booking",
    image: "/assets/image/woman-swimming-pool-spa.png",
  },
  Service:{
    titre: "Service",
    texte: "Notre hôtel de luxe vous offre des services exclusifs tels que valet, pressing, voiturier et bien plus pour un séjour inoubliable",
    button: "Booking",
    image: "/assets/image/DALL·E 2025-01-14 14.42.14 - A luxurious hotel service scene, showcasing a variety of high-end services. A valet in uniform opening the door of a shiny luxury car, with a high-end.webp",
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: hidden;
}

.background-video {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}
.image-container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: hidden;
}
.background-image {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.content h1 {
  font-size: 3rem;
  font-family: Lora;
  color: rgba(234, 198, 132, 1);
}

.content p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-family: Cardo, serif;
}

.content button {
  background-color: rgba(255, 255, 255, 0.24);
  color: #fcfcfc;
  border: 1px solid rgb(255, 255, 255);
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
}

.content button:hover {
  background-color: rgba(75, 101, 71, 1);
  color: rgba(234, 198, 132, 1);
  transform: scale(1.1);
  transition: background-color 0.3s ease;
}

.filter {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
