import fs from 'fs';
import puppeteer from 'puppeteer';
import parsePageForItems from './util/items.js';

const items_url = 'https://classic.wowhead.com/items';

function filterRange(from, to) {
  return `${items_url}?filter=151:151;2:4;${from}:${to}`;
}

async function scrapePages(page, chunks = 25) {
  /* eslint-disable no-await-in-loop */
  let items = [];

  let from = 1;
  let to = 1000;
  for (let i = 1; i <= chunks; i++) {
    const url = filterRange(from, to);
    console.log(`navigating to: `, url, '\n');
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
 * Without aborting some requests that are 'pending' forever,
 * some page actions will hang forever.
 */
function ignoreGarbage(request) {
  const url = request.url();
  const filters = [
    'livefyre',
    'moatad',
    'analytics',
    'controltag',
    'chartbeat',
    'id5-sync.com',
    'googlesyndication',
    '2mdn.net',
    'omweb',
    'anyclip',
    'pagead',
  ];
  const shouldAbort = filters.some((urlPart) => url.indexOf(urlPart) !== -1);
  if (shouldAbort) request.abort();
  else request.continue();
}

/**
 * Scrape the wowhead items table by search for id ranges of 1000 at a time.
 * @param {boolean} test - if true, the db/items.json file is not destroyed
 *                         a test file is written to instead.
 */
function scrapeItemList(test, debug) {
  puppeteer
    .launch({
      defaultViewport: {
        width: 1200,
        height: 900,
      },
      ...(debug ? { headless: false, devtools: true } : {}),
    })
    .then((browser) => browser.newPage())
    .then(async (page) => {
      await page.setRequestInterception(true);
      page.on('request', ignoreGarbage);

      await page.evaluate('console.log("does this crap even work!!!!!!????");');

      const items = await scrapePages(page, test ? 1 : 25);

      if (items.length) {
        console.log(`found ${items.length} items`);
        const json = JSON.stringify(items, null, 2);
        fs.writeFileSync(`../db/items${test ? Date.now() : ''}.json`, json);
      } else {
        console.error('No items scraped!');
      }
    })
    .catch((err) => {
      // handle error
      console.log('Caught an error', err);
    });
}

export default scrapeItemList;
