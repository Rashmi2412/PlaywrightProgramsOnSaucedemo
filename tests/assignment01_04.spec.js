const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('Add item and verify cart count is 1', async ({ page }) => {
  // Add item using XPath
  await page.locator('xpath=//button[@id="add-to-cart-sauce-labs-backpack"]').click();

  // Verify cart count using data-test
  const cartCountElement = page.locator('[data-test="shopping-cart-badge"]');
  const currentCountText = await cartCountElement.textContent();
  expect(currentCountText).toBe("1");
});


