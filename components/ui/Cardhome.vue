<template>
  <div class="room-card flex flex-col md:flex-row items-center bg-[#f7f3eb] p-8 rounded-lg shadow-lg w-full mt-4">

    <div class="image-container w-full md:w-1/2">
      <img
          class="rounded-lg object-cover w-full h-full"
          src="/assets/image/parisluxe.png"
          alt="Chambre"
      />
    </div>

    <div class="text-container w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 class="title text-3xl font-serif mb-6 text-center md:text-left">Rooms</h2>
      <p class="description text-gray-700 leading-relaxed mb-8 text-center md:text-left">
        La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal.
      </p>
      <div class="text-center md:text-left">
        <NuxtLink
            to="/Rooms"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md shadow cta-btn"
        >
          En savoir+
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
</script>

<style scoped>
.room-card {
  background-color: rgba(234, 198, 132, 0.15);
  width: 100%;
}

.title {
  font-family: 'Lora', serif;
  color: black;
  text-decoration: underline;
}

.description {
  font-family: 'Cardo', serif;
}

.cta-btn {
  transition: background-color 0.3s ease;
}

.image-container img {
  max-height: 400px;
  object-fit: cover;
}
</style>
