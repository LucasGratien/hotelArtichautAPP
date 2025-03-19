import {useAuthStore} from '~/stores/auth';
import {jwtDecode} from 'jwt-decode';


export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    //Utilisatioin de la config env pour url

    options.baseURL = config.public.apiBaseUrl;

    // Ajouter le token si dispo

    if (authStore.getToken) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${authStore.getToken}`,
        };

        // Décoder le token et up le store si nécessaire // avec vérification de execution du code coté client
        // if (import.meta.client) {
        //     const decodedToken = jwtDecode(authStore.getToken);
        //     authStore.setUserFromToken(authStore.getToken);
        // }
    }

    //return des data, Attention ça fait geulé (warn) la console, elle préfère fetch
    return useFetch(path, options);
};
