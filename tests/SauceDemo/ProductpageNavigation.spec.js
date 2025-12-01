const{test,expect} = require('@playwright/test');
const { LoginPage } = ('../pages/SauceDemo/LoginPage');
test('Product Details Page Navigation', async({page}) =>{
 const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.locator('#item_4_title_link').click();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();
  await expect(page.getByText('Add to cart')).toBeVisible();
  await page.locator('#back-to-products').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})