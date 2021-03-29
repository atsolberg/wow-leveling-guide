import { css } from '@emotion/react';

const styles = css`
  &.tt-link {
    position: relative;
    &.--item a {
      color: #c63;
    }
    &.--quest a {
      color: #fc0;
    }

    .tt {
      background-color: #333;
      display: none;
      position: absolute;
      bottom: 120%;
    }
    &:hover .tt {
      display: block;
      max-width: 320px;
    }
  }
`;

export default styles;
