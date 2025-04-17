import { ref } from 'vue'
import { useApiFetch } from '@/composables/useApiFetch'
/**
 * Hook pour gérer les actions CRUD sur les contenus
 * @returns {{
 *   loading: import('vue').Ref<boolean>,
 *   error: import('vue').Ref<Error|null>,
 *   createContent: (newData: Object) => Promise<Object|null>,
 *   deleteContent: (id: number) => Promise<boolean>,
 *   modifyContent: (id: number, updatedData: Object) => Promise<Object|null>
 * }}
 */
export function useContentActions() {
    const loading = ref(false);
    const error = ref(null);

    const createContent = async (newData) => {
        if (loading.value) return null;

        loading.value = true;
        error.value = null;

        try {
            const requiredFields = ['name', 'title', 'short_description', 'description', 'landing_page_display', 'navbar_display', 'display_order', 'language_id'];
            for (const field of requiredFields) {
                if ([null, undefined].includes(newData[field])) {
                    throw new Error(`Le champ "${field}" est obligatoire`);
                }
            }

            newData.landing_page_display = newData.landing_page_display ? 1 : 0;
            newData.navbar_display = newData.navbar_display ? 1 : 0;
            newData.display_order = String(newData.display_order);
            newData.language_id = String(newData.language_id);

            if (!newData.images) {
                newData.images = [];
            } else if (!Array.isArray(newData.images)) {
                newData.images = [newData.images];
            }

            const formData = new FormData();
            Object.keys(newData).forEach((key) => {
                if (key === "images" && Array.isArray(newData.images)) {
                    newData.images.forEach((file, index) => {
                        formData.append(`images[${index}]`, file);
                    });
                } else {
                    formData.append(key, newData[key]);
                }
            });

            formData.forEach((value, key) => {
                console.log(key, value);
            });

            const response = await useApiFetch('content', {
                method: "POST",
                body: formData,
            });

            if (!response || response.error) {
                throw new Error(response?.error || "Erreur inconnue");
            }

            return response;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue');
            console.error('Erreur lors de la création:', error.value);
            return { success: false, error: error.value };
        } finally {
            loading.value = false;
        }
    };

    const deleteContent = async (id) => {
        if (loading.value) return false;

        loading.value = true;
        error.value = null;

        try {
            const response = await useApiFetch(`content/${id}`, { method: "DELETE" });

            if (!response || response.error) {
                throw new Error(response?.error || "Erreur inconnue");
            }

            return true;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue');
            console.error('Erreur lors de la suppression:', error.value);
            return false;
        } finally {
            loading.value = false;
        }
    };

    const modifyContent = async (id, updatedData) => {
        if (loading.value) return null;

        loading.value = true;
        error.value = null;

        try {
            if (!updatedData.images) {
                updatedData.images = [];
            } else if (!Array.isArray(updatedData.images)) {
                updatedData.images = [updatedData.images];
            }

            const formData = new FormData();
            Object.keys(updatedData).forEach((key) => {
                if (key === "images" && Array.isArray(updatedData.images)) {
                    updatedData.images.forEach((file, index) => {
                        formData.append(`images[${index}]`, file);
                    });
                } else {
                    formData.append(key, updatedData[key]);
                }
            });

            formData.forEach((value, key) => {
                console.log(key, value);
            });

            const response = await useApiFetch(`content/${id}`, {
                method: "PUT",
                body: formData,
            });

            if (!response || response.error) {
                throw new Error(response?.error || "Erreur inconnue");
            }

            return response;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue');
            console.error('Erreur lors de la modification:', error.value);
            return { success: false, error: error.value };
        } finally {
            loading.value = false;
        }
    };

    return { loading, error, createContent, deleteContent, modifyContent };
}