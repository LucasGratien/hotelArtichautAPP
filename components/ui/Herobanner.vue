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
        <div class="absolute max-w-screen left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-1">
          <h1 class="text-5xl sm:text-7xl text-[var(--primary-color)] py-4">{{ title }}</h1>
          <p class="text-2xl sm:text-3xl text-[var(--background-color)] mb-6">{{ text }}</p>


          <div v-if="button && button.trim().length > 0">
            <button>
              {{ button }}
            </button>
          </div>

          <div v-if="link && link.trim().length > 0">
            <NuxtLink
                :to="link"
                class="
            bg-[var(--primary-color)] hover:bg-[var(--champ-color)]
            text-[var(--secondary-color)] font-semibold hover:text-[var(--primary-color)]
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


button {
  background-color: rgba(255, 255, 255, 0.24);
  color: var(--background-color);
  border: 1px solid var(--background-color);
  padding: 5px 10px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
}


button:hover {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  transform: scale(1.1);
  transition: background-color 0.3s ease;
}

.filter {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
