import { test, expect } from '@playwright/test';
const {LoginPage} = ('../pages/OrangeHR/LoginPage')
const { AddEmployeePage } = ('../pages/OrangeHR/AddEmployeePage');

test('Add employee validation', async ({ page }) => {
    const login = new LoginPage(page);
    const addEmp = new AddEmployeePage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await login.login();
    await addEmp.navigate();

    // Empty form
    await addEmp.saveBtn.click();
    await expect(addEmp.errorMessages.nth(0)).toBeVisible();

    // Invalid characters
    await addEmp.firstName.fill("testFirst");
    await addEmp.lastName.fill("testLast");
    await addEmp.saveBtn.click();
    await expect(addEmp.errorMessages.nth(0)).toBeVisible();

    // Upload profile image
    await addEmp.imageUpload.setInputFiles('tests/assets/profile.jpg');

    // Valid form
    await addEmp.firstName.fill("Admin");
    await addEmp.lastName.fill("Last");
    await addEmp.saveBtn.click();

    await expect(page.getByText("Personal Details")).toBeVisible();
});
