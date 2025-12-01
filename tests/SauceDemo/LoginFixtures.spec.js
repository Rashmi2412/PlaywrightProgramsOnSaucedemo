const{test,expect} = ('../Fixture/myTest');
test(async ({ loginPage }) => {
  await loginPage.goto();
});
test('Login with valid credentials', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('www.saucedemo.com');
});

test('Verify header using the dedicated inventoryPage fixture', async ({ inventoryPage }) => {
  await expect(inventoryPage.pageTitle).toBeVisible();
  await expect(inventoryPage.inventryTitle).toHaveText('Products');
});

test('Add bike light to cart using authenticated session', async ({ authenticatedPage }) => {
    const invPage = new (require('../pages/InventryPage').InventryPage)(authenticatedPage);

    await invPage.addToCart('Sauce Labs Bike Light');
    await expect(authenticatedPage.locator('.shopping_cart_badge')).toHaveText('1');
});