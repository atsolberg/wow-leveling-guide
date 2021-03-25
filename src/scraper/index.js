import fs from 'fs';
import puppeteer from 'puppeteer';
import parsePageForItems from './utils.js';

const items_url = 'https://classic.wowhead.com/items';

function filterRange(from, to) {
  return `${items_url}?filter=151:151;2:4;${from}:${to}`;
}

async function scrapeItemIds(page) {
  let items = [];

  let from = 1;
  let to = 1000;
  for (let i = 1; i <= 25; i++) {
    const url = filterRange(from, to);
    console.log(`navigating to: `, url, '\n');
    await page.goto(url);
    const rowData = await parsePageForItems(page);
    items = [...items, ...rowData];
    from = from + 1000;
    to = to + 1000;
  }

  if (items.length) {
    console.log(`found ${items.length} items`);
    const json = JSON.stringify(items, null, 2);
    fs.writeFileSync('../db/items.json', json);
  } else {
    console.error('No items scraped!');
  }
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
    'pagead'
  ];
  const shouldAbort = filters.some(urlPart => url.indexOf(urlPart) !== -1);
  if (shouldAbort) request.abort();
  else request.continue();
}

puppeteer
  .launch({
    defaultViewport: {
      width: 1200,
      height: 900
    }
    // headless: false,
    // devtools: true
  })
  .then(browser => browser.newPage())
  .then(async function(page) {
    await page.setRequestInterception(true);
    page.on('request', ignoreGarbage);

    scrapeItemIds(page);
  })
  .catch(function(err) {
    //handle error
    console.log('Caught an error', err);
  });
