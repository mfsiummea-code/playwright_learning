const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, args: ['--start-maximized'],
  });
  const context = await browser.newContext({ viewport: null });
  const page = await browser.newPage();
  await page.goto('https://brightedge.com');
  await page.screenshot({ path: 'maximized-view.png' });

  await browser.close();
})();