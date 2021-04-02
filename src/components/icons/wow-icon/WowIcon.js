import React from 'react';
import { string, oneOf } from 'prop-types';

import styles from './styles';

WowIcon.propTypes = {
  name: string.isRequired,
  size: oneOf(['md', 'lg']),
};
function WowIcon({ name, size = 'lg', ...rest }) {
  const fixed = name.replace(/_/g, '-');
  return (
    <span css={styles(fixed)} className={`-${size}`} {...rest}>
      <ins />
      <del />
    </span>
  );
}

export default WowIcon;
