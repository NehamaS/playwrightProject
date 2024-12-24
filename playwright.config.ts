import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000, // 30 seconds per test
    expect: {
        timeout: 5000, // 5 seconds for assertions
    },
    use: {
        browserName: 'chromium',
        headless: true, // Run tests in headless mode
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});
