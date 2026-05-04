import { test, expect } from '@playwright/test';
import { POMmanager } from '../PageObject_ts/POMmanager';
import { customTest } from '../utils _ts/test-base';
import dataset from '../utils _ts/LoginTestData.json';
import type { Page } from "@playwright/test";
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

  customTest('Login with valid credentials from fixture data', async ({ page, testDataforvalidLogin }) => {
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
    await loginPage.login(dataset[0].username, `${dataset[0].password}`);
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
