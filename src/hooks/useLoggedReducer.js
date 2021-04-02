import { useImmerReducer } from 'use-immer';
import { current } from 'immer';

import { pad } from '../utils/string';
import logger, { styles, css } from '../utils/logger';

function formatDate(date) {
  return (
    `${pad(date.getHours(), 2)}` +
    `:${pad(date.getMinutes(), 2)}` +
    `:${pad(date.getSeconds(), 2)}` +
    `.${pad(date.getMilliseconds(), 3)}`
  );
}

export function useLoggedReducer(reducer, initial, name) {
  function loggingReducer(draft, action) {
    const time = formatDate(new Date());
    const grouper = logger.canGroup ? logger.groupCollapsed : logger.info;

    grouper.apply(logger, [
      `${time} %creducer: %c${name || reducer.name} %caction: %c${action.type}`,
      `${styles.label}`,
      `${styles.value}`,
      `${styles.label}`,
      `${styles.value}`,
    ]);
    logger.info('%cBefore', `${css.gray}`, current(draft));
    logger.info('%cAction', `${css.blue}`, action);

    reducer(draft, action);

    logger.info('%cAfter', `${css.green}`, current(draft));
    logger.groupEnd();
  }

  return useImmerReducer(loggingReducer, initial);
}
