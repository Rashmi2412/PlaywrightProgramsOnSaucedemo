
import { chromium } from 'playwright';
// import { test } from '@playwright/test';

async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');

  // Click a button with class 'submit-btn'
  await page.click('.goohgle-search-button');

  await browser.close();
};



// import { test, expect, devices } from '@playwright/test';
// // Use the iPhone 12 emulation settings
// const iPhone = devices['iPhone 12'];
// test.use({
//   ...iPhone,
//   geolocation: { latitude: 40.7128, longitude: -74.0060 },
//   permissions: ['geolocation'],
//   locale: 'en-US'
// });
// test('Check mobile emulation and geolocation', async ({ page }) => {
//   await page.goto('https://my-location.org/');
//   // Wait for the location info to show
//   await page.waitForTimeout(3000);

// });

// // To run this test, use the command: npx playwright test tests/IPhoneemulation.spec.ts
// // or npx playwright test tests/IPhoneemulation.spec.ts -project playwright -headed