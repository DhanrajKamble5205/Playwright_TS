import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests_e2e', /* Directory where the tests are located */
  fullyParallel: true, /* Run tests in files in parallel */
  forbidOnly: !!process.env.CI, /* Fail the build on CI if you accidentally left test.only in the source code. */
  retries: process.env.CI ? 1: 0,  /* Retry on CI only */
  workers: process.env.CI ? 1 : undefined, /* Opt out of parallel tests on CI. */
  reporter: 'html', /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  
  use: {
    headless: true, /* Run tests in headless mode. */
    // viewport: { width: 1280, height: 720 }, /* Set viewport size. */
    // actionTimeout: 0, /* No limit for each action. */
    // ignoreHTTPSErrors: true, /* Ignore HTTPS errors. */
    video: 'retain-on-failure', /* Record video only for failed tests. */
    trace: 'on-first-retry', /* Collect trace when retrying the failed test. */
  },

  /* Configure projects for major browsers */
  projects: [ 
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
