import { defineConfig, devices } from '@playwright/test'; // Import Playwright test config helper and predefined device settings

export default defineConfig({
  testDir: './tests',               // Directory where your test files are located
  timeout: 30000,                   // Maximum time (in milliseconds) a test can run before timing out
  retries: 1,                      // Number of retries for failed tests
  workers: 1,                      // Number of parallel test workers (tests running simultaneously)
  forbidOnly: !!process.env.CI,    // Fail the build if 'test.only' is left in the code during CI runs
  reporter: [['html', { open: 'never' }]],  // Test report format and behavior (here: generate HTML report but don't open it automatically)
  use: {
    headless: true,               // Run tests with browser UI visible (false), or headless mode (true)
    /*
    launchOptions: {
      slowMo: 1000,               // Slow down each action by 3000ms (3 seconds) for easier debugging
    },
    */
    viewport: { width: 1280, height: 720 }, // Set browser window size during tests
    screenshot: 'only-on-failure', // Take screenshots only when tests fail
    video: 'retain-on-failure',    // Record videos only when tests fail
    baseURL: 'https://www.saucedemo.com', // Base URL for tests; can use relative URLs in tests
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },  // Run tests on Chromium (Chrome) desktop browser
    //{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },  // Run tests on Firefox desktop browser
    //{ name: 'webkit', use: { ...devices['Desktop Safari'] } },    // Run tests on WebKit (Safari) desktop browser
  ],
});
