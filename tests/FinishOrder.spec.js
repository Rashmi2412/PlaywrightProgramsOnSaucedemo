const{test, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');

test(' verify confirmation text and “Back Home” button.', async({page})=>{
 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await (page.locator('.shopping_cart_link')).click();
expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await page.getByRole('button', {name: 'Checkout'}).click();
await page.getByPlaceholder('First Name').fill('Test');
await page.getByPlaceholder('Last Name').fill('Test');
await page.getByPlaceholder('Zip/Postal Code').fill('123456');
await page.getByRole('button', {name: 'Continue'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
await page.getByRole('button', {name: 'Finish'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
await expect(page.locator('.pony_express')).toBeVisible();
await expect(page.getByText('Thank you for your order!')).toBeVisible();
await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();
await page.getByRole('button', {name: 'Back Home'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(2000);
});