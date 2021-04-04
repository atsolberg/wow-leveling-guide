import 'colors';
import fs from 'fs';

import { isSuperset, intersection, difference } from './util/set.js';
import { downloadFile } from './util/assets.js';
import formatter from './util/formatter.js';
import launcher from './util/launcher.js';

import iconListScraper from './scrapers/icon-list.js';
import itemListScraper from './scrapers/item-list.js';
import questListScraper from './scrapers/quest-list.js';

/** @enum Tasks */
const Task = {
  item_list: 'item-list',
  quest_list: 'quest-list',
  icon_list: 'icon-list',
  item_tt: 'item-tt',
  quest_tt: 'quest-tt',
  icons: 'icons',
  tt_data_inject: 'tt-data-inject',
};

/** @enum Flags */
const Flag = {
  test: '-t',
  test_long: '--test',
  debug: '-d',
  debug_long: '--debug',
};

const Tasks = Object.values(Task);
const Flags = Object.values(Flag);
const TestFlags = [Flag.test, Flag.test_long];
const DebugFlags = [Flag.debug, Flag.debug_long];

const [, , task, ...rest] = process.argv;
const flags = (rest || []).filter(Boolean);
const test = intersection(TestFlags, flags).size > 0;
const debug = intersection(DebugFlags, flags).size > 0;
const task_log = `(${Tasks.map((t) => t.yellow).join(', ')})`;

if (process.argv.length === 2 || task.indexOf('-') === 0) {
  console.error('\nExpected at least one argument!\n'.red);
  console.info(`Run with one of ${task_log}`);
  console.info('Example: `' + 'npm run index itemlist'.green + '`\n');
  process.exit(1);
}

if (flags) {
  if (!isSuperset(Flags, flags)) {
    const unknown = Array.from(difference(flags, Flags))
      .map((f) => f.gray)
      .join(', ');
    console.warn(`\nIgnoring unknown flags `.yellow + unknown + '\n');
  }
}

switch (task) {
  case Task.item_list: {
    launcher({ test, debug, runner: itemListScraper }).then(async (scraper) => {
      const success = await scraper.start();
      if (!debug) process.exit(success ? 0 : 1);
    });
    break;
  }

  case Task.quest_list: {
    launcher({ test, debug, runner: questListScraper }).then(
      async (scraper) => {
        const success = await scraper.start();
        if (!debug) process.exit(success ? 0 : 1);
      }
    );
    break;
  }

  case Task.quest_tt: {
    const quest_tt_files = fs
      .readdirSync(`../../public/tt/quests`)
      .map((f) => f.replace(/\.json/, ''));

    const start = Date.now();

    const dir = `../../public/${test ? 'tt-test' : 'tt'}/quests`;
    const list = fs.readFileSync('../db/quests/list.json');
    const filter = test ? () => true : (i) => !quest_tt_files.includes(i.name);
    const urlBase = 'https://classic.wowhead.com/tooltip/quest';

    let quests = JSON.parse(list);
    if (test) quests = quests.slice(0, 5);
    const file_dfds = quests
      .filter(filter)
      .map((quest) => ({
        url: `${urlBase}/${quest.id}`,
        name: quest.id,
        dir,
        ext: 'json',
      }))
      .map(downloadFile);

    Promise.allSettled(file_dfds).then((results) => {
      const elapsed = Date.now() - start;
      const resolved = results.filter((r) => r.status === 'fulfilled');
      const rejected = results.filter((r) => r.status === 'rejected');
      console.log('📦 Downloaded ' + `${resolved.length}`.green + ' quests');
      if (rejected.length) {
        console.log('❗️ ' + `${rejected.length}`.red + ' failed');
      }
      const time = formatter.duration(elapsed);
      console.log(`✨ ${'icons'.yellow} finished after ${time.green}`);
    });

    break;
  }

  case Task.item_tt: {
    const item_tt_files = fs
      .readdirSync(`../../public/tt/items`)
      .map((f) => f.replace(/\.json/, ''));

    const start = Date.now();

    const dir = `../../public/${test ? 'tt-test' : 'tt'}/items`;
    const list = fs.readFileSync('../db/items/list.json');
    const filter = test ? () => true : (i) => !item_tt_files.includes(i.id);
    const urlBase = 'https://classic.wowhead.com/tooltip/item';

    let items = JSON.parse(list);
    if (test) items = items.slice(0, 5);
    const file_dfds = items
      .filter(filter)
      .map((item) => ({
        url: `${urlBase}/${item.id}`,
        name: item.id,
        dir,
        ext: 'json',
      }))
      .map(downloadFile);

    Promise.allSettled(file_dfds).then((results) => {
      const elapsed = Date.now() - start;
      const resolved = results.filter((r) => r.status === 'fulfilled');
      const rejected = results.filter((r) => r.status === 'rejected');
      console.log('📦 Downloaded ' + `${resolved.length}`.green + ' quests');
      if (rejected.length) {
        console.log('❗️ ' + `${rejected.length}`.red + ' failed');
      }
      const time = formatter.duration(elapsed);
      console.log(`✨ ${'icons'.yellow} finished after ${time.green}`);
    });

    break;
  }

  case Task.tt_data_inject: {
    const start = Date.now();
    let items = JSON.parse(fs.readFileSync('../db/items/list.json'));

    if (test) items = items.slice(0, 5);

    const success = [];
    const fails = [];

    items.forEach((item) => {
      const { id } = item;
      const data_dir = test ? 'tt-test' : 'tt';
      const tt_path = `../../public/tt/items/${id}.json`;
      const data_path = `../../public/${data_dir}/items/${id}.json`;
      try {
        let tt = JSON.parse(fs.readFileSync(tt_path));
        tt = { ...tt, ...item };
        fs.writeFileSync(data_path, JSON.stringify(tt, null, 2));
        success.push(item);
      } catch (err) {
        fails.push(item);
      }
    });
    const elapsed = Date.now() - start;
    const time = formatter.duration(elapsed);
    console.log('📦 Updated ' + `${success.length}`.green + ' tooltips');
    if (fails.length) {
      console.log('❗️ ' + `${fails.length}`.red + ' failed');
    }
    console.log(
      `✨ ${Task.tt_data_inject.yellow} finished after ${time.green}`
    );

    break;
  }

  case Task.icon_list: {
    launcher({ test, debug, runner: iconListScraper }).then(async (scraper) => {
      const success = await scraper.start();
      if (!debug) process.exit(success ? 0 : 1);
    });
    break;
  }

  case Task.icons: {
    const icon_files = fs
      .readdirSync(`../../public/assets/icons`)
      .map((f) => f.replace(/\.jpg/, ''));

    const start = Date.now();
    const list = fs.readFileSync('../db/icons/list.json');
    const filter = test ? () => true : (i) => !icon_files.includes(i.name);
    const info = JSON.parse(list).filter(filter);
    const dir = '../../public/assets/icons';

    const file_dfds = info.map((i) => downloadFile({ ...i, dir }));

    Promise.allSettled(file_dfds).then((results) => {
      const elapsed = Date.now() - start;
      const resolved = results.filter((r) => r.status === 'fulfilled');
      const rejected = results.filter((r) => r.status === 'rejected');
      console.log('📦 Downloaded ' + `${resolved.length}`.green + ' icons');
      if (rejected.length) {
        console.log('❗️ ' + `${rejected.length}`.red + ' failed');
      }
      const time = formatter.duration(elapsed);
      console.log(`✨ ${Task.icons.yellow} finished after ${time.green}`);
    });

    break;
  }

  default: {
    console.error(`\nUnknown task id "${task}"`.red);
    console.error(`Expected one of ${task_log}\n`);
    process.exit(1);
    break;
  }
}
