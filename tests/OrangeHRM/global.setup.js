const { chromium } = require('@playwright/test');
const path = require('path');

async function globalSetup() {
  console.log("Admin authentication setup started...");

  const browser = await chromium.launch();
  const context = await browser.newContext({
    ignoreHTTPSErrors: true
  });
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('**/dashboard/index');

  // Save the storage state inside /tests/OrangeHRM/playwright/.auth/
  const storageFile = path.join(__dirname, 'playwright', '.auth', 'testuser1.json');
  await context.storageState({ path: storageFile });

  await browser.close();
  console.log("Admin authentication saved!");
}

module.exports = globalSetup;

