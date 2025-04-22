<script setup>
import {ref, onMounted, computed} from 'vue'
import {useAuthStore} from '@/stores/auth'
import {useApiFetch} from '@/composables/useApiFetch'

const authStore = useAuthStore()
const users = ref([])
const loading = ref(false)
const error = ref(null)

const fetchAllUsers = async () => {
  loading.value = true
  error.value = null
  try {
    const {data, error: fetchError} = await useApiFetch('/admin/user', {
      headers: {
        Authorization: `Bearer ${authStore.getToken}`
      }
    })

    if (fetchError.value) throw new Error(fetchError.value.message || 'Erreur API')

    users.value = data.value || []
  } catch (err) {
    error.value = err.message
    console.error('[UserList] Erreur:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  authStore.initializeAuth()
  fetchAllUsers()
})

const columns = [
  {key: 'id', label: 'ID'},
  {key: 'firstname', label: 'Prénom'},
  {key: 'lastname', label: 'Nom'},
  {key: 'email', label: 'Email'},
  {key: 'city', label: 'Ville'},
  {key: 'phone', label: 'Téléphone'},
  {key: 'is_vip', label: 'VIP'},
  {key: 'is_pro', label: 'Pro'},
  {key: 'created_at', label: 'Créé le'}
]

const currentPage = ref(1)
const itemsPerPage = 10

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return users.value.slice(start, start + itemsPerPage)
})
</script>

<template>
  <div class="bg-white text-black rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-4">Liste des utilisateurs</h2>

    <div v-if="loading">Chargement...</div>
    <div v-else-if="error" class="text-red-600">Erreur : {{ error }}</div>
    <div v-else-if="users.length === 0">Aucun utilisateur trouvé.</div>
    <div v-else>
      <UTable
          :rows="paginatedUsers"
          :columns="columns"
          :loading="loading"
          :ui="{
  thead: '!bg-[var(--primary-color)]',
  th: {
    color: '!text-[var(--secondary-color)] dark:!text-[var(--secondary-color)]'
  }
}"
      />

      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200">
        <UPagination
            v-model="currentPage"
            :page-count="itemsPerPage"
            :total="users.length"
        />
      </div>
    </div>
  </div>
</template>
