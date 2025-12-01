import { test, expect } from '@playwright/test';
const { LoginPage } = ('../pages/OrangeHR/LoginPage');
const { PIMPage } = ('../pages/OrangeHR/PIMPage');

test('Employee search scenarios', async ({ page }) => {
    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await page.goto('/web/index.php/auth/login');
    await login.login();
    await pim.goToEmployeeList();

    // Valid name
    await pim.searchEmployee("Linda");
    await expect(pim.tableRows).toHaveCountGreaterThan(0);

    // Partial name
    await pim.searchEmployee("Li");
    await expect(pim.tableRows).toHaveCountGreaterThan(0);

    // Invalid name
    await pim.searchEmployee("xyz123");
    await expect(pim.noRecords).toBeVisible();
});
