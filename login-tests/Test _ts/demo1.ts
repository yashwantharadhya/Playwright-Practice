import type { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#Username_Input_Field");
    this.passwordInput = page.locator("#Password_Input_Field");
    this.loginButton = page.locator("#Login_button");
  }

  async goTo() {
    await this.page.goto("https://vegadev.gnrgy.com/Account/Login");
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}
