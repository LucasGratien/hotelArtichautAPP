import { defineStore } from 'pinia'
import { useApiFetch } from '@/composables/useApiFetch.js'

export const useHotelStore = defineStore('hotel', {
    state: () => ({
        roomCategories: [],
        langSelector: [],
        currentLang: { id: 1 },
        contents: [],
        rooms: [],
        selectedRoom: null,
    }),

    getters: {
        language: (state) => {
            return (category) =>
                state.contents.filter(
                    (item) =>
                        state.currentLang.id === item.language.id &&
                        item.name.includes(category)
                )
        },
    },

    actions: {
        async loadCommonData() {
            try {
                const roomResponse = await useApiFetch(`/rooms-category/lang-1`)
                const langResponse = await useApiFetch(`/language`)
                const contentResponse = await useApiFetch(`/content`)
                const availableResponse = await useApiFetch(`/room/lang-1/available`)

                console.log('Langues récupérées:', langResponse.data.value)

                this.roomCategories = roomResponse.data.value || []
                this.langSelector = langResponse.data.value || []
                this.currentLang =
                    this.langSelector.find((lang) => lang.id === this.currentLang.id) || {
                        id: 1,
                    }
                this.contents = contentResponse.data.value || []
                this.rooms = availableResponse.data.value || []
            } catch (error) {
                console.error('Erreur loadCommonData :', error)
            }
        },

        async fetchAvailableRooms(dateDebut, dateFin, nombrePersonnes) {
            try {
                const response = await useApiFetch(
                    `/room/lang-1/available?check_in=${dateDebut}&check_out=${dateFin}&number_of_persons=${nombrePersonnes}`
                )
                this.rooms = response.data.value || []
            } catch (error) {
                console.error(
                    'Erreur lors de la récupération des chambres disponibles:',
                    error
                )
            }
        },

        setSelectedRoom(room) {
            this.selectedRoom = room
        },

        async changeLanguage(id) {
            try {
                const langResponse = await useApiFetch(`/language/${id}`)
                console.log('Langue après changement:', langResponse.data.value)

                this.currentLang =
                    langResponse.data.value || { id: 1, lang: 'Français' }
            } catch (error) {
                console.error('Erreur changement de langue :', error)
            }
        },

        updateContentInStore(updatedContent) {
            const index = this.contents.findIndex((c) => c.id === updatedContent.id)
            if (index !== -1) {
                this.contents[index] = {
                    ...this.contents[index],
                    ...updatedContent,
                }
            }
        },
    },
})
