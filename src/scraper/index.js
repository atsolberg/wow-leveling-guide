import 'colors';
import scrapeItemList from './scrape-item-list.js';
import { isSuperset, intersection, difference } from './util/set.js';

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
    scrapeItemList(test, debug);
    break;
  }

  default: {
    console.error(`\nUnknown task id "${task}"`.red);
    console.error(`Expected one of ${task_log}\n`);
    process.exit(1);
    break;
  }
}
