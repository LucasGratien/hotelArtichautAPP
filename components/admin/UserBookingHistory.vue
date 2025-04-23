<script setup>

//Imports et chargement du User
import {useAuthStore} from "~/stores/auth.js";

const authStore = useAuthStore();
onMounted(() => {
  authStore.initializeAuth();
});
//Imports et chargement des rooms/user
import {useRoomStore} from '@/stores/room'

const roomStore = useRoomStore()
onMounted(() => {
  roomStore.fetchUserBookings()
})

// Pagination et tableau
const currentPage = ref(1)
const itemsPerPage = 5


const columns = [
  {key: 'numero', label: 'Numéro'},
  {key: 'dateArrivee', label: 'Date d\'arrivée'},
  {key: 'dateDepart', label: 'Date de départ'},
  {key: 'chambre', label: 'Chambre'},
  {key: 'detail', label: 'Détail'}
]

// variabl ui pour la modification du style des entêtes du tableau
const tableConfig = {
  ui: {
    thead: "bg-[var(--primary-color)]",
    th: {
      color: "text-[var(--secondary-color)] dark:text-[var(--secondary-color)]"
    }
  }
};

// Mapping des données depuis le store
const formattedBookings = computed(() => {
  return roomStore.bookings.map((booking, index) => ({
    numero: index + 1,
    dateArrivee: new Date(booking.check_in).toLocaleDateString(),
    dateDepart: new Date(booking.check_out).toLocaleDateString(),
    chambre: booking.roomIds?.length ? `Chambre ${booking.roomIds.join(', ')}` : 'Non spécifiée',
  }))
})


// Pagination dynamique en fonction du nombre de contenu
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return formattedBookings.value.slice(start, start + itemsPerPage)
})

</script>

<template>
  <div class="bg-white text-black rounded-lg shadow-md p-8">

    <!-- Message si aucune réservation -->
    <div v-if="!roomStore.bookings.length" class="text-center text-gray-500 text-lg">
      Pas de réservations
    </div>

    <!-- Tableau des réservations -->
    <div v-else>
      <UTable
          :rows="currentItems"
          :columns="columns"
          :loading="roomStore.loading"
          :ui="{
            wrapper: 'rounded-lg shadow-md',
            thead: '!bg-[var(--primary-color)]',
            th: {
              color: '!text-[var(--secondary-color)] dark:!text-[var(--secondary-color)]'
            }
          }"
      />

      <!-- Pagination -->
      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200">
        <UPagination
            v-model="currentPage"
            :page-count="itemsPerPage"
            :total="formattedBookings.length"
        />
      </div>
    </div>

  </div>
</template>
