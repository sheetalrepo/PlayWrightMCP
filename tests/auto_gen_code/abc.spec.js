const { test } = require('@playwright/test');
// @playwright: Can you pls go to https://practice.expandtesting.com/ and write a login test with valid given credentials and verify the login success message. I need a method here in JS.

// Example Playwright login test method
async function loginAndVerifySuccess(page, username, password) {
  await page.goto('https://practice.expandtesting.com/');
  await page.click('a[href="/login"]'); // Click the login link if needed
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  // Wait for and verify the success message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');
  if (!successMessage.toLowerCase().includes('success')) {
    throw new Error('Login success message not found!');
  }
}

test('login with valid credentials', async ({ page }) => {
  await loginAndVerifySuccess(page, 'practice', 'SuperSecretPassword!');
});