<template>
  <div class="restaurant-page">
    <div class="content">
      <h1>Le restaurant</h1>
      <p>
        La chambre standard de notre hôtel allie confort et simplicité pour un séjour
        agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran
        plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec
        douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont
        également à votre disposition. La décoration moderne et chaleureuse offre une
        ambiance propice à la détente. Idéale pour les séjours professionnels ou
        touristiques, cette chambre vous garantit un repos optimal.
      </p>
     <div class="arrow-double flex justify-end"> <button class="arrow left " @click="prevSlide">←</button>
      <button class="arrow right" @click="nextSlide">→</button>
     </div>
    </div>
    <div class="carousel">
      <div class="images ">
        <img :src="images[currentSlide]" alt="Restaurant Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/assets/image/restaurant-hall-with-round-square-tables-some-chairs-plants.png",
        "/assets/image/chef.png",
      ],
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide =
          (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.restaurant-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: rgba(234, 198, 132, 0.15);
}

.content {
  margin-bottom: 30px;
}

h1 {
  font-size: 2rem;
  color: #4a4a4a;
  text-decoration: underline ;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.images {
  overflow: hidden;
  width: 40%;
  height: auto;
}

.images img {
  width: 100%;
  border-radius: 10px;
}

.arrow {
  background-color: rgba(255, 255, 255, 0.19);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  border: #090000 solid 2px;
  border-radius: 30px;
  color: #4a4a4a;
  font-size: large;
}

.arrow:hover {
  color: #a09d9d;
}
</style>
