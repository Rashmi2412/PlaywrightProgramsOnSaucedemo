const { test, expect } = require("@playwright/test");
test.beforeEach(async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill("secret_sauce");
  await page.getByRole('button' , { name : 'Login'}).click();
});

test("Verify header", async({page}) => {
  await expect(page.locator("#header_container")).toBeVisible();
});

test.afterEach(async({page}) => {
  const menuButton = page.locator(".bm-burger-button");

  if (await menuButton.isVisible()) {
    await menuButton.click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page).toHaveURL('https://www.saucedemo.com/'); 
  }
  await page.close();
  
});