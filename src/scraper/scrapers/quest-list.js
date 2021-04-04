import fs from 'fs';
import parsePageForQuests from '../util/quests.js';

const items_url = 'https://classic.wowhead.com/quests';

function filterRange(from, to) {
  return `${items_url}?filter=30:30;2:4;${from}:${to}`;
}

/**
 * Visit quests page filtered by id range of 1000 at a time.
 * @param {Page} page - the puppeteer page instance.
 * @param {number} [chunks=10] - number of 1000 id ranges to scrape
 * @returns {Promise<ItemInfo[]>}
 */
async function scrapePages(page, chunks = 10) {
  /* eslint-disable no-await-in-loop */
  let quests = [];

  let from = 1;
  let to = 1000;
  for (let i = 1; i <= chunks; i++) {
    const url = filterRange(from, to);
    console.log(`Navigating to: `, `${url}`.cyan, '\n');
    await page.goto(url);
    // Add some helpers to the browser window
    await page.evaluate(fs.readFileSync('util/helpers.js', 'utf8'));

    const rowData = await parsePageForQuests(page);
    quests = [...quests, ...rowData];
    from += 1000;
    to += 1000;
  }

  /* eslint-enable no-await-in-loop */
  return quests;
}

/**
 * Scrape the wowhead items table by search for id ranges of 1000 at a time.
 * Note: Function name is used in {@link Scraper} console logging.
 *
 * @param {Page} page - the puppeteer page instance.
 * @param {boolean} test - if true, the db/items/list.json file is not destroyed
 *                         a test file is written to instead.
 */
async function questlist(page, test) {
  const items = await scrapePages(page, test ? 1 : 10);

  if (items.length) {
    const json = JSON.stringify(items, null, 2);
    const path = `../db/quests/list${test ? `-${Date.now()}` : ''}.json`;
    fs.writeFileSync(path, json);
    console.log('📦 Scraped ' + `${items.length}`.green + ' quests');
  } else {
    console.error('No quests scraped!');
  }

  return items;
}

export default questlist;
