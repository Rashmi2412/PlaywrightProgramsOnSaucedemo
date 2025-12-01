// check  Non-Retrying assertion via Checkout Functionality
// product should be added to the cart
const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
test('should user able to checkout via Non-Retrying assertion', async({page}) =>{
 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
await page.waitForTimeout(1000);
// await page.getByRole('button', {name: 'Add to cart'}).click();
// cant use this because there is multiple add to cart preseent
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.waitForTimeout(1000);
 const cartCountElement = page.locator('[data-test="shopping-cart-badge"]');
  const currentCountText = await cartCountElement.textContent();
  expect(currentCountText).toBe("1");
})

