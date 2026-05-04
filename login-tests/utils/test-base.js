const { test: base } = require('@playwright/test');

exports.custometest = base.extend({
  testDataforvalidLogin: async ({}, use) => {
    await use({
      username: 'Yash',
      password: 'Yash@2397',
    });
  },
});
