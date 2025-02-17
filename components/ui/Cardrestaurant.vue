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
      <UiCarousel
          :current-slide="currentSlide"
          :images="images"
          @prev-slide="prevSlide"
          @next-slide="nextSlide"
      />
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

.images img {
  width: 100%;
  border-radius: 10px;
}

</style>
