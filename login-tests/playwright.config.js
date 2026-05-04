const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './Test',
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    headless: false,
    trace: 'on',
  },
});
