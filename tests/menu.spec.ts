import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';
import users from '../test-data/users.json';

test('User can open menu and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MenuPage(page);

  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await menuPage.openMenu();
  await menuPage.logout();

  await expect(page).toHaveURL("/");
});
