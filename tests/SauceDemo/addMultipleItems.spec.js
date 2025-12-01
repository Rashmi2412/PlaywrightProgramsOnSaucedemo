import { test, expect } from '@playwright/test';
const { LoginPage } = ('../pages/SauceDemo/LoginPage');

test('add MultipleItems to the cart', async({page}) =>{
 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('#add-to-cart-sauce-labs-bike-light').click();
expect (page.locator('.shopping_cart_badge')).toHaveText("2");
await page.locator('#remove-sauce-labs-backpack').click();
expect (page.locator('.shopping_cart_badge')).toHaveText("1");
await page.waitForTimeout(3000);
});