const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });

  const iPhone = devices['iPhone 16 Pro'];
  const context = await browser.newContext({
    ...iPhone,
  });

  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'iphone16pro-view.png' });

  await browser.close();
})();