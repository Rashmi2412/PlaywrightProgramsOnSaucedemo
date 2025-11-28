export class OverviewPage{
    constructor(page){
     this.page = page;
     this.WebTitle = page.locator('.app_logo'); //here it is Swag Labs
     this.pageTitle = page.locator('[data-test="title"]');
     this.cartBadge = page.locator('.shopping_cart_badge');
     this.productTitle = page.locator('[data-test="inventory-item-name"]');
     this.productDesc = page.locator('[data-test="inventory-item-desc"]');
     this.productImg = page.locator('.inventory_details_img');
     this.productPrice = page.locator('.inventory_details_price');

     }

    async verifyProductDetails(name) {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.WebTitle).toBeVisible();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.productTitle).toBeVisible();
    await expect(this.productDesc).toBeVisible();
    await expect(this.productImag).toBeVisible();
    await expect(this.productPrice).toBeVisible();
   }
   
      async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }
     }
      module.exports = { OverviewPage };