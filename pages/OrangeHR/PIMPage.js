export class PIMPage {
    constructor(page) {
        this.page = page;
        this.menuPIM = page.getByRole('link', { name: 'PIM' });
        this.employeeList = page.getByRole('link', { name: 'Employee List' });
        this.searchField = page.locator('input[placeholder="Type for hints..."]');
        this.searchBtn = page.locator('button[type="submit"]');
        this.noRecords = page.getByText('No Records Found');
        this.tableRows = page.locator('.oxd-table-body .oxd-table-row');
    }

    async goToEmployeeList() {
        await this.menuPIM.click();
        await this.employeeList.click();
    }

    async searchEmployee(name) {
        await this.searchField.fill(name);
        await this.searchBtn.click();
    }
}
