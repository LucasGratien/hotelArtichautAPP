import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: '',
        isLoggedIn: false,
    }),
    getters: {
        getUser() {
            return this.user;
        },
        getToken() {
            return this.token;
        },
    },
    actions: {
        async login(body) {
            try {
                const response = await $fetch('/login', {
                    method: 'POST',
                    body,
                });
                if (response.authorisation && response.authorisation.token) {
                    this.token = response.authorisation.token;
                    this.isLoggedIn = true;
                    this.setUserFromToken(this.token);
                    localStorage.setItem('authToken', this.token);
                }
            } catch (error) {
                console.error('Login failed:', error);
                this.user = null;
                this.token = '';
                this.isLoggedIn = false;
            }
        },
        async register(body) {
            try {
                const response = await $fetch('/register', {
                    method: 'POST',
                    body,
                });
                if (response.authorisation && response.authorisation.token) {
                    this.token = response.authorisation.token;
                    this.isLoggedIn = true;
                    this.setUserFromToken(this.token);
                    localStorage.setItem('authToken', this.token);
                }
            } catch (error) {
                console.error('Registration failed:', error);
                this.user = null;
                this.token = '';
                this.isLoggedIn = false;
            }
        },
        setUserFromToken(token) {
            const decodedToken = jwtDecode(token);
            this.user = {
                id: decodedToken.id,
                email: decodedToken.email,
                role_id: decodedToken.role_id,
                is_pro: decodedToken.is_pro,
                is_vip: decodedToken.is_vip,
            };
        },
        logout() {
            this.user = null;
            this.token = '';
            this.isLoggedIn = false;
            localStorage.removeItem('authToken');
        },
    },
});
