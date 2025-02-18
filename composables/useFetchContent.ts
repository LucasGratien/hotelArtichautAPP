// composables/useFetchContent.ts
import { ref } from 'vue'

export function useFetchContent() {
    const data = ref<any[]>([])
    const loading = ref(false)
    const error = ref<Error | null>(null)

    const fetchContent = async () => {
        loading.value = true
        error.value = null
        try {
            const response = await fetch('http://192.168.1.245:8000/api/content/lang-2')
            data.value = await response.json()
        } catch (err) {
            error.value = err as Error
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, fetchContent }
}
