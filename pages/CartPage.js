export class CartPage{
    constructor(page){
     this.page = page;
     this.WebTitle = page.locator('.app_logo'); //here it is Swag Labs
     this.pageTitle = page.locator('[data-test="title"]');
     this.cartBadge = page.locator('.shopping_cart_badge');
     this.removeProduct = page.locator('[data-test="remove"]');
     this.checkoutButton =page.locator('[data-test="checkout"]');
     this.continueShop = page.locator('[data-test="continue-shopping"]');
     }
      async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }
       async checkout() {
       await this.checkoutButton.click();
       }

       async continueShopping() {
        await this.continueShop.click();
       }
     }
      module.exports = { LoginPage };