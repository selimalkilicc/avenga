import { Page } from '@playwright/test';

export class MenuPage {
  readonly page: Page;
  readonly burgerMenuButton = '#react-burger-menu-btn';
  readonly logoutLink = '#logout_sidebar_link';

  constructor(page: Page) {
    this.page = page;
  }

  async openMenu() {
    await this.page.click(this.burgerMenuButton);
  }

  async logout() {
    await this.page.click(this.logoutLink);
  }
}
