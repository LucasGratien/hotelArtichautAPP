<template>
  <div class="spa-card">
    <div class="text-container w-full md:w-1/2 flex flex-col justify-center relative z-10">
      <h2 class="underline font-bold text-3xl text-[var(--secondary-color)] mb-6 text-center md:text-left">SPA</h2>
      <p class="description text-[var(--secondary-color)] leading-relaxed mb-8 text-center md:text-left">
        La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Un bureau fonctionnel et un espace de rangement sont également à votre disposition. La décoration moderne et chaleureuse offre une ambiance propice à la détente. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal.
      </p>
      <div class="text-center md:text-left">
        <NuxtLink
            to="/Spa"
            class="
            bg-[var(--primary-color)] hover:bg-[var(--champ-color)]
            text-[var(--secondary-color)] hover:text-[var(--primary-color)]
             py-3 px-8 rounded-md shadow cta-btn"
        >
          En savoir+
        </NuxtLink>

      </div>
    </div>

    <div class="hover:scale-105 transition-transform duration-300 ease-in-out w-full md:w-1/2 relative flex justify-center items-center">
      <img
          class=" rounded-lg shadow-lg object-cover w-[80%] md:w-[70%] h-auto z-0"
          src="@/assets/images/woman-swimming-pool-spa.png"
          alt="Sauna"
      />
    </div>
  </div>
</template>

<script setup lang="js">
</script>

<style scoped>
.spa-card {
  @apply  flex flex-col-reverse md:flex-row items-center bg-[var(--background)] p-8 rounded-lg shadow-lg w-full mt-4;
  background-color: var(--background-color);
  width: 100%;
}


</style>
