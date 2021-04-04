import { processUrlData, selectors, getPaging, Type } from './common.js';

/**
 * Puppeteer page script, runs in the browser context. Scrapes a page of rows.
 * @param {Element[]} rows - table row elements.
 * @return {ItemInfo[]}
 */
function scrapeRows(rows) {
  const wh_url = 'https://classic.wowhead.com';
  const parseId = (a) => {
    const match = new RegExp(/\/item=(\d+)\/(.+)$/, 'gi').exec(a.href) || [];
    const [, id] = match;
    return id;
  };

  const row_data = rows.map((r) => {
    const data = {};

    const nameLink = r.querySelector('td:nth-of-type(1) a.listview-cleartext');
    data.url = (nameLink.href || '').replace(wh_url, '');
    data.name = nameLink.innerText;

    const lvlNodes = r.querySelector('td:nth-of-type(2)').childNodes;
    const [lvl, qualifier] = Array.from(lvlNodes).map((n) => n.textContent);
    data.lvl = Number(lvl);
    if (qualifier) data.qualifier = qualifier;

    const req = r.querySelector('td:nth-of-type(3)').innerText;
    data.req = Number(req);

    const a = !!r.querySelector('td:nth-of-type(4) .icon-alliance');
    const h = !!r.querySelector('td:nth-of-type(4) .icon-horde');
    data.side = a ? 'Alliance' : h ? 'Horde' : 'Neutral';

    data.rewards = {};
    const divs = r.querySelectorAll('td:nth-of-type(5) > div');
    if (divs.length > 0) {
      const label = divs[0].querySelector('div>div');
      const pick = !!label?.innerText?.includes('Pick');
      const items = Array.from(divs[0].querySelectorAll('a')).map(parseId);
      data.rewards.items = items;
      data.rewards.pick_one = pick;
      if (divs.length > 2) {
        const also_get = Array.from(divs[2].querySelectorAll('a')).map(parseId);
        data.rewards.also_get = also_get;
      }
    }

    const exp = r.querySelector('td:nth-of-type(6)').innerText.trim();
    if (exp) data.exp = Number(exp.replace(',', ''));

    const moneyTd = r.querySelector('td:nth-of-type(7)');
    const cp = moneyTd.querySelector('.moneycopper')?.innerText || 0;
    const sv = moneyTd.querySelector('.moneysilver')?.innerText || 0;
    const gd = moneyTd.querySelector('.moneygold')?.innerText || 0;
    const money = Number(cp) + Number(sv * 100) + Number(gd * 100 * 100);
    data.money = money;

    const category = r.querySelector('td:nth-of-type(8) a')?.innerText;
    if (category) data.category = category;

    return data;
  });

  return row_data;
}

async function parsePageForQuests(page) {
  /* eslint-disable no-await-in-loop */
  const { pages } = await getPaging(page);

  let quests = [];
  const data = await page.$$eval(selectors.rows, scrapeRows);
  processUrlData(Type.quest, data);
  quests = [...quests, ...data];

  if (pages > 1) {
    for (let i = 2; i <= pages; i++) {
      const nextLink = await page.$(selectors.next);
      if (nextLink) {
        console.log('fetch next results for page', `${i}`.cyan);

        // Clicks off screen can hang..., use page.$eval instead page.click
        // https://github.com/puppeteer/puppeteer/issues/3535#issuecomment-439220220
        await page.$eval(selectors.next, (n) => n.click());
        const data = await page.$$eval(selectors.rows, scrapeRows);
        processUrlData(Type.quest, data);
        quests = [...quests, ...data];
      }
    }
  }

  console.log('scraped ', `${quests.length}`.yellow, ' quests for range\n');

  /* eslint-enable no-await-in-loop */
  return quests;
}

export default parsePageForQuests;
