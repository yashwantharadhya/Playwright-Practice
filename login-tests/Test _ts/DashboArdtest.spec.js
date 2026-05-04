const {test,expect} = require('@playwright/test');
const { LoginPage } = require('../PageObject/LoginPage');

test('Dashboard page title validation',async({page})=>{
    const  login  =  new LoginPage(page);
    await login.goTo();
    await login.login('Yash','Yash@2397');
    await expect(page).toHaveTitle('Dashboard Details - Vega Gnrgy');
})

test('Dashboard page content validation',async({page})=>{
    const  login  =  new LoginPage(page);
    await login.goTo();
    await login.login('Yash','Yash@2397');
    await expect(page).toHaveTitle('Dashboard Details - Vega Gnrgy');


    })