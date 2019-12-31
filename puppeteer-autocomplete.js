const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_form_autocomplete"
  );
  await browser.close();
})();
