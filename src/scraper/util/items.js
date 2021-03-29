import { text } from './puppets.js';

/**
 * Item quality enumeration
 * @enum
 */
export const Quality = {
  POOR: 'Poor',
  COMMON: 'Common',
  UNCOMMON: 'Uncommon',
  RARE: 'Rare',
  EPIC: 'Epic',
  LEGENDARY: 'Legendary',
};

export const item_url_rgx = /\/item=(\d+)\/(.+)$/;

/**
 * Returns an array of item-link data for each row
 * @param {[{ name: string,  url: string }]} data
 * @return {[{ name: string, url: string, id: string, slug: string }]}
 */
function parseData(data) {
  const items = data
    .filter((data) => !!data.url)
    .map((data) => {
      const item = { ...data };

      const match = new RegExp(item_url_rgx, 'gi').exec(data.url) || [];
      if (match.length > 2) {
        const [, id, slug] = match;
        item.id = id;
        item.slug = slug;
      } else {
        console.log(`⛔️ failed to parse href: ${data.url}, match: ${match}`);
      }

      return item;
    });

  return items;
}

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
  const nav = await page.$('.listview-nav');
  const page_total = await nav.$eval('span b:nth-child(2)', text);
  const total = await nav.$eval('span b:nth-child(3)', text);
  const pages = Math.ceil(Number(total) / page_total);

  let stats = 'total items: ' + `${total}`.yellow;
  stats += ', items per page: ' + `${page_total}`.yellow;
  stats += ', pages: ' + `${pages}`.yellow;
  console.log(stats + '\n');

  let items = [];
  const urls = await page.$$eval('#tab-items tbody tr', scrapeRows);
  const data = parseData(urls);
  items = [...items, ...data];

  if (pages > 1) {
    for (let i = 2; i <= pages; i++) {
      const nextLink = await page.$('a:nth-of-type(4)');
      if (nextLink) {
        console.log('fetch next results for page', i);

        // Clicks off screen can hang..., use page.$eval instead page.click
        // https://github.com/puppeteer/puppeteer/issues/3535#issuecomment-439220220
        await page.$eval('.listview-nav a:nth-of-type(4)', (n) => n.click());

        const next_nav = await page.$('.listview-nav');
        const start = await next_nav.$eval('span b:nth-child(1)', text);
        const to = await next_nav.$eval('span b:nth-child(2)', text);
        const of = await next_nav.$eval('span b:nth-child(3)', text);

        let paging = 'paging: ' + `${start}`.yellow;
        paging += ' to ' + `${to}`.yellow;
        paging += ' of ' + `${of}`.yellow;
        console.log(paging + '\n');

        const urls = await page.$$eval('#tab-items tbody tr', scrapeRows);
        const data = parseData(urls);
        items = [...items, ...data];
      }
    }
  }

  /* eslint-enable no-await-in-loop */
  return items;
}

export default parsePageForItems;
