const { test } = require('@playwright/test');


// @playwright: Can you pls write a test method in JS where we will go to https://practice.expandtesting.com/ and click on Test Login Page anchor tag , login into the page, credenctial are mentioned in the page. And after login verify the message appear in green.

test('login and verify success message', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials
  await page.fill('input[name="username"]', 'practice');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for and verify the success message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');
  
  if (!successMessage.toLowerCase().includes('secure')) {
    throw new Error('Login success message not found!');
  }


})

