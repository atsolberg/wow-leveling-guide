// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import styles from './styles';

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
