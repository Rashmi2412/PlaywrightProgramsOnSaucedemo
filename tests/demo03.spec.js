const { test, expect } = require('@playwright/test');
test('should user able to login with provided credentials', async({ page }) => {

    await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#react-burger-menu-btn').click();
await page.waitForTimeout(3000);
await expect.soft(page.getByRole('link', { name: 'All Items' })).toBeVisible({ timeout: 1000});
});