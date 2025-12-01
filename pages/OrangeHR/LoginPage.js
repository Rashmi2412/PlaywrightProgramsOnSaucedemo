export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginBtn = page.locator('button[type="submit"]');
    }

    async login() {
        await this.username.fill('Admin');
        await this.password.fill('admin123');
        await this.loginBtn.click();
    }
}
