const{test, expect} = require('@playwright/test');
test('Burger Menu Navigation', async({page}) =>{
 await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('#react-burger-menu-btn').click();
await expect(page.getByRole('link', { name: 'All Items' })).toBeVisible();
await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Reset App State' })).toBeVisible();
await page.locator('#react-burger-cross-btn').click();
await page.waitForTimeout(3000);
});