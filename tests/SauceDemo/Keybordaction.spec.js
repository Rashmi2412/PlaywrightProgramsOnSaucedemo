
const {test, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
test('Keyboard actions-Enter Key', async({page}) =>{

 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(2000);

});