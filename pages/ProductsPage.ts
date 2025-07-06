import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productItems = '.inventory_item';
  readonly addToCartButton = (index: number) => `text=Add to cart >> nth=${index}`;
  readonly cartIcon = '//a[@class="shopping_cart_link"]';

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    return this.page.isVisible('.inventory_list');
  }

  async addProductToCart() {
    await this.page.click(this.addToCartButton(2));
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
