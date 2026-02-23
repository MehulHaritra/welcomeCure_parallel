// playwright.config.js

const { devices } = require('@playwright/test');
//require('dotenv').config();
const config = {
  testDir: './tests',
  fullyParallel: true,
  workers: 3,
  timeout: 100000,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['./excel-reporter-v2.js', { outputFileName: 'test-report.xlsx' }]
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 60000,
    navigationTimeout: 90000, 
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
    // browserName: 'projects'  // Chrome only
  },
 projects: [
    {
      name: 'Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
    {
      name: 'Firefox',
      use: { 
        ...devices['Desktop Firefox'],
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
    {
      name: 'Edge',
      use: { 
        ...devices['Desktop Edge'],
        channel: 'msedge',
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
  ],
};

module.exports = config;
