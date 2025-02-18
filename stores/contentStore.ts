// stores/contentStore.ts
import { defineStore } from 'pinia'
import { useFetchContent } from '~/composables/useFetchContent'

export const useContentStore = defineStore('contentStore', () => {
    const { data, loading, error, fetchContent } = useFetchContent()

    return { data, loading, error, fetchContent }
})

