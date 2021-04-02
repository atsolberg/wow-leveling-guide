import logger, { styles } from './logger';
import { noop } from './function';

export function isElement(node) {
  return !!node?.nodeType;
}

export function getElement(target) {
  return isElement(target) ? target : document.querySelector(target);
}

/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
export function gebi(id) {
  return document.getElementById(id);
}

export function getMeasurement(elem) {
  const node = isElement(elem) ? elem : document.querySelector(elem);
  return {
    node,
    left: node.offsetLeft,
    right: node.offsetLeft + node.clientWidth,
    width: node.clientWidth,
  };
}

export function getChildMeasurements(container) {
  if (!container?.childNodes) return {};

  return Array.from(container.childNodes).map((node, i) => ({
    index: i,
    ...getMeasurement(node),
  }));
}

export function isElementInViewport(elem) {
  if (!elem || !elem.getBoundingClientRect) return false;
  const rect = elem.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Add a set of event listeners to a dom element
 * @param {Node} el - the dom element to add listeners to
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 * @param {boolean} log - if true, events are logged to the console
 */
export function addListeners(el, listeners, log) {
  const grouper = logger.groupCollapsed || logger.info;
  const groupend = logger.groupEnd || noop;
  const { label, orange } = styles;
  const consoleStyles = [`${label}`, `${orange}`, `${label}`];

  Object.entries(listeners).forEach(([event, listener]) => {
    el.addEventListener(event, (...args) => {
      if (log) {
        const msg = `%cFiring listener for "%c${event}%c"`;
        grouper.apply(console, [msg, ...consoleStyles]);
        logger.info(listener);
        groupend();
      }
      listener(...args);
    });
  });
}

/**
 * Remove a set of event listeners to a dom element
 * @param {Node} el - the dom element to remove listeners from
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 */
export function removeListeners(el, listeners) {
  Object.entries(listeners).forEach(([event, listener]) => {
    el.removeEventListener(event, listener);
  });
}
