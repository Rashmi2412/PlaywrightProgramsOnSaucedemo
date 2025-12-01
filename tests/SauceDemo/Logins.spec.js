
import { test, expect } from '@playwright/test';
const { LoginPage } = ('../pages/SauceDemo/LoginPage');

test.beforeEach( async({page}) =>{  
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('Login with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
      await loginPage.login('standard_user', 'secret_sauce');
      expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      await page.waitForTimeout(2000);
})

test('Login with Invalid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
     await loginPage.login('user', 'secret');

})
    
    