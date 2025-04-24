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

    describe('Actions CRUD', () => {
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
