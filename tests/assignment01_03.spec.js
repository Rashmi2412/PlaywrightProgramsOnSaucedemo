const {test, expect} =  require('@playwright/test');
test('Assert that the heading text contains Example' , async({page}) => {

    await page.goto("https://example.com/");
    await expect(page.getByRole("heading", {level: 1})).toHaveText("Example Domain");
    await expect(page).toHaveTitle(/.*Example/);
    //(/.*Example/) used for showing partial heading
    
})