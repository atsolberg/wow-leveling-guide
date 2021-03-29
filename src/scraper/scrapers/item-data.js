import fs from 'fs';

const item_url = 'https://classic.wowhead.com/item=';
/**
 * Scrape the wowhead item-link data pages.
 * Note: Function name is used in {@link Scraper} console logging.
 *
 * @param {Page} page - the puppeteer page instance.
 * @param {boolean} test - if true, the db/items/list.json file is not destroyed
 *                         a test file is written to instead.
 */
async function itemdata(page, test) {
  const tt_files = fs
    .readdirSync('../db/items/tt')
    .map((f) => f.replace(/\.html/, ''));

  const list = fs.readFileSync('../db/items/list.json');
  const items = JSON.parse(list).filter((i) => !tt_files.includes(i.id));
  let tooltips = 0;
  let misses = 0;

  for (let i = 0; i < (test ? 5 : items.length); i++) {
    /* eslint-disable no-await-in-loop */

    const { id, name } = items[i];
    const url = `${item_url}${id}`;
    console.log(`Item #${i} - Navigating to: `, `${url}`.cyan);
    await page.goto(url);

    // Add some helpers to the browser window
    await page.evaluate(fs.readFileSync('util/helpers.js', 'utf8'));

    let tt = null;
    try {
      tt = await page.$eval(`#tt${id}`, (el) => el.innerHTML);
    } catch (err) {
      console.log(`⛔️ no tooltip element found for ${id} - ${name}!`);
    }

    if (!(tt || '').trim()) {
      console.log(`⛔️ no tooltip content found for ${id} - ${name}!`);
      misses += 1;
    } else {
      const path = `../db/items/tt${test ? `-test` : ''}/${id}.html`;
      fs.writeFileSync(path, tt);
      tooltips += 1;
    }

    /* eslint-enable no-await-in-loop */
  }

  console.log('📦 Scraped ' + `${tooltips}`.green + ' items for data');
  if (misses) console.log(`⛔️ ${misses} misses`);

  return tooltips;
}

export default itemdata;
