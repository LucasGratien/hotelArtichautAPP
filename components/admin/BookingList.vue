<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useApiFetch } from '@/composables/useApiFetch'

const bookings = ref([])
const loading = ref(false)
const error = ref(null)
const authStore = useAuthStore()

const fetchAdminBookings = async () => {
  loading.value = true
  error.value = null

  try {
    const { data, error: fetchError } = await useApiFetch('/admin/booking', {
      headers: {
        Authorization: `Bearer ${authStore.getToken}`
      }
    })

    if (fetchError.value) throw new Error(fetchError.value.message || 'Erreur API')

    bookings.value = data.value.map(booking => ({
      ...booking,
      client_name: booking.user ? `${booking.user.firstname} ${booking.user.lastname}` : 'Inconnu',
      room_numbers: booking.rooms?.map(r => `#${r.number}`).join(', ') || '—'
    }))
    if (!Array.isArray(data.value)) {
      throw new Error('La réponse attendue n’est pas un tableau.')
    }
  } catch (err) {
    error.value = err.message
    console.error('[BookingList] Erreur:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  authStore.initializeAuth()
  fetchAdminBookings()
})

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'check_in', label: 'Arrivée' },
  { key: 'check_out', label: 'Départ' },
  {
    key: 'total_price_in_cent',
    label: 'Total €',
    formatter: (row) => (row.total_price_in_cent / 100).toFixed(2) + ' €'
  },
  {
    key: 'to_be_paid_in_cent',
    label: 'Restant €',
    formatter: (row) => (row.to_be_paid_in_cent / 100).toFixed(2) + ' €'
  },
  { key: 'number_of_persons', label: 'Pers.' },
  { key: 'client_name', label: 'Client' },
  { key: 'room_numbers', label: 'Chambres' }
]

// variabl ui pour la modification du style des entêtes du tableau
const tableConfig = {
  ui: {
    wrapper: 'rounded-lg shadow-md',
    thead: "bg-[var(--primary-color)]",
    th: {
      color: "text-[var(--secondary-color)] dark:text-[var(--secondary-color)]"
    }
  }
};

const currentPage = ref(1)
const itemsPerPage = 10

const paginatedBookings = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return bookings.value.slice(start, start + itemsPerPage)
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md">
    <div v-if="loading" class="text-black">Chargement des réservations...</div>
    <div v-else-if="error" class="text-red-600">Erreur : {{ error }}</div>
    <div v-else-if="bookings.length === 0" class="text-black">Aucune réservation trouvée.</div>
    <div v-else>
      <UTable
          :rows="paginatedBookings"
          :columns="columns"
          :loading="loading"
          v-bind="tableConfig"
      />

      <div class="flex justify-end dark:bg-white bg-white px-3 py-3.5 border-t border-gray-200">
        <UPagination
            v-model="currentPage"
            :page-count="itemsPerPage"
            :total="bookings.length"
        />
      </div>
    </div>
  </div>
</template>
