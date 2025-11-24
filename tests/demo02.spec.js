// check  Non-Retrying assertion via Checkout Functionality
// product should be added to the cart
const {test, expect} = require('@playwright/test');
test('should user able to checkout via Non-Retrying assertion', async({page}) =>{
    await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
await page.waitForTimeout(1000);
// await page.getByRole('button', {name: 'Add to cart'}).click();
// cant use this because there is multiple add to cart preseent
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.waitForTimeout(1000);
const cartCountElement = page.locator('[data-test="shopping-cart-link"]');
await expect (currentCountText).toHaveValue("1");
await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
})

