const { defineConfig, devices } = require('@playwright/test');

const isCI = !!process.env.CI;

module.exports = defineConfig({
  testDir: './login-tests/Test',
  timeout: 30 * 1000,
  retries: isCI ? 1 : 0,
  workers: isCI ? 5 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    trace: 'on',
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromeTest',
      use: {
        ...devices['iPhone 13 Pro'],
        browserName: 'chromium',
        headless: isCI,
        permissions: ['geolocation'],
        geolocation: { longitude: 12.4924, latitude: 41.8902 },
      },
    },
    {
      name: 'firefoxTest',
      use: {
        browserName: 'firefox',
        headless: true,
      },
    },
  ],
});
