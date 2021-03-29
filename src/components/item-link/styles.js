import { css } from '@emotion/react';

const styles = css`
  &.item {
    position: relative;

    a {
      color: #c63;
    }
    .tt {
      display: none;
      position: absolute;
      bottom: -100%;

      &.hovered {
        display: block;
        max-width: 320px;
      }
    }
  }
`;

export default styles;
