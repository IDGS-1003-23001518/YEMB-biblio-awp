import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),

        VitePWA({
            registerType: 'autoUpdate',

            manifest: {
                name: 'YEMB-biblio-awp',
                short_name: 'YEMB-biblio-awp',
                description: 'Galería de fotografías de la Biblioteca UTL',

                theme_color: '#0d6efd',
                background_color: '#ffffff',

                display: 'standalone',

                icons: [
                    {
                        src: '/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true
            },

            devOptions: {
                enabled: false
            }
        })
    ]
});