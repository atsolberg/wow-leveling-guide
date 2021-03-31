import fs from 'fs';
import parsePageForIcons from '../util/icons.js';

const base_url = 'https://classic.wowhead.com/icons';
const ranges = [
  '?filter=13;3;0', //         used 0 times            - 207 icons
  '?filter=13:13;1:4;0:1', //  used 1 time             - 511 icons
  '?filter=13:13;1:4;1:2', //  used 2 times            - 278 icons
  '?filter=13:13;1:4;2:3', //  used 3 times            - 191 icons
  '?filter=13:13;1:4;3:10', // used 4 to 10 times      - 696 icons
  '?filter=13;1;10', //        used more than 10 times - 820 icons
]; //                                            Total - 2703 icons

/**
 * Visit icons page for each filter range and harvest icons
 * @param {Page} page - the puppeteer page instance.
 * @returns {Promise<IconInfo[]>}
 */
async function scrapePages(page) {
  /* eslint-disable no-await-in-loop */
  let info = [];

  for (let i = 0; i < ranges.length; i++) {
    const r = ranges[i];
    const url = `${base_url}${r}`;
    console.log(`Navigating to: `, `${url}`.cyan, '\n');
    await page.goto(url);
    // Add some helpers to the browser window
    await page.evaluate(fs.readFileSync('util/helpers.js', 'utf8'));

    const icons = await parsePageForIcons(page);
    info = [...info, ...icons];
  }

  /* eslint-enable no-await-in-loop */
  return info;
}

/**
 * Scrape the wowhead icons page for icon name and urls.
 * Note: Function name is used in {@link Scraper} console logging.
 *
 * @param {Page} page - the puppeteer page instance.
 * @param {boolean} test - if true, the db/items/list.json file is not destroyed
 *                         a test file is written to instead.
 */
async function iconlist(page, test) {
  const icons = await scrapePages(page);

  if (icons.length) {
    const json = JSON.stringify(icons, null, 2);
    const path = `../db/icons/list${test ? `-${Date.now()}` : ''}.json`;
    fs.writeFileSync(path, json);
    console.log('📦 Scraped ' + `${icons.length}`.green + ' icons');
  } else {
    console.error('No icons scraped!');
  }

  return icons;
}

export default iconlist;
