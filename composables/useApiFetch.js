import {useAuthStore} from '~/stores/auth';

export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();

    //Utilisation de la config env pour url
    options.baseURL = config.public.apiBaseUrl;


    // Ajouter le token si disponible
    if (authStore.getToken) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${authStore.getToken}`,
        };
    }
    //return des data, Attention ça fait râler (warn) la console, elle préfère fetch$
    return useFetch(path, options);
};
