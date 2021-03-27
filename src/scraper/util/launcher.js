import puppeteer from 'puppeteer';
import Scraper from '../Scraper.js';

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
 * Function to scrape the page with the puppeteer page instance and flags
 * @callback runner
 * @param {Page} page
 * @param {boolean} test - is the test flag set
 * @param {boolean} debug - is the debug flag set
 * @return {Promise<boolean>} - success or failure
 */

/**
 * Setup puppeteer to build a page and then return a object with a start
 * function that can start the scraper using the page.
 * @param {Object} config
 * @param {boolean} config.test - is the test flag set
 * @param {boolean} config.debug - is the debug flag set
 * @param {runner} config.runner - function to scrape the page
 * @returns {Promise<{Scraper}>}
 */
async function launcher({ test, debug, runner }) {
  const page = await puppeteer
    .launch({
      defaultViewport: { width: 1200, height: 900 },
      ...(debug ? { headless: false, devtools: true } : {}),
    })
    .then(async (browser) => {
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on('request', ignoreGarbage);
      return page;
    })
    .catch((err) => {
      // handle error
      console.log('Caught an error', err);
    });

  return new Scraper(runner, page, test, debug);
}

export default launcher;
