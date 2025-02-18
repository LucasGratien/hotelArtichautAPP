import { defineStore } from 'pinia'
import { useFetchService } from '~/composables/useFetchService'

export const useServiceStore = defineStore('contentStore', () => {
    const { data, loading, error, fetchService } = useFetchService()

    return { data, loading, error, fetchService }
})