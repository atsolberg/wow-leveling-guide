import React from 'react';
import { string } from 'prop-types';

import styles from './styles';

WowIcon.propTypes = {
  src: string.isRequired,
};
function WowIcon({ src, ...rest }) {
  return (
    <div css={styles(src)} className="-md" {...rest}>
      <ins />
      <del />
      <a href="#" />
    </div>
  );
}

export default WowIcon;
