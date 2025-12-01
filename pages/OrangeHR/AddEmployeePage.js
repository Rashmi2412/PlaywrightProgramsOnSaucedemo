export class AddEmployeePage {
    constructor(page) {
        this.page = page;
        this.menuPIM = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeBtn = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.imageUpload = page.locator('input[type="file"]');
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.errorMessages = page.locator('.oxd-input-field-error-message');
    }

    async navigate() {
        await this.menuPIM.click();
        await this.addEmployeeBtn.click();
    }
}
