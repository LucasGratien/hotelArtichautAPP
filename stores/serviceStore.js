
import { defineStore } from 'pinia'
import { useFetchService } from '@/composables/useFetchService.js'


export const useServiceStore = defineStore('serviceStore', () => {
    const { data, loading, error, fetchService } = useFetchService()

    return { data, loading, error, fetchService }
})