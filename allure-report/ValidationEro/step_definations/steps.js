const { Then, Given } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");


Given('login to vega with {string} and {string}', async function (username, password) {
    await this.pom.getLoginPage().goTo();
    await this.pom.getLoginPage().login(username, password);
});

Then('I should see an error message {string}', async function (errorMessage) {
    await expect(this.page.getByText(errorMessage, { exact: true })).toBeVisible();
});





