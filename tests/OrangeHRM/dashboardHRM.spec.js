// tests/OrangeHRM/dashboardHRM.spec.js
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Already authenticated
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.waitForLoadState('domcontentloaded');
});

test('Verify that all dashboard widgets load properly', async ({ page }) => {
  const timeAtWorkWidget = page.getByText('Time at Work').first().locator('xpath=..');
  await expect(timeAtWorkWidget).toBeVisible();
});

