import { ref } from 'vue';

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
        console.log(newData)
        if (loading.value) return null;

        loading.value = true;
        error.value = null;

        try {
            // Validation des champs obligatoires
            const requiredFields = ['name', 'title', 'short_description', 'description', 'landing_page_display', 'navbar_display', 'display_order', 'language_id'];
            for (const field of requiredFields) {
                if ([null, undefined].includes(newData[field])) {
                    throw new Error(`Le champ "${field}" est obligatoire`);
                }
            }

            // Convertir les cases à cocher en 1 ou 0
            newData.landing_page_display = newData.landing_page_display ? 1 : 0;
            newData.navbar_display = newData.navbar_display ? 1 : 0;

            // Création de FormData
            const formData = new FormData();
            Object.keys(newData).forEach((key) => {
                formData.append(key, newData[key]);
            });

            const response = await fetch('http://192.168.1.245:8000/api/content', {
                method: "POST",
                body: formData, // Pas de `headers: { "Content-Type": "multipart/form-data" }`
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue');
            console.error('Erreur lors de la création:', error.value);
            return null;
        } finally {
            loading.value = false;
        }
    };

    const deleteContent = async (id) => {
        if (loading.value) return false;

        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`http://192.168.1.245:8000/api/content/${id}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
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

        console.log(typeof JSON.stringify(updatedData).navbar_display)

        try {
            const response = await fetch(`http://192.168.1.245:8000/api/content/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue');
            console.error('Erreur lors de la modification:', error.value);
            return null;
        } finally {
            loading.value = false;
        }
    };

    return { loading, error, createContent, deleteContent, modifyContent };
}
