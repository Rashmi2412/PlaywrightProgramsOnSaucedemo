
// write automation testing playwright script with empty username


const { test, expect } = require('@playwright/test');
test('Verify error message with empty username', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
// await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button' , { name : 'Login'}).click();
await expect(page.locator('.error-button')).toBeVisible('Epic sadface: Password is required');
// await expect(page.locator('.error-button')).toBeVisible('Epic sadface: Username is required');
await page.waitForTimeout(2000);
})

