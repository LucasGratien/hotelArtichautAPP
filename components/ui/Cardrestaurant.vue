<template>
  <div class="restaurant-page mt-20">
    <div class="content">
      <h1 class="text-center">Le Restaurant</h1>
      <p class="text-center">
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

}

.content {
  margin-bottom: 30px;
}

h1 {
  font-size: 3rem;
  color: #4a4a4a;
  text-decoration: underline ;
  font-weight: bold;

}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  color: #4a4a4a;
}

.images img {
  width: 100%;
  border-radius: 10px;
}

</style>
