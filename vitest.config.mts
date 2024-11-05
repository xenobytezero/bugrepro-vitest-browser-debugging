import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.spec.ts'],
        browser: {
            enabled: true,
            name: 'chromium', // browser name is required
            headless: true,
            provider: 'playwright'
        },
      },
})