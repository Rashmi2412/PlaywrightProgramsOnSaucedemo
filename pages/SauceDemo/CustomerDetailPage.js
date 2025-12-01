export class CustomerDetailPage {
  constructor(page){
    this.page = page;
    this.firstnameInput = page.locator('[data-test="firstName"]');
    this.lastnameInput = page.locator('[data-test="lastName"]');
    this.pincodeInput = page.locator('[data-test="postalCode"]');
    this.ContinueBtn = page.locator('[data-test="continue"]');
    this.CancelBtn = page.locator('[data-test="cancel"]');
  }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/checkout-step-one.html');
  }
  async submitDetail(firstname, lastname, pincode) {
    await this.firstnameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    await this.pincodeInput.fill(pincode);
    await this.ContinueBtn.click();
  }

  async cancelRequest(){
    await this.CancelBtn.click();
  }
}
module.exports = {CustomerDetailPage};
