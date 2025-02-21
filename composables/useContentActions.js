import { ref } from 'vue'

/**
 * Hook for deleting and modifying content
 * @returns {{
 *   loading: import('vue').Ref<boolean>,
 *   error: import('vue').Ref<Error|null>,
 *   deleteContent: (id: number) => Promise<void>,
 *   modifyContent: (id: number, updatedData: Partial<Content>) => Promise<void>
 * }}
 */
export function useContentActions() {
    const loading = ref(false)
    const error = ref<Error | null>(null)

    const deleteContent = async (id) => {
        try {
            loading.value = true
            error.value = null

            const response = await fetch(`http://192.168.1.245:8000/api/content/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Erreur lors de la suppression")

        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue')
            console.error("Erreur de suppression :", error.value)
        } finally {
            loading.value = false
        }
    }

    const modifyContent = async (id, updatedData) => {
        try {
            loading.value = true
            error.value = null

            const response = await fetch(`http://192.168.1.245:8000/api/content/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            })

            const responseData = await response.json(); // Récupérer la réponse
            console.log("Réponse de l'API :", responseData);
            git
            if (!response.ok) throw new Error("Erreur lors de la modification")

        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Une erreur inconnue est survenue')
            console.error("Erreur de modification :", error.value)
        } finally {
            loading.value = false
        }
    }

    return { loading, error, deleteContent, modifyContent }
}
