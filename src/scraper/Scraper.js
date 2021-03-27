import formatter from './util/formatter.js';

class Scraper {
  /** @type {function} */
  runner = null;

  /** @type {Puppeteer.Page} */
  page = null;

  /** @type {boolean} */
  test = null;

  /** @type {boolean} */
  debug = null;

  constructor(runner, page, test, debug) {
    this.runner = runner;
    this.page = page;
    this.test = test;
    this.debug = debug;
  }

  getName() {
    return this.runner.name;
  }

  getRunner() {
    return this.runner;
  }

  async start() {
    const start = Date.now();
    const success = await this.runner(this.page, this.test, this.debug);

    const elapsed = Date.now() - start;
    const time = formatter.duration(elapsed);

    console.log(`✨ ${this.getName().yellow} finished after ${time.green}`);
    return success;
  }
}

export default Scraper;
