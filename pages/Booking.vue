<script setup>
import { ref } from "vue";

const form = ref({
  dateDebut: "",
  dateFin: "",
  nombrePersonnes: 1,
});

const chambres = ref([]);

const rechercherChambres = async () => {
  try {
    const res = await fetch(
      `http://localhost:8000/api/chambres/disponibles?date_debut=${form.value.dateDebut}&date_fin=${form.value.dateFin}&nombre_personnes=${form.value.nombrePersonnes}`,
    );
    chambres.value = await res.json();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="bg-[var(--secondary-color)]">
    <h1 class="text-[var(--primary-color)] font-bold">
      Recherchez une chambre
    </h1>
    <div class="flex justify-between">
      <input class="rounded-md" v-model="form.dateDebut" type="date" required />
      <input class="rounded-md" v-model="form.dateFin" type="date" required />
      <input
        class="rounded-md"
        v-model="form.nombrePersonnes"
        type="number"
        min="1"
        required
      />
      <button
        class="rounded-md bg-[var(--secondary-color)] border-[var(--primary-color)] text-[var(--primary-color)] border-[2px]"
        @click="rechercherChambres"
      >
        Rechercher
      </button>
    </div>
    <ul>
      <li v-for="chambre in chambres" :key="chambre.id">
        <router-link :to="`/reservation/chambre/${chambre.id}`">
          {{ chambre.nom }} - {{ chambre.prix }}€
        </router-link>
      </li>
    </ul>
  </div>
</template>
