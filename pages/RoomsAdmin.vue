<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[#4b6447] border-2 border-[var(primary)]">
        <NavigationSideBar />
      </div>
      <div class="block md:hidden h-auto bg-[#4b6447] border-2 border-[var(primary)]">
        <NavigationBurgerSideMenuAdmin />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 p-4 mb-72">
      <div
          v-for="(square, index) in topSquares"
          :key="index"
          :style="{ backgroundColor: square.color }"
          class="bg-gray-200 p-4 rounded-lg flex items-center justify-center h-1"
      >
        <span class="text-sm">{{ square.text }}</span>
      </div>
      <!-- Première carte horizontale avec les carrés -->
      <div class="col-span-3 space-y-4 -mt-2">
        <UCard class="w-full">
          <div class="grid grid-cols-4 gap-2">
            <div
                v-for="(square, squareIndex) in squares"
                :key="squareIndex"
                :class="square.status === 'Active' ? 'bg-green-200' : 'bg-red-200'"
                class="bg-gray-200 p-4 rounded-lg flex items-center justify-center cursor-pointer"
                @click="selectRoom(square.text)"
            >
              <span class="text-sm">{{ square.text }}</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Deuxième carte horizontale pour les détails de réservation -->
      <div class="col-span-3 space-y-4">
        <UCard class="w-full">
          <p>Détails de la réservation</p>
          <div v-if="selectedReservation">
            <p><strong>Numéro de booking :</strong> {{ selectedReservation.bookingNumber }}</p>
            <p><strong>Nom du client :</strong> {{ selectedReservation.clientName }}</p>
            <p><strong>Date d'arrivée :</strong> {{ selectedReservation.arrivalDate }}</p>
            <p><strong>Date de départ :</strong> {{ selectedReservation.departureDate }}</p>
          </div>
          <div v-else>
            <p>Aucune réservation sélectionnée.</p>
          </div>
          <div class="flex justify-end mt-auto">
            <UButton class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold">Modifier</UButton>

          </div>
        </UCard>
      </div>
    </div>

    <!-- Troisième carte verticale pour les détails de la chambre -->
    <div class="col-span-1 p-4">
      <UCard class="h-80">
        <p>Détails de la chambre</p>
        <div v-if="selectedRoom">
          <p><strong>Détails de la chambre :</strong> {{ selectedRoom.details }}</p>
          <p><strong>Catégorie :</strong> {{ selectedRoom.category }}</p>
          <p><strong>Prix :</strong> {{ selectedRoom.price }} €</p>
          <p><strong>Surface :</strong> {{ selectedRoom.surface }} m²</p>
          <p><strong>Nombre de personnes :</strong> {{ selectedRoom.capacity }}</p>
        </div>
        <div v-else>
          <p>Aucune chambre sélectionnée.</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { useHotelStore } from "@/stores/hotel";

const store = useHotelStore();
const topSquares = [
  { text: "Occupée", color: "#fecaca" },
  { text: "Libre", color: "#bbf7d0" },
  { text: "Entretien", color: "yellow" },
];

const squares = [
  { text: "101", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "102", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "103", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "104", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "105", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "106", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "107", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "108", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "201", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "202", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "203", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "204", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "205", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "206", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "207", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "208", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "209", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "210", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "300", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "301", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "302", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "303", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "304", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
  { text: "305", status: Math.random() > 0.5 ? 'Active' : 'Inactive' },
];

// Références pour stocker les données
const rooms = ref([]); // Toutes les chambres
const selectedRoom = ref(null); // Chambre sélectionnée
const selectedReservation = ref(null); // Réservation sélectionnée

// Fetch les données des chambres au chargement de la page
onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/rooms'); // Remplace par ton endpoint
    const data = await response.json();
    rooms.value = data; // Stocke les données récupérées
  } catch (error) {
    console.error('Erreur lors du chargement des chambres :', error);
  }
});

// Fonction pour sélectionner une chambre au clic d'un carré
const selectRoom = (roomNumber) => {
  const room = rooms.value.find((room) => room.number === roomNumber);
  if (room) {
    selectedRoom.value = room;
    selectedReservation.value = room.reservation || null; // Si la chambre a une réservation
  } else {
    selectedRoom.value = null;
    selectedReservation.value = null;
  }
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>