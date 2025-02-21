import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
    state: () => ({
        id: 1, //  par défaut (français)
        languages: []
    }),
    getters: {
        currentLanguage: (state) => {
            return state.languages.find(lang => lang.id === state.id) || null
        }
    },
    actions: {
        setLanguage(id) {
            this.id = id
        },
        async fetchLanguages() {
            try {
                const response = await fetch(`${useRuntimeConfig().public.apiBase}/language`)
                this.languages = await response.json()
            } catch (error) {
                console.error('Error fetching languages:', error)
            }
        }
    }
})