
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user should able to login with valid credentials', async({page}) =>{  
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.waitForTimeout(2000);
});