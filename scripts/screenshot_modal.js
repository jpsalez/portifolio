const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3002', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1400));
  await page.screenshot({ path: path.join(__dirname, '../public/ss_modal_open.png') });
  console.log('modal_open saved');
  await new Promise(r => setTimeout(r, 2800));
  await page.screenshot({ path: path.join(__dirname, '../public/ss_modal_cta.png') });
  console.log('modal_cta saved');
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
