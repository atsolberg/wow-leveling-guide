import fs from 'fs';
import parsePageForItems from '../util/items.js';

const items_url = 'https://classic.wowhead.com/items';

function filterRange(from, to) {
  return `${items_url}?filter=151:151;2:4;${from}:${to}`;
}

/**
 * Visit items page filtered by id range of 1000 at a time.
 * @param {Page} page - the puppeteer page instance.
 * @param {number} [chunks=25] - number of 1000 id ranges to scrape
 * @returns {Promise<ItemInfo[]>}
 */
async function scrapePages(page, chunks = 25) {
  /* eslint-disable no-await-in-loop */
  let items = [];

  let from = 1;
  let to = 1000;
  for (let i = 1; i <= chunks; i++) {
    const url = filterRange(from, to);
    console.log(`Navigating to: `, `${url}`.cyan, '\n');
    await page.goto(url);
    // Add some helpers to the browser window
    await page.evaluate(fs.readFileSync('util/helpers.js', 'utf8'));

    const rowData = await parsePageForItems(page);
    items = [...items, ...rowData];
    from += 1000;
    to += 1000;
  }

  /* eslint-enable no-await-in-loop */
  return items;
}

/**
 * Scrape the wowhead items table by search for id ranges of 1000 at a time.
 * Note: Function name is used in {@link Scraper} console logging.
 *
 * @param {Page} page - the puppeteer page instance.
 * @param {boolean} test - if true, the db/items.json file is not destroyed
 *                         a test file is written to instead.
 */
async function itemlist(page, test) {
  const items = await scrapePages(page, test ? 1 : 25);

  if (items.length) {
    const json = JSON.stringify(items, null, 2);
    const path = `../db/items${test ? Date.now() : ''}.json`;
    fs.writeFileSync(path, json);
    console.log('📦 Scraped ' + `${items.length}`.green + ' items');
  } else {
    console.error('No items scraped!');
  }

  return items;
}

export default itemlist;
