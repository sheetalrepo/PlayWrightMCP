const { test, expect } = require('@playwright/test');

// npx playwright test --headed login.spec.js

test('Login Functionality', async ({ page }) => {
  // 1. Navigate to the site and verify title
  await page.goto('https://practice.expandtesting.com/');
  await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API');

  // 2. Click on Test Login Page link
  await page.getByRole('link', { name: 'Test Login Page' }).click();

  // 3. Enter user credentials and login
  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Verify the success message
  const successMsg = page.getByText('You logged into a secure area!');
  await expect(successMsg).toBeVisible();
});
