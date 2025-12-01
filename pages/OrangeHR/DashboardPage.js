export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.widgetTitles = page.locator('.oxd-text.oxd-text--p');
    }

    async verifyWidgets() {
        const widgetList = [
            "Time at Work",
            "My Actions",
            "Quick Launch",
            "Buzz Latest Posts"
        ];

        for (const name of widgetList) {
            await this.page.getByText(name).isVisible();
        }
    }
}
