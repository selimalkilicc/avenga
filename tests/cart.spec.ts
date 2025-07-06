import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import users from '../test-data/users.json';

test('Cart page should load after adding product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  expect(await cartPage.isLoaded()).toBeTruthy();
});

test('User can proceed to checkout from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  await cartPage.checkout();

  expect(page.url()).toContain('checkout-step-one.html');
});
