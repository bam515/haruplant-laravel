import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/haruplant.css', 'resources/js/haruplant.js'],
            refresh: true,
        }),
    ],
});
