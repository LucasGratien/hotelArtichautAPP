<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useHotelStore } from "@/stores/hotel.js";

const hotelStore = useHotelStore();
const router = useRouter();

const form = ref({
  dateDebut: "",
  dateFin: "",
  nombrePersonnes: 1,
});

const currentPage = ref(1);
const itemsPerPage = 4;

const rechercherChambres = async () => {
  console.log("🔍 Recherche en cours...", form.value);
  await hotelStore.fetchAvailableRooms(
    form.value.dateDebut,
    form.value.dateFin,
    form.value.nombrePersonnes,
  );
  currentPage.value = 1;
};

const paginatedRooms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return hotelStore.rooms.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.ceil(hotelStore.rooms.length / itemsPerPage),
);

const goToChambre = (id) => {
  const chambre = hotelStore.rooms.find((room) => room.id === id);
  if (chambre) {
    hotelStore.setSelectedRoom(chambre);
    router.push({
      path: `/Reservation/chambre/${id}`,
      query: {
        check_in: form.value.dateDebut,
        check_out: form.value.dateFin,
        persons: form.value.nombrePersonnes,
      },
    });
  } else {
    console.error("Chambre introuvable");
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="bg-[var(--secondary-color)] p-2">
    <h1 class="text-[var(--primary-color)] font-bold p-2 text-[20px]">
      Recherchez une chambre:
    </h1>
    <div class="flex justify-between">
      <input
        class="rounded-md bg-[var(--secondary-color)] border-[2px] border-[var(--primary-color)]"
        v-model="form.dateDebut"
        type="date"
        required
      />
      <input
        class="rounded-md bg-[var(--secondary-color)] border-[2px] border-[var(--primary-color)]"
        v-model="form.dateFin"
        type="date"
        required
      />
      <input
        class="rounded-md bg-[var(--secondary-color)] border-[2px] border-[var(--primary-color)]"
        v-model="form.nombrePersonnes"
        type="number"
        min="1"
        required
      />
      <button
        class="rounded-md bg-[var(--secondary-color)] border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] border-[2px] font-semibold p-1"
        @click="rechercherChambres"
      >
        Rechercher
      </button>
    </div>
  </div>

  <div class="flex justify-center">
    <ul>
      <li
        v-for="chambre in paginatedRooms"
        :key="chambre.id"
        class="p-5 m-5 shadow-xl transform hover:scale-105 transition-transform duration-200 ease-in-out text-[var(--primary-color)] bg-[var(--secondary-color)] border-[2px] rounded-md border-[var(--primary-color)] cursor-pointer"
        @click="goToChambre(chambre.id)"
      >
        <h1 class="font-bold text-[25px]">{{ chambre.room_name }}</h1>
        <img
          v-if="chambre.images.length > 0"
          :src="chambre.images[0]"
          alt="photo chambre"
        />
        <p class="font-bold">Description:</p>
        {{ chambre.description }}
        <p class="font-bold">Type:</p>
        {{ chambre.category.category_name }}
        <p class="font-bold">Prix:</p>
        {{ chambre.category.price_in_cent / 100 }} €/nuit
      </li>
    </ul>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center space-x-4 mt-4">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 border-[2px] text-[var(--primary-color)] bg-[var(--secondary-color)] border-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] rounded-md"
    >
      Précédent
    </button>
    <span class="text-[var(--secondary-color)] px-4 py-2"
      >Page {{ currentPage }} / {{ totalPages }}</span
    >
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 border-[2px] text-[var(--primary-color)] bg-[var(--secondary-color)] border-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] rounded-md"
    >
      Suivant
    </button>
  </div>
</template>
