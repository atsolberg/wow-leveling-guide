/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */

// Used in console logging
export const css = {
  fwb: 'font-weight: bold;',
  fwn: 'font-weight: normal;',

  black: 'color: #777777;',
  gray: 'color: #9e9e9e;',
  white: 'color: #ffffff',
  blue: 'color: #03a9f4;',
  green: 'color: #4caf50;',
  red: 'color: #f20404;',
  orange: 'color: #ff8000;',
};

// Used in console logging
export const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`,
};

const noop = () => {};

const logger = {};

[
  'assert',
  'dir',
  'count',
  'log',
  'info',
  'debug',
  'warn',
  'error',
  'table',
  'trace',
  'group',
  'groupEnd',
  'groupCollapsed',
  'profile',
  'profileEnd',
  'time',
  'timeEnd',
  'timeStamp',
].forEach((key) => {
  const isLoggable = window.console && window.console[key];

  logger[key] = isLoggable
    ? function log(...args) {
        window.console[key](...args);
      }
    : noop;
});

logger.canGroup = logger.groupCollapsed !== noop;

export default logger;
