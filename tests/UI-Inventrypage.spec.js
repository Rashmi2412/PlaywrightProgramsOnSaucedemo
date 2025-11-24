const{test, expect} = require('@playwright/test');
test('Test the UI of Inventry page', async({page}) =>{
 await page.goto ('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: 'Login'}).click();
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
