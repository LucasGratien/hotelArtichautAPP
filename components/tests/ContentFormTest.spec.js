// components/form/ContentForm.spec.js
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ContentForm from '../form/ContentForm.vue'
import { useHotelStore } from '@stores/hotel'
import { useContentActions } from '@composables/useContentActions'

// Mock des dépendances
vi.mock('@stores/hotel')
vi.mock('@composables/useContentActions')

describe('ContentForm.vue', () => {
    let wrapper
    let mockStore

    const mockContents = [
        {
            id: 1,
            name: 'Test Content',
            title: 'Test Title',
            description: 'Long description text'.repeat(10),
            images: [{ id: 1, url: 'test.jpg' }],
            landing_page_display: 1,
            navbar_display: 0
        }
    ]

    beforeEach(() => {
        // Configuration du mock du store
        mockStore = {
            contents: [...mockContents],
            fetch: vi.fn().mockResolvedValue(true),
            updateContentInStore: vi.fn()
        }
        useHotelStore.mockReturnValue(mockStore)

        // Mock des actions
        useContentActions.mockReturnValue({
            deleteContent: vi.fn().mockResolvedValue(true),
            modifyContent: vi.fn().mockResolvedValue(true),
            createContent: vi.fn().mockResolvedValue({ id: 2, name: 'New Content' }),
            loading: false
        })

        wrapper = mount(ContentForm)
    })

    it('affiche correctement le composant', () => {
        expect(wrapper.find('.hidden.md\\:block').exists()).toBe(true)
        expect(wrapper.find('.md\\:hidden').exists()).toBe(true)
    })

    it('charge les contenus au montage', () => {
        expect(mockStore.fetch).toHaveBeenCalled()
    })

    describe('Fonctionnalités de base', () => {
        it('toggle la description étendue', async () => {
            // Debug: affiche le HTML rendu
            console.log(wrapper.html())

            // Essayez un sélecteur plus large d'abord
            const toggleButtons = wrapper.findAll('button')
            expect(toggleButtons.length).toBeGreaterThan(0)

            // Trouvez le bon bouton
            const toggleBtn = wrapper.find('button:contains("Voir plus")')
            expect(toggleBtn.exists()).toBe(true)

            await toggleBtn.trigger('click')
            expect(wrapper.vm.expandedStates[1]).toBe(true)
        })

        it('affiche la pagination correctement', () => {
            // Vérifiez d'abord que les données nécessaires existent
            expect(wrapper.vm.rowsWithExpandedState.length).toBeGreaterThan(0)

            // Essayez avec la classe
            const pagination = wrapper.find('.pagination')
            expect(pagination.exists()).toBe(true)

            // Ou vérifiez que UPagination est bien importé
            const UPagination = wrapper.findComponent({ name: 'UPagination' })
            expect(UPagination.exists()).toBe(true)
        })
    })

    describe('Actions CRUD', () => {
        it('supprime un contenu', async () => {
            // Vérifiez que la table est bien rendue
            const table = wrapper.find('table')
            expect(table.exists()).toBe(true)

            // Trouvez le premier bouton Supprimer
            const deleteBtn = wrapper.find('button:contains("Supprimer")')
            expect(deleteBtn.exists()).toBe(true)

            await deleteBtn.trigger('click')
            expect(useContentActions().deleteContent).toHaveBeenCalled()
        })

        it('ouvre la modal de modification', async () => {
            // Mockez correctement la modal
            wrapper.vm.dynamicModal = { openModal: vi.fn() }

            // Trouvez le bouton Modifier
            const modifyBtn = wrapper.find('button:contains("Modifier")')
            expect(modifyBtn.exists()).toBe(true)

            await modifyBtn.trigger('click')
            expect(wrapper.vm.dynamicModal.openModal).toHaveBeenCalled()
        })

        it('soumet un nouveau contenu', async () => {
            const formData = {
                name: 'New',
                title: 'New Title',
                description: 'New Desc',
                landing_page_display: true,
                navbar_display: false
            }
            await wrapper.vm.handleSubmit(formData)
            expect(useContentActions().createContent).toHaveBeenCalled()
        })
    })

    describe('Comportement responsive', () => {
        it('affiche le tableau en desktop', async () => {
            window.innerWidth = 1200
            window.dispatchEvent(new Event('resize'))
            await wrapper.vm.$nextTick()
            expect(wrapper.find('.hidden.md\\:block').isVisible()).toBe(true)
        })

        it('affiche les cartes en mobile', async () => {
            window.innerWidth = 400
            window.dispatchEvent(new Event('resize'))
            await wrapper.vm.$nextTick()
            expect(wrapper.find('.md\\:hidden').isVisible()).toBe(true)
        })
    })
})