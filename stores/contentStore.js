import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useFetchContent } from '~/composables/useFetchContent'

export const useContentStore = defineStore('contentStore', () => {
    const { data, loading, error, fetchContent } = useFetchContent()

    const sortedData = computed(() =>
        [...data.value].sort((a, b) => a.title.localeCompare(b.title))
    )

    const refresh = async () => {
        await fetchContent()
    }

    return {
        data,
        loading,
        error,
        fetchContent,
        sortedData,
        refresh
    }
})
