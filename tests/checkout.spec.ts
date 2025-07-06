import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import users from '../test-data/users.json';

test('Checkout flow works', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  
  await productsPage.addProductToCart();
  await productsPage.goToCart();
  
  await cartPage.checkout();

  await checkoutPage.fillCheckoutForm('Selim', 'Alkılıç', '12345');
  await checkoutPage.continue();
  await checkoutPage.finish();

  expect(await checkoutPage.isOrderComplete()).toBeTruthy();
});
