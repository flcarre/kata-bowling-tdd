import {defineConfig} from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['setupTests.ts'],
        watchIgnore: ['node_modules', 'node_modules/(?!lodash-es)'],
    },
})
