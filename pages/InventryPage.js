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
//to check this product is availabe in the product list we use this method
 async getItemByName(name) {
  await this.page.locator('.inventory_item').filter({hasText: name,}).click();
}
//to add the product to the cart use this method
  async addToCart(productName) {
  await this.page.getByText(productName).locator('button').click();
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
    await this.cartButton.click();
  }
}
module.exports = { InventryPage };