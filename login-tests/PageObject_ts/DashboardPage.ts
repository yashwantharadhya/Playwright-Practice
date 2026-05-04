
import{Page} from "@playwright/test";


export class DashboardPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }



getDashboardTitle() {
    return this.page.title();
  }
}
module.exports = { DashboardPage };
