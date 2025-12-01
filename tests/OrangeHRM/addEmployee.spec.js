import { test, expect } from '@playwright/test';
const {LoginPage} = ('../pages/OrangeHR/LoginPage')
const { AddEmployeePage } = ('../pages/OrangeHR/AddEmployeePage');

test('Add employee validation', async ({ page }) => {
    const login = new LoginPage(page);
    const addEmp = new AddEmployeePage(page);

    await page.goto('/web/index.php/auth/login');
    await login.login();
    await addEmp.navigate();

    // Empty form
    await addEmp.saveBtn.click();
    await expect(addEmp.errorMessages.nth(0)).toBeVisible();

    // Invalid characters
    await addEmp.firstName.fill("123");
    await addEmp.lastName.fill("@@@");
    await addEmp.saveBtn.click();
    await expect(addEmp.errorMessages.nth(0)).toBeVisible();

    // Upload profile image
    await addEmp.imageUpload.setInputFiles('tests/assets/profile.jpg');

    // Valid form
    await addEmp.firstName.fill("John");
    await addEmp.lastName.fill("Doe");
    await addEmp.saveBtn.click();

    await expect(page.getByText("Personal Details")).toBeVisible();
});
