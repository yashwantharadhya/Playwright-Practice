import { test as baseTest } from '@playwright/test';

interface testDataforvalidLogin {
  username: string;
  password: string;
}
export const customTest = baseTest.extend<{
  testDataforvalidLogin: testDataforvalidLogin;}>({
  testDataforvalidLogin:
   async ({}, use) => {
    await use({
      username: 'Yash',
      password: 'Yash@2397',
    });
  },
});
