// @playwright: Can you pls write a test method in JS where we will go to https://practice.expandtesting.com/ and click on Test Login Page anchor tag , login into the page, credenctial are mentioned in the page. And after login verify the SECURE WORD message appear in green.

const { test } = require('@playwright/test');

test('login and verify secure message', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials
  await page.fill('input[name="username"]', 'practice');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for and verify the secure message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');

  if (!successMessage.toLowerCase().includes('secure')) {
    throw new Error('Login secure message not found!');
  }
});




// @playwright: scaffold a test that checks the page title is "Dashboard" after logging in 

test('check dashboard title after login', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials
  await page.fill('input[name="username"]', 'practice');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for the dashboard page to load
  await page.waitForSelector('h1');

  // Check the page title
  const pageTitle = await page.title();
  if (pageTitle !== 'Dashboard') {
    throw new Error(`Expected page title to be "Dashboard", but got "${pageTitle}"`);
  }
});


// @playwright: test clicking the "Contact" nav button navigates to contact Page
test('navigate to contact page', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Contact nav button
  await page.click('a[href="/contact"]');

  // Wait for the contact page to load
  await page.waitForSelector('h1');

  // Check if the URL is correct
  const currentUrl = page.url();
  if (!currentUrl.includes('/contact')) {
    throw new Error(`Expected to be on contact page, but got URL: ${currentUrl}`);
  }
});
// @playwright: test that clickin g the "About" nav button navigates to about Page
test('navigate to about page', async ({ page }) => {  
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the About nav button
  await page.click('a[href="/about"]');

  // Wait for the about page to load
  await page.waitForSelector('h1');

  // Check if the URL is correct
  const currentUrl = page.url();
  if (!currentUrl.includes('/about')) {
    throw new Error(`Expected to be on about page, but got URL: ${currentUrl}`);
  }
});   


// can you pls write a test method in JS where we will go to https://practice.expandtesting.com/ and click on Test Login Page anchor tag , login into the page, credenctial are mentioned in the page. And after login verify the message appear in green.
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
}); 

// @playwright: can you pls use id locator rather css or xpath for login and password fields
test('login and verify success message with id locators', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials using id locators
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for and verify the success message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');

  if (!successMessage.toLowerCase().includes('secure')) {
    throw new Error('Login success message not found!');
  }
});

// @playwright: can u pls use text of submit button instead of xpath or css selector
test('login and verify success message with button text', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials using id locators
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');

  // Submit the login form
  await page.click('button:has-text("Submit")');

  // Wait for and verify the success message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');

  if (!successMessage.toLowerCase().includes('secure')) {
    throw new Error('Login success message not found!');
  }
});

 //@playwright: no above code in not working text is not matching can you pls go to login page and see what text is there on submit button
test('login and verify success message with correct button text', async ({ page }) => {
  // Navigate to the practice site
  await page.goto('https://practice.expandtesting.com/');

  // Click on the Test Login Page link
  await page.click('a[href="/login"]');

  // Fill in the login form with credentials using id locators
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');

  // Submit the login form using the correct button text
  await page.click('button:has-text("Login")'); // Adjusted to match the actual button text

  // Wait for and verify the success message
  await page.waitForSelector('.alert-success, .success, .alert'); // Adjust selector as needed
  const successMessage = await page.textContent('.alert-success, .success, .alert');

  if (!successMessage.toLowerCase().includes('secure')) {
    throw new Error('Login success message not found!');
  }
});