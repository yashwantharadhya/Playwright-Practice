const { Then, Given } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("login to vega with {string} and {string}", async function (username, password) {
  await this.pom.getLoginPage().goTo();
  await this.pom.getLoginPage().login(username, password);
});

Then("I should see the home page", async function () {
  await expect(this.page).toHaveURL(/\/Dashboard\/Details/);
});

Then("I should see an error message {string}", async function (errorMessage) {
  await expect(this.page.getByText(errorMessage, { exact: true })).toBeVisible();
});

Then("I should see the {string} login result", async function (expectedResult) {
  if (expectedResult === "valid") {
    await expect(this.page).toHaveURL(/\/Dashboard\/Details/);
    return;
  }

  await expect(
    this.page.getByText("The username or password you entered is incorrect.", { exact: true })
  ).toBeVisible();
});
