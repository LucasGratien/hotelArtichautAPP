import {useContentStore} from "~/stores/contentStore.js";
import {useServiceStore} from "~/stores/serviceStore.js";


export default defineNuxtPlugin (async () =>{

    const contentStore = useContentStore();
    const serviceStore = useServiceStore();
    await contentStore.fetchContent();
    await serviceStore.fetchService();

    return {
        provide: {
            content: contentStore,
            service: serviceStore,
        }
    }



})