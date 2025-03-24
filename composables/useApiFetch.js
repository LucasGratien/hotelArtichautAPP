import {useAuthStore} from '~/stores/auth';



export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    //Utilisation de la config env pour url

    options.baseURL = config.public.apiBaseUrl;

    // Ajouter le token si disco

    if (authStore.getToken) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${authStore.getToken}`,
        };

        // Décoder le token et up le store si nécessaire // avec vérification execution du code coté client
        // if (import.meta.client) {
        //     const decodedToken = jwtDecode(authStore.getToken);
        //     authStore.setUserFromToken(authStore.getToken);
        // }
    }

    //return des data, Attention ça fait râler (warn) la console, elle préfère fetch
    return useFetch(path, options);
};
