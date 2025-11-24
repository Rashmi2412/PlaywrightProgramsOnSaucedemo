
const {test, expect} = require('@playwright/test');
test('Keyboard actions-Enter Key', async({page}) =>{

await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill("standard_user");
await page.getByPlaceholder('Password').fill("secret_sauce");
await page.locator('#login-button').press('Enter');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(2000);

})