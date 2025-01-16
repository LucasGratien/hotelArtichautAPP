<template>
  <div class="herobaner-wrapper">
    <div class="video-container relative">
      <div class="image-container">
        <video v-if="image && image.includes('.mp4')" autoplay muted loop class="background-video">
          <source :src="image" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture des vidéos.
        </video>
        <img v-else :src="image" alt="background image" class="background-image" />
        <div class="filter absolute top-0 bottom-0 right-0 left-0"></div>
        <div class="content">
          <h1>{{ title }}</h1>
          <p>{{ text }}</p>
          <button>Booking</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
      title: String,
      text: String,
      button: String,
      image: String,
    }
)
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
