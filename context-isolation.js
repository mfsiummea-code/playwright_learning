const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });

  const contextA = await browser.newContext();
  const pageA = await contextA.newPage();
  await pageA.goto('https://example.com');
  await pageA.evaluate(() => localStorage.setItem('username', 'Abiha'));

  const contextB = await browser.newContext();
  const pageB = await contextB.newPage();
  await pageB.goto('https://example.com');
  const username = await pageB.evaluate(() => localStorage.getItem('username'));
  console.log(username); // Should be null

  await browser.close();
})();