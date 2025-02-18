import { ref } from 'vue'

/**
 * @typedef {Object} Content
 * @property {number} id
 * @property {string} title
 */

/**
 * Hook for fetching content
 * @returns {{
 *   data: import('vue').Ref<Content[]>,
 *   loading: import('vue').Ref<boolean>,
 *   error: import('vue').Ref<Error|null>,
 *   fetchContent: () => Promise<void>
 * }}
 */
export function useFetchContent() {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchContent = async () => {
        if (loading.value) return

        loading.value = true
        error.value = null

        try {
            const response = await fetch('http://192.168.1.245:8000/api/content/lang-2')
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

    return { data, loading, error, fetchContent }
}