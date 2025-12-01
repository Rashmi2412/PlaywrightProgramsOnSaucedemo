const { test, expect } = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('Add item and verify cart count is 1', async ({ page }) => {
  // Add item using XPath
  await page.locator('xpath=//button[@id="add-to-cart-sauce-labs-backpack"]').click();

  // Verify cart count using data-test
  const cartCountElement = page.locator('[data-test="shopping-cart-badge"]');
  const currentCountText = await cartCountElement.textContent();
  expect(currentCountText).toBe("1");
});


