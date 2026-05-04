const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter:'html' ,
  retries: 1,
  testDir: './login-tests/Test',
  timeout: 30 * 1000,
  workers:5,

  name: 'chromeTest',
  use: {

    browserName: 'chromium',
    headless: false,
    trace: 'on',
    //viewport: { width: 1280, height: 720 }
    ignoreHTTPSErrors: true,
    ...devices['iPhone 13 Pro'],
    permissions: ['geolocation'],
    geolocation: { longitude: 12.4924, latitude: 41.8902 },
    video: 'on',
    screenshot: 'only-on-failure',
    
  },

  name: 'firefoxTest',
  use: {
    browserName: 'firefox',
    headless: true,
    trace: 'on',
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
  
  },
  

});
