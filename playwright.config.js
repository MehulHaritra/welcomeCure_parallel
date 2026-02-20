// playwright.config.js

const { devices } = require('@playwright/test');
//require('dotenv').config();
const config = {
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['./excel-reporter-v2.js', { outputFileName: 'test-report.xlsx' }]
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
    // browserName: 'projects'  // Chrome only
  },
 projects: [
  { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  { name: 'Mobile Safari', use: { ...devices['iPhone 14'] } },
]
};

module.exports = config;
