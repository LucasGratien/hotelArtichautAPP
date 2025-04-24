<script setup>
import { ref } from 'vue';

const reservation = ref({
  name: '',
  email: '',
  checkInDate: '',
  checkOutDate: '',
  roomType: '',
  numberOfGuests: 1,
});

const submitForm = () => {
  console.log('Réservation envoyée :', reservation.value);
  alert('Votre réservation a bien été envoyée !');
};
</script>

<template>
  <div class="container">
    <h1 class="text-xl font-bold mb-4 flex justify-center text-[var(--primary-color)]">Réservez votre séjour</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input v-model="reservation.name" type="text" placeholder="Nom complet" required class="input" />
      <input v-model="reservation.email" type="email" placeholder="Email" required class="input" />

      <label for="checkInDate" class="label">Date d'arrivée</label>
      <input v-model="reservation.checkInDate" type="date" required class="input" />

      <label for="checkOutDate" class="label">Date de départ</label>
      <input v-model="reservation.checkOutDate" type="date" required class="input" />

      <label for="roomType" class="label">Type de chambre</label>
      <select v-model="reservation.roomType" required class="input">
        <option value="" disabled>Choisissez un type de chambre</option>
        <option value="single">Chambre standar</option>
        <option value="double">Chambre luxe</option>
        <option value="suite">Suite</option>
      </select>

      <label for="numberOfGuests" class="label">Nombre de personnes</label>
      <input v-model="reservation.numberOfGuests" type="number" min="1" required class="input" />

      <button type="submit" class="btn">Réserver</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  background: var(--secondary-color);
  border-radius: 8px;
  box-shadow: var(--primary-color);
}

.input {
  width: 100%;
  color: var(--primary-color);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: var(--champ-color);
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: var(--primary-color);
}

.input::placeholder {
  color: var(--primary-color);
  opacity: 1;
}

.btn {
  width: 100%;
  padding: 10px;
  background: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
