const { test, expect } = require('@playwright/test');
const { LoginPage } = ('../pages/SauceDemo/LoginPage')
test('should user able to login with provided credentials', async({ page }) => {

 const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#react-burger-menu-btn').click();
await expect(page.getByRole('link', { name: 'All Items' })).toBeVisible();
await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Reset App State' })).toBeVisible();
await page.locator('#react-burger-cross-btn').click();
// can also write await page.locator('#react-burger-cross-btn').click({timeout: 1000});
// it will only hold the click action for 1 sec till page did not load 
await page.waitForTimeout(3000);
});
