import { text } from './puppets.js';

function scrapeIconInfo(cells) {
  return cells.map((el) => {
    const data = {};

    // Page url
    const page_url = el.querySelector('.iconlarge a').href;
    data.page_url = page_url;

    // Image url
    const ins = el.querySelector('.iconlarge ins');
    const bg = ins.style.backgroundImage || '';
    const img = new RegExp(/url\("(.+[^"])"/, 'g').exec(bg);
    data.url = img[1];

    // Name
    const parts = data.page_url.split('/');
    data.name = parts[parts.length - 1];

    // Id
    const id = parts.find((p) => p.startsWith('icon=')).replace('icon=', '');
    data.id = id;

    return data;
  });
}

async function parsePageForIcons(page) {
  /* eslint-disable no-await-in-loop */
  const nav = await page.$('.listview-nav');
  const page_total = await nav.$eval('span b:nth-child(2)', text);
  const total = await nav.$eval('span b:nth-child(3)', text);
  const pages = Math.ceil(Number(total) / page_total);

  let stats = 'total items: ' + `${total}`.yellow;
  stats += ', items per page: ' + `${page_total}`.yellow;
  stats += ', pages: ' + `${pages}`.yellow;
  console.log(stats + '\n');

  const icon_cell = '.listview-mode-tiled .icon-cell';
  let items = await page.$$eval(icon_cell, scrapeIconInfo);

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

        const info = await page.$$eval(icon_cell, scrapeIconInfo);
        items = [...items, ...info];
      }
    }
  }

  /* eslint-enable no-await-in-loop */
  return items;
}

export default parsePageForIcons;
