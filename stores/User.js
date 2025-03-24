import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser(userData) {
            this.user = userData;
            localStorage.setItem('user', JSON.stringify(userData)); // Persiste les données
        },
        clearUser() {
            this.user = null;
            localStorage.removeItem('user');
        },
        loadUserFromStorage() {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                this.user = JSON.parse(storedUser);
            }
        },
    },
});
