import { defineStore } from 'pinia'
import { useApiFetch } from '@/composables/useApiFetch.js'

export const useHotelStore = defineStore('hotel', {
    state: () => ({
        roomCategories: [],
        langSelector: [],
        currentLang: {id: 1},
        contents: []
    }),

    getters: {
        language: (state) => {
            return (category) => state.contents.filter(item => {
                return state.currentLang.id === item.language.id && item.name.includes(category)
            })
        },
        banner: (state) => {
            return state.contents.filter(item => {
                return state.currentLang.id === item.language.id && item.name.includes('banner')
            })
        }
    },


    actions: {
        async loadCommonData() {
            try {
                const roomResponse = await useApiFetch(`/rooms-category/lang-1`)
                const langResponse = await useApiFetch(`/language`)
                const contentResponse = await useApiFetch(`/content`)

                console.log("Langues récupérées:", langResponse.data.value);

                this.roomCategories = roomResponse.data.value || []
                this.langSelector = langResponse.data.value || []
                this.currentLang = this.langSelector.find(lang => lang.id === this.currentLang.id) || {id: 1}
                this.contents = contentResponse.data.value || []
            } catch (error) {
                console.error("Erreur :", error)
            }
        },

        async changeLanguage(id) {
            try {
                const langResponse = await useApiFetch(`/language/${id}`)
                console.log("Langue après changement:", langResponse.data.value);

                this.currentLang = langResponse.data.value || { id: 1, lang: 'Français' }
            } catch (error) {
                console.error("Erreur :", error)
            }
        }
    }
})
