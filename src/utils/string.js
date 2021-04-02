export function capitalize(phrase) {
  if (!phrase) return phrase;
  return phrase[0].toUpperCase() + phrase.slice(1);
}

/**
 * For each word in the phrase, uppercase the first letter and lowercase the rest.
 * Example:
 * titlecase('POWER wORd FortitUDE') -> "Power Word Fortitude"
 */
export function titlecase(phrase) {
  if (!phrase) return phrase;
  return phrase.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
}

export function camelCase(phrase) {
  return phrase
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

/**
 * Rails has the concept of 'optionizing' text which replaces spaces with
 * underscores and lower-cases text.
 * Example:
 * optionize('Short Sword'); -> "short_sword"
 */
export function optionize(phrase = '') {
  return phrase.toLowerCase().replace(/\s/g, '_');
}

/**
 * Replaces spaces with dashes and lower-cases text.
 * Example:
 * dasherize('Power Word Fortitude'); -> "power-word-fortitude"
 */
export function dasherize(phrase = '') {
  return phrase.toLowerCase().replace(/\s/g, '-');
}

/**
 * Replaces dashes with spaces and uppercase the first letter of each word.
 * Example:
 * dasherize('power-word-fortitude'); -> "Power Word Fortitude"
 */
export function undasherize(phrase = '') {
  const result = phrase.toLowerCase().replace(/-/g, ' ');
  return titlecase(result);
}

export function repeat(str, times) {
  return new Array(times + 1).join(str);
}

export function wordCount(string) {
  return string.trim().split(/\s+/).length;
}

export function pad(num, maxLength) {
  return repeat(`0`, maxLength - num.toString().length) + num;
}

export function replaceAt(s, i, c) {
  return s.substr(0, i) + c + s.substr(i + 1);
}

export function endsWith(s, c) {
  return s[s.length - 1] === c;
}

export function firstWord(s) {
  return s.replace(/ .*/, '');
}

/**
 * Generate a universally unique identifier.
 * @return {string}
 */
export function uuid() {
  /* eslint-disable */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;

    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  /* eslint-enable */
}

/** Add a uuid to something if it doesn't already have one. */
export function lazyId(o) {
  o.id = o.id || uuid();
  return o;
}

/** Return the size of a string in bytes assuming UTF-8 encoding. */
export function bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  const m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

/**
 * Returns either an empty string, a plural character of choice, or
 * an optional singular form.
 * @param {boolean} condition False will return an empty string.
 * @param {string} plural Plural suffix, 's' by default.
 * @param {string} [singular] Optional singular suffix, or version.
 */
export function pluralIf(condition, plural = 's', singular) {
  if (!condition) return singular || '';
  return plural;
}

/**
 * Returns a number of for a string px value, ie: '23px' => 23.
 */
export function pxToNum(str) {
  return +str.trim().replace('px', '');
}

/**
 * Returns a truncated string with ellipsis (...) appended.
 * @param {string} string to truncate
 * @param {number} number of characters to keep
 */
export function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }

  return `${str.slice(0, num)}...`;
}
