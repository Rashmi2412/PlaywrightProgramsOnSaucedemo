
// Masked Password functionality not available.
const {test, expect}= require('@playwright/test');
test('Password should be visible as masked', async({page}) =>{
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce')
await expect(page.locator('#password')).toBeVisible();
await page.waitForTimeout(2000);
})