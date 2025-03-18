import { useAuthStore } from '~/stores/auth';
import { jwtDecode } from 'jwt-decode';


export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    options.baseURL = config.public.apiBaseUrl;

    // Ajouter le token aux en-têtes si disponible
    if (authStore.getToken) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${authStore.getToken}`,
        };

        // Décoder le token et mettre à jour le store si nécessaire
        const decodedToken = jwtDecode(authStore.getToken);
        authStore.setUserFromToken(authStore.getToken);
    }

    return useFetch(path, options);
};
