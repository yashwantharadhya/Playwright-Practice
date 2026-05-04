import { Page } from "@playwright/test";

export class CompletedSession {
  page: Page;

    constructor(page: Page) {
        this.page = page;
    }

async clickonCompletedSession() {

await this.page.getByText('Charging sessions').click();

}










}

module.exports = { CompletedSession };
