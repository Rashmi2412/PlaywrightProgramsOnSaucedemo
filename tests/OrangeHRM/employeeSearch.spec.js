import { test, expect } from '@playwright/test';
const { LoginPage } = ('../pages/OrangeHR/LoginPage');
const { PIMPage } = ('../pages/OrangeHR/PIMPage');

test('Employee search scenarios', async ({ page }) => {
    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await page.goto('/web/index.php/auth/login');
    await login.login();
    await pim.goToEmployeeList();


    await pim.searchEmployee("Rahul");
    await expect(pim.tableRows).toHaveCountGreaterThan(0);

    
    await pim.searchEmployee("Ra");
    await expect(pim.tableRows).toHaveCountGreaterThan(0);

    
    await pim.searchEmployee("Rohit");
    await expect(pim.noRecords).toBeVisible();
});
