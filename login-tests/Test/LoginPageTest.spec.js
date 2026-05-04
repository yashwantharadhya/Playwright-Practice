const { test, expect } = require('@playwright/test');
const { POMmanager } = require('../PageObject/POMmanager');
const { custometest } = require('../utils/test-base');
const dataset = require('../utils/LoginTestData.json');
test.describe.configure({ mode: 'serial' });
test.describe('Login page', () => {
  let loginPage;

  for (const data of dataset) {
    test(`Login with valid credentials - ${data.username}`, async ({ page }) => {
      const poManager = new POMmanager(page);
      loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.login(data.username, data.password);
      await expect(page).toHaveTitle('Dashboard Details - Vega Gnrgy');
    });
  }

  custometest('Login with valid credentials from fixture data', async ({ page, testDataforvalidLogin }) => {
    const poManager = new POMmanager(page);
    loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(testDataforvalidLogin.username, testDataforvalidLogin.password);
    await expect(page).toHaveTitle('Dashboard Details - Vega Gnrgy');
  });

  test('@Smoke Login with invalid credentials', async ({ page }) => {
    const poManager = new POMmanager(page);
    loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(dataset[0].username, `${dataset[0].password}_invalid`);
    await expect(
      page.getByText('The username or password you entered is incorrect.', { exact: true })
    ).toBeVisible();
  });

  test('@Smoke Login with empty credentials', async ({ page }) => {
    const poManager = new POMmanager(page);
    loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login("", "");
    await expect(page.getByText('Enter your username', { exact: true })).toBeVisible();
    await loginPage.login(dataset[0].username, "");
    await expect(page.getByText('Enter your password', { exact: true })).toBeVisible();
  });
});
