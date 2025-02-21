
import { ref } from 'vue'
export function useLanguages() {
    const languages = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchLanguages = async () => {
        loading.value = true
        error.value = null
        try {
            const response = await fetch(`${useRuntimeConfig().public.apiBase}/language`)
            languages.value = await response.json()
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('An unknown error occurred')
            console.error('Fetch languages error:', error.value)
        } finally {
            loading.value = false
        }
    }
    return { languages, loading, error, fetchLanguages }
}
