import { css } from '@emotion/react';

const styles = css`
  &.tt-link {
    &.--item,
    &.--object {
      color: #c63;
    }

    &.--quest {
      color: #fc0;
      font-weight: bold;
    }

    .tt-anchor {
      white-space: nowrap;
    }
  }
`;

export default styles;
