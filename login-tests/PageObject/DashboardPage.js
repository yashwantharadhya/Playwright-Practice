class DashboardPage {
  constructor(page) {
    this.page = page;
  }



getDashboardTitle() {
    return this.page.title();
  }
}
module.exports = { DashboardPage };
