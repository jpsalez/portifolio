const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  console.log('Abrindo fat-food.up.railway.app...');
  await page.goto('https://fat-food.up.railway.app/', {
    waitUntil: 'networkidle2',
    timeout: 40000,
  });
  await new Promise(r => setTimeout(r, 2000));
  const dest = path.join(__dirname, '../public/fatfood-preview.png');
  await page.screenshot({ path: dest, type: 'png' });
  await browser.close();
  console.log('Screenshot salvo em:', dest);
})();
