/** @jsx jsx */
import { jsx } from '@emotion/core';

import styles from './styles';

function Main(props) {
  return <main css={styles} className="container" {...props} />;
}

export default Main;
