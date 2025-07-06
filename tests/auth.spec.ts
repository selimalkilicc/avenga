import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test('Valid user should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/inventory.html/);
});

test('Locked out user should see error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.lockedUser.username, users.lockedUser.password);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('locked out');
});
