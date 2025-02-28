export const useApiFetch = (path, options = {}) => {
    const config = useRuntimeConfig();

    // const tokenCookie = useCookie('token', {watch: true});
    // const token = tokenCookie.value;

    options.baseURL = config.public.apiBaseUrl;
    // options.headers = token ? {Authorization: `Bearer ${token}`} : {};

    return useFetch(path, options);
};