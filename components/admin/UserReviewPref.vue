<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useApiFetch } from '@/composables/useApiFetch'

const authStore = useAuthStore()

//initialise les variables encapsulation reviews et les variables états
const reviews = ref([])
const loading = ref(false)
const error = ref(null)


const fetchUserReviews = async () => {
  //maj state
  loading.value = true
  error.value = null
// tentative de fetch
  try {
    const { data, error: fetchError } = await useApiFetch('/review/user')

    if (fetchError.value) {
      throw new Error(fetchError.value.message || "Erreur lors du chargement des avis.")
    }

    reviews.value = data.value || []
  } catch (err) {
    console.error('[UserReviews] Erreur:', err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}
//chargement des données au montage du composant (à voir le middleware)
onMounted(() => {
  authStore.initializeAuth() // si nécessaire pour sécuriser la route
  fetchUserReviews()
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 text-black">
    <h2 class="text-xl font-semibold mb-4">Mes avis</h2>

    <div v-if="loading" class="text-gray-500">Chargement des avis...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="reviews.length === 0" class="text-gray-500">Pas d'avis</div>

    <ul v-else class="space-y-4">
      <li v-for="review in reviews" :key="review.id" class="border rounded p-4 shadow-sm">
        <div class="flex justify-between items-center">
          <span class="font-bold">Note :</span>
          <span class="text-yellow-500">{{ review.rate }}/5 ⭐</span>
        </div>
        <p class="mt-2 italic">"{{ review.review_content }}"</p>
      </li>
    </ul>
  </div>
</template>

