import fs from 'fs';
import puppeteer from 'puppeteer';
import parsePageForItems from './utils.js';

const items_url = 'https://classic.wowhead.com/items';

function filterRange(from, to) {
  return `${items_url}?filter=151:151;2:4;${from}:${to}`;
}

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(async function(page) {
    let items = [];

    let from = 1;
    let to = 1000;
    for (let i = 1; i <= 4; i++) {
      const url = filterRange(from, to);
      console.log(`navigating to: `, url);
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
  })
  .catch(function(err) {
    //handle error
    console.log('Caught an error', err);
  });
