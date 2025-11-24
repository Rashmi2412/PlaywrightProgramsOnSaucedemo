const {test, expect}= require('@playwright/test');
// This line imports the test and expect functions from the Playwright Test library.
// test: Used to define and run a test case.
// expect: This is used to make assertions (i.e., checks or verifications).
test(`check title on Google`, async ({page})=>{
    // This defines a test case named ‘check title on Google’.
// The test is asynchronous, so we use async.
// { page }: Playwright provides a page object automatically, 
// which represents a browser tab or page where actions like navigation 
// and interaction are performed.
    await page.goto('https://www.google.com');
    // This line navigates the browser page to the URL 'https://www.google.com'.
    await expect(page).toHaveTitle(/Google/);
    // This line asserts that the title of the page contains the word 'Google'.
});










// Opens a  browser page.
// Goes to https://www.google.com.
// Verifies that the page title includes “Google”.