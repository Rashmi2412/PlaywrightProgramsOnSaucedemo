export class AdminPage {
    constructor(page) {
        this.page = page;
        this.menuAdmin = page.getByRole('link', { name: 'Admin' });
        this.userMgmtUsers = page.getByRole('link', { name: 'Users' });

        this.tableHeaders = page.locator('.oxd-table-header-cell');
        this.usernameColumn = page.locator('.oxd-table-header-cell >> text=Username');
        this.roleDropdown = page.locator('div[role="listbox"]').nth(0);
        this.statusDropdown = page.locator('div[role="listbox"]').nth(1);
        this.searchBtn = page.getByRole('button', { name: 'Search' });
    }

    async navigate() {
        await this.menuAdmin.click();
        await this.userMgmtUsers.click();
    }
}
