export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();
    console.log("API Base URL:", config.public.apiBaseUrl);

    // const tokenCookie = useCookie('token', {watch: true});
    // const token = tokenCookie.value;

    options.baseURL = config.public.apiBaseUrl;
    // options.headers = token ? {Authorization: `Bearer ${token}`} : {};

    return useFetch(path, options);
};

/*export const useApiFetch = (path, options = {}) => {
    return defineNuxtPlugin((nuxtApp) => {
        const config = useRuntimeConfig();
        options.baseURL = config.public.apiBaseUrl;
        return useFetch(path, options);
    });
};*/
