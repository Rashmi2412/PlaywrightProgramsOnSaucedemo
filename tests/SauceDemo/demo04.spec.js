const {test, expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
test ('login with the help of Xpath locator and/or', async({page})=>{
 const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// to select the element of the class or to locate class we use dot(.) before the class name
// we use class here because we are targeting multiple similar elements
const productCards = page.locator('.inventory_item');

for (let i = 0; i < await productCards.count(); i++) {
  const card = productCards.nth(i);

  const addBtn = card.locator('button.btn_inventory', { hasText: 'Add to cart' });


  const altBtn = card.locator('button').filter({
    hasText: /Add to cart|Remove/
  });

  if (await altBtn.isVisible()) {
    await altBtn.click();
  }
}
})
