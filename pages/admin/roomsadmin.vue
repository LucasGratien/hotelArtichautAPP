<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[var(--secondary-color)] border-2 border-[var(--primary-color)]">
        <NavigationSideBar />
      </div>
      <div class="block md:hidden h-auto bg-[var(--secondary-color)] border-2 border-[var(--primary-color)]">
        <NavigationBurgerSideMenuAdmin />
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle
          title="Accueil-Admin"
      />
<!--      grid des chambres-->
    <div class="grid grid-cols-3 gap-4 p-4">
      <div
          v-for="(legend, index) in statusLegends"
          :key="index"
          :style="{ backgroundColor: legend.color }"
          class="bg-[var(--primary-color)] p-4 rounded-lg flex items-center justify-center h-1"
      >
        <span class="text-sm">{{ legend.text }}</span>
      </div>
      <!-- Première carte horizontale avec les carrés -->
      <div class="col-span-3 space-y-4 -mt-2">
        <UCard class="w-full !text-[var(--secondary-color)] rounded-lg !shadow-m !ring-0 dark:!bg-[var(--primary-color)] !bg-[var(--primary-color)]">
          <div v-if="loading">Chargement des chambres...</div>
          <div v-else class="grid grid-cols-4 gap-2">
            <div
                v-for="room in rooms"
                :key="room.id"
                :class="getRoomClass(room.is_available ? 'available' : 'occupied')"
                class="bg-gray-200 p-4 rounded-lg flex items-center justify-center cursor-pointer"
                @click="selectRoom(room.id)"
            >
              <span class="text-sm text-black">{{ room.number }}</span>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Deuxième carte horizontale pour les détails de réservation -->
      <div class="col-span-3 space-y-4">
        <UCard class="w-full !text-[var(--secondary-color)] rounded-lg !shadow-m !ring-0 dark:!bg-[var(--primary-color)] !bg-[var(--primary-color)]">
          <p>Détails de la réservation</p>client
          <div v-if="currentBooking">
            <p><strong>Numéro de booking :</strong> {{ currentBooking.id }}</p>
            <p><strong>Nom du client :</strong> {{ currentBooking.client.name }}</p>
            <p><strong>Email :</strong> {{ currentBooking.client.email }}</p>
            <p><strong>Téléphone :</strong> {{ currentBooking.client.phone }}</p>
            <p><strong>Date d'arrivée :</strong> {{ formatDate(currentBooking.check_in) }}</p>
            <p><strong>Date de départ :</strong> {{ formatDate(currentBooking.check_out) }}</p>
            <p><strong>Prix total :</strong> {{ currentBooking.total_price }} €</p>
          </div>
          <div v-else>
            <p>Aucune réservation sélectionnée.</p>
          </div>
          <div class="flex justify-end mt-auto">
            <UButton class="!bg-yellow-400 !hover:bg-yellow-500 !text-white !font-bold">Modifier</UButton>

          </div>
        </UCard>
      </div>
    </div>

    <!-- Troisième carte verticale pour les détails de la chambre -->
    <div class="col-span-1 p-4">
      <UCard class="w-full rounded-lg !shadow-m !ring-0 dark:!bg-[var(--primary-color)] !bg-[var(--primary-color)]">
        <p>Détails de la chambre</p>
        <div v-if="selectedRoom">
          <p><strong>Numéro :</strong> {{ selectedRoom.number }}</p>
          <p><strong>Nom :</strong> {{ selectedRoom.name }}</p>
          <p><strong>Catégorie :</strong> {{ selectedRoom.category.name }}</p>
          <p><strong>Prix :</strong> {{ selectedRoom.category.price }} €</p>
          <p><strong>Statut :</strong> {{ roomStatus(selectedRoomId).text }}</p>
        </div>
        <div v-else>
          <p>Aucune chambre sélectionnée.</p>
        </div>
      </UCard>
    </div>
    </div>
  </div>
</template>

<script setup >
import { useRoomStore } from '~/stores/room'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'

const roomStore = useRoomStore()
const { rooms, selectedRoomId, loading, roomStatus } = storeToRefs(roomStore)
const { fetchAllData, selectRoom } = roomStore



// Utilisez computed pour les données dérivées
const selectedRoom = computed(() => roomStore.selectedRoom)
const currentBooking = computed(() => roomStore.currentBooking)


const getRoomClass = (status) => {
  const classes = {
    occupied: 'bg-red-300 hover:bg-red-500',
    available: 'bg-green-300 hover:bg-green-500',
    maintenance: 'bg-yellow-300 hover:bg-yellow-500'
  }
  return classes[status] || 'bg-gray-200 hover:bg-gray-300'
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('fr-FR')
}

// Charger les données
roomStore.fetchAllData()

// Surveiller les changements
watchEffect(() => {
  if (roomStore.error) {
    console.error('Erreur du store:', roomStore.error)
  }
})
watch(selectedRoomId, (id) => {
  console.log('Selected room changed:', id, roomStore.selectedRoom)
})

watch(currentBooking, (booking) => {
  console.log('Current booking changed:', booking)
}, { deep: true })


</script>

