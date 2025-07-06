import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput = '#first-name';
  readonly lastNameInput = '#last-name';
  readonly postalCodeInput = '#postal-code';
  readonly continueButton = '#continue';
  readonly finishButton = '#finish';
  readonly confirmationText = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continue() {
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }

  async isOrderComplete() {
    return this.page.isVisible(this.confirmationText);
  }
}
