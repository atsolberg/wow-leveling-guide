import { processUrlData, Type, selectors, getPaging } from './common.js';

function scrapeRows(rows) {
  const wh_url = 'https://classic.wowhead.com';
  const row_data = rows.map((r) => {
    const data = {};
    const nameAnchor = r.querySelector(
      'td:nth-of-type(4) a.listview-cleartext'
    );
    data.url = (nameAnchor.href || '').replace(wh_url, '');
    data.name = nameAnchor.innerText;
    const quality = window.ats_findQuality(nameAnchor);
    if (quality) data.quality = quality;

    const ins = r.querySelector('td:nth-child(3) ins');
    const bg = ins.style.backgroundImage || '';
    const img = new RegExp(/url\("(.+[^"])"/, 'g').exec(bg);
    if (img) data.image = img[1];

    return data;
  });

  return row_data;
}

async function parsePageForItems(page) {
  /* eslint-disable no-await-in-loop */
  const { pages } = await getPaging(page);

  let items = [];
  const data = await page.$$eval(selectors.rows, scrapeRows);
  processUrlData(Type.item, data);
  items = [...items, ...data];

  if (pages > 1) {
    for (let i = 2; i <= pages; i++) {
      const nextLink = await page.$(selectors.next);
      if (nextLink) {
        console.log('fetch next results for page', `${i}`.cyan);

        // Clicks off screen can hang..., use page.$eval instead page.click
        // https://github.com/puppeteer/puppeteer/issues/3535#issuecomment-439220220
        await page.$eval(selectors.next, (n) => n.click());
        const data = await page.$$eval(selectors.rows, scrapeRows);
        processUrlData(Type.item, data);
        items = [...items, ...data];
      }
    }
  }

  console.log('scraped ', `${items.length}`.yellow, ' items for range\n');

  /* eslint-enable no-await-in-loop */
  return items;
}

export default parsePageForItems;
