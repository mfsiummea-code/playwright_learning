const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://brightedge.com');
  console.log(await page.title());
  await browser.close();
})();

//change browser in config setting and command line