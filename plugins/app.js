
export default defineNuxtPlugin(async (nuxtApp) => {
    const contentStore = useContentStore();
    const serviceStore = useServiceStore();
    const languageStore = useLanguageStore();

    try {
        await languageStore.fetchLanguages();
        console.log("Languages loaded:", languageStore.languages);
        await contentStore.fetchContent();
        await serviceStore.fetchService();
    } catch (error) {
        console.error("Error loading initial data:", error);
    }
    return {
        provide: {
            content: contentStore,
            service: serviceStore,
            language: languageStore,
        }
    }
})