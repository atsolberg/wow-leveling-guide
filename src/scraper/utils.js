const item_url_rgx = /\/item=(\d+)\/(.+)$/;
const wh_url = 'https://classic.wowhead.com';

function text(node) {
  return node.innerText;
}

/**
 * Returns an object with item id and slug from the item url
 * @param {string} url - the item url, i.e. "/item=123/rusty-dagger"
 * @return {null|{ id: string, slug: string }}
 */
function getDataFromUrl(url) {
  let data = null;

  const match = new RegExp(item_url_rgx, 'gi').exec(url) || [];
  if (match.length > 2) {
    const [, id, slug] = match;
    data = { id, slug };
  } else {
    console.log(`no data found for href: `, url, ' and match: ', match);
  }

  return data;
}

/**
 * Returns an array of item data for each row
 * @param {string[]} urls
 * @return {[null|{ id: string, slug: string }]}
 */
function getRowData(urls) {
  const items = urls
    .filter(Boolean)
    .map(url => getDataFromUrl(url.replace(wh_url, '')))
    .filter(Boolean);

  return items;
}

function getUrlsFromRows(rows) {
  return rows.map(r => r.querySelector('td:nth-of-type(3) a').href);
}

export async function parsePageForItems(page) {
  const nav = await page.$('.listview-nav');
  const page_total = await nav.$eval('span b:nth-child(2)', text);
  const total = await nav.$eval('span b:nth-child(3)', text);

  console.log(`page_total: `, page_total);
  console.log(`total: `, total);
  const pages = Math.ceil(Number(total) / page_total);
  console.log(`pages: `, pages);

  let items = [];
  const urls = await page.$$eval('#tab-items tbody tr', getUrlsFromRows);
  const data = getRowData(urls);
  items = [...items, ...data];

  if (pages > 1) {
    for (let i = 2; i <= pages; i++) {
      const nextLink = await page.$('a:nth-of-type(4)');
      if (nextLink) {
        console.log('\nfetch next results for page', i);

        await page.click('.listview-nav a:nth-of-type(4)');

        const next_nav = await page.$('.listview-nav');
        const start = await next_nav.$eval('span b:nth-child(1)', text);
        const to = await next_nav.$eval('span b:nth-child(2)', text);
        const of = await next_nav.$eval('span b:nth-child(3)', text);

        console.log(`paging: ${start} to ${to} of ${of}`);

        const urls = await page.$$eval('#tab-items tbody tr', getUrlsFromRows);
        const data = getRowData(urls);
        items = [...items, ...data];
      }
    }
  }

  return items;
}

export default parsePageForItems;
