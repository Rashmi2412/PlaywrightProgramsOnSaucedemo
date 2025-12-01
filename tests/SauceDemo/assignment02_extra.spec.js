//write a script in which we store the username and password in the variable.. after that login
const {test,expect} = require('@playwright/test');
test('fetch the username or password by creating variables', async({page}) =>{
const UserName= page.getByRole('listitem').filter({ hasText: 'UserName 1' })

// const secondListItem = page.locator("(//ul/li)[2]")
console.log(UserName)

})


