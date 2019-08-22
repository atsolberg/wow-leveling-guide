/** @jsx jsx */
import { jsx } from '@emotion/core';

import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import styles from './styles';

function Footer() {
  return (
    <footer css={styles}>
      Built by{' '}
      <a
        href="https://github.com/atsolberg/wow-leveling-guide"
        target="_blank"
        rel="noopener noreferrer"
      >
        atsolberg <ExternalLinkIcon />
      </a>{' '}
      with ⚛
    </footer>
  );
}

export default Footer;
