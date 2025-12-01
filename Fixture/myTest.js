const {test: base, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const {InventryPage} = require('../pages/InventryPage');
const myTest = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventryPage: async({page}, use)=>{
    await use(new InventryPage(page));
  },
  authenticatedPage: async({page,inventryPage} ,use)=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
     await expect(page).toHaveURL(/inventory.html$/); 
    await use(page); 
  }
});
module.exports = { test: myTest, expect: base.expect };
