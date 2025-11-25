export class ProductDetailPage{
    constructor(page){
     this.page = page;
     this.pageTitle = page.locator('.app_logo'); //here it is Swag Labs
     this.cartButton = page.locator('#shopping_cart_container'); //empty cart icon
     // after adding the product to the cart locator updated
     this.cartBadge = page.locator('.shopping_cart_badge');
     this.backButton = page.locator('#back-to-products');
     this.productTitle = page.locator('.inventory_details_name large_size');
     this.productDesc = page.locator('.inventory_details_desc large_size');
     this.addToCart = page.locator('[data-test="add-to-cart"]');
     this.removeProduct = page.locator('[data-test="remove"]')
     }

    async verifyProductDetails(name) {
    await expect(this.page.locator('.inventory_details_name large_size')).toBeVisible();
    await expect(this.page.locator('.inventory_details_desc large_size')).toBeVisible();
    await expect(this.page.locator('.inventory_details_img')).toBeVisible();
    await expect(this.page.locator('.inventory_details_price')).toBeVisible();
   }
   
    async addToCartBtn() {
    await this.addToCart.click();
  }

  async removeFromCart() {
    await this.removeProduct.click();
  }

  async backToInventory() {
    await this.backButton.click();
  }
}
module.exports = { LoginPage };