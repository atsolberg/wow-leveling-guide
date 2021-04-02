/**
 * A simple pub/sub module.
 * @see http://davidwalsh.name/pubsub-javascript
 */

import { useEffect } from 'react';

import { namespace } from './object';
import { noop } from './function';
import logger, { styles } from './logger';
import CookieJar from './cookiejar';

const topics = {};
const hop = topics.hasOwnProperty;

/**
 * Log a notification for a topic publication.
 * @param {string} topic - the topic that was published.
 * @param {number} listeners - the number of listeners.
 * @param {*} data - the data for the publication.
 */
function log(topic, listeners, data) {
  let notif = `%cats.hub: %cPublished %c'${topic}' %cto ${listeners} subscriber(s)`;
  const hasData = typeof data !== 'undefined';
  if (hasData) notif += ' with data:';

  const grouper = (hasData && logger.groupCollapsed) || logger.info;
  const groupend = (hasData && logger.groupEnd) || noop;

  const consoleStyles = [
    `${styles.strong}`,
    `${styles.normal}`,
    `${styles.value}`,
    `${styles.normal}`,
  ];

  grouper.apply(console, [notif, ...consoleStyles]);
  if (hasData) logger.info(data);
  groupend();
}

/**
 * Subscribe a listener function to be notified of an event on a topic.
 * Returns an object with a 'remove' property as a function to remove
 * the registered listener.
 *
 * @param {string} topic - The topic to subscribe to.
 * @param {Function} listener - The listener function fired for each
 *                              event on the topic.
 * @return {Object} o - Listener removal handler.
 */
function sub(topic, listener) {
  // Create the topic's object if not yet created
  if (!hop.call(topics, topic)) topics[topic] = [];

  // Add the listener to topic's listener queue
  const index = topics[topic].push(listener) - 1;

  // Provide handle back for removal of a topic listener
  return {
    remove: () => {
      delete topics[topic][index];
    },
  };
}

/**
 * Publish an event on the topic with optional data.
 *
 * @param {string} topic - The topic to publish the event on.
 * @param {*} [data] - The optional data to pass the listeners.
 */
function pub(topic, data) {
  // If the topic doesn't exist or it has no listeners in queue, just leave.
  if (!hop.call(topics, topic)) return;

  // Cycle through topics queue, fire!
  const listeners = topics[topic];
  listeners.forEach((listener) =>
    listener(typeof data === 'undefined' ? {} : data)
  );

  const shouldLog = getLogEnabled();
  if (shouldLog) log(topic, listeners.length, data);
}

/**
 * Custom hook to react to hub subscriptions as a side effect.
 * @param {string} topic - The topic to subscribe to.
 * @param {Function} listener - The listener function fired for each
 *                              event on the topic.
 * @param {Function} [onReady] - A callback fired when the subscription has been registered.
 */
export const useSubscription = (topic, listener, onReady) => {
  useEffect(
    () => {
      const subscription = sub(topic, listener);
      if (typeof onReady === 'function') onReady();
      return subscription.remove;
    },
    // Unsub/Resub if they change topics but not handlers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic]
  );
};

/**
 * Returns true if the cookie is set to `true`, otherwise false.
 * @return {boolean}
 */
function getLogEnabled() {
  return !!CookieJar.get(CookieJar.Entry.hub_log_enabled);
}

const mod = {
  pub,
  sub,
  toggleLogging: () => {
    const shouldLog = getLogEnabled();
    CookieJar.set(CookieJar.Entry.hub_log_enabled, !shouldLog);
    return getLogEnabled();
  },

  /** Some common topics. */
  topics: {
    tooltip_target_hover: 'tooltip_target_hover',
    tooltip_target_unhover: 'tooltip_target_unhover',
  },
};
namespace('ats.hub', mod);
export default mod;
