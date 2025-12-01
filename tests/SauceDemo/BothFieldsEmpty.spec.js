const { test, expect } = require('@playwright/test');
test('Both fields are empty', async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.getByRole('button' , { name : 'Login'}).click();
await expect(page.locator('.error-button')).toBeVisible('Epic sadface: Username is required');

})

