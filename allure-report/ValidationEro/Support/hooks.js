const fs = require("fs");
const path = require("path");
const { Before, After, setDefaultTimeout, AfterStep, Status } = require("@cucumber/cucumber");
const { POMmanager } = require("../../../login-tests/PageObject/POMmanager");
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 1000);
const screenshotDir = path.resolve("screenshots");

Before({ tags: "@SmokeTest" }, async function () {

    this.browser = await chromium.launch({
        headless: process.env.HEADLESS !== "false"
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pom = new POMmanager(this.page);

});


AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED && this.page) {
        fs.mkdirSync(screenshotDir, { recursive: true });
        const screenshot = await this.page.screenshot({
            path: path.join(screenshotDir, `screenshot-${Date.now()}.png`),
            fullPage: true
        });
        await this.attach(screenshot, "image/png");
    }
});


After(async function () {
    console.log("Closing the browser...");
    if (this.browser) {
        await this.browser.close();
    }
});
