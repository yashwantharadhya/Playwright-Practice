
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { CompletedSession } from './CompletedSession';
import type { Page } from "@playwright/test";
export class POMmanager {

  loginPage: LoginPage;
  dashboardPage: DashboardPage
  completedSession: CompletedSession;
  page: Page;

    
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.completedSession = new CompletedSession(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCompletedSession() {
    return this.completedSession;
  }
}

module.exports = { POMmanager };
