import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton = '#checkout';
  readonly cartItems = '.cart_item';

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    return this.page.isVisible(this.checkoutButton);
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}
