<template>
  <div class="card flex flex-col justify-between relative items-center mx-auto w-80 p-6 rounded-lg shadow-lg">
    <div class="title-container mb-4">
      <p class="title">Our Rooms</p>
    </div>
    <div class="detail">
      <p class="description">
        La chambre standard de notre hôtel allie confort et simplicité pour un séjour agréable. Elle est équipée d'un lit double spacieux, d'une télévision à écran plat, d'une connexion Wi-Fi gratuite, et d'une salle de bain privative avec douche ou baignoire. Idéale pour les séjours professionnels ou touristiques, cette chambre vous garantit un repos optimal.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background-color: rgba(234, 198, 132, 0.54);

  max-width: 320px;
  text-align: center;
  margin-top: -20px;
}
.title {
  font-family: 'Lora', serif;
  font-size: 20px;
  text-decoration: underline;
  color: #090000;
}
.description {
  font-family: 'Cardo', serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}
.title-container {
  margin-bottom: 12px;
}
</style>
