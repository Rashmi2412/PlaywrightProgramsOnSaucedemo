const{test, expect} = require('@playwright/test');
const { LoginPage } = ('../pages/SauceDemo/LoginPage');
test('Test the UI of Inventry page', async({page}) =>{
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// await expect(page.locator('.app_logo')).toBeVisible('Swag Labs');
await expect(page.getByText('Swag Labs')).toBeVisible();
await expect(page.getByText('Products')).toBeVisible();
await expect(page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')).toBeVisible();
await expect(page.locator('#item_4_title_link')).toBeVisible('Sauce Labs Backpack');
await expect(page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')).toBeVisible();
await expect(page.locator('text= $29.99')).toBeVisible();
// used page Selector: await page.getByText('Create new account'); or page.locator('text=Create new account');
await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();
await expect(page.locator('[data-test="inventory-item-sauce-labs-bike-light-img"]')).toBeVisible();
await expect(page.locator('#item_0_title_link')).toBeVisible('Sauce Labs Bike Light');
await expect(page.getByText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")).toBeVisible();
await expect(page.locator('text= $9.99')).toBeVisible();
// await expect(page.locator('.inventory_item_price')).toBeVisible('9.99');
await expect(page.locator('#add-to-cart-sauce-labs-bike-light')).toBeVisible();

});
