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
    const loading = ref(false)
    const error = ref(null)

    // Fonction utilitaire pour créer FormData
    const createFormData = (data) => {
        const formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
            if (key === 'images' && Array.isArray(value)) {
                value.forEach((file, index) => {
                    if (file instanceof File) {
                        formData.append(`images[${index}]`, file)
                    }
                })
            } else if (value !== undefined && value !== null) {
                formData.append(key, value)
            }
        })

        return formData
    }

    // Validation des champs requis
    const validateRequiredFields = (data, fields) => {
        const missingFields = fields.filter(field =>
            data[field] === undefined ||
            data[field] === null ||
            (Array.isArray(data[field]) && data[field].length === 0)
        )

        if (missingFields.length > 0) {
            throw new Error(`Les champs suivants sont obligatoires: ${missingFields.join(', ')}`)
        }
    }

    const createContent = async (newData) => {
        if (loading.value) return null

        try {
            loading.value = true
            error.value = null

            // Champs obligatoires
            const requiredFields = [
                'name',
                'title',
                'short_description',
                'description',
                'display_order',
                'language_id'
            ]

            validateRequiredFields(newData, requiredFields)

            // Normalisation des données
            const normalizedData = {
                ...newData,
                landing_page_display: newData.landing_page_display ? 1 : 0,
                navbar_display: newData.navbar_display ? 1 : 0,
                display_order: String(newData.display_order),
                language_id: String(newData.language_id),
                images: Array.isArray(newData.images) ? newData.images : [newData.images].filter(Boolean)
            }

            const formData = createFormData(normalizedData)
            const response = await useApiFetch('content', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (!response?.data?.value) {
                throw new Error(response?.error?.value?.message || 'Échec de la création du contenu')
            }

            return response.data.value
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Erreur lors de la création du contenu')
            console.error('Erreur createContent:', error.value)
            return null
        } finally {
            loading.value = false
        }
    }

    const deleteContent = async (id) => {
        if (loading.value) return false

        try {
            loading.value = true
            error.value = null

            if (!id) {
                throw new Error('ID du contenu manquant')
            }

            const response = await useApiFetch(`content/${id}`, {
                method: 'DELETE'
            })

            if (response?.error?.value) {
                throw new Error(response.error.value.message || 'Échec de la suppression')
            }

            return true
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Erreur lors de la suppression')
            console.error('Erreur deleteContent:', error.value)
            return false
        } finally {
            loading.value = false
        }
    }

    const modifyContent = async (id, updatedData) => {
        if (loading.value) return null

        try {
            loading.value = true
            error.value = null

            if (!id) {
                throw new Error('ID du contenu manquant')
            }

            // Normalisation des données
            const normalizedData = {
                ...updatedData,
                landing_page_display: updatedData.landing_page_display ? 1 : 0,
                navbar_display: updatedData.navbar_display ? 1 : 0,
                images: Array.isArray(updatedData.images) ? updatedData.images : [updatedData.images].filter(Boolean)
            }

            const formData = createFormData(normalizedData)
            const response = await useApiFetch(`content/${id}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (!response?.data?.value) {
                throw new Error(response?.error?.value?.message || 'Échec de la mise à jour du contenu')
            }

            return response.data.value
        } catch (err) {
            error.value = err instanceof Error ? err : new Error('Erreur lors de la mise à jour du contenu')
            console.error('Erreur modifyContent:', error.value)
            return null
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        error,
        createContent,
        deleteContent,
        modifyContent
    }
}