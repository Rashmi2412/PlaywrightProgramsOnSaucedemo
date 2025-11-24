const{test, expect} = require('@playwright/test');
test('Validate the continue shopping functionality by navigating to the cart', async({page}) =>{
 await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await (page.locator('.shopping_cart_link')).click();
expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();
await expect(page.getByText('$29.99')).toBeVisible();
await expect(page.getByText('Remove')).toBeVisible();
await page.waitForTimeout(2000);
await page.locator('#continue-shopping').click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});