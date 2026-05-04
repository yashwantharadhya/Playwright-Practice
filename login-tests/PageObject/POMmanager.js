const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CompletedSession } = require('./CompletedSession');

class POMmanager {

    
  constructor(page) {
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
