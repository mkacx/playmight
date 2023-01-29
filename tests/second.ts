const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://mateuszkacalinski.pl/");
  await page.locator(".menu").click();
  await page.locator(".menu").click();

  // ---------------------
  await context.close();
  await browser.close();
})();
