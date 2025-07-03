const { test, expect } = require('@playwright/test');

//npx playwright test --headed radio-buttons.spec.js

test('Radio Buttons Functionality', async ({ page }) => {
  // 1. Navigate to the site and verify title
  await page.goto('https://practice.expandtesting.com/');
  await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API');

  // 2. Click on Radio Buttons link
  await page.getByRole('link', { name: 'Radio Buttons' }).click();

  // 3. Verify h1 text in the new page
  const h1 = await page.locator('h1');
  await expect(h1).toHaveText('Radio Buttons page for Automation Testing Practice');

  // 4. Verify Blue and Tennis Radio Buttons are pre-selected
  const blueRadio = page.getByRole('radio', { name: 'Blue' });
  const tennisRadio = page.getByRole('radio', { name: 'Tennis' });
  await expect(blueRadio).toBeChecked();
  await expect(tennisRadio).toBeChecked();

  // 5. Select Red Radio button and verify
  const redRadio = page.getByRole('radio', { name: 'Red' });
  await redRadio.click();
  await expect(redRadio).toBeChecked();

  // 6. Select Football Radio button and verify
  const footballRadio = page.getByRole('radio', { name: 'Football' });
  await footballRadio.click();
  await expect(footballRadio).toBeChecked();
});
