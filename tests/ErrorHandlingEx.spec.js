const{test, expect} = require('@playwright/test');
test('Validate the checkout form fields and error handling on empty submission.', async({page})=>{
 await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await (page.locator('.shopping_cart_link')).click();
expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await page.getByRole('button', {name: 'Checkout'}).click();
await page.getByRole('button', {name: 'Continue'}).click();
await expect(page.locator('.error-button')).toBeVisible('Error: First Name is required');
await page.waitForTimeout(2000);
});