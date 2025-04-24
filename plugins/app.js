import { useHotelStore } from "~/stores/hotel.js";
import { useAuthStore } from "~/stores/auth.js";

export default defineNuxtPlugin(async (nuxtApp) => {
    const hotelStore = useHotelStore()
    const authStore = useAuthStore()

    authStore.initializeAuth();

    try {

        await hotelStore.loadCommonData()
        console.log("Données de l'hôtel chargées avec succès");
    } catch (error) {
        console.error("Erreur lors du chargement des données de l'hôtel:", error)
    }


    nuxtApp.provide('hotel', hotelStore);
    nuxtApp.provide('auth', authStore);
})
