import { test, expect } from '@playwright/test';
const { LoginPage } =  ('../pages/OrangeHR/LoginPage');
const { DashboardPage }=  ('../pages/OrangeHR/DashboardPage');

test('Dashboard UI widget validation', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await page.goto('/web/index.php/auth/login');
    await login.login();

    await dashboard.verifyWidgets();

    console.log("Dashboard widgets validated successfully");
});
