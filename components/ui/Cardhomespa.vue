<template>
  <div class="spa-card">
    <div class="text-container w-full md:w-1/2 flex flex-col justify-center relative z-10">
      <h2 class="title text-3xl font-serif mb-6 text-center md:text-left">SPA</h2>
      <p class="description text-gray-700 leading-relaxed mb-8 text-center md:text-left">
        La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal.
      </p>
      <div class="text-center md:text-left">
        <NuxtLink
            to="/Spa"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md shadow cta-btn"
        >
          En savoir+
        </NuxtLink>

      </div>
    </div>

    <div class="image-container w-full md:w-1/2 relative flex justify-center items-center">
      <img
          class="rounded-lg shadow-lg object-cover w-[80%] md:w-[70%] h-auto z-0"
          src="/assets/image/woman-swimming-pool-spa.png"
          alt="Sauna"
      />
      <img
          class="rounded-lg shadow-lg object-cover w-[50%] h-auto absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8"
          src="/assets/image/massage.png"
          alt="Massage"
      />
    </div>
  </div>
</template>

<script setup lang="js">
</script>

<style scoped>
.spa-card {
  @apply  flex flex-col-reverse md:flex-row items-center bg-[#f7f3eb] p-8 rounded-lg shadow-lg w-full mt-4;
  background-color: #f7f3eb;
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
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
