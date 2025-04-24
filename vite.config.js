import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'), // <- ici on change vers la racine
            '@components': path.resolve(__dirname, './components'),
            '@stores': path.resolve(__dirname, './stores'),
            '@composables': path.resolve(__dirname, './composables'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
})
