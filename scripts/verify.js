const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  async function shot(name, fn) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 4000));
    if (fn) await fn(page);
    await page.screenshot({ path: path.join(__dirname, `../public/${name}.png`) });
    console.log(`saved: ${name}.png`);
    await page.close();
  }

  // Hero
  await shot('ss_hero');

  // About
  await shot('ss_about', async (page) => {
    await page.evaluate(() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 1200));
  });

  // Projects — expanded
  await shot('ss_project', async (page) => {
    await page.evaluate(() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 1000));
    const btn = await page.$('[class*="titleRow"]');
    if (btn) { await btn.click(); await new Promise(r => setTimeout(r, 1200)); }
  });

  // Contact
  await shot('ss_contact', async (page) => {
    await page.evaluate(() => document.getElementById('contato')?.scrollIntoView({ behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 1000));
  });

  await browser.close();
  console.log('Done');
})().catch(e => { console.error(e.message); process.exit(1); });
