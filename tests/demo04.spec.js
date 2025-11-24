const {test, expect} = require('@playwright/test');
test ('login with the help of Xpath locator and/or', async({page})=>{

await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// to select the element of the class or to locate class we use dot(.) before the class name
// we use class here because we are targeting multiple similar elements
const productCards = page.locator('.inventory_item');

for (let i = 0; i < await productCards.count(); i++) {
  const card = productCards.nth(i);

  // AND: Find button with class and text
  const addBtn = card.locator('button.btn_inventory', { hasText: 'Add to cart' });

  // OR: Try 'Add to cart' or 'Remove'
  const altBtn = card.locator('button').filter({
    hasText: /Add to cart|Remove/
  });

  if (await altBtn.isVisible()) {
    await altBtn.click();
  }
}
})
