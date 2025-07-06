import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import users from '../test-data/users.json';

test('Products page should load after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  expect(await productsPage.isLoaded()).toBeTruthy();
});

test('User can add product to cart from products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await productsPage.addProductToCart();
  await productsPage.goToCart();
});
