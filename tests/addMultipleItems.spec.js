const{test, expect} = require('@playwright/test');
test('add MultipleItems to the cart', async({page}) =>{
 await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('#add-to-cart-sauce-labs-bike-light').click();
expect (page.locator('.shopping_cart_badge')).toHaveText("2");
await page.locator('#remove-sauce-labs-backpack').click();
expect (page.locator('.shopping_cart_badge')).toHaveText("1");
await page.waitForTimeout(3000);
});