export class InventryPage{
    constructor(page){
     this.page = page;
     this.pageTitle = page.locator('.app_logo'); //here it is Swag Labs
     this.inventryTitle = page.locator('.title'); //here it is Product
     this.inventoryItems = page.locator('.inventory_item');
     this.cartButton = page.locator('#shopping_cart_container'); //empty cart icon
     // after adding the product to the cart locator updated
     this.cartBadge = page.locator('.shopping_cart_badge');
     //Filter option by default setting
     this.sortDropdown = page.locator('[data-test="product_sort_container"]');
 }
    async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }
  async addToCart(productName) {
      // Chain the locators directly using this.page
      await this.page.locator('.inventory_item').filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' })
          .click();
    }

//to remove the product by clicking on the remove button
 async removeProduct(productName) {
  await this.page.getByText(productName).locator('button').click();
}

//product display-- open the product by clicking on the product name
  async openProductDetails(productName) {
    await this.getItemByName(productName).locator('.inventory_item_name').click();
  }

  //to open the cart by clicking on cart icon
  async openCart() {
    await this.cartBadge.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html') ;
  }
}
module.exports = { InventryPage };