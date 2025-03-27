import { defineStore } from 'pinia'
import { useApiFetch } from '@/composables/useApiFetch'

export const useRoomStore = defineStore('room', {
    state: () => ({
        rooms: [],
        bookings: [],
        selectedRoomId: null,
        loading: false,
        error: null
    }),

    getters: {
        selectedRoom(state) {
            return state.rooms.find(room => room.id === state.selectedRoomId)
        },

        bookingsForSelectedRoom(state) {
            if (!state.selectedRoomId) return []
            return state.bookings.filter(booking =>
                booking.roomIds?.includes(state.selectedRoomId)
            )
        },

        currentBooking(state) {
            const bookings = this.bookingsForSelectedRoom
            if (!bookings.length) return null
            const now = new Date()
            return  bookings.find(booking => {
                const checkIn = new Date(booking.check_in)
                const checkOut = new Date(booking.check_out)
                return checkIn <= now && checkOut >= now
            }) || null
        },

        roomStatus() {
            const statusMap = {
                occupied: { text: 'Occupée', color: 'bg-red-200' },
                available: { text: 'Libre', color: 'bg-green-200' },
                maintenance: { text: 'Entretien', color: 'bg-yellow-200' }
            }
            return (roomId) => {
                const room = this.rooms.find(r => r.id === roomId)
                if (!room) return statusMap.available
                // Vérifie si la chambre a une réservation active
                const hasActiveBooking = this.bookings.some(booking =>
                    booking.roomIds?.includes(roomId) &&
                    new Date(booking.check_in) <= new Date() &&
                    new Date(booking.check_out) >= new Date()
                )

                return hasActiveBooking ? statusMap.occupied :
                    room.is_available ? statusMap.available : statusMap.maintenance
            }
        }
    },

    actions: {
        async fetchAllData() {
            this.loading = true
            this.error = null
            try {
                console.log('[RoomStore] Début du chargement des données...')

                // Appel API avec gestion d'erreur améliorée
                const {data, error} = await useApiFetch('/room/lang-2')

                console.log('[RoomStore] Réponse API reçue:', {data, error})

                // Vérification des erreurs
                if (error.value) {
                    throw new Error(`Erreur API: ${error.value.message || 'Pas de message derreur'}`)


                }

                if (!data.value) {
                    throw new Error("L'API a retourné une réponse vide")
                }

                // Réinitialisation des données
                this.rooms = []
                this.bookings = []


                // Traitement des chambres
                this.rooms = data.value.map(room => ({
                    id: room.id,
                    number: room.number,
                    name: room.room_name,
                    description: room.description,
                    is_available: room.is_available,
                    category: {
                        name: room.category?.category_name,
                        price: room.category?.price_in_cent ? (room.category.price_in_cent / 100).toFixed(2) : '0.00'
                    }
                }))

                // Traitement des réservations
                this.bookings = data.value.flatMap(room =>
                    room.bookings?.map(booking => ({
                        ...booking,
                        roomIds: [room.id], // Associe la réservation à la chambre
                        total_price: (booking.total_price_in_cents / 100).toFixed(2),
                        client: {
                            name: `${booking.user?.firstname} ${booking.user?.lastname}`,
                            email: booking.user?.email,
                            phone: booking.user?.phone
                        }
                    })) || []
                )

                console.log('[RoomStore] Chambres chargées:', this.rooms)
                console.log('[RoomStore] Réservations chargées:', this.bookings)

            } catch (err) {
                console.error('[RoomStore] Erreur complète:', err)
                this.error = err.message || "Erreur inconnue lors du chargement des chambres"

                // En mode développement, affichez plus d'informations
                if (process.env.NODE_ENV === 'development') {
                    console.group('[RoomStore] Détails de l\'erreur')
                    console.error('Stack:', err.stack)
                    console.error('Raw response:', err.response)
                    console.groupEnd()
                }
            } finally {
                this.loading = false
                console.log('[RoomStore] Chargement terminé')
            }
        },

        selectRoom(roomId) {
            this.selectedRoomId = roomId
            console.log(`[RoomStore] Chambre sélectionnée: ${roomId}`,
                this.selectedRoom,
                this.currentBooking)
        }
    }
})