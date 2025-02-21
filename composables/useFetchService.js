import { ref } from 'vue'

/**
 * @typedef {Object} Service
 * @property {number} id
 * @property {string} title
 *
 */

/**
 * Hook pour récupérer les services
 * @returns {{
 *   data: import('vue').Ref<Service[]>,
 *   loading: import('vue').Ref<boolean>,
 *   error: import('vue').Ref<Error|null>,
 *   fetchService: () => Promise<void>
 * }}
 */

export function useFetchService() {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchService = async () => {
        if (loading.value) return

        loading.value = true
        error.value = null

        try {
            const response = await fetch('http://192.168.1.245:8000/api/service/lang-1')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            data.value = await response.json()
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('An unknown error occurred')
            console.error('Fetch error:', error.value)
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, fetchService }
}
