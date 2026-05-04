const{test,expect}=require('@playwright/test');
const { POMmanager } = require('../PageObject/POMmanager');



test('Check the completed session filters ', async ({ page }) => {
    const poManager = new POMmanager(page);
    const loginPage = poManager.getLoginPage();
    const completedSession = poManager.getCompletedSession();




})


