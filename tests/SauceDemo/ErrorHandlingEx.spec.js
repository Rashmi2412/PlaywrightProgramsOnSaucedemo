const{test, expect} = require('@playwright/test');
const { LoginPage } = ('../pages/SauceDemo/LoginPage');
test('Validate the checkout form fields and error handling on empty submission.', async({page})=>{
 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await (page.locator('.shopping_cart_link')).click();
expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await page.getByRole('button', {name: 'Checkout'}).click();
await page.getByRole('button', {name: 'Continue'}).click();
await expect(page.locator('.error-button')).toBeVisible('Error: First Name is required');
await page.waitForTimeout(2000);
});