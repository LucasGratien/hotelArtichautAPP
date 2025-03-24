import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import { useApiFetch } from '~/composables/useApiFetch';

export const useAuthStore = defineStore('auth', {
    //Stat du user
    state: () => ({
        user: null,
        token: '',
        isLoggedIn: false,
    }),
    //Bha les getters
    getters: {
        getUser() {
            return this.user;
        },
        getToken() {
            return this.token;
        },
    },
    //Méthodes users
    actions: {
        //Se connecter
        async login(body) {
            try {
                const { data, error } = await useApiFetch('/login', {
                    method: 'POST',
                    body,
                });
// s'il y a un problème dans le login on coupe la fonction et on reset le token éventuellement généré
                if (error.value) {
                    console.error('Login failed:', error.value);
                    this.resetAuth();
                    return;
                }
// vérif des authorisations et de leurs tokens
                if (data.value?.authorisation?.token) {
                    this.setAuthToken(data.value.authorisation.token);
                }
            } catch (error) {
                console.error('Login failed:', error);
                this.resetAuth();
            }
        },
        //S'enregistrer
        async register(body) {
            try {
                const { data, error } = await useApiFetch('/register', {
                    method: 'POST',
                    body,
                });

                if (error.value) {
                    console.error('Registration failed:', error.value);
                    this.resetAuth();
                    return;
                }

                if (data.value?.authorisation?.token) {
                    this.setAuthToken(data.value.authorisation.token);
                }
            } catch (error) {
                console.error('Registration failed:', error);
                this.resetAuth();
            }
        },
        //Mettre un token
        setAuthToken(token) {
            this.token = token;
            this.isLoggedIn = true;
            this.setUserFromToken(token);

            if (this.user?.id) {
                this.fetchUserData(this.user.id);
            }

            // Stocker le token dans un cookie
            const authToken = useCookie('authToken', {
                maxAge: 60 * 60 * 24 * 7, // 7 jours
                secure: true, // Activer en prod
                sameSite: 'strict',
            });

            authToken.value = token;

        },
        //charger les infos du token
        async setUserFromToken(token) {
            const decodedToken = jwtDecode(token);
            console.log('Decoded token:', decodedToken);
            this.user = {
                id: decodedToken.id,
                email: decodedToken.email,
                role_id: decodedToken.role_id,
                is_pro: decodedToken.is_pro,
                is_vip: decodedToken.is_vip,
            };
            // Récupérer les infos complètes du user via id du token
            await this.fetchUserData(decodedToken.id);
            console.log('User après fetch:', this.user);
            console.log(decodedToken.id);
        },

        // Récupérer les infos complètes du user depuis l'API en lian l'id dans le token et l'id du user
        async fetchUserData(userId) {
            try {
                const { data, error } = await useApiFetch(`/user/${userId}`, {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${this.token}` },
                });

                if (error.value) {
                    console.error('Erreur récupération user:', error.value);
                    return;
                }

                if (data.value?.user) {
                    this.user = data.value.user;
                    console.log('Firstname:', this.user.firstname);
                    console.log('Lastname:', this.user.lastname);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du user:', error);
            }
        },


        //Se déco
        logout() {
            this.resetAuth();
            //message (temporaire de bienvenue)
            alert(`Vous avez été déconnécté !`);
        },
        //supp le token
        resetAuth() {
            this.user = null;
            this.token = '';
            this.isLoggedIn = false;

            // Supprimer le cookie
            const authToken = useCookie('authToken');
            authToken.value = null;
        },
    },
});
