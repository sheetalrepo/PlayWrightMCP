const { defineConfig, devices } = require('@playwright/test');    // @ts-check

module.exports = defineConfig({             // https://playwright.dev/docs/test-configuration
  testDir: './tests',
  timeout: 30000,                           // Timeout for each test, includes test, hooks and fixtures 30 Sec  Overide: test.setTimeout(120000)  https://playwright.dev/docs/test-timeouts
  expect: { timeout: 10000 },               // Timeout for each assertion         Overide: expect(locator).toBeVisible({ timeout: 10000 })
  fullyParallel: true,                      // Run all tests cases in every file in parallel
  forbidOnly: !!process.env.CI,             // Fail the build on CI if you accidentally left test.only in the source code
  retries: process.env.CI ? 2 : 0,          // Retry on CI = 2, Retry on Local = 0
  workers: process.env.CI ? 1 : 5,          // How many thread need to generate on to run TCs, Local = default 4 
  reporter: 'html',                         // https://playwright.dev/docs/test-reporters
  use: {                                    // https://playwright.dev/docs/api/class-testoptions
    trace: 'retain-on-failure',             // on, retain-on-failure, on-first-retry |  https://trace.playwright.dev/ https://playwright.dev/docs/trace-viewer
    screenshot: 'only-on-failure',          // on, off, only-on-failure 
    browserName: 'webkit',                  // firefox, chromium, webkit
    baseURL:''
  }
});

