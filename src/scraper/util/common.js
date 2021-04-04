import { text } from './puppets.js';

/**
 * @enum Type
 */
export const Type = {
  item: 'item',
  object: 'object',
  quest: 'quest',
  npc: 'npc',
};
export const Types = [Type.item, Type.object, Type.quest, Type.npc];

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

/** @enum UrlRegex */
export const url_rgx = {
  quest: /\/quest=(\d+)\/(.+)$/,
  item: /\/item=(\d+)\/(.+)$/,
};

export const selectors = {
  nav: '.listview-band-top .listview-nav',
  next: '.listview-band-top .listview-nav a:nth-of-type(4)',
  rows: '.listview-mode-default tbody tr',
};
selectors.start = `${selectors.nav} span b:nth-child(1)`;
selectors.to = `${selectors.nav} span b:nth-child(2)`;
selectors.of = `${selectors.nav} span b:nth-child(3)`;

export async function getPaging(page) {
  const nav = await page.$(selectors.nav);
  const start = await nav.$eval(selectors.start, text);
  const to = await nav.$eval(selectors.to, text);
  const of = await nav.$eval(selectors.of, text);
  const pages = Math.ceil(Number(of) / to);

  let stats = 'total quests: ' + `${of}`.yellow;
  stats += ', quests per page: ' + `${to}`.yellow;
  stats += ', pages: ' + `${pages}`.yellow;
  console.log(stats + '\n');

  return { start, to, of, pages };
}

/**
 * For each item, records the id and slug from the scraped url.
 * @param {Type} type - the object type
 * @param {[{ name: string,  url: string }]} data - scraped row data
 */
export function processUrlData(type, data) {
  data
    .filter((data) => !!data.url)
    .forEach((data) => {
      const match = new RegExp(url_rgx[type], 'gi').exec(data.url) || [];
      if (match.length > 2) {
        const [, id, slug] = match;
        data.id = id;
        data.slug = slug;
      } else {
        console.log(`⛔️ failed to parse href: ${data.url}, match: ${match}`);
      }
    });
}

/**
 * Create a string containing a data script for the data.
 * @param {Type} type - the object type
 * @param {ItemInfo} data - the object data
 * @return {string}
 */
export function asScriptData(type, data) {
  return `
<script id="data-${type}-${data.id}" type="application/ld+json">
  ${JSON.stringify(data)}
</script>
  `;
}
