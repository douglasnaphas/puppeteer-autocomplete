const puppeteer = require("puppeteer");

(async () => {
  const clickOptions = { delay: 200 };
  const typeOptions = { delay: 10 };
  const browserOptions = {};
  browserOptions.slowMo = 200;
  const timeoutMs = 2000;
  const waitForNavigationOptions = { timeout: timeoutMs };
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/");
  await page.waitForSelector('input[name="fname"]');
  await page.click('input[name="fname"]');
  await page.type('input[name="fname"]', "myName");
  await page.waitForSelector('input[type="submit"]');
  await page.waitFor(5000);
  await page.click('input[type="submit"]');
  await page.waitFor(5000);
  await page.waitForSelector('input[name="fname"]');
  await page.click('input[name="fname"]', clickOptions);
  await page.waitFor(2000);
  // await page.click('input[name="fname"]');
  await page.waitFor(2000);
  await page.keyboard.down("AltLeft");
  await page.keyboard.down("ArrowDown");
  await page.waitFor(200);

  await page.keyboard.up("ArrowDown");
  await page.keyboard.up("AltLeft");
  await page.waitFor(2000);
  // await page.keyboard.press("ArrowDown", { delay: 250 });
  await page.waitFor(2000);
  // await page.keyboard.press("ArrowRight", { delay: 250 });
  await page.waitFor(5000);
  await browser.close();
})();
