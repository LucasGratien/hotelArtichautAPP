<template>
  <div class="herobaner-wrapper">
    <div class="video-container relative">
      <div class="image-container">
        <video v-if="image && image.includes('.mp4')" autoplay muted loop class="background-video">
          <source :src="image" type="video/mp4"/>
          Votre navigateur ne supporte pas la lecture des vidéos.
        </video>
        <img v-else :src="image" alt="background image" class="background-image"/>
        <div class="filter absolute top-0 bottom-0 right-0 left-0"></div>
        <div class="content ">
          <h1 class="sm:text-[4rem]">{{ title }}</h1>
          <p>{{ text }}</p>


          <div v-if="button && button.trim().length > 0">
            <button>{{ button }}</button>
          </div>

          <div v-if="link && link.trim().length > 0">
            <NuxtLink
                :to="link"
                class="
            bg-[var(--primary-color)] hover:bg-[var(--champ-color)]
            text-[var(--secondary-color)] hover:text-[var(--primary-color)]
             py-3 px-8 rounded-md shadow cta-btn"
            >
              {{ buttonText }}
            </NuxtLink>
          </div>
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
      link: String,
      buttonText: String
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
  max-width: 100vw;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.content h1 {
  font-size: 5rem;
  color: var(--primary-color);
}

.content p {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.content button {
  background-color: rgba(255, 255, 255, 0.24);
  color: var(--background-color);
  border: 1px solid var(--background-color);
  padding: 5px 10px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
}

.content button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transform: scale(1.1);
  transition: background-color 0.3s ease;
}

.filter {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
