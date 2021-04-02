import React, { useContext, useEffect, useRef } from 'react';
import { string, node, oneOf } from 'prop-types';
import cx from 'classnames';

import { TooltipContext } from '../../providers/TooltipProvider';
import { addListeners, removeListeners } from '../../utils/element';
import { Types } from '../../utils/constants';

import styles from './styles';

TtLink.propTypes = {
  id: string.isRequired,
  type: oneOf(Types),
  children: node,
  className: string,
};
function TtLink({ id, type = 'item', children, className, ...rest }) {
  const ref = useRef();
  const { hover, unhover } = useContext(TooltipContext);

  // Register mouse listeners
  useEffect(() => {
    const anchor = ref.current;
    const listeners = { mouseover: hover, mouseout: unhover };
    addListeners(anchor, listeners);
    return () => removeListeners(anchor, listeners, true);
  }, [hover, unhover]);

  return (
    <a
      ref={ref}
      css={styles}
      className={cx('tt-link', `--${type}`, className)}
      data-type={type}
      data-id={id}
      href={`https://classic.wowhead.com/${type}=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

export default TtLink;
