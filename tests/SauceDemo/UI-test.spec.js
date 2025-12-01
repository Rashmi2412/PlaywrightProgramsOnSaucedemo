const {test,expect} = require('@playwright/test');
test('Verify the UI of the login page', async({page})=>{
await page.goto('https://www.saucedemo.com/');
const titleText = page.locator("//heading[text()=’Swag Labs’]");
expect (page)
expect (page).locator('#user-name').toHaveText('Username');
expect (page).locator('#password').toHaveText('Password');
expect (page).locator('#login-button').toHaveText('Login');
expect (page).getByRole('heading', {name: 'Accepted usernames are:'});
const logins = [standard_user, locked_out_user, problem_user, performance_glitch_user,error_user,visual_user]
expect (page).locator('.login_credentials').toHaveText(logins);


})