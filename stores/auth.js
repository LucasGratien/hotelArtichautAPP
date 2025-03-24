import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import { useApiFetch } from '~/composables/useApiFetch';
import { useUserStore } from '~/stores/User';

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
                //récupère les données de l'utilisateur
                if (data.value?.user) {
                    const userStore = useUserStore();
                    userStore.setUser(data.value.user);
                    this.user = {
                        id: data.value.user.id,
                        email: data.value.user.email,
                        firstname: data.value.user.firstname,
                        lastname: data.value.user.lastname,
                        address: data.value.user.address,
                        city: data.value.user.city,
                        postal_code: data.value.user.postal_code,
                        phone: data.value.user.phone,
                        images: data.value.user.images
                    };

                    console.log('User connecté:', this.user);
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
        //charger les infos du token et les stocker
        async setUserFromToken(token) {
            const decodedToken = jwtDecode(token);
            console.log('Decoded token:', decodedToken);
            this.user = {
                id: decodedToken.id,
                role_id: decodedToken.role_id,
                is_pro: decodedToken.is_pro,
                is_vip: decodedToken.is_vip,
            };
            // Récupérer les infos complètes du user via id du token
            await this.fetchUserData(decodedToken.id);
            console.log('Id du token: ',decodedToken.id);
            console.log('Role_id :',decodedToken.role_id);
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
            //message (temporaire de salut)
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
        initializeAuth() {
            const authToken = useCookie('authToken');
            const userStore = useUserStore();
            if (authToken.value) {
                this.setAuthToken(authToken.value);
                userStore.loadUserFromStorage(); // restore info perso user

                if (userStore.user) {
                    this.isLoggedIn = true; // Assure que le user reste connecté
                }
            }
        },
    },
});
