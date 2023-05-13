import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './__tests__',
  reporter: [['dot'], ['allure-playwright']],
  timeout: 60000,
  projects: [
    {
      name: 'msedge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        baseURL: 'localhost',
        headless: true,
        viewport: { height: 748, width: 1024 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {
          slowMo: 0,
        },
      },
    },
    {
      name: 'iPad',
      use: {
        ...devices['iPad Pro 11 landscape'],
        baseURL: 'localhost',
        headless: true,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {
          slowMo: 0,
        },
      },
    },
  ],
});
