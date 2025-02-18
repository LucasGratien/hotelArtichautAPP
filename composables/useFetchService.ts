import { ref } from 'vue'

export function useFetchService() {
    const data = ref<any[]>([])
    const loading = ref(false)
    const error = ref<Error | null>(null)

    const fetchService = async () => {
        loading.value = true
        error.value = null
        try {
            const response = await fetch('http://192.168.1.245:8000/api/service/lang-1')
            data.value = await response.json()
        } catch (err) {
            error.value = err as Error
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, fetchService }
}