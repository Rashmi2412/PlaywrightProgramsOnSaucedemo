import { test, expect } from '@playwright/test';
const { LoginPage } = ('../pages/OrangeHR/LoginPage');
const { AdminPage } = ('../pages/OrangeHR/AdminPage');

test('Admin user management validation', async ({ page }) => {
    const login = new LoginPage(page);
    const admin = new AdminPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.login();
    await admin.navigate();

    
    const headers = await admin.tableHeaders.allTextContents();
    expect(headers).toContain('Username');
    expect(headers).toContain('User Role');
    expect(headers).toContain('Status');

    await admin.usernameColumn.click();
    await admin.usernameColumn.click(); 


    await admin.roleDropdown.click();
    await page.getByText('Admin').click();

    await admin.statusDropdown.click();
    await page.getByText('Enabled').click();

    await admin.searchBtn.click();

    await page.locator('.oxd-table-body .oxd-table-row').first().click();
    await expect(page.getByText("User Role")).toBeVisible();
});
