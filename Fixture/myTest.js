const {test: base, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const {InventryPage} = require('../pages/InventryPage');
// Extend the base Playwright test object
const myTest = base.extend({
 // 1. Fixture to provide the LoginPage object instance
  loginPage: async ({ page }, use) => {
   // We instantiate the POM here once and provide it to the test
    await use(new LoginPage(page));
  },
  //2. Fixtures to provide the Inventry page object instance
  inventryPage: async({page}, use)=>{
    await use(new InventryPage(page));
  },
  // 3. (Optional but very useful) A fixture that ensures the user is LOGGED IN 
  //    before the test even starts.
  authenticatedPage: async({page,inventryPage} ,use)=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
     await expect(page).toHaveURL(/inventory.html$/); 
      // Now, pass the *authenticated* page object to the actual test function
    await use(page); 
  }
});

// Export the customized test and expect objects for use in spec files
module.exports = { test: myTest, expect: base.expect };
