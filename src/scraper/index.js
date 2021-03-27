import 'colors';
import scrapeItemList from './scrape-item-list.js';
import { isSuperset, intersection, difference } from './util/set.js';
import launcher from './util/launcher.js';
import formatter from './util/formatter.js';

const FLAGS = ['-t', '--test', '-d', '--debug'];
const TASKS = ['itemlist', 'itemdata', 'all'];

const [, , task, ...rest] = process.argv;
const flags = (rest || []).filter(Boolean);
const test = intersection(['-t', '--test'], flags).size > 0;
const debug = intersection(['-d', '--debug'], flags).size > 0;
const task_log = `(${TASKS.map((t) => t.yellow).join(', ')})`;

if (process.argv.length === 2 || task.indexOf('-') === 0) {
  console.error('\nExpected at least one argument!\n'.red);
  console.info(`Run with one of ${task_log}`);
  console.info('Example: `' + 'npm run index itemlist'.green + '`\n');
  process.exit(1);
}

if (flags) {
  if (!isSuperset(FLAGS, flags)) {
    const unknown = Array.from(difference(flags, FLAGS))
      .map((f) => f.gray)
      .join(', ');
    console.warn(`\nIgnoring unknown flags `.yellow + unknown + '\n');
  }
}

switch (task) {
  case 'itemlist': {
    const start = Date.now();
    launcher(test, debug, scrapeItemList).then(async (scraper) => {
      const items = await scraper.start();

      const count = items.length;
      const elapsed = Date.now() - start;
      const time = formatter.duration(elapsed);

      if (count) {
        console.log(`✨ "itemlist" finished after ${time} with ${count} items`);
        if (!debug) process.exit(0);
      } else {
        console.log(`💣 "itemlist" finished after ${time} with no items!`);
        if (!debug) process.exit(1);
      }
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
