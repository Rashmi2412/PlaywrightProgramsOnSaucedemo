const { test, expect } = require('@playwright/test');
const { LoginPage } = ('../pages/SauceDemo/LoginPage');
test('should user able to login with provided credentials', async({ page }) => {
 const loginPage = new LoginPage(page);
 await loginPage.goto();
 await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#react-burger-menu-btn').click();
await page.waitForTimeout(3000);
await expect.soft(page.getByRole('link', { name: 'All Items' })).toBeVisible({ timeout: 1000});
});