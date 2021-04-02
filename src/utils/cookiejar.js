/**
 * Module to store data as json in a single cookie.
 * @module ats.cookiejar
 */

import { Enumify } from 'enumify';
import Cookies from 'js-cookie';

import { namespace } from './object';
import { bytes } from './string';

class Entry extends Enumify {
  static alerts_queued = new Entry('alerts', 'queued');
  static hub_log_enabled = new Entry('hub', 'log_enabled');
  static page_loads = new Entry('page', 'loads');
  static store_log_ignores = new Entry('store', 'log_ignores');
  static _ = this.closeEnum();

  constructor(group, id) {
    super();
    this.group = group;
    this.id = id;
  }
}

const CookieJar = {};

const name = 'ats-wow-lvl-guide';
const max = 4093;

/**
 * Retrieve value from JSON object store in the cookie.
 * @param {Entry} [entry] - the cookie entry.
 * @param {*} [defaultValue] - Optional, returned value if the requested property is not found.
 */
CookieJar.get = function get(entry, defaultValue) {
  const c = Cookies.getJSON(name);

  if (!entry) return c || {};
  if (!c) return defaultValue;
  const value = c[`${entry.group}-${entry.id}`] || defaultValue;

  return value;
};

/**
 * Sets a property on the JSON object stored in the 'ats-wow-lvl-guide' cookie.
 * @param {Entry} [entry] - the cookie entry.
 * @param {*} value - Value to store.
 */
CookieJar.set = function set(entry, value) {
  const c = Cookies.getJSON(name) || {};
  c[`${entry.group}-${entry.id}`] = value;
  const stringified = JSON.stringify(c);
  const stringifiedBytes = bytes(stringified);
  if (stringifiedBytes >= max) {
    // Cookies.set silently fails in this case :(
    // eslint-disable-next-line no-console
    console.error(
      `Failed to set cookie "${entry.toString()}" with value "${value}": cookie length (${stringifiedBytes} bytes) exceeds max (${max} bytes)`
    );
  } else {
    Cookies.set(name, c, { expires: 365 });
  }
};

CookieJar.getName = () => name;

CookieJar.lib = Cookies;
CookieJar.Entry = Entry;

namespace('ats.cookiejar', CookieJar);
export default CookieJar;
