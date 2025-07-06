import { Page } from '@playwright/test';

export class Helpers {
  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
  }

  static async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
  }

  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
  }

  static async scrollToElement(page: Page, selector: string) {
    await page.locator(selector).scrollIntoViewIfNeeded();
  }
}